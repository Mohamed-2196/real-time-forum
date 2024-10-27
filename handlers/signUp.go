package handlers

import (
	"db-test/db"
	"db-test/models"
	"db-test/templates"
	"db-test/utils"
	"encoding/json"
	"fmt"
	"net/http"
	"regexp"
	"strconv"
	"strings"
)

type errorSend struct {
	ErrMsg string `json:"errorMsg"`
}

func HandleSignUpForm(w http.ResponseWriter, r *http.Request) {

	email := r.FormValue("email")
	username := r.FormValue("username")
	firstName := r.FormValue("first-name")
	lastName := r.FormValue("last-name")
	age := r.FormValue("age")
	gender := r.FormValue("gender")
	password := r.FormValue("password")
	confirmPassword := r.FormValue("confirm password")
	terms := r.FormValue("conditions")

	var signUpError string

	re1 := regexp.MustCompile(`[^a-zA-Z]`)

	if strings.TrimSpace(email) == "" || strings.TrimSpace(username) == "" || strings.TrimSpace(password) == "" ||
		strings.TrimSpace(firstName) == "" || strings.TrimSpace(lastName) == "" || strings.TrimSpace(age) == "" ||
		strings.TrimSpace(gender) == "" {

		signUpError = "All fields must be filled!"
		w.Header().Set("Content-Type", "application/json")
		data := errorSend{ErrMsg: signUpError}
		json.NewEncoder(w).Encode(data)
		return
	}

	if terms != "on" {
		signUpError = "Must Agree to Terms"
		w.Header().Set("Content-Type", "application/json")
		data := errorSend{ErrMsg: signUpError}
		json.NewEncoder(w).Encode(data)
		return
	}

	if strings.TrimSpace(password) != strings.TrimSpace(confirmPassword) {

		signUpError = "Password does not match!"
		w.Header().Set("Content-Type", "application/json")
		data := errorSend{ErrMsg: signUpError}
		json.NewEncoder(w).Encode(data)
		return
	}

	if strings.Contains(password, " ") {
		signUpError = "passward must not contains spaces!"
		w.Header().Set("Content-Type", "application/json")
		data := errorSend{ErrMsg: signUpError}
		json.NewEncoder(w).Encode(data)
		return
	}

	users, err := db.ReadAllUser()
	if err != nil && err != models.ErrNoResultFound {
		HandleInternalServerError(w, r)
	}

	for _, user := range users {
		if user.Username == username || user.Email == email {
			signUpError = "username or email is already exits!"
			w.Header().Set("Content-Type", "application/json")
			data := errorSend{ErrMsg: signUpError}
			json.NewEncoder(w).Encode(data)
			return
		}
	}

	if len(password) < 8 {
		signUpError = "Password must be at least 8 characters"
		w.Header().Set("Content-Type", "application/json")
		data := errorSend{ErrMsg: signUpError}
		json.NewEncoder(w).Encode(data)
		return
	}

	ageCheck, err := strconv.Atoi(age)
	if err != nil || ageCheck < 1 || ageCheck > 100 {
		signUpError = "Invalide Age"
		w.Header().Set("Content-Type", "application/json")
		data := errorSend{ErrMsg: signUpError}
		json.NewEncoder(w).Encode(data)
		return
	}
	fmt.Println(gender)
	if gender != "male" && gender != "female" {
		signUpError = "Invalid Gender"
		w.Header().Set("Content-Type", "application/json")
		data := errorSend{ErrMsg: signUpError}
		json.NewEncoder(w).Encode(data)
		return
	}

	const emailPattern = `^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`

	re2 := regexp.MustCompile(emailPattern)

	// Match the string against the regex pattern
	if !re2.MatchString(email) {
		signUpError = "Please Enter A Valid Email"
		w.Header().Set("Content-Type", "application/json")
		data := errorSend{ErrMsg: signUpError}
		json.NewEncoder(w).Encode(data)
		return
	}

	if len(username) > 15 {
		signUpError = "username must not exceeds 15 characters"
		w.Header().Set("Content-Type", "application/json")
		data := errorSend{ErrMsg: signUpError}
		json.NewEncoder(w).Encode(data)
		return
	}

	if strings.Contains(username, " ") {
		signUpError = "username must not has spaces"
		w.Header().Set("Content-Type", "application/json")
		data := errorSend{ErrMsg: signUpError}
		json.NewEncoder(w).Encode(data)
		return
	}
	fmt.Println(username)
	fmt.Println(firstName)
	fmt.Println(lastName)
	if re1.MatchString(username) || re1.MatchString(firstName) || re1.MatchString(lastName) {
		fmt.Println("BAS LA")
		signUpError = "No Numbers or Special Characters Allowed in name fields."
		w.Header().Set("Content-Type", "application/json")
		data := errorSend{ErrMsg: signUpError}
		json.NewEncoder(w).Encode(data)
		return
	}

	hashedPassword, err := utils.HashPassword(password)
	if err != nil {
		fmt.Printf("err2: %v\n", err)
		templates.LoadPage(w, "error.html", err)
		return
	}

	id, err := db.CreateUser(username, email, string(hashedPassword))
	if err != nil {
		fmt.Printf("err3: %v\n", err)
		templates.LoadPage(w, "error.html", err)
		return
	}
	utils.GenerateCookie(w, id)
	fmt.Println("The cookie has been set sucessfully")

	// w.Header().Set("Content-Type", "application/json")
	// data := createData{ID: postID}
	// json.NewEncoder(w).Encode(data)
	signUpError = ""
	w.Header().Set("Content-Type", "application/json")
	data := errorSend{ErrMsg: signUpError}
	json.NewEncoder(w).Encode(data)
	// http.Redirect(w, r, "/", http.StatusSeeOther)
}

func HandleSignUpPage(w http.ResponseWriter, r *http.Request) {
	err := templates.LoadPage(w, "pages/signup.html", nil)
	if err != nil {
		HandleInternalServerError(w, r)
		return
	}
}
