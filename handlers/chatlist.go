package handlers

import (
	"db-test/db"
	"db-test/utils"
	"encoding/json"
	"net/http"
)

type UsersResponse struct {
	Users []string `json:"users"`
}

func chatlists(w http.ResponseWriter, r *http.Request) {
	cookie, err := utils.CheckIfAuth(r)
	if err != nil {
		http.Error(w, "Unauthorized", http.StatusUnauthorized)
		return
	}

	mdl, err := db.ReadUser(cookie.UserID)
	if err != nil {
		http.Error(w, "Error retrieving user info", http.StatusInternalServerError)
		return
	}

	users, err := db.GetMessagesByUser(mdl.Username)
	if err != nil {
		http.Error(w, "Error retrieving messages", http.StatusInternalServerError)
		return
	}

	response := UsersResponse{Users: users}
	w.Header().Set("Content-Type", "application/json")
	jsonData, err := json.Marshal(response)
	if err != nil {
		http.Error(w, "Error encoding messages to JSON", http.StatusInternalServerError)
		return
	}

	w.Write(jsonData)
}

