package handlers

import (
	"db-test/db"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strconv"
	"strings"
)

type sendPostsInfo struct {
	LoggedIn       bool                 `json:"LoggedIn"`
	Title          string               `json:"Title"`
	UsernameForNav string               `json:"username"`
	IdForNav       string               `json:"ID"`
	PgNum          int                  `json:"pgNum"`
	Pages          int                  `json:"pg"`
	Posts          []*sendPostsPageInfo `json:"posts"`
}

type sendPostsPageInfo struct {
	Logged         bool
	PostId         int
	PublisherName  string
	UserID			string
	PostTitle      string
	PostBody       string
	PostDate       string
	PostCategories string
	PostLike       int
	PostDislike    int
	PostComments   int
}

func HandlePostsData(w http.ResponseWriter, r *http.Request) {
	isLogged := true

	// Getting the categories from the user
	r.ParseForm()
	selectedCategories := r.Form["Category"]

	//HELP
	pageNumber, err := strconv.Atoi(r.PathValue("page"))
	if err != nil {
		fmt.Println("Error parsing page number:", err)
		HandleBadRequest(w, r)
		return
	}

	query := ""
	if len(selectedCategories) > 0 {
		query = `
        SELECT
            users.username, 
			users.id,
            posts.title, 
            posts.content, 
            posts.created_at, 
            posts.id,
            COUNT(CASE WHEN post_interactions.vote = 0 THEN 1 END) AS upvotes,
            COUNT(CASE WHEN post_interactions.vote = 1 THEN 1 END) AS downvotes
        FROM posts
        JOIN users ON posts.userid = users.id
        LEFT JOIN post_interactions ON posts.id = post_interactions.postid
        WHERE posts.id IN (
            SELECT Cata_post.Post_ID 
            FROM Cata_post 
            WHERE Cata_post.Cata_ID IN (` + strings.Join(selectedCategories, ",") + `)
        )
        GROUP BY posts.id, users.username, posts.title, posts.content, posts.created_at
        ORDER BY posts.created_at DESC;`
	} else {
		query = `SELECT 
            users.username, 
			users.id,
            posts.title, 
            posts.content, 
            posts.created_at, 
            posts.id,
           COUNT(CASE WHEN post_interactions.vote = 0 THEN 1 END) AS upvotes,
            COUNT(CASE WHEN post_interactions.vote = 1 THEN 1 END) AS downvotes
        FROM posts
        JOIN users ON posts.userid = users.id
        LEFT JOIN post_interactions ON posts.id = post_interactions.postid
        GROUP BY posts.id, users.username, posts.title, posts.content, posts.created_at
        ORDER BY posts.created_at DESC`
	}

	checkers := []string{}
	for _, cat := range selectedCategories {
		var check int
		for _, thing := range checkers {
			if thing == cat {
				HandleBadRequest(w, r)
				return
			}
		}
		checkers = append(checkers, cat)
		db.Database.QueryRow("SELECT COUNT(*) FROM category WHERE id = ?", cat).Scan(&check)
		if check == 0 {
			HandleBadRequest(w, r)
			return
		}
	}

	rows, err := db.Database.Query(query)
	if err != nil {
		fmt.Println("Error querying database:", err)
		return
	}
	defer rows.Close()

	arr := []*sendPostsPageInfo{}
	for rows.Next() {
		pid := ""
		categories := ""
		p := sendPostsPageInfo{}
		err := rows.Scan(
			&p.PublisherName,
			&p.UserID,
			&p.PostTitle,
			&p.PostBody,
			&p.PostDate,
			&pid,
			&p.PostLike,
			&p.PostDislike,
		)

		p.Logged = isLogged
		if err != nil {
			log.Printf("Error reading row: %v", err)
			continue
		}

		postid, err := strconv.Atoi(pid)
		if err != nil {
			fmt.Printf("1err: %v\n", err)
			return
		}
		p.PostId = postid

		num := noComments(pid)
		p.PostComments = num
		cats, err := db.Database.Query(
			`SELECT category.title FROM Cata_post JOIN category ON Cata_post.Cata_ID = category.id WHERE Cata_post.Post_ID = ?`,
			pid,
		)
		if err != nil {
			fmt.Println("Error querying categories:", err)
			return
		}
		defer cats.Close()

		for cats.Next() {
			temp := ""
			cats.Scan(&temp)
			categories += temp + " "
		}
		p.PostCategories = categories

		arr = append(arr, &p)
	}

	noPosts := len(arr)
	noPgs := (noPosts / 50)
	if noPosts%50 != 0 {
		noPgs++
	}
	// fmt.Println(noPgs)
	// fmt.Println(len(arr))

	if (pageNumber > noPgs || pageNumber <= 0) && len(arr) != 0 {
		fmt.Printf("Number of pages: %v ", noPgs)
		HandleNotFound(w, r)
		return
	}

	toDisplay := []*sendPostsPageInfo{}
	// fmt.Println(pageNumber)

	if len(arr) != 0 {
		if pageNumber != noPgs {

			pageNumber--
			toDisplay = arr[pageNumber*50 : pageNumber*50+50]
		} else {

			pageNumber--
			toDisplay = arr[pageNumber*50:]

		}
	}
	tempData := sendPostsInfo{LoggedIn: isLogged, Title: "Home", Posts: toDisplay, PgNum: pageNumber, Pages: noPgs}

	w.Header().Set("Content-Type", "application/json")
	data := tempData
	json.NewEncoder(w).Encode(data)

}
