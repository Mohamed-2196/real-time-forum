package db

import (
	"fmt"
)

type Message struct {
	ID      int    `json:"id"`
	From    string `json:"from"`
	To      string `json:"to"`
	Content string `json:"content"`
	Time    string `json:"time"`
}
func CreathChat() error {
	createTableSQL := `CREATE TABLE IF NOT EXISTS dmMessages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        fromm TEXT NOT NULL,
        tooo TEXT NOT NULL,
        message TEXT NOT NULL,
		time TEXT NOT NULL,
		FOREIGN KEY (fromm) REFERENCES users(username),
        FOREIGN KEY (tooo) REFERENCES users(username),
		CHECK (fromm!=tooo) -- cannot send message to yourself,
        );`
	_, err := Database.Exec(createTableSQL)
	if err != nil {
		return fmt.Errorf("error creating users table: %v", err)
	}
	return nil
}

func InsertMessage(from, to, message, time string) error {
	insertSQL := `INSERT INTO dmMessages (fromm, tooo, message, time) VALUES (?, ?, ?, ?);`
	_, err := Database.Exec(insertSQL, from, to, message, time)
	if err != nil {
		return fmt.Errorf("error inserting message: %v", err)
	}
	return nil
}


func GetMessages(userA, userB string) ([]Message, error) {
	querySQL := `SELECT id, fromm, tooo, message, time 
				  FROM dmMessages 
				  WHERE (fromm = ? AND tooo = ?) OR (fromm = ? AND tooo = ?);`
	rows, err := Database.Query(querySQL, userA, userB, userB, userA)
	if err != nil {
		return nil, fmt.Errorf("error querying messages: %v", err)
	}
	defer rows.Close()

	var messages []Message
	for rows.Next() {
		var msg Message
		if err := rows.Scan(&msg.ID, &msg.From, &msg.To, &msg.Content, &msg.Time); err != nil {
			return nil, fmt.Errorf("error scanning message: %v", err)
		}
		messages = append(messages, msg)
	}

	if err := rows.Err(); err != nil {
		return nil, fmt.Errorf("error iterating over messages: %v", err)
	}

	return messages, nil
}

type publicMessage struct {
	ID      int    `json:"id"`
	From    string `json:"from"`
	Content string `json:"content"`
	Time    string `json:"time"`
}
func CreatePublicChat() error {
	createTableSQL := `CREATE TABLE IF NOT EXISTS publicMessages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        fromm TEXT NOT NULL,
        message TEXT NOT NULL,
		time TEXT NOT NULL,
		FOREIGN KEY (fromm) REFERENCES users(username)
        );`
	_, err := Database.Exec(createTableSQL)
	if err != nil {
		return fmt.Errorf("error creating users table: %v", err)
	}
	return nil
}

func InsertPublicMessage(from, message, time string) error {
	insertSQL := `INSERT INTO publicMessages (fromm, message, time) VALUES (?, ?, ?);`
	_, err := Database.Exec(insertSQL, from, message, time)
	if err != nil {
		return fmt.Errorf("error inserting message: %v", err)
	}
	return nil
}


func GetPublicMessages() ([]publicMessage, error) {
	querySQL := `SELECT id, fromm, message, time 
				  FROM publicMessages;` // Removed filtering conditions
	rows, err := Database.Query(querySQL)
	if err != nil {
		return nil, fmt.Errorf("error querying messages: %v", err)
	}
	defer rows.Close()

	var messages []publicMessage
	for rows.Next() {
		var msg publicMessage
		if err := rows.Scan(&msg.ID, &msg.From, &msg.Content, &msg.Time); err != nil {
			return nil, fmt.Errorf("error scanning message: %v", err)
		}
		messages = append(messages, msg)
	}

	if err := rows.Err(); err != nil {
		return nil, fmt.Errorf("error iterating over messages: %v", err)
	}

	return messages, nil
}

func GetMessagesByUser(user string) ([]string, error) {
	querySQL := `SELECT id, fromm, tooo, message, time 
                  FROM dmMessages 
                  WHERE fromm = ? OR tooo = ? 
                  ORDER BY time DESC`

	rows, err := Database.Query(querySQL, user, user)
	if err != nil {
		return nil, fmt.Errorf("error querying messages: %v", err)
	}
	defer rows.Close()

	var messages []Message
	for rows.Next() {
		var msg Message
		if err := rows.Scan(&msg.ID, &msg.From, &msg.To, &msg.Content, &msg.Time); err != nil {
			return nil, fmt.Errorf("error scanning message: %v", err)
		}
		messages = append(messages, msg)
	}

	if err := rows.Err(); err != nil {
		return nil, fmt.Errorf("error iterating over messages: %v", err)
	}

	users := []string{}
	uniqueUsers := make(map[string]struct{})

	for _, msg := range messages {
		var userToAdd string
		if msg.From != user {
			userToAdd = msg.From
		} else {
			userToAdd = msg.To
		}

		// Only add if it's a new user
		if _, exists := uniqueUsers[userToAdd]; !exists {
			uniqueUsers[userToAdd] = struct{}{}
			users = append(users, userToAdd) // Maintain order in the slice
		}
	}

	if len(users) == 0 {
		users, err = GetUsersWithIDGreaterOrEqual849()
		if err!= nil {
            return nil, fmt.Errorf("error getting users with ID greater or equal to 849: %v", err)
        }
	} 	

	return users, nil
}