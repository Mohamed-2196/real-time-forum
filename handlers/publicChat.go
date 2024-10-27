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

var publicclients = make(map[*websocket.Conn]string)
var nopublicclients = make(map[*websocket.Conn]string)

var clientsMu sync.RWMutex

func publichistory(w http.ResponseWriter, r *http.Request) {
	isLogged := false
	cookie, err := utils.CheckIfAuth(r)
	if err == nil {
		isLogged = true
	}
	if isLogged {
		_, err := db.ReadUser(cookie.UserID)
		if err == nil {
			messages, err := db.GetPublicMessages()
			if err != nil {
				http.Error(w, "Error retrieving messages", http.StatusInternalServerError)
				return
			}

			w.Header().Set("Content-Type", "application/json")
			jsonData, err := json.Marshal(messages)
			if err != nil {
				http.Error(w, "Error encoding messages to JSON", http.StatusInternalServerError)
				return
			}
			w.Write(jsonData)
		}
	}
}

func PublicChat(w http.ResponseWriter, r *http.Request) {
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
		fmt.Println("Error upgrading connection:", err)
		return
	}
	defer conn.Close()

	clientsMu.Lock()
	publicclients[conn] = username
	clientsMu.Unlock()

	go update()

	defer func() {
		clientsMu.Lock()
		delete(publicclients, conn)
		clientsMu.Unlock()
		go update() 
	}()

	for {
		_, msg, err := conn.ReadMessage()
		if err != nil {
			fmt.Println("Error reading message:", err)
			break
		}

		var messageData struct {
			Message string `json:"content"`
		}
		err = json.Unmarshal(msg, &messageData)
		if err != nil {
			fmt.Println("Error unmarshalling message:", err)
			continue
		}

		timeStr := time.Now().Format("2006-01-02 15:04:05")
		err = db.InsertPublicMessage(username, messageData.Message, timeStr)
		if err != nil {
			fmt.Println("Error inserting message:", err)
			continue
		}

		go sendMessageToAllClients(username, messageData.Message, timeStr)
	}
}

func sendMessageToAllClients(from string, msg string, timestamp string) {
	clientsMu.Lock()
	defer clientsMu.Unlock()

	messageData := struct {
		Typeof    string `json:"type"`
		From      string `json:"from"`
		Message   string `json:"content"`
		Timestamp string `json:"time"`
	}{
		Typeof:    "message",
		From:      from,
		Message:   msg,
		Timestamp: timestamp,
	}

	jsonMessage, err := json.Marshal(messageData)
	if err != nil {
		fmt.Println("Error marshalling message data:", err)
		return
	}

	for client := range publicclients {
		err := client.WriteMessage(websocket.TextMessage, jsonMessage)
		if err != nil {
			fmt.Println("Error sending message to client:", err)
			client.Close()
			delete(publicclients, client)
		}
	}
}

func update() {
	clientsMu.RLock() 
	current := getOnlineUsernames() 
	clientsMu.RUnlock() 

	messageData := struct {
		Typeof string   `json:"type"`
		Users  []string `json:"users"`
	}{
		Typeof: "users",
		Users:  current,
	}

	jsonMessage, err := json.Marshal(messageData)
	if err != nil {
		fmt.Println("Error marshalling user data:", err)
		return
	}

	clientsMu.Lock() 
	defer clientsMu.Unlock()

	for client := range publicclients {
		err := client.WriteMessage(websocket.TextMessage, jsonMessage)
		if err != nil {
			fmt.Println("Error sending user update to client:", err)
			client.Close()
			delete(publicclients, client)
		}
	}
}

func getOnlineUsernames() []string {
	clientsMu.RLock() 
	defer clientsMu.RUnlock()

	usernamesMap := make(map[string]struct{})
	usernames := make([]string, 0, len(nopublicclients))

	for _, username := range nopublicclients {
		if _, exists := usernamesMap[username]; !exists {
			usernamesMap[username] = struct{}{}
			usernames = append(usernames, username)
		}
	}

	return usernames
}

func Saver(w http.ResponseWriter, r *http.Request) {
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
		fmt.Println("Error upgrading connection:", err)
		return
	}
	defer conn.Close()
	clientsMu.Lock()
	nopublicclients[conn] = username
	clientsMu.Unlock()

	go update()
	defer func() {
		clientsMu.Lock()
		delete(nopublicclients, conn)
		go update()

		clientsMu.Unlock()
	}()

	for {
		_, msg, err := conn.ReadMessage()
		if err != nil {
			fmt.Println("Error reading message:", err)
			break
		}

		var messageData struct {
			Message string `json:"content"`
		}
		err = json.Unmarshal(msg, &messageData)
		if err != nil {
			fmt.Println("Error unmarshalling message:", err)
			continue
		}

		timeStr := time.Now().Format("2006-01-02 15:04:05")
		err = db.InsertPublicMessage(username, messageData.Message, timeStr)
		if err != nil {
			fmt.Println("Error inserting message:", err)
			continue
		}
}}

func sendNot(from string, to string) {
    mu.Lock()
    defer mu.Unlock()
    for conn, username := range nopublicclients {
        if username == to {
            err := conn.WriteMessage(websocket.TextMessage, []byte(from))
            if err != nil {
                fmt.Println("Error sending message:", err)
                delete(nopublicclients, conn)
				go update()
            }
            return 
        }
    }

}