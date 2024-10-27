package db

import (
	"db-test/models"
	"fmt"
	"log"
)

func CreateUsersTable() error {
	createTableSQL := `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
        );`
	_, err := Database.Exec(createTableSQL)
	if err != nil {
		return fmt.Errorf("error creating users table: %v", err)
	}

	_, err = Database.Exec("PRAGMA foreign_keys = ON;")
if err != nil {
    log.Fatal("Error enabling foreign key support:", err)
}
	return nil
}

func CreateUser(username, email, password string) (int, error) {
	o, err := Database.Exec(
		"INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
		username,
		email,
		password,
	)
	if err != nil {
		return -1, err
	}
	id, err := o.LastInsertId()
	if err != nil {
		return -1, err
	}

	return int(id), err
}

func ReadUser(id int) (*models.User, error) {
	user := &models.User{}
	rows, err := Database.Query(`SELECT id, username, email FROM users WHERE id = ?`, id)
	if err != nil {
		return user, fmt.Errorf("error querying database: %v", err)
	}
	defer rows.Close()

	if !rows.Next() {
		return nil, models.ErrNoResultFound
	}

	err = rows.Scan(&user.ID, &user.Username, &user.Email)
	if err != nil {
		return user, fmt.Errorf("error reading user: %v", err)
	}
	return user, nil
}

func ReadAllUser() ([]models.User, error) {
	rows, err := Database.Query(`SELECT * FROM users`)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	users := []models.User{}

	for rows.Next() {
		user := models.User{}
		err := rows.Scan(&user.ID, &user.Username, &user.Email, &user.Password)
		if err != nil {
			log.Printf("error reading c: %v", err)
			continue
		}
		users = append(users, user)
	}
	if len(users) == 0 {
		return nil, models.ErrNoResultFound
	}
	return users, nil
}

func UpdateUser(username, email string, userID int) error {
	if _, err := ReadUser(userID); err != nil {
		return err
	}

	statement, err := Database.Prepare(
		`UPDATE users
        SET username = ?, email = ?
        WHERE id = ?`,
	)
	if err != nil {
		return err
	}
	_, err = statement.Exec(username, email, userID)
	if err != nil {
		return err
	}

	return err
}

func DeleteUser(id int) error {
	if _, err := ReadUser(id); err != nil {
		return err
	}

	statement, err := Database.Prepare(
		`DELETE FROM users
        WHERE id = ?`,
	)
	if err != nil {
		return err
	}
	_, err = statement.Exec(id)
	if err != nil {
		return err
	}

	return err
}

func GetUsersWithIDGreaterOrEqual849() ([]string, error) {
	query := `
		SELECT username 
		FROM users 
		WHERE id >= 1 
		ORDER BY username COLLATE NOCASE ASC`
	
	rows, err := Database.Query(query)
	if err != nil {
		return nil, fmt.Errorf("error querying users: %v", err)
	}
	defer rows.Close()

	var usernames []string
	for rows.Next() {
		var username string
		if err := rows.Scan(&username); err != nil {
			log.Printf("error scanning username: %v", err)
			continue
		}
		usernames = append(usernames, username)
	}

	if err := rows.Err(); err != nil {
		return nil, fmt.Errorf("error reading rows: %v", err)
	}

	return usernames, nil
}
