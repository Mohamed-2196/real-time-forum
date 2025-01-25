# **CosmicForum: A Space-Themed Forum** 🌌🚀

CosmicForum is a **space-themed forum** designed for space enthusiasts to connect, share ideas, and discuss topics related to the cosmos. This project builds on the foundations of a traditional forum but adds a **space-themed twist** to create a unique and immersive experience. With features like **user registration and login**, **post creation**, **commenting**, and **real-time private messaging**, CosmicForum brings space lovers together in a dynamic and interactive environment.

---

## **Features** ✨

1. **Registration and Login** 🔐:
   - Users can register by providing:
     - Nickname
     - Age
     - Gender
     - First Name
     - Last Name
     - Email
     - Password
   - Users can log in using their **nickname or email** and password.
   - A **logout** option is available on every page.

2. **Posts and Comments** 📝:
   - **Create Posts**: Users can create posts with categories.
   - **Comment on Posts**: Users can comment on existing posts.
   - **Feed Display**: Posts are displayed in a feed, and comments are visible only when a post is clicked.

3. **Private Messages** 💬:
   - **Real-Time Chat**: Users can send private messages to each other in real-time using **WebSockets**.
   - **Online/Offline Status**: A section displays users who are online/offline, organized by the last message sent or alphabetically.
   - **Message History**: Users can view past messages and load older messages by scrolling up (10 messages at a time).
   - **Message Format**: Messages include:
     - Date and time sent.
     - Sender's username.

4. **Space-Themed Design** 🪐:
   - The forum features a **space-themed design** with cosmic visuals to enhance the user experience.

---

## **Technologies Used** 🛠️

- **Frontend**:
  - HTML for structuring the page.
  - CSS for styling and space-themed visuals.
  - JavaScript for handling DOM events and WebSocket communication.
- **Backend**:
  - Go (Golang) for backend logic and WebSocket handling.
  - SQLite for database management.
- **WebSockets**:
  - Gorilla WebSocket for real-time communication.
- **Authentication**:
  - bcrypt for password hashing.
  - Sessions and cookies for user authentication.
- **Database**:
  - SQLite for storing user data, posts, comments, and messages.

---

## **How to Run the Project** 🏃‍♂️

### **Prerequisites**:
- **Go** installed.
- **SQLite** installed.

### **Steps**:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Mohamed-2196/real-time-forum.git
   cd CosmicForum
   ```

2. **Set Up the Backend**:
   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Install Go dependencies:
     ```bash
     go mod tidy
     ```
   - Run the backend server:
     ```bash
     go run main.go
     ```
     
3. **Access the Application**:
   - Open your browser and navigate to `http://localhost:8080`.

---

## **License** 📜

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---


Join the cosmic community and explore the universe with **CosmicForum**! 🌌✨
