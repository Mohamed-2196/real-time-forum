package handlers

import (
	"db-test/db"
	"db-test/models"
	"db-test/templates"
	"db-test/utils"
	"encoding/json"
	"fmt"
	"net/http"
	"strings"
)

func HandleSignInPageForm(w http.ResponseWriter, r *http.Request) {
	input := r.FormValue("input")
	password := r.FormValue("password")

	signInError := ""

	if strings.TrimSpace(input) == "" || strings.TrimSpace(password) == "" {
		signInError = "All fields must be filled!"
		w.Header().Set("Content-Type", "application/json")
		data := errorSend{ErrMsg: signInError}
		json.NewEncoder(w).Encode(data)
		return

	}

	users, err := db.ReadAllUser()
	if err != nil && err != models.ErrNoResultFound {
		HandleInternalServerError(w, r)
	}

	for _, user := range users {
		if user.Email == input {
			match := utils.CheckPasswordHash(password, user.Password)
			if match {
				err := utils.GenerateCookie(w, user.ID)
				if err != nil {
					fmt.Println(err)
				}
				signInError = ""
				w.Header().Set("Content-Type", "application/json")
				data := errorSend{ErrMsg: signInError}
				json.NewEncoder(w).Encode(data)
				// http.Redirect(w, r, "/", http.StatusSeeOther)
				return
			} else {
				signInError = "wrong password!"
				w.Header().Set("Content-Type", "application/json")
				data := errorSend{ErrMsg: signInError}
				json.NewEncoder(w).Encode(data)
				return

			}
		} else if user.Username == input {
			match := utils.CheckPasswordHash(password, user.Password)
			if match {
				err := utils.GenerateCookie(w, user.ID)
				if err != nil {
					fmt.Println(err)
				}
				signInError = ""
				w.Header().Set("Content-Type", "application/json")
				data := errorSend{ErrMsg: signInError}
				json.NewEncoder(w).Encode(data)
				// http.Redirect(w, r, "/", http.StatusSeeOther)
				return
			} else {
				signInError = "wrong password!"
				w.Header().Set("Content-Type", "application/json")
				data := errorSend{ErrMsg: signInError}
				json.NewEncoder(w).Encode(data)
				return

			}
		}
	}
	signInError = "Account Not Found"
	w.Header().Set("Content-Type", "application/json")
	data := errorSend{ErrMsg: signInError}
	json.NewEncoder(w).Encode(data)
	return

}

func HandleSignInPage(w http.ResponseWriter, r *http.Request) {
	err := templates.LoadPage(w, "pages/signin.html", nil)
	if err != nil {
		HandleInternalServerError(w, r)
		return
	}

}
