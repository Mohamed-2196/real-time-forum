package middleware

import (
	"fmt"
	"net/http"
)

func Auth(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Check if the request is a WebSocket upgrade
		if r.Header.Get("Upgrade") == "websocket" || r.Header.Get("Upgrade") == "WebSocket" {
			next.ServeHTTP(w, r)
			return
		}

		if r.Header.Get("Upgrade") == "websocket" && r.Header.Get("Connection") == "Upgrade" {
			next.ServeHTTP(w, r)
			return
		}
		
		

		// Normal authentication logic for HTTP requests
		fmt.Println("Logging middleware")
		next.ServeHTTP(w, r)
	})
}