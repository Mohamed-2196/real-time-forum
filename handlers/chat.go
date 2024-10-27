package handlers

import (
	"db-test/db"
	"db-test/utils"
	"encoding/json"
	"fmt"
	"net/http"
	"sync"
	"time"

	"github.com/gorilla/websocket"
)

var clients = make(map[*websocket.Conn]string)

var mu sync.Mutex
type HistoryRequest struct {
    Limit int `json:"limit"`
	Other string `json:"otherend"`
}
var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

func history(w http.ResponseWriter, r *http.Request) {
	isLogged := false
	username := ""
	cookie, err := utils.CheckIfAuth(r)
	if err == nil {
		isLogged = true
	}
	if isLogged {
		mdl, err := db.ReadUser(cookie.UserID)
		if err == nil {
			username = mdl.Username
		}
	}

	var req HistoryRequest
    err = json.NewDecoder(r.Body).Decode(&req)
    if err != nil {
        http.Error(w, "Invalid request body", http.StatusBadRequest)
        return
    }

    limit := req.Limit
    if limit <= 0 {
        limit = 10 
    }
	messages, err := db.GetMessages(username, req.Other)
	if err != nil {
		http.Error(w, "Error retrieving messages", http.StatusInternalServerError)
		return
	}
if limit < len(messages) {
	messages = messages[len(messages)-limit:]
}
	w.Header().Set("Content-Type", "application/json")
	jsonData, err := json.Marshal(messages)
	if err != nil {
		http.Error(w, "Error encoding messages to JSON", http.StatusInternalServerError)
		return
	}

	w.Write(jsonData)
}

func Chat(w http.ResponseWriter, r *http.Request) {
	isLogged := false
	username := ""
	cookie, err := utils.CheckIfAuth(r)
	if err == nil {
		isLogged = true
	}
	if isLogged {
		mdl, err := db.ReadUser(cookie.UserID)
		if err == nil {
			username = mdl.Username
		} else {
			return
		}
	}

	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		fmt.Println(err)
		return
	}
	defer conn.Close()

	mu.Lock()
	clients[conn] = username
	mu.Unlock()
	defer func() {
		mu.Lock()
		delete(clients, conn)
		mu.Unlock()
	}()

	for {
		_, msg, err := conn.ReadMessage()
		if err != nil {
			fmt.Println(err)
			break
		}

		var messageData struct {
			To      string `json:"to"`
			Message string `json:"message"`
			Typing bool `json:"typing"`
			Mee string `json:"mee"`
		}
		err = json.Unmarshal(msg, &messageData)
		if err != nil {
			fmt.Println("Error unmarshalling message:", err)
			continue
		}
		if messageData.Mee == "hello" {
			go	Typingprogress(messageData.To, username, messageData.Typing)
		} else {
		timeStr := time.Now().Format("2006-01-02 15:04:05")
		err = db.InsertMessage(username, messageData.To, messageData.Message, timeStr)
		if err != nil {
			fmt.Println("Error inserting message:", err)
			continue
		}
go sendNot(username, messageData.To)
		go sendMessageToClient(messageData.To, username, messageData.Message, timeStr)
		go sendMessageToClient(username, username, messageData.Message, timeStr)}
	}
}

func sendMessageToClient(recipient string, from string, msg string, timestamp string) {
	mu.Lock()
	defer mu.Unlock()
	messageData := struct {
		From      string `json:"from"`
		Message   string `json:"message"`
		Timestamp string `json:"timestamp"`
	}{
		From:      from,
		Message:   msg,
		Timestamp: timestamp,
	}

	jsonMessage, err := json.Marshal(messageData)
	if err != nil {
		fmt.Println("Error marshalling message data:", err)
		return
	}

	for client, username := range clients {
		if username == recipient {
			err := client.WriteMessage(websocket.TextMessage, jsonMessage)
			if err != nil {
				fmt.Println("Error sending message to client:", err)
				client.Close()
				delete(clients, client)
			}
			return
		}
	}
}

func Typingprogress(recipient string, from string, typing bool) {
	mu.Lock()
	defer mu.Unlock()
	messageData := struct {
		From      string `json:"froms"`
		Typing bool `json:"typing"`
	}{
		From:      from,
		Typing: typing,
	}

	jsonMessage, err := json.Marshal(messageData)
	if err != nil {
		fmt.Println("Error marshalling message data:", err)
		return
	}

	for client, username := range clients {
		if username == recipient {
			err := client.WriteMessage(websocket.TextMessage, jsonMessage)
			if err != nil {
				fmt.Println("Error sending message to client:", err)
				client.Close()
				delete(clients, client)
			}
			return
		}
	}
}