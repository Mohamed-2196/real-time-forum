package handlers

import (
	"db-test/static"
	"net/http"
)

func AddHandlers(mux *http.ServeMux) {
	mux.HandleFunc("GET /", HandleHomePage)
	// mux.HandleFunc("GET /signIn", HandleSignInPage)
	mux.HandleFunc("POST /signIn", HandleSignInPageForm)
	// mux.HandleFunc("GET /signUp", HandleSignUpPage)
	mux.HandleFunc("POST /signUp", HandleSignUpForm)
	// mux.HandleFunc("GET /logout", HandleLogOut)
	mux.HandleFunc("POST /logout", HandleLogOut)
	// mux.HandleFunc("GET /posts/{pgNumber}", HandlePostsPage)
	mux.HandleFunc("POST /post/{id}", HandlePostPage)
	mux.HandleFunc("POST /postComment/{id}", HandlePostPageForm)
	mux.HandleFunc("POST /like/{PostID}", HandleLikePost)
	mux.HandleFunc("POST /dislike/{PostID}", HandleDislikePost)
	mux.HandleFunc("POST /likeComment/{CommentID}", HandleLikeComment)
	mux.HandleFunc("POST /dislikeComment/{CommentID}", HandleDislikeComment)
	// mux.HandleFunc("GET /profile/{id}", HandleProfilePage)
	mux.HandleFunc("POST /createPost", HandleCreatePostForm)
	// mux.HandleFunc("GET /temp", HandleTemp)
	mux.HandleFunc("POST /homeData", HandleHomeData)
	mux.HandleFunc("POST /history", history)
	mux.HandleFunc("GET /publichistory", publichistory)
	mux.HandleFunc("POST /profileData/{id}", HandleProfileData)
	mux.HandleFunc("POST /postsData/{page}", HandlePostsData)
	mux.HandleFunc("GET /chat", Chat)
	mux.HandleFunc("GET /notifications", Saver)
	mux.HandleFunc("GET /publicChatAPI", PublicChat)
	mux.HandleFunc("GET /chatlists", chatlists)
	mux.Handle("GET /static/", http.StripPrefix("/static/", http.FileServerFS(static.Assets)))
}
