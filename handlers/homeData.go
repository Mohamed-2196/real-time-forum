package handlers

import (
	"db-test/db"
	"db-test/utils"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strconv"
)

type homeData struct {
	LoggedIn       bool        `json:"LoggedIn"`
	Title          string      `json:"Title"`
	UsernameForNav string      `json:"Username"`
	IdForNav       string      `json:"ID"`
	ArrInfo        []*postInfo `json:"ArrInfo"`
}

func HandleHomeData(w http.ResponseWriter, r *http.Request) {
	username := ""
	id := ""
	isLogged := true
	// if r.URL.Path != "/" {
	// 	HandleNotFound(w, r)
	// 	return
	// }

	cookie, err := utils.CheckIfAuth(r)
	if err != nil {
		isLogged = false
	}

	if isLogged {
		mdl, err := db.ReadUser(cookie.UserID)
		if err != nil {
			fmt.Println("MEOWZER")
		}
		username = mdl.Username
		id = strconv.Itoa(mdl.ID)
	}

	rows, err := db.Database.Query(`SELECT users.username, posts.title, posts.content, posts.created_at, posts.id
FROM posts
JOIN users ON posts.userid = users.id
LEFT JOIN (
    SELECT postid, SUM(vote) as total_votes
    FROM post_interactions
    GROUP BY postid
) votes ON posts.id = votes.postid
ORDER BY total_votes DESC
LIMIT 21`)
	if err != nil {
		fmt.Println("error querying database")
		return
	}

	defer rows.Close()
	// if rows.Next() {
	// 	fmt.Println(models.ErrNoResultFound)
	// 	return
	// }

	arr := []*postInfo{}
	for rows.Next() {
		temp := ""
		p := postInfo{}
		err := rows.Scan(&p.PublisherName, &p.PostTitle, &p.PostBody, &p.PostDate, &temp)
		if err != nil {
			log.Printf("error reading c: %v", err)
			continue
		}

		num := noComments(temp)
		p.PostComments = num

		arr = append(arr, &p)
	}

	w.Header().Set("Content-Type", "application/json")
	data := homeData{LoggedIn: isLogged, Title: "Home", UsernameForNav: username, IdForNav: id, ArrInfo: arr}
	json.NewEncoder(w).Encode(data)
}
