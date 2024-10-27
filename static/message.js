function bigMama (recipient) {
  let meow = `
     username;
     messageCount = 10;
     first = true;
     messagesDiv = document.getElementById('messages');
     maybe = document.getElementById('chat-window');
     typingGif = document.getElementById('typing-gif');
     typingWriter = document.getElementById('typing-writer');
    theone =\`${recipient}\`;
    typingTimeout = "";
    async function getuserdata () {
      await fetch('/homeData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
        username = data.Username;
      })
      .catch(error => console.error('Error fetching data:', error));
    }

    async function getChatHistory () {
       response = await fetch('http://localhost:8080/history', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          limit: messageCount,
          otherend: \`${recipient}\` // Escape this for later evaluation
        })
      });

      if (response.ok) {
         messages = await response.json();
        messagesDiv.innerHTML = '';

        messages.forEach(message => {
          appendMessage(message);
        });

        if (first) {
          maybe.scrollTop = maybe.scrollHeight;
          first = false;
        }
      } else {
        console.error('Error fetching chat history:', response.status);
      }
    }

    function appendMessage (message) {
       messageElement = document.createElement('div');
       isSender = message.from === username;
        if (message.from != theone && message.from != username) {
        return;
        }
      messageElement.classList.add('message-container');  
      messageElement.classList.add('message');
      messageElement.classList.add(isSender ? 'sender-message' : 'receiver-message');

      messageElement.innerHTML = \`
  <div class="message-header">
    <span class="user-name">\${message.from}</span>
    <span class="timestamp">\${new Date(message.time).toLocaleTimeString()}</span>
  </div>
  <p class="message-body"></p>
\`;

messageElement.querySelector(".message-body").innerText = message.content;
messagesDiv.appendChild(messageElement);
    }

    getuserdata().then(() => {
      getChatHistory();
    });

    function throttle (func, limit) {
      let lastFunc;
      let lastRan;

      return function () {
         context = this;
         args = arguments;
        if (!lastRan) {
          func.apply(context, args);
          lastRan = Date.now();
        } else {
          clearTimeout(lastFunc);
          lastFunc = setTimeout(function () {
            if (Date.now() - lastRan >= limit) {
              func.apply(context, args);
              lastRan = Date.now();
            }
          }, limit - (Date.now() - lastRan));
        }
      };
    }

     socket = new WebSocket('ws://localhost:8080/chat');

    socket.onmessage = function (event) {
      messageCount++;
       data = JSON.parse(event.data);
             if (data && data.froms==\`${recipient}\`) {
                     if (data.typing) {
            typingGif.style.display = 'block';
             typingWriter.textContent = \`${recipient}\`

            typingWriter.style.display = 'block';
        } else {
            typingWriter.style.display = 'none';
            typingGif.style.display = 'none';
        }
      } else if (data && data.message && data.from && data.timestamp) {
         message = {
          from: data.from,
          content: data.message,
          time: data.timestamp
        };
        appendMessage(message);
      } else {
        console.error('Received data does not have the expected structure:', data);
      }
    };

     messageInput = document.getElementById('message-input');
     sendButton = document.getElementById('send-button');

    sendButton.onclick = function () {
       message = messageInput.value.trim();
      if (message) {
         messageData = {
          to: \`${recipient}\`, // Ensure recipient is correctly included here
          message: message
        };
        socket.send(JSON.stringify(messageData));
        messageInput.value = '';
        clearTyping();
      }
    };

        messageInput.addEventListener('focus', () => {
      messageInput.addEventListener('input', () => {
        notifyTyping();
        clearTimeout(typingTimeout);
        typingTimeout = setTimeout(clearTyping, 500); // Clear typing status after 2 seconds of inactivity
      });
    });


    setTimeout(() => {
      maybe.addEventListener(
        'scroll',
        throttle(() => {
          if (maybe.scrollTop === 0) {
            messageCount += 10;
            getChatHistory();
          }
        }, 1000)
      );
    }, 1500);

    socket.onerror = function (error) {
      console.error('WebSocket error:', error);
    };

    socket.onclose = function () {
      console.log('WebSocket connection closed');
    };

        function notifyTyping() {
      socket.send(JSON.stringify({ typing: true, mee:"hello", to: theone }));
    }

    function clearTyping() {
      socket.send(JSON.stringify({ typing: false, mee:"hello", to: theone }));
    }

  `

  return meow
}

function bossBaby () {
  let meow = `
         username;
         userList = document.getElementById('user-list');
         messagesDiv = document.getElementById('messages');
         messageInput = document.getElementById('message-input');
         sendButton = document.getElementById('send-button');
    
        async function getUserData() {
             response = await fetch('/homeData', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            });
             data = await response.json();
            username = data.Username;
        }
    
        async function getChatHistory() {
             response = await fetch('http://localhost:8080/publichistory');
            if (response.ok) {
                 messages = await response.json();
                messages.forEach(message => appendMessage(message));
            }
        }
    
        function appendMessage(message) {
             messageElement = document.createElement('div');
             isSender = message.from === username;
    
            messageElement.classList.add('message', isSender ? 'sender-message' : 'receiver-message');
            messageElement.innerHTML = \`
  <div class="message-header">
    <span class="user-name">\${message.from}</span>
    <span class="timestamp">\${new Date(message.time).toLocaleTimeString()}</span>
  </div>
  <p class="message-body"></p>
\`;

messageElement.querySelector(".message-body").innerText = message.content;
messagesDiv.appendChild(messageElement);
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }

        \
        function updateOnlineUsers(users) {
            userList.innerHTML = '';
            users.forEach(user => {
                li = document.createElement('li');
                li.textContent = user;
                console.log(username)
                console.log(username.innerHTML, "and", user)
                if (user !== username.innerHTML && user !== username) {
                  li.onclick = function() {
              updURL('/Chat/' + user, 'chat');
          };
                }
                userList.appendChild(li);
            });
        }
    
         socket = new WebSocket('ws://localhost:8080/publicChatAPI');
    
        socket.onopen = async function() {
            console.log('WebSocket connection opened');
            await getUserData();
            getChatHistory();
        };
    
        socket.onmessage = function(event) {
             data = JSON.parse(event.data);
            if (data.type === 'message') {
                appendMessage(data);
            } else if (data.type === 'users') {
                updateOnlineUsers(data.users);
            } else {
                console.error('Unknown message type:', data);
            }
        };
    
        sendButton.onclick = function() {
       message = messageInput.value.trim();
            if (message) {
                 messageData = {
                    type: 'message',
                    from: username,
                    content: message,
                    time: Date.now()
                };
                socket.send(JSON.stringify(messageData));
                messageInput.value = '';
            }
        };
    
        socket.onerror = function(error) {
            console.error('WebSocket error:', error);
        };
    
        socket.onclose = function() {
            console.log('WebSocket connection closed');
        };

`

  return meow
}

function smallDada () {
  let meow = `
     userList = document.getElementById('user-list');
     onlineUserList = document.getElementById('online-user-list');
     searchBar = document.getElementById('search-bar');
     allUsers = [];
    
    async function getUserData() {
        const response = await fetch('/homeData', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });
        const data = await response.json();
        username = data.Username;
    }
    
    async function getChatUsers() {
        try {
            const response = await fetch('/chatlists');  
            if (!response.ok) {
                throw new Error('Error fetching chat users');
            }
            const data = await response.json();
            updateUserList(data.users); 
        } catch (error) {
            console.error('Error:', error);
        }
    }
    
    function updateUserList(users) {
        allUsers = users; 
        renderUserList(users);
    }
    function renderUserList(users) {
        userList.innerHTML = '';
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user;
let urll = "/Chat/"
urll += user;
            li.onclick = (user) => updURL(urll, 'CHAT');
            userList.appendChild(li);
        });
    }
    
    function filterUsers() {
        const query = searchBar.value.toLowerCase();
        const filteredUsers = allUsers.filter(user => user.toLowerCase().includes(query));
        renderUserList(filteredUsers);
    }
    
    function updateOnlineUsers(users) {
        onlineUserList.innerHTML = '';
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user;
            if (user !== username.innerHTML && user !== username) {
             li.onclick = () =>{
            updURL('/Chat/' + user, 'chat');}
}
            onlineUserList.appendChild(li);
        });

    }
    
     socket = new WebSocket('ws://localhost:8080/publicChatAPI');
    
    socket.onopen = async function() {
        console.log('WebSocket connection opened');
        await getUserData();
        await getChatUsers(); 
    };
    
    socket.onmessage = function(event) {
        const data = JSON.parse(event.data);
        if (data.type === 'users') {
            updateOnlineUsers(data.users);
        } else if (data.type === 'recentContacts') {
            updateUserList(data.contacts);
        } else {
            console.log('Unknown message type:', data.type);
        }
    };
    
    socket.onerror = function(error) {
        console.error('WebSocket error:', error);
    };
    
    socket.onclose = function() {
        console.log('WebSocket connection closed');
    };

`

  return meow
}

export { bigMama, bossBaby, smallDada }
