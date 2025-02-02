package handlers

import (
	"db-test/db"
	"db-test/models"
	"db-test/utils"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strconv"
	"strings"
)

type PostData struct {
	LoggedIn       bool          `json:"logged_in"`
	Title          string        `json:"title"`
	Username       string        `json:"username"`
	Email          string        `json:"email"`
	PostTitle      string        `json:"post_title"`
	PostID         int           `json:"post_id"`
	PostMessage    string        `json:"post_message"`
	PostDate       string        `json:"post_date"`
	Category       string        `json:"category"`
	CommentArr     []commentInfo `json:"comment_arr"`
	ErrorMessage   string        `json:"error_message"`
	CommentCount   int           `json:"comment_count"`
	UsernameForNav string        `json:"username_for_nav"`
	IdForNav       string        `json:"id_for_nav"`
	PostUpvote     int           `json:"post_upvote"`
	PostDownvote   int           `json:"post_downvote"`
}

type commentInfo struct {
	LoggedIn  bool
	CommentID int
	UserID    int
	PostID    int
	Content   string
	CreatedAt string
	Username  string
	Email     string
	Like      int
	Dislike   int
}

// handles all GET requests for the post page
// stole a bunch of ideas from yousif & fatima thanks :D
func HandlePostPage(w http.ResponseWriter, r *http.Request) {
	errorMessage := ""
	if r.URL.Query().Get("error") == "empty_comment" {
		errorMessage = "Comments cannot be empty — much like the vacuum of space, where no one can hear you not type!"
	}

	isLogged := true
	var loggedInUserID, loggedInUsername string
	cookie, err := utils.CheckIfAuth(r)
	if err != nil {
		isLogged = false
	} else {
		// id for currently logged in user
		u, err := db.ReadUser(cookie.UserID)
		if err != nil {
			fmt.Printf("err: %v\n", err)
			HandleInternalServerError(w, r)
			return
		}
		loggedInUserID = strconv.Itoa(u.ID)
		loggedInUsername = u.Username
	}

	// post id
	intID, err := strconv.Atoi(r.PathValue("id"))
	if err != nil {
		fmt.Printf("err: %v\n", err)
		HandleInternalServerError(w, r)
		return
	}

	numberOfPosts, err := GetNumberOfPosts()
	if err != nil {
		fmt.Printf("err: %v\n", err)
		HandleInternalServerError(w, r)
		return
	}

	if intID <= 0 || intID > numberOfPosts {
		HandleBadRequest(w, r)
		return
	}

	// post information
	post, err := db.ReadPost(intID)
	if err != nil {
		fmt.Printf("err: %v\n", err)
		HandleInternalServerError(w, r)
		return
	}

	// author username and email extracted from here
	user, err := db.ReadUser(post.UserID)
	if err != nil {
		fmt.Printf("err: %v\n", err)
		HandleInternalServerError(w, r)
		return
	}

	// comment information
	// create an array to be passed into the postData struct
	rows, err := db.Database.Query(
		`SELECT c.id, c.userid, c.postid, c.content, c.created_at, u.username, u.email 
		FROM comments c
		JOIN users u ON c.userid = u.id
		WHERE c.postid = ?`,
		intID,
	)
	if err != nil {
		fmt.Println("error querying database")
		return
	}

	defer rows.Close()

	arr := []commentInfo{}
	for rows.Next() {
		c := commentInfo{}
		err := rows.Scan(
			&c.CommentID,
			&c.UserID,
			&c.PostID,
			&c.Content,
			&c.CreatedAt,
			&c.Username,
			&c.Email,
		)
		if err != nil {
			log.Printf("error reading c: %v", err)
			continue
		}

		c.Like, c.Dislike, err = GetCommentInteractionCount(c.CommentID)
		if err != nil {
			log.Printf("error getting interaction count: %v", err)
			continue
		}

		c.LoggedIn = isLogged

		arr = append(arr, c)
	}

	// category
	postCategory, err := GetCategoryByPostID(intID)
	if err != nil {
		fmt.Printf("err: %v\n", err)
		HandleInternalServerError(w, r)
		return
	}

	// count of comments
	commentCount, err := GetCommentCountByPostID(intID)
	if err != nil {
		fmt.Printf("err: %v\n", err)
		HandleInternalServerError(w, r)
		return
	}

	// votes
	upvotes, downvotes, err := GetPostVoteCount(intID)
	if err != nil {
		fmt.Printf("err: %v\n", err)
		HandleInternalServerError(w, r)
		return
	}

	data := &PostData{
		LoggedIn:       isLogged,
		Title:          post.Title,
		Username:       user.Username,
		Email:          user.Email,
		PostTitle:      post.Title,
		PostID:         intID,
		PostMessage:    post.Content,
		PostDate:       post.CreatedAt.Format("2006-01-02 15:04:05"),
		Category:       postCategory,
		CommentArr:     arr,
		ErrorMessage:   errorMessage,
		CommentCount:   commentCount,
		UsernameForNav: loggedInUsername,
		IdForNav:       loggedInUserID,
		PostUpvote:     upvotes,
		PostDownvote:   downvotes,
	}

	jsonData, err := json.Marshal(data)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	// Write JSON response
	w.Write(jsonData)
}

// Handle all POST requests for the post page
func HandlePostPageForm(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r.URL.String())
	fmt.Println("Entering Here")

	err := r.ParseForm()
	if err != nil {
		fmt.Println("Error Parsing")
		return
	}

	// post id
	// this is required to extract the post id from the url path
	// thanks google!

	// idStr := strings.TrimPrefix(r.URL.Path, "/postComment/")
	// intID, err := strconv.Atoi(idStr)
	// if err != nil {
	// 	fmt.Printf("1err: %v\n", err)
	// 	HandleInternalServerError(w, r)
	// 	return
	// }

	pid, err := strconv.Atoi(r.PathValue("id"))
	if err != nil {
		fmt.Println("Error parsing page number:", err)
		HandleBadRequest(w, r)
		return
	}

	fmt.Println("ID is ", pid)
	// user comment
	userComment := r.FormValue("user-comment")
	fmt.Println(userComment)

	// Check if the comment is empty
	if strings.TrimSpace(userComment) == "" {
		fmt.Println("nothing")
		return
	}

	// user id
	cookie, err := utils.CheckIfAuth(r)
	if err != nil {
		fmt.Printf("2err: %v\n", err)
		HandleInternalServerError(w, r)
		return
	}

	// create the comment
	_, err = db.CreateComment(
		models.Comment{UserID: cookie.UserID, PostID: pid, Content: userComment},
	)
	if err != nil {
		fmt.Printf("3err: %v\n", err)
		HandleInternalServerError(w, r)
		return
	}

	// properly redirect back to the page, whithout this I get a white screen
	// and need to reload the page to see the comment
	// redirectURL := fmt.Sprintf("/post/%d", intID)
	// http.Redirect(w, r, redirectURL, http.StatusSeeOther)
}

// not sure where this goes, maybe in utils for others to use?
func GetCategoryByPostID(pID int) (string, error) {
	cats, err := db.Database.Query(
		`SELECT category.title FROM Cata_post JOIN category ON Cata_post.Cata_ID = category.id WHERE
		Cata_post.Post_ID = ?`,
		pID,
	)
	if err != nil {
		fmt.Println("error querying database")
		return "", err
	}

	categories := ""
	for cats.Next() {
		temp := ""
		cats.Scan(&temp)
		categories += temp + " "
	}
	return categories, err
}

func GetCommentCountByPostID(postID int) (int, error) {
	var count int

	err := db.Database.QueryRow(`SELECT COUNT(*) FROM comments WHERE postid = ?`, postID).
		Scan(&count)
	if err != nil {
		fmt.Println("error querying database")
		return 0, err
	}

	return count, nil
}

func GetPostVoteCount(postID int) (int, int, error) {
	var upvotes int
	var downvotes int

	query := `
		SELECT 
			COUNT(CASE WHEN vote = 0 THEN 1 END) AS upvotes,
			COUNT(CASE WHEN vote = 1 THEN 1 END) AS downvotes
		FROM post_interactions
		WHERE postid = ?
	`

	err := db.Database.QueryRow(query, postID).Scan(&upvotes, &downvotes)
	if err != nil {
		fmt.Printf("Error querying votes: %v\n", err)
		return 0, 0, err
	}

	return upvotes, downvotes, nil
}

func GetCommentInteractionCount(commentID int) (int, int, error) {
	var like int
	var dislike int

	query := `
        SELECT 
            COUNT(CASE WHEN interaction = 0 THEN 1 END) AS like,
            COUNT(CASE WHEN interaction = 1 THEN 1 END) AS dislike
    FROM comment_interactions
    WHERE commentid = ?
	`

	err := db.Database.QueryRow(query, commentID).Scan(&like, &dislike)
	if err != nil {
		fmt.Printf("Error querying votes: %v\n", err)
		return 0, 0, err
	}

	return like, dislike, nil
}

func GetNumberOfPosts() (int, error) {
	numberOfPosts := 0

	err := db.Database.QueryRow(`SELECT COUNT(*) FROM POSTS`).Scan(&numberOfPosts)
	if err != nil {
		fmt.Println("error querying database")
		return 0, err
	}

	return numberOfPosts, nil
}
