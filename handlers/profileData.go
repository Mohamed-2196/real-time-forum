package handlers

import (
	"db-test/db"
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"
)

func GetUserDetails(userid int) (*ProfileData, error) {
	query := `SELECT id, username, email FROM users WHERE id = ?`
	row := db.Database.QueryRow(query, userid)

	user := &ProfileData{}
	err := row.Scan(&user.IdForNav, &user.Username, &user.Email)
	if err != nil {
		return nil, err
	}

	return user, nil
}

func GetUserPosts(userid int) ([]*post, error) {
	query := `
		SELECT
			p.id AS post_id,
			p.title,
			COUNT(DISTINCT pi.id) FILTER (WHERE pi.vote = 0) AS like_count,
			COUNT(DISTINCT ci.id) AS comment_count
		FROM
			posts p
		LEFT JOIN
			post_interactions pi ON p.id = pi.postid AND pi.vote = 0
		LEFT JOIN
			comments c ON p.id = c.postid
		LEFT JOIN
			comment_interactions ci ON c.id = ci.commentid
		WHERE
			p.userid = ?
		GROUP BY
			p.id, p.title;`

	rows, err := db.Database.Query(query, userid)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var posts []*post
	for rows.Next() {
		p := &post{}
		err := rows.Scan(&p.Id, &p.Title, &p.Likes, &p.Comments)
		if err != nil {
			return nil, err
		}
		posts = append(posts, p)
	}

	return posts, nil
}

func GetTotalLikes(userid int) (int, error) {
	query := `
		SELECT
			COUNT(pi.id) AS total_likes
		FROM
			posts p
		JOIN
			post_interactions pi ON p.id = pi.postid
		WHERE
			p.userid = ? AND pi.vote = 0;`

	row := db.Database.QueryRow(query, userid)
	var totalLikes int
	err := row.Scan(&totalLikes)
	if err != nil {
		return 0, err
	}

	return totalLikes, nil
}

func GetLikedPosts(userid int) ([]*post, error) {
	query := `
		SELECT
			p.id AS post_id,
			p.title,
			COUNT(DISTINCT pi2.id) AS like_count,
			COUNT(DISTINCT c.id) AS comment_count
		FROM
			post_interactions pi
		JOIN
			posts p ON pi.postid = p.id
		LEFT JOIN
			post_interactions pi2 ON p.id = pi2.postid AND pi2.vote = 0
		LEFT JOIN
			comments c ON p.id = c.postid
		WHERE
			pi.userid = ? AND pi.vote = 0
		GROUP BY
			p.id, p.title;`

	rows, err := db.Database.Query(query, userid)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var posts []*post
	for rows.Next() {
		p := &post{}
		err := rows.Scan(&p.Id, &p.Title, &p.Likes, &p.Comments)
		if err != nil {
			return nil, err
		}
		posts = append(posts, p)
	}

	return posts, nil
}

type ProfileDataSend struct {
	LoggedIn       bool    `json:"LoggedIn"`
	Title          string  `json:"Title"`
	UsernameForNav string  `json:"Username"`
	IdForNav       string  `json:"ID"`
	Img            string  `json:"Image"`
	Username       string  `json:"UsernameSend"`
	Email          string  `json:"Email"`
	TotalLikes     int     `json:"totalLikes"`
	UserPosts      []*post `json:"userPosts"`
	LikedPosts     []*post `json:"likedPosts"`
}

func HandleProfileData(w http.ResponseWriter, r *http.Request) {
	isLogged := true
	// authCookie, err := utils.CheckIfAuth(r)
	// if err != nil {
	// 	isLogged = false
	// 	http.Redirect(w, r, "/signIn", http.StatusSeeOther)
	// 	return
	// }

	intID, err := strconv.Atoi(r.PathValue("id"))
	if err != nil {
		fmt.Printf("err1: %v\n", err)
		HandleInternalServerError(w, r)
		return
	}

	// Ensure the user can only see their own profile
	// if intID != authCookie.UserID {
	// 	HandleNotFound(w, r)
	// 	return
	// }

	// intID := authCookie.UserID
	fmt.Println(intID)

	// user details
	user, err := GetUserDetails(intID)
	if err != nil {
		fmt.Printf("err2: %v\n", err)
		HandleInternalServerError(w, r)
		return
	}

	// Fetch user posts with likes and comments
	userPosts, err := GetUserPosts(intID)
	if err != nil {
		fmt.Printf("err3: %v\n", err)
		HandleInternalServerError(w, r)
		return
	}

	// Count total likes across all user posts
	totalLikes, err := GetTotalLikes(intID)
	if err != nil {
		fmt.Printf("err4: %v\n", err)
		HandleInternalServerError(w, r)
		return
	}

	// Fetch liked posts by the user
	likedPosts, err := GetLikedPosts(intID)
	if err != nil {
		fmt.Printf("err5: %v\n", err)
		HandleInternalServerError(w, r)
		return
	}

	idfornav := strconv.Itoa(intID)
	fmt.Println(userPosts)

	tempData := &ProfileDataSend{
		LoggedIn:       isLogged,
		Title:          user.Username + " Profile",
		UsernameForNav: user.Username,
		IdForNav:       idfornav,
		Img:            "",
		Username:       user.Username,
		Email:          user.Email,
		TotalLikes:     totalLikes,
		UserPosts:      userPosts,
		LikedPosts:     likedPosts,
	}

	w.Header().Set("Content-Type", "application/json")
	data := tempData
	json.NewEncoder(w).Encode(data)

}
