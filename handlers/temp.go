package handlers

import (
	"db-test/templates"
	"fmt"
	"net/http"
)

func HandleTemp(w http.ResponseWriter, r *http.Request) {
	err := templates.LoadPage(w, "pages/main.html", nil) //the problem
	if err != nil {
		fmt.Printf("err: %v\n", err)
		templates.LoadPage(w, "pages/error.html", err)
		return
	}

	// t, err := template.ParseFiles("main.html")
	// t.Execute(w, r)
	// if err != nil {
	// 	fmt.Println("meaw")
	// }
}
