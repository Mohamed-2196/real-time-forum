let createPost = `
<div class="hide" id="create">
    <div id="mother-container">
        <div class="form-container">
            <button type="button" id="exit-button">&gt;</button>
            <p class="title">Create Post</p>
            <form>
                <div class="input-group">
                    <p class="header">Post Title</p>
                    <input id="title-id" type="text" name="post-title" placeholder="Title" required>
                </div>
                <br>
                <div class="input-group">
                    <p class="header">Post Body</p>
                    <!-- <input type="text" name="body" placeholder="Body"> -->
                    <textarea id="body-id" name="body" placeholder="Write something here..." required></textarea>
                </div>
                <br>
                <p class="header">Categories</p>
                <div id="cat-flex">
                    <label><input class="check" type="checkbox" name="Category" value="2">General</label>
                    <label><input class="check" type="checkbox" name="Category" value="1">Sport</label>
                    <label><input class="check" type="checkbox" name="Category" value="3">Technology</label>
                    <label><input class="check" type="checkbox" name="Category" value="4">Entertainment</label>
                    <label><input class="check" type="checkbox" name="Category" value="5">Health</label>
                    <label><input class="check" type="checkbox" name="Category" value="6">Business</label>
                    <label><input class="check" type="checkbox" name="Category" value="7">Science</label>
                    <label><input class="check" type="checkbox" name="Category" value="8">Education</label>
                    <label><input class="check" type="checkbox" name="Category" value="9">Travel</label>
                </div>
                <br>
                <input disabled id="submit" onclick="addPost()" type="button" name="Submit">
            </form>
        </div>
    </div>
</div>
<button id="add-post-butt">&lt;</button>

<style>
    #mother-container {
        display: flex;
        height: 79dvh;
        align-items: center;
        justify-content: center;
        background-color: #202020;
    }


    /* body {
        overflow: hidden;
        background-color: #111111;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        } */

    .form-container {
        position: relative;
        width: 320px;
        border-radius: 0.75rem;
        background-color: #1E1E1E;
        /* border: 2px solid #808080; */
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5), 0 7px 24px rgba(0, 0, 0, 0.3);
        color: rgba(243, 244, 246, 1);
        padding: 2rem;

    }



    #exit-button {
        color: whitesmoke;
        position: absolute;
        font-size: x-large;
        right: 10px;
        top: 10px;
        border: 0px;
        background-color: #1E1E1E;

    }

    #exit-button:active {
        color: rgba(245, 245, 245, 0.674);
    }

    .title {
        text-align: center;
        font-size: 1.5rem;
        line-height: 2rem;
        font-weight: 700;
    }

    .header {
        margin-bottom: 0.25rem;
        font-size: large;
    }

    .form {
        margin-top: 1.5rem;
    }

    #cat-flex {
        /* display: flex;
        width: 90%;
        background-color: red; */
        width: 60px;
        display: grid;
        grid-gap: 10px;
        grid-template-columns: 1fr 1fr 1fr;
    }

    label {
        display: block;
        color: #808080;
        width: max-content;
    }

    .input-group {
        margin-top: 0.25rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
    }

    .input-group label {
        display: block;
        background-color: #f87171;
        color: rgba(156, 163, 175, 1);
        margin-bottom: 4px;
    }

    .input-group input {
        width: 90%;
        border-radius: 0.375rem;
        border: 1px solid #808080;
        outline: 0;
        background-color: #2B2C2D;
        padding: 0.75rem 1rem;
        color: rgba(243, 244, 246, 1);
    }

    .input-group textarea {
        width: 90%;
        border-radius: 0.375rem;
        border: 1px solid #808080;
        outline: 0;
        background-color: #2B2C2D;
        padding: 0.75rem 1rem;
        color: rgba(243, 244, 246, 1);
        height: 250px;
        resize: none
    }

    .input-group input:focus {
        border-color: #0497A0;
    }

    .input-group textarea:focus {
        border-color: #0497A0;
    }

    #add-post-butt {
        height: 75px;
        width: 75px;
        position: fixed;
        border-radius: 50%;
        border: #1E2022 1px solid;
        bottom: 20px;
        right: 10px;
        font-size: x-large;
    }

    #submit {
        opacity: 0.7;
        display: block;
        width: 100%;
        background-color: #ffffff;
        padding: 0.75rem;
        margin-top: 1rem;
        text-align: center;
        color: #111111;
        border: none;
        border-radius: 0.375rem;
        font-weight: 600;
    }

    #create {
        /* background-color: blue; */
        position: fixed;
        right: 1px;
        bottom: 86px;
    }

    .hide {
        display: none;
    }

    .error-msg {
        color: #f87171;
        margin-top: 1rem;
        text-align: left;
        font-size: 0.75rem;
        padding: 0.5rem;
    }
</style>

<script>
    
</script>
`
let footer = `
<footer>
    <div id="last-banner">
        <div id="left-con">
            <p class="footer-text">Created By: Space Chat Team</p>
        </div>
        <p class="footer-text">© 2024 Da Forum. All rights reserved.</p>
    </div>
</footer>

<style>
    a {
        color: inherit;
        text-decoration: underline 0.1em rgba(255, 255, 255, 0);
        transition: text-decoration-color 300ms;
    }

    a:hover {
        text-decoration-color: rgba(255, 255, 255, 1);
    }

    footer {
        width: 100%;
    }

    #last-banner {
        display: flex;
        height: 70px;
        /* background-color: #b41739; */
        /* background-color: #1e2022; */
        background-color: #1E1E1E;
        justify-content: space-around;
        align-items: center;
    }

    #left-con {
        display: flex;
        justify-content: space-between;
        width: 600.53px;
        height: 60.8px;
        align-items: center;
    }

    .footer-text {
        text-align: center;
        color: white;
        font-size: large;
        margin-right: 20px;
    }


    .link-text-bottom {
        font-size: large;
        color: white;
    }


    #links-bottom {
        /* margin-right: 600px; */
        display: flex;
        align-items: center;
        justify-content: space-around;
        /* background-color: #b41739; */
        width: 291px;
        height: 40px;
        margin-right: 60px;
    }

    #logo-bottom {
        margin-left: 10px;
        height: 60px;
        width: 60px;
        justify-self: start;
        /* background-color: beige; */
        border-radius: 5px;
    }
</style>`

async function getNavInfo () {
  let username
  let loggedIn
  let arrInfo
  let title
  let id

  await fetch(`/homeData`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => {
      username = data.Username
      loggedIn = data.LoggedIn
      arrInfo = data.ArrInfo
      title = data.Title
      id = data.ID
    })
    .catch(error => console.error('Error fetching data:', error))

  let nav = `<nav>
    <div id="flexbox-up">
        <div class="flexbox-item" id="first">
      <a class="link-text" onclick="updURL('/chatlist', 'Profile')">
    <img src="/static/logo.png" id="logo">
</a>
            <!-- <svg id="logo" data-slot="icon" fill="none" stroke-width="1.5" stroke="whitesmoke" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z">
                </path>
            </svg> -->
            `
  if (loggedIn) {
    nav += `
            <div id="first-right">
                <a class="link-text" onclick="updURL('/home', 'Profile')">Home</a>
                <a class="link-text" onclick="updURL('/posts/1', 'Profile')">Posts</a>
                <a class="link-text" onclick="updURL('/profile/${id}', 'Profile')">Profile</a>
                <a class="link-text" onclick="updURL('/publicChat', 'Public')">Public Chat</a>
            </div>
        </div>
        <div class="flexbox-item" id="second">
            <!-- <svg width="28" id="logo2" data-slot="icon" fill="none" stroke-width="1.5" stroke="whitesmoke"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
            </svg>
            <input type="text" placeholder="Search..." id="search-text"></input> -->
        </div>
        <div class="flexbox-item" id="third">
            
            <div id="log">
                <a onclick="updURL('/logout', 'Profile')"><button class="log-text">Log Out</button></a>
            </div>
            <div id="profile">
                    <p id="username">${username}</p>
 <a onclick="updURL('/profile/${id}', 'Profile')">                    <div id="pic"></div>
                </a>
            </div>
            `
  } else {
    nav += `
            <div id="first-right">
                <a href="/" class="link-text">Home</a>
                <a href="/posts/1" class="link-text">Posts</a>
                <a href="/signIn" class="link-text">Profile</a>
            </div>
        </div>
        <div class="flexbox-item" id="second">
            <!-- <svg width="28" id="logo2" data-slot="icon" fill="none" stroke-width="1.5" stroke="whitesmoke"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
            </svg>
            <input type="text" placeholder="Search..." id="search-text"></input> -->
        </div>
        <div class="flexbox-item" id="third">
            <div class="sign">
                <a href="/signIn"><button class="signin-text">Sign In</button></a>
            </div>
            <div class="sign">
                <a href="/signUp"> <button class="signup-text">Sign Up</button></a>
            </div>
            
        </div>
</nav>
`
  }
  nav += `
<style>
    /* button:hover {
        border: 2px solid #454343;
        border-radius: 5px;
    } */

    /* button:active {
        color: #d4cfcf;
        background-color: #212121;
    } */

    a {
        color: inherit;
        text-decoration: underline 0.1em rgba(255, 255, 255, 0);
        transition: text-decoration-color 300ms;
    }

    a:hover {
        text-decoration-color: rgba(255, 255, 255, 1);
    }

    #flexbox-up {
        height: 70px;
        display: flex;
        align-items: center;
        /* background-color: #b41739; */
        /* background-color: #1e2022; */
        background-color: #1E1E1E;
        /* background: linear-gradient(to bottom, transparent 0%, black 100%); */
        justify-content: space-between;
        gap: 10px;
    }

    .flexbox-item {
        width: 200px;
        height: 60.81px;
        margin: 10px;
        /* background-color: #dfdfdf; */

    }

    #first {
        justify-content: space-between;
        align-items: center;
        display: flex;
        flex-grow: 2;
        /* background-color: #b41739; */
        /* background-color: #1e2022; */
    }

    #logo {
        height: 40px;
        width: 40px;
        justify-self: start;
        padding-left: 15px;
        border-radius: 5px;
    }

    #first-right {
        margin-right: 70px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        /* background-color: #b41739; */
        /* background-color: #1e2022; */
        width: 291px;
        height: 40px;
    }

    .link-text {
        font-size: large;
        color: white;
    }

    #second {
        display: flex;
        flex-grow: 2;
        align-items: center;
        gap: 1rem;
        /* background-color: #1e2022; */
        /* background-color: aqua; */
        padding-left: 10px;
        border-radius: 5px;
    }

    #logo2 {
        height: 35px;
        width: 35px;
        justify-self: start;
        border-radius: 5px;
    }

    #search-text {
        padding-left: 10px;
        width: 25rem;
        height: 1.5rem;
        border-radius: 5px;
        /* color: #e2dfdb; */
        font-size: 16px;
    }

    #third {
        display: flex;

        flex-grow: 1;
        /* background-color: #b41739; */
        /* background-color: #1e2022; */
        justify-content: flex-start;
        gap: 30px;

    }

    .sign {
        /* background-color: #1e2022; */
        width: 150px;
        height: 60.81px;
        border-radius: 5px;
        justify-content: center;
        align-content: center;
    }

    #log {
        width: 110px;
        height: 60.81px;
        border-radius: 5px;
        justify-content: center;
        align-content: center;
    }

    #profile {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        align-items: center;
        width: 280px;
        height: 60.81px;
    }

    #pic {
        height: 45px;
        width: 45px;
        border-radius: 50%;
        background-color: #808080;
        border: 2px solid #dddddd;
    }

    #username {
        font-size: 24px;
        font-weight: bold;
        color: #eeeeee;
        margin: 0;
        text-align: center;
    }

    .signin-text {
        font-weight: bold;
        text-align: center;
        color: #eee;
        border: 2px solid #3c3c3c;
        background-color: #1E1E1E;
        font-size: 1.1rem;
        height: 45px;
        width: 90px;
        border-radius: 7px;
        cursor: pointer;
    }

    .signin-text:hover {
        font-weight: bold;
        text-align: center;
        color: #eee;
        background-color: #3c3c3c;
        font-size: 1.1rem;
        height: 45px;
        width: 90px;
        border-radius: 7px;
        cursor: pointer;
    }

    .signup-text, .log-text {
        font-weight: bold;
        text-align: center;
        color: #1E1E1E;
        background-color: #eee;
        border: 2px solid #eee;
        font-size: 1.1rem;
        height: 45px;
        width: 90px;
        border-radius: 7px;
        cursor: pointer;
    }

    .signup-text:hover, .log-text:hover {
        font-weight: bold;
        text-align: center;
        background-color: #1E1E1E;
        color: #eee;
        font-size: 1.1rem;
        height: 45px;
        width: 90px;
        border-radius: 7px;
        cursor: pointer;
    }
          .link-text {
        cursor: pointer; /* Change cursor to pointer on hover */
        text-decoration: none; /* Optional: Remove underline */
    }

    .link-text:hover {
        text-decoration: underline; /* Optional: Underline on hover */
    }
</style>

<script>

</script>`

  return nav
}

async function returnHome () {
  let username
  let loggedIn
  let arrInfo
  let title
  let id
  // console.log('here22')
  await fetch(`/homeData`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => {
      username = data.Username
      loggedIn = data.LoggedIn
      arrInfo = data.ArrInfo
      title = data.Title
      id = data.ID
    })
    .catch(error => console.error('Error fetching data:', error))

  let home = `<body id="content">
    <div id="welcome-section">
      <div id="welcome-text">
        <h1>Welcome To Space Chat</h1>
        <p>
          Welcome to our vibrant community forum, a place where ideas meet
          inspiration and knowledge is shared freely. Whether you're here to ask
          questions, share your experiences, or connect with like-minded
          individuals, we're thrilled to have you. Dive into discussions, explore
          diverse topics, and let's build amazing community together!
        </p>
`
  if (loggedIn) {
    home += `<div id="explore">
            <a class="link-text" onclick="updURL('/posts/1', 'Profile')"><button id="explore-button">Explore Now</button></a>
        </div>`
  } else {
    home += `<div id="welcome-buttons">
          <a href="/signUp"><button id="join-button">Join Us</button></a>
          <a href="/signIn"><button id="signin-button">Sign In</button></a>
        </div>`
  }

  home += ` </div>
      <div id="welcome-image">
        <!-- <img src="home.jpg" alt="Welcome Image"> -->
      </div>
    </div>`

  if (arrInfo) {
    home += `<div id="most-popular-heading">
      <h2>The Most Popular Posts</h2>
    </div>
  
    <div id="popular-post">
      <div id="popular-bottom-post">`
    arrInfo.forEach(thing => {
      home += `<div id="post-list">
          <div id="publisher-box">
            <div id="pfp"></div>
            <p id="publisher-name">${thing.PublisherName}</p>
          </div>
          <div id="post-title-box">
            <p id="post-title">${thing.PostTitle}</p>
          </div>
          <pre id="post-body">${thing.PostBody}</pre>
          <div id="post-details">
            <div id="comment-box">
              <svg
                id="comment-logo"
                data-slot="icon"
                fill="none"
                stroke-width="1.5"
                stroke="#bbbbbb"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                ></path>
              </svg>
              <p id="comments">${thing.PostComments} Comments</p>
            </div>
            <p id="date">${thing.PostDate}</p>
          </div>
        </div>`
    })
  }
  home += `     
      </div>
    </div>
  </body>
  
  <style>
    #welcome-section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 50px;
      background-color: #111111;
      /* background-color: #010101; */
      color: white;
      min-height: 80vh;
    }
  
    #welcome-text {
      width: 50%;
    }
  
    #welcome-text h1 {
      font-size: 3rem;
      margin-bottom: 20px;
    }
  
    #welcome-text p {
      font-size: 1.2rem;
      line-height: 1.5;
      margin-bottom: 20px;
    }
  
    #welcome-buttons {
      display: flex;
      /* justify-content: center; */
      gap: 20px;
    }
  
    #explore {
      display: flex;
      justify-content: left;
    }
  
    #welcome-buttons button,
    #explore button {
      padding: 10px 20px;
      font-size: 1rem;
      background-color: #1e1e1e;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  
    #welcome-buttons button:hover,
    #explore button:hover {
      background-color: #555555;
    }
  
    #welcome-image {
      width: 500px;
      height: 500px;
      margin-right: 90px;
      background-image: url("/static/space.png");
      background-size: cover;
      background-position: center;
      /* margin-bottom: 50px; */
      /* border-radius: 10px; */
    }
  
    #content {
      min-height: 100dvh;
      background-color: #111111;
    }
  
    #popular-post {
      display: flex;
      flex-direction: column;
      gap: 40px;
      background-color: #111111;
      justify-content: center;
      align-content: center;
    }
  
    #popular-bottom-post {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding-top: 20px;
      padding-bottom: 20px;
      width: 99dvw;
      gap: 35px;
      justify-content: space-evenly;
    }
  
    #most-popular-heading {
      text-align: center;
      /* margin-left: 50px; */
      margin-top: 20px;
      margin-bottom: 20px;
    }
  
    #most-popular-heading h2 {
      color: black;
      font-size: 2rem;
      font-weight: bold;
    }
  
    #content {
      /* height: 100%;
              height: 1rem;
              height: 1em;
              height: 1px; */
      min-height: 100dvh;
      /* height: 1vw; */
  
      background-color: #111111;
    }
  
    .text-body {
      color: rgb(225, 221, 221);
    }
  
    #popular-post {
      display: flex;
      flex-direction: column;
      gap: 40px;
      background-color: #111111;
      /* height: 653px; */
      justify-content: center;
      align-content: center;
    }
  
    #popular-bottom-post {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding-top: 20px;
      padding-bottom: 20px;
      width: 99dvw;
      gap: 35px;
      /* padding-left: 60px; */
      justify-content: space-evenly;
    }
  
    #post-list {
      display: flex;
      flex-direction: column;
      background-color: #1e1e1e;
      padding: 1rem;
      align-self: center;
      justify-content: space-evenly;
      /* padding-top: 1rem; */
      /* padding-bottom: 1rem; */
      gap: 1rem;
      /* border: 3px solid gray; */
      border-radius: 5px;
      width: 370px;
      height: 230px;
      align-items: center;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5), 0 7px 24px rgba(0, 0, 0, 0.3);
    }
  
    #publisher-box {
      display: flex;
      width: 122px;
      gap: 0.5rem;
      margin-left: 10px;
      margin-right: auto;
      align-items: center;
      justify-content: flex-start;
    }
  
    #pfp {
      width: 25px;
      height: 25px;
      background-color: gray;
      border-radius: 25px;
    }
  
    #publisher-name {
      color: gray;
      text-align: center;
      font-size: small;
    }
  
    #post-title-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 350px;
      height: 28px;
    }
  
    #post-title {
      color: #ddd;
      font-size: 1.2rem;
    }
  
    #comment-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 107px;
      height: 20px;
    }
  
    #comment-logo {
      width: 20px;
      height: 20px;
      border-radius: 25px;
      margin-bottom: 2px;
    }
  
    #comments {
      text-align: center;
      color: #ddd;
      font-size: small;
    }
  
    #post-body {
      color: gray;
      width: 90%;
      border-radius: 0.375rem;
      /* border: 1px solid #808080; */
      padding: 0.75rem 1rem;
      outline: 0;
      background-color: #1e1e1e;
      /* color: rgba(243, 244, 246, 1); */
      height: 76px;
      font-size: 1rem;
      resize: none;
      overflow-y: auto;
    }
  
    /* .scrollbar {
          overflow-y: auto;
          height: 100%;
          padding-right: 20px;
      } */
  
    * {
      scrollbar-width: thin;
      scrollbar-color: #444 #2b2c2d;
    }
  
    *::-webkit-scrollbar {
      width: 0.9375rem;
    }
  
    *::-webkit-scrollbar-track {
      background: #2b2c2d;
    }
  
    *::-webkit-scrollbar-thumb {
      background-color: #444;
      border-radius: 1.25rem;
      border: 0.1875rem solid #2b2c2d;
    }
  
    #post-details {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 400px;
    }
  
    #date {
      width: 150px;
      color: #ddd;
      font-size: small;
    }
  
    #no-posts {
      color: white;
      font-size: 1.5rem;
      text-align: center;
      margin-top: 1.25rem;
    }
  
    /* #remove-post-butt {
          height: 100px;
          width: 100px;
          position: fixed;
          right: 500px;
          bottom: 500px;
          background-color: aqua;
      } */
  
    /* #testing:active {
          display: block;
      } */
  </style>`
  return home
}

async function getPostsInfo (inputPage, cats = []) {
  // LoggedIn       bool                 `json:"LoggedIn"`
  // Title          string               `json:"Title"`
  // PgNum          int                  `json:"pgNum"`
  // Pages          int                  `json:"pg"`
  // Posts          []*sendPostsPageInfo `json:"posts"`

  let loggedIn
  let title
  let pageNumber
  let pages
  let postArr
  // console.log(inputPage)

  await fetch(`/postsData/${inputPage}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      loggedIn = data.LoggedIn
      title = data.Title
      pageNumber = ++data.pgNum
      pages = data.pg
      postArr = data.posts
    })
    .catch(error => console.error('Error fetching data:', error))
  // console.log(cats)

  let posts = `<div id="posts-container">
      <div id="categories">
          <h1>Categories</h1>
         
          <form id="categories-form" onsubmit="updURL('/posts/1', 'Category')">
              <div id="category-checkbox">
                  <label><input class="box" type="checkbox" name="Category" value="2"> General</label>
                  <label><input class="box" type="checkbox" name="Category" value="1"> Sport</label>
                  <label><input class="box" type="checkbox" name="Category" value="3"> Technology</label>
                  <label><input class="box" type="checkbox" name="Category" value="4"> Entertainment</label>
                  <label><input class="box" type="checkbox" name="Category" value="5"> Health</label>
                  <label><input class="box" type="checkbox" name="Category" value="6"> Business</label>
                  <label><input class="box" type="checkbox" name="Category" value="7"> Science</label>
                  <label><input class="box" type="checkbox" name="Category" value="8"> Education</label>
                  <label><input class="box" type="checkbox" name="Category" value="9"> Travel</label>
              </div>
              <button type="button" id="filter-button">Apply Filter</button>
          </form>
  
      </div>
  
      <div id="post-list-container">
        

  `
  if (postArr) {
    postArr.forEach(thing => {
      posts += ` <div id="post-list">
              <div id="publisher-box">
              <a onclick="updURL('/profile/${thing.UserID}', 'Profile')">
                  <div id="pfp"></div>
                  <p id="publisher-name">${thing.PublisherName}</p>
                  </a>
              </div>
              <div id="Category-bx">
                  <p id="categories-list">${thing.PostCategories}</p>
              </div>
              <div id="post-title-box">
                  <p id="post-title">${thing.PostTitle}</p>
              </div>
              <a onclick="updURL('/post/${thing.PostId}', 'Post')"  class="post-link">
                  <pre id="post-body"> ${thing.PostBody} </pre>
              </a>
              <div id="post-details">
                  <div id="date-box">
                      <svg id="date-logo" data-slot="icon" fill="none" stroke-width="1.5" stroke="#bbbbbb"
                          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round"
                              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z">
                          </path>
                      </svg>
                      <p id="date">${thing.PostDate} </p>
                  </div>
  
                  <div id="comment-box">
                      <svg id="comment-logo" data-slot="icon" fill="none" stroke-width="1.5" stroke="#bbbbbb"
                          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round"
                              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z">
                          </path>
                      </svg>
                      <p id="comments">${thing.PostComments}</p>
                  </div>
  
                  <div id="liked-box">
                      <button id="like-img" class="like-dislike-button" onclick="likePost('${thing.PostId}', '${loggedIn}' )">
                          <svg id="like-logo" data-slot="icon" fill="none" stroke-width="1.5" stroke="#bbbbbb"
                              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z">
                              </path>
                          </svg>
                      </button>
  
                      </svg>
                      <p class="likes" id="likes-${thing.PostId}">${thing.PostLike}</p>
                  </div>
  
                  <div id="dislike-box">
                      <button id="dislike-img" class="like-dislike-button"
                          onclick="dislikePost('${thing.PostId}', '${loggedIn}')">
                          <svg id="dislike-logo" data-slot="icon" fill="none" stroke-width="1.5" stroke="#bbbbbb"
                              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54">
                              </path>
                          </svg>
                      </button>
                      <p class="dislikes" id="dislikes-${thing.PostId}">${thing.PostDislike}</p>
                  </div>
              </div>
          </div>
  `
    })
    posts += ` <div id="next-prev">
              <button id="prev-page">← </br>Prev</button>
              <span id="page-number">${pageNumber}</span>
              <button id="next-page">Next </br> →</button>
          </div>
  `
  } else {
    posts += `<p id="no-posts">No posts yet :(</p>`
  }

  posts += `
  
      </div>
      <div id="pages">${pages}</div>
  </div>
  


  
  <style>
      body {
          background-color: #111111;
      }
  
      #posts-container {
          display: flex;
          min-height: 100dvh;
          padding: 1.25rem;
      }
  
      #categories {
          width: 20%;
          background-color: #1E1E1E;
          padding: 1.25rem;
          border-radius: 0.3125rem;
          margin-right: 1.25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 20%;
      }
  
      #categories h1 {
          color: #bbb;
          margin-bottom: 1.25rem;
          font-size: 2.5rem;
      }
  
      .box {
          padding-top: 0.625rem;
          width: 1.875rem;
          height: 1.6875rem;
      }
  
      #categories-form {
          display: flex;
          flex-direction: column;
          align-items: center;
      }
  
      #category-checkbox {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 1.25rem;
      }
  
      #category-checkbox label {
          font-size: 1.7rem;
          color: gray;
          padding: 1.25rem;
          font-weight: bold;
      }
  
      #filter-button {
          width: 9.375rem;
          height: 3.125rem;
          font-size: 1rem;
          background-color: #444444;
          color: white;
          padding: 0.625rem 1.25rem;
          border: none;
          border-radius: 0.3125rem;
          cursor: pointer;
      }
  
      #filter-button:hover {
          background-color: #555555;
      }
  
      #popular-bottom-post {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          padding-top: 1.25rem;
          padding-bottom: 1.25rem;
          width: 100%;
          gap: 2.1875rem;
          justify-content: flex-start;
      }
  
      #right-container {
          display: flex;
          text-align: center;
          flex-direction: column;
      }
  
      #post-list-container {
          flex-grow: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: 1rem;
          border-radius: 0.3125rem;
      }
  
      #post-list {
          display: flex;
          flex-direction: column;
          background-color: #1E1E1E;
          padding: 1.5rem;
          gap: 1rem;
          box-shadow: 0 0.3125rem 0.625rem rgba(0, 0, 0, 0.5), 0 0.4375rem 1.5rem rgba(0, 0, 0, 0.3);
          border-radius: 0.3125rem;
          width: 50rem;
          height: 18.75rem;
          margin-bottom: 1.25rem;
      }
  
      #publisher-box,
      #post-title-box,
      #post-details {
          display: flex;
          align-items: center;
          gap: 0.5rem;
      }
  
      #pfp {
          width: 2.5rem;
          height: 2.5rem;
          background-color: gray;
          border-radius: 1.5625rem;
      }
  
      #publisher-name {
          color: gray;
          font-size: 1.2rem;
      }
  
      #post-title {
          color: #ddd;
          font-size: 1.5rem;
      }
  
      #like-logo, #dislike-logo {
      transition: transform 0.2s ease;
    }
  
    #like-logo:hover , #dislike-logo:hover {
      transform: scale(1.2);
      cursor: pointer;
    }
  
  
      #post-body {
          color: gray;
          width: 95%;
          border-radius: 0.375rem;
          padding: 0.625rem;
          background-color: #1E1E1E;
          height: 6.25rem;
          font-size: 1.2rem;
          overflow-y: auto;
          display: flex;
          justify-content: center;
          text-align: center;
      }
  
      #post-details {
          display: flex;
          justify-content: space-between;
          width: 100%;
      }
  
      #date-box,
      #comment-box,
      #liked-box,
      #dislike-box {
          display: flex;
          align-items: center;
          gap: 0.625rem;
      }
  
      #comment-logo,
      #like-logo,
      #date-logo,
      #dislike-logo {
          width: 1.875rem;
          height: 1.875rem;
          color: white;
      }
  
      #comments,
      .likes,
      #date,
      .dislikes {
          text-align: center;
          padding-top: 0.125rem;
          color: gray;
          font-size: 1.2rem;
      }
  
      .like-dislike-button {
          background-color: #1E1E1E;
          border: 0;
      }
  
      #categories-list {
          background-color: #3a3b3bcd;
          text-align: center;
          padding-top: 0.125rem;
          padding: 0.4375rem;
          color: gray;
          font-size: 1rem;
          border-radius: 0.3125rem;
      }
  
      #Category-bx {
          display: flex;
          align-items: center;
          padding: 0 0.25rem;
          border-radius: 0.3125rem;
      }
  
      * {
          scrollbar-width: thin;
          scrollbar-color: #444 #2b2c2d;
      }
  
      *::-webkit-scrollbar {
          width: 0.9375rem;
      }
  
      *::-webkit-scrollbar-track {
          background: #2b2c2d;
      }
  
      *::-webkit-scrollbar-thumb {
          background-color: #444;
          border-radius: 1.25rem;
          border: 0.1875rem solid #2b2c2d;
      }
  
      #next-prev {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 1.25rem;
      }
  
      #prev-page,
      #next-page {
          width: 5.625rem;
          height: 3.125rem;
          background-color: #444444;
          color: white;
          padding: 0.625rem 1.25rem;
          border: none;
          border-radius: 0.3125rem;
          cursor: pointer;
          margin: 0 0.625rem;
          font-size: 1rem;
          padding: 0.3125rem;
      }
  
      #prev-page:hover,
      #next-page:hover {
          background-color: #555555;
      }
  
      #page-number {
          color: white;
          font-size: 1.25rem;
      }
  
      #no-posts {
          font-size: 1.5em;
          color: #888;
          text-align: center;
          margin-top: 50px;
      }
  
  
      .post-link:hover,
      .post-link {
          text-decoration: none;
      }
  
      #pages {
          display: none;
      }
  </style>`

  return posts
}

// username
// email
// totallikes
// userposts
// title
// comments
async function getProfile (uid) {
  let username
  let email
  let totalLikes
  let posts
  let userLikes
  let title
  let image
  let id
  let currentuser
  const response = await fetch(`/homeData`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  })
  const data = await response.json()
  currentuser = data.Username
  await fetch(`/profileData/${uid}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => {
      // console.log(data)

      username = data.UsernameSend
      email = data.Email
      totalLikes = data.totalLikes
      posts = data.userPosts
      title = data.Title
      userLikes = data.likedPosts
      image = data.Image
      id = data.ID
    })
    .catch(error => console.error('Error fetching data:', error))
  // console.log(posts)
  // console.log(userLikes)

  // console.log(username)
  // console.log(email)
  // console.log(totalLikes)
  // console.log(likedPosts)
  // console.log(title)

  let profile = `<div class="container">
  <div class="profile-container">
  <div id="profile-head-container">
    <div class="profile-header1">
      <div class="profile-pic">
        <img src="${image}" />
      </div>

      <!-- <div class="upload-img">
        <svg
          id="img"
          data-slot="icon"
          fill="none"
          stroke-width="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
          ></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
          ></path>
        </svg>
      </div> -->

      <div class="user-info">
        <h2 class="username">${username}</h2>
        <p class="email">${email}</p>

        <div id="likes" class="like-box">
          <svg
            id="heart"
            data-slot="icon"
            fill="currentColor"
            stroke-width="3.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            ></path>
          </svg>
          <p class="total-likes">${totalLikes}</p>
        </div>
      </div>
    </div> `
  if (currentuser != username) {
    profile += `<button id="chatButton" onclick="updURL('/Chat/${username}', 'CHAT')" >Chat</button>`
  }
  profile += `
    </div>
    <div class="profile-content">
      <div class="user-posts">
        <h3>Your Posts</h3>
        <div class="scrollbar">
          <div class="posts">
          `
  if (posts) {
    // console.log('ENTERING')
    posts.forEach(thing => {
      profile += `
              <a onclick="updURL('/post/${thing.Id}', 'Post')" class="post-link">
              <div class="post">
                <h2 class="post-title">${thing.Title}</h2>
                <div class="comments-likes">
                  <div id="comment-box">
                    <svg
                      id="comment-logo"
                      data-slot="icon"
                      fill="none"
                      stroke-width="1.5"
                      stroke="#bbbbbb"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                      ></path>
                    </svg>
                    <p id="comments">${thing.Comments} Comments</p>
                  </div>

                  <div id="liked-box">
                    <svg
                      id="like-logo"
                      data-slot="icon"
                      fill="none"
                      stroke-width="1.5"
                      stroke="#bbbbbb"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      ></path>
                    </svg>
                    <p id="likes">${thing.Likes} Likes</p>
                  </div>
                </div>
              </div>
            </a>
            `
    })
  } else {
    profile += `<p class="no-posts">No posts yet :(</p>`
  }
  profile += ` 
             
          </div>
        </div>
      </div>

      <div class="liked-posts">
        <h3>Liked Posts</h3>
        <div class="scrollbar">
          <div class="posts">`

  if (userLikes) {
    userLikes.forEach(thing => {
      profile += `
            <a onclick="updURL('/post/${thing.Id}', 'Post')" class="post-link">
              <div class="post">
                <h2 class="post-title">${thing.Title}</h2>
                <div class="comments-likes">
                  <div id="comment-box">
                    <svg
                      id="comment-logo"
                      data-slot="icon"
                      fill="none"
                      stroke-width="1.5"
                      stroke="#bbbbbb"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                      ></path>
                    </svg>
                    <p id="comments">${thing.Comments} Comments</p>
                  </div>

                  <div id="liked-box">
                    <svg
                      id="like-logo"
                      data-slot="icon"
                      fill="none"
                      stroke-width="1.5"
                      stroke="#bbbbbb"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      ></path>
                    </svg>
                    <p id="likes">${thing.Likes} Likes</p>
                  </div>
                </div>
              </div>
            </a>`
    })
  } else {
    profile += `<p class="no-posts">No liked posts yet :(</p>`
  }

  profile += `
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  body {
    background-color: #111111;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 83dvh;
    background-color: #111111;
  }

  .profile-container {
    width: 56.25rem;
    background-color: #1e1e1e;
    border-radius: 0.625rem;
    box-shadow: 0 0.3125rem 0.625rem rgba(0, 0, 0, 0.5),
      0 0.4375rem 1.5rem rgba(0, 0, 0, 0.3); /* 0 5px 10px, 0 7px 24px */
    padding: 1.875rem;
    margin-top: 1.875rem;
    overflow: hidden;
  }

  

  #profile-head-container {
    width: 1000px;
    display: flex;
    align-items: center;
    justify-content: space-between;

  }

  .profile-header1 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 0.125rem solid #333333;
    padding-bottom: 1.25rem;
    margin-bottom: 1.25rem;
    position: relative;
  }

  #chatButton {
    margin-right: 160px;
    width: 100px;
    height: 45px;
    
  }


  .profile-pic {
    width: 6.25rem;
    height: 6.25rem;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 1.25rem;
    background-color: #808080;
    border: 0.125rem solid #dddddd;
    position: relative;
  }

  .user-info {
    flex-grow: 1;
  }

  .username {
    font-size: 1.5rem;
    font-weight: bold;
    color: #eeeeee;
    margin: 0;
  }

  .email {
    font-size: 1rem;
    color: #bbbbbb;
    margin: 0.3125rem 0;
  }

  .total-likes {
    font-size: 1rem;
    color: #999999;
  }

  .profile-content {
    display: flex;
    justify-content: space-between;
    height: 20rem;
  }

  .liked-posts,
  .user-posts {
    width: 48%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding-right: 1.25rem;
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.9375rem;
    border-bottom: 0.125rem solid #333333;
    padding-bottom: 0.3125rem;
    color: #eeeeee;
  }

  .post {
    background-color: #2e2e2e;
    border: 0.0625rem solid #444444;
    border-radius: 0.3125rem;
    padding: 0.9375rem;
    margin-bottom: 0.625rem;
  }

  .post-title {
    font-size: 1rem;
    font-weight: bold;
    color: #eeeeee;
    margin: 0;
    margin-top: 0.5rem;
  }

  .comments-likes {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875rem;
    color: #bbbbbb;
  }

  .no-posts {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 6.25rem;
    color: #bbbbbb;
    margin-top: 1.25rem;
    font-size: 1.125rem;
  }

  #comment-box,
  #liked-box,
  .like-box {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  #comment-logo,
  #like-logo {
    width: 0.9375rem;
    height: 0.9375rem;
    border-radius: 25px;
    margin-bottom: 0.125rem;
    margin-right: 0.3125rem;
    color: #bbbbbb;
  }

  #comment-box,
  #liked-box {
    margin-top: 0.625rem;
  }

  #comment-logo,
  #like-logo {
    margin-bottom: 0.125rem;
  }

  #heart {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 25px;
    margin-bottom: 0.125rem;
    margin-right: 0.3125rem;
    color: #999999;
  }

  .scrollbar {
    overflow-y: auto;
    height: 100%;
    padding-right: 1.25rem;
  }

  .upload-img {
    position: absolute;
    top: 5.3125rem;
    left: 5.3125rem;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.1875rem;
    height: 2.1875rem;
    border-radius: 50%;
    background: #2e2e2ea3;
  }

  #img {
    color: #ffffff;
    width: 1.5625rem;
    height: 1.5625rem;
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: #444 #2b2c2d;
  }

  *::-webkit-scrollbar {
    width: 0.9375rem;
  }

  *::-webkit-scrollbar-track {
    background: #2b2c2d;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #444;
    border-radius: 1.25rem;
    border: 0.1875rem solid #2b2c2d;
  }

  .post-link:hover,
  .post-link {
    text-decoration: none;
  }
</style>`

  return profile
}

async function signInData (err = '') {
  let signin = `<div class="form-container">
  <p class="title">Sign In</p>
  <form action="/signIn" method="post">
    <div class="input-group">
      <label for="input">Email or Username</label>
      <input name="input" placeholder="Username/Email" required>
    </div>
    <div class="input-group">
      <label for="password">Password</label>
      <input type="password" name="password" placeholder="Password" required>
    </div>
    `
  if (err) {
    signin += `<div class="error-msg">
      ${err}
    </div>`
  }
  signin += `
    <button type="button" onclick="logAccount()" class="signin">Sign In</button>
  </form>
  <p class="signup">Don't have an account?
    <a onclick="updURL('/signUp', 'Home')">Join Us</a>
  </p>
</div>

<style>
  body {
    overflow: hidden;
    background-color: #111111;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.form-container {
    width: 20rem;
    border-radius: 0.75rem;
    background-color: #1E1E1E;
    box-shadow: 0 0.3125rem 0.625rem rgba(0, 0, 0, 0.5), 0 0.4375rem 1.5rem rgba(0, 0, 0, 0.3);
    padding: 2rem;
    color: rgba(243, 244, 246, 1);
}

.title {
    text-align: center;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
}

.form {
    margin-top: 1.5rem;
}

.input-group {
    margin-top: 0.25rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
}

.input-group label {
    display: block;
    color: #BBBBBB;
    margin-bottom: 0.25rem;
    padding-top: 0.625rem;
}

.input-group input {
    width: 90%;
    border-radius: 0.375rem;
    border: 0.0625rem solid #808080;
    outline: 0;
    background-color: #2B2C2D;
    padding: 0.75rem 1rem;
    color: rgba(243, 244, 246, 1);
}

.input-group input:focus {
    border-color: #0497A0;
}

.signin {
    display: block;
    width: 100%;
    background-color: #BBBBBB;
    padding: 0.75rem;
    margin-top: 1rem;
    text-align: center;
    color: #2c2c2c;
    border: none;
    border-radius: 0.375rem;
    font-weight: 600;
}

.signin:hover {
    background-color: #a0a0a0;
    cursor: pointer;
}

.error-msg {
    color: #f87171;
    margin-top: 1rem;
    text-align: left;
    font-size: 0.75rem;
    padding: 0.5rem;
}

.signup {
    text-align: center;
    font-size: 0.9rem;
    line-height: 1rem;
    color: rgb(172, 172, 172);
    margin-top: 1rem;
}

.signup a {
    color: rgba(243, 244, 246, 1);
    text-decoration: none;
    font-size: 0.875rem;
}

.signup a:hover {
    text-decoration: underline #0497A0;
    color: #0497A0;
    cursor: pointer;
}

.separator {
    text-align: center;
    margin: 1rem 0;
    font-size: 0.875rem;
    color: rgb(172, 172, 172);
}

.separator span {
    display: inline-block;
    background-color: #1E1E1E;
    padding: 0 0.625rem;
}

.separator::before,
.separator::after {
    content: '';
    display: inline-block;
    width: 40%;
    height: 0.0625rem;
    background-color: #555555;
    vertical-align: middle;
    margin: 0 0.3125rem;
}

.guest-link {
    text-decoration: none;
}

.guest {
    display: block;
    width: 100%;
    background-color: #444444;
    padding: 0.75rem;
    text-align: center;
    color: #ccc;
    border: none;
    border-radius: 0.375rem;
    font-weight: 600;
}

.guest-link:hover .guest {
    background-color: #393838;
    text-decoration: none;
    cursor: pointer;
}

</style>`
  return signin
}
async function signUpData (err = '') {
  // let eMsg
  // console.log('Q:' + query)

  // await fetch('/signUp' + query, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //     eMsg = data.errorMsg
  //   })
  //   .catch(error => console.error('Error fetching data:', error))
  // console.log('E:' + eMsg)

  let signup = `<div class="form-container">
  <p class="title">Sign Up</p>
  <form>
    <div class="input-group">
      <label for="email">Email</label>
      <input type="email" name="email" placeholder="Example@anything.com" required>
    </div>
    <div class="input-group">
      <label for="username">Nickname</label>
      <input type="text" name="username" placeholder="Nickname" required>
    </div>
    <div class="input-group">
      <label for="first-name">First Name</label>
      <input type="text" name="first-name" placeholder="First Name" required>
    </div>
    <div class="input-group">
      <label for="last-name">Last Name</label>
      <input type="text" name="last-name" placeholder="Last Name" required>
    </div>
    <div class="input-group">
      <label for="age">Age</label>
      <input type="number" name="age" placeholder="Age" required>
    </div>
    <div class="input-group">
      <label for="gender">Gender</label>
      <select name="gender" required>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
    <div class="input-group">
      <label for="password">Password</label>
      <input type="password" name="password" placeholder="Password" required>
    </div>
    <div class="input-group">
      <label for="confirm password">Confirm Password</label>
      <input type="password" name="confirm password" placeholder="Confirm Password" required>
    </div>
    `
  if (err) {
    signup += `<div class="error-msg">
      ${err}
    </div>`
  }
  signup += `
    <div class="check">
      <input class="check-box" type="checkbox" name="conditions" required>
      <label>I agree to the Terms of Services and Privacy Policy</label>
    </div>
    <button type="button" onclick="makeAccount()" class="signup">Sign Up</button>
  </form>

  
  <p class="signin">Already have an account?
    <a onclick="updURL('/signIn', 'SignIn')">Sign In</a>
  </p>
</div>

<style>
  body {
    overflow: auto;
    background-color: #111111;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.form-container {
    width: 20rem;
    border-radius: 0.75rem;
    background-color: #1E1E1E;
    box-shadow: 0 0.3125rem 0.625rem rgba(0, 0, 0, 0.5), 0 0.4375rem 1.5rem rgba(0, 0, 0, 0.3); /* 0 5px 10px, 0 7px 24px */
    padding: 2rem;
    color: rgba(243, 244, 246, 1);
}

.title {
    text-align: center;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
}

.form {
    margin-top: 1.5rem;
}

.input-group {
    margin-top: 0.25rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
}

.input-group label {
    display: block;
    color: #BBBBBB;
    margin-bottom: 0.25rem;
    padding-top: 0.625rem;
}

.input-group input {
    width: 90%;
    border-radius: 0.375rem;
    border: 0.0625rem solid #808080;
    outline: 0;
    background-color: #2B2C2D;
    padding: 0.75rem 1rem;
    color: rgba(243, 244, 246, 1);
}

.input-group input:focus {
    border-color: #0497A0;
}

.signup {
    display: block;
    width: 100%;
    background-color: #BBBBBB;
    padding: 0.75rem;
    margin-top: 1rem;
    text-align: center;
    color: #2c2c2c;
    border: none;
    border-radius: 0.375rem;
    font-weight: 600;
}

.signup:hover {
    background-color: #a0a0a0;
    cursor: pointer;
}

.check {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.81rem;
    margin-bottom: 0.625rem;
}

.check input {
    margin-right: 0.4375rem;
    margin-bottom: 0.25rem;
}

.error-msg {
    color: #f87171;
    margin-top: 1rem;
    text-align: left;
    font-size: 0.75rem;
    padding: 0.5rem;
}

.signin {
    text-align: center;
    font-size: 0.9rem;
    line-height: 1rem;
    color: rgb(172, 172, 172);
    margin-top: 1rem;
}

.signin a {
    color: rgba(243, 244, 246, 1);
    text-decoration: none;
    font-size: 0.875rem;
}

.signin a:hover {
    text-decoration: underline #0497A0;
    color: #0497A0;
    cursor: pointer;
}
</style>`
  return signup
}

async function getPostInfo (inputPage) {
  // LoggedIn       bool                 `json:"LoggedIn"`
  // Title          string               `json:"Title"`
  // PgNum          int                  `json:"pgNum"`
  // Pages          int                  `json:"pg"`
  // Posts          []*sendPostsPageInfo `json:"posts"`

  let loggedIn
  let title
  let username
  let email
  let postTitle
  let postID
  let postMessage
  let postDate
  let category
  let commentArr
  let errorMessage
  let commentCount
  let usernameForNav
  let idForNav
  let postUpvote
  let postDownvote
  let pageNumber
  let pages
  let postArr

  // console.log(inputPage)

  await fetch(`/post/${inputPage}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => {
      // console.log(data)

      loggedIn = data.logged_in
      title = data.title
      username = data.username
      email = data.email
      postTitle = data.post_title
      postID = data.post_id
      postMessage = data.post_message
      postDate = data.post_date
      category = data.category
      commentArr = data.comment_arr // This should match the type []commentInfo in Go
      errorMessage = data.error_message
      commentCount = data.comment_count
      usernameForNav = data.username_for_nav
      idForNav = data.id_for_nav
      postUpvote = data.post_upvote
      postDownvote = data.post_downvote
      pageNumber = ++data.pgNum // Increment page number if needed
      pages = data.pg
      postArr = data.posts
    })
    .catch(error => console.error('Error fetching data:', error))

  // console.log(commentArr) // or any other variable you need to log
  let thegayyousif = `<div class="main-container">
  <!-- title stuff -->
  <div class="post-title-container">
    <div class="title-con">
      <svg
        id="hash"
        data-slot="icon"
        fill="none"
        stroke-width="2.5"
        stroke="#bbbbbb"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5"
        ></path>
      </svg>
      <h1 class="post-title">${postTitle}</h1>
    </div>
    <div class="post-info">
      <span class="material-symbols-outlined"> person </span>
      <div class="author">${username}</div>
      <span class="material-symbols-outlined"> schedule </span>
      <div class="post-date-created">${postDate}</div>
      <svg
        id="category-icon"
        data-slot="icon"
        data-darkreader-inline-stroke=""
        fill="none"
        stroke-width="1.5"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
        ></path>
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 6h.008v.008H6V6Z"
        ></path>
      </svg>
      <div class="category">${category}</div>
      <svg
        id="comment-icon"
        data-slot="icon"
        fill="none"
        stroke-width="1.5"
        stroke="#bbbbbb"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
        ></path>
      </svg>
      <div class="comment-count">${commentCount}</div>
    </div>
  </div>

  <!-- post stuff -->
  <div class="post-container">
    <div class="author-details">
      <div class="profile-picture">
        <img src="" alt="" />
      </div>
      <!-- <img class="profile-picture" src="" alt="" /> -->
      <div class="author1">${username}</div>
      <!-- <div class="email"> .Email </div> -->
    </div>
    <div class="post">
      <!-- <div class="post-header">
        <span id="post-date-icon" class="material-symbols-outlined">
          schedule
        </span>
        <svg class="date" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"></path>
        </svg>
        <div class="date-created"> .PostDate</div>
      </div> -->
      <div class="post-content-body">
        <pre class="message-main">${postMessage}</pre>
      </div>
      <div class="vote-container">
      `
  if (loggedIn) {
    thegayyousif += `<button onclick="likeSinglePost('${postID}')">
          <svg
            id="upvote-icon"
            data-slot="icon"
            fill="none"
            stroke-width="1.5"
            stroke="#bbbbbb"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            style="cursor: pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
            ></path>
          </svg>
        </button>
        <div id="count-like-${postID}" class="upvote-count">
          ${postUpvote}
        </div>

        <button onclick="dislikeSinglePost('${postID}')">
          <svg
            id="downvote-icon"
            data-slot="icon"
            fill="none"
            stroke-width="1.5"
            stroke="#bbbbbb"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            style="cursor: pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
            ></path>
          </svg>
        </button>`
  } else {
    thegayyousif += `           
    <svg
      id="upvote-icon"
      data-slot="icon"
      fill="none"
      stroke-width="1.5"
      stroke="#bbbbbb"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style="cursor: not-allowed"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
      ></path>
    </svg>
    <div id="count-like-${postID}" class="upvote-count">
      ${PostLike}
    </div>
    <svg
      id="downvote-icon"
      data-slot="icon"
      fill="none"
      stroke-width="1.5"
      stroke="#bbbbbb"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style="cursor: not-allowed"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
      ></path>
    </svg>
    `
  }
  thegayyousif += `<div id="count-dislike-${postID}" class="downvote-count">
          ${postDownvote}
        </div>
      </div>
    </div>
  </div>  
`

  commentArr.forEach(person => {
    thegayyousif += `<div class="comment-container">
    <div class="comment-author-details">
      <div class="profile-picture">
        <img src="" alt="" />
      </div>
      <!-- <img class="profile-picture" src="" alt="" /> -->
      <div class="author1">${person.Username}</div>
      <!-- <div class="email"> .Email </div> -->
    </div>
    <div class="comment">
      <div class="comment-header">
        <!-- <span id="comment-date-icon" class="material-symbols-outlined">
          schedule
        </span> -->
        <svg
          class="date"
          data-slot="icon"
          fill="none"
          stroke-width="1.5"
          stroke="#bbbbbb"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
          ></path>
        </svg>
        <div class="comment-date-created">${person.CreatedAt}</div>
      </div>
      <div class="content-body">
        <pre class="message-main">${person.Content}</pre>
      </div>
      <div class="interaction-container">
        <!-- <span id="like" class="material-symbols-outlined"> thumb_up </span> -->
        `
    if (loggedIn) {
      thegayyousif += `<button onclick="likeComment('${person.CommentID}')">
          <svg
            id="like-icon"
            data-slot="icon"
            fill="none"
            stroke-width="1.5"
            stroke="#bbbbbb"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            style="cursor: pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
            ></path>
          </svg>
        </button>
        <div id="comment-likes-${person.CommentID}" class="like-count">
          ${person.Like}
        </div>
        <button onclick="dislikeComment('${person.CommentID}')">
          <svg
            id="dislike-icon"
            data-slot="icon"
            fill="none"
            stroke-width="1.5"
            stroke="#bbbbbb"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            style="cursor: pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
            ></path>
          </svg>
        </button>`
    } else {
      thegayyousif += ` 
        <svg
          id="like-icon"
          data-slot="icon"
          fill="none"
          stroke-width="1.5"
          stroke="#bbbbbb"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style="cursor: not-allowed"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
          ></path>
        </svg>
        <div class="like-count">${person.Like}</div>

        <svg
          id="dislike-icon"
          data-slot="icon"
          fill="none"
          stroke-width="1.5"
          stroke="#bbbbbb"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style="cursor: not-allowed"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
          ></path>
        </svg>
        `
    }
    thegayyousif += `
        <div id="comment-dislikes-${person.CommentID}" class="dislike-count">
          ${person.Dislike}
        </div>
        <!-- <span id="dislike" class="material-symbols-outlined"> thumb_down </span> -->
      </div>
    </div>
    </div>
    `

    if (errorMessage) {
      thegayyousif += `<div class="error-message">${errorMessage}</div>`
    }
  })

  if (loggedIn) {
    thegayyousif += `<div class="comment-box-container">
    <form id="formComment" >
      <div class="reply-container">
        <textarea
          name="user-comment"
          class="reply-box"
          placeholder="Type your comment here..."
          required
        ></textarea>
        <button  id="addComm" type="button" onclick="addCommentFunc(${postID})"  class="submit">Submit</button>
      </div>
    </form>
  </div>`
  } else {
    thegayyousif += `<p id="message">
    Looks like you need
    <a href="/signIn" id="special-clearance">NASA clearance</a> just to land a
    comment here!
  </p>`
  }

  thegayyousif += `
</div>

<script src="../static/comments.js"> </script>
<style>
  body {
    background-color: #111111;
    margin: 0;
  }

  .main-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    box-sizing: border-box;
  }

  .post-title-container {
    display: flex;
    flex-direction: column;
    width: 90%;
    gap: 10px;
  }

  .post-title {
    font-size: 2rem;
    font-weight: 700;
    color: #ccc;
    margin: 1.5rem 0 1rem;
  }

  .title-con {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }

  #hash {
    margin-top: 25px;
    height: 30px;
    width: 30px;
  }

  .post-info {
    display: flex;
    color: #999999;
    align-items: center;
    gap: 0.7rem;
    font-size: 1rem;
  }

  .category {
    display: inline-block;
    background-color: #3a3b3bcd;
    padding: 7px;
    color: gray;
    border-radius: 5px;
    text-align: center;
  }

  .vote-container,
  .interaction-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.75rem;
    color: #999999;
    margin-top: 0.5rem;
  }

  .vote-container svg,
  .interaction-container svg {
    transition: transform 0.2s ease;
  }

  .vote-container svg:hover,
  .interaction-container svg:hover {
    transform: scale(1.2);
  }

  #comment-icon {
    width: 30px;
    height: 30px;
  }

  .date {
    height: 20px;
    width: 20px;
  }

  #category-icon,
  #upvote-icon,
  #downvote-icon,
  #like-icon,
  #dislike-icon {
    width: 30px;
    height: 30px;
    /* cursor: pointer; */
  }

  button {
    background-color: #1e1e1e;
    border: 2px solid #1e1e1e;
  }

  .post-container,
  .comment-container {
    display: flex;
    width: 90%;
    /* border: 3px solid gray; */
    box-shadow:
      0 0.3125rem 0.625rem rgba(0, 0, 0, 0.5),
      0 0.4375rem 1.5rem rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #1e1e1e;
    padding: 1rem;
    box-sizing: border-box;
    min-height: 300px;
  }

  .author-details,
  .comment-author-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    min-width: 20%;
    padding: 1rem;
    background-color: #2e2e2e;
    border-radius: 10px;
    color: #999999;
    font-size: 0.75rem;
  }

  .author1 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .profile-picture {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: gray;
  }

  .email {
    word-break: break-all;
  }

  .post,
  .comment {
    display: flex;
    flex-direction: column;
    color: white;
    padding: 1.5rem;
    gap: 1rem;
    justify-content: space-evenly;
    width: 100%;
    font-size: 1.5rem;
  }

  .comment-container {
    height: 300px;
  }

  .message-main {
    font-size: 1.2rem;
  }

  /* .post-content-body {
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    width: 1000px;
    overflow-y: auto;
    color: #808080;
    min-height: 200px;
  } */

  .content-body,
  .post-content-body {
    height: 200px;
    width: 60vw;
    overflow-y: auto;
    color: #808080;
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: #444 #2b2c2d;
  }

  *::-webkit-scrollbar {
    width: 0.9375rem;
  }

  *::-webkit-scrollbar-track {
    background: #2b2c2d;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #444;
    border-radius: 1.25rem;
    border: 0.1875rem solid #2b2c2d;
  }

  .post-date-created {
    font-size: 0.9rem;
    color: #999999;
  }

  .comment-header,
  .post-header {
    display: flex;
    border-bottom: 2px solid;
    color: #999999;
    gap: 0.5rem;
    padding: 10px;
  }

  .comment-date-created {
    margin-top: 4px;
    font-size: 0.9rem;
    color: #999999;
  }

  #comment-date-icon,
  #post-date-icon {
    /* padding: 10px; */
    font-size: 0.75rem;
    color: #999999;
  }

  .date-created {
    margin-top: 4px;
    font-size: 0.9rem;
    color: #999999;
  }

  .comment-box-container {
    width: 90%;
  }

  .reply-container {
    display: flex;
    flex-direction: column;
    /* border: 3px solid gray; */
    box-shadow:
      0 0.3125rem 0.625rem rgba(0, 0, 0, 0.5),
      0 0.4375rem 1.5rem rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #1e1e1e;
    margin-bottom: 1.5rem;
    align-items: center;
    padding: 1rem;
    box-sizing: border-box;
    min-height: 250px;
    justify-content: space-around;
  }

  .reply-box {
    width: 100%;
    height: 6rem;
    padding: 1rem;
    resize: none;
    background-color: #2b2c2d;
    border-radius: 10px;
    color: #f3f4f6;
    margin-top: 1rem;
    box-sizing: border-box;
    border: none;
  }

  .submit {
    background-color: #bbbbbb;
    padding: 0.75rem 1.5rem;
    /* padding: 0.75rem; */
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-align: center;
    color: #2c2c2c;
    font-weight: 600;
    border-radius: 30px;
    /* border: none; */
    cursor: pointer;
  }

  .submit:hover {
    background-color: #a0a0a0;
    /* padding: 0.75rem 1.5rem; */
    border-radius: 30px;
  }

  .error-message {
    color: #a44a4a;
    font-weight: bold;
    margin-bottom: 10px;
  }

  #message {
    color: gray;
    font-weight: bold;
    margin-bottom: 10px;
  }

  #special-clearance {
    color: #1a0dab;
    text-decoration: underline;
  }
</style>
`

  return thegayyousif
}
async function privateChat (to) {
  const recipient = to
  const chatHtml = `
    <style>
        #chat-section {
            min-height: 100dvh;
            background-color: #111111;
            color: white;
            padding: 20px;
        }

        #chat-window {
            background-color: #1e1e1e;
            border-radius: 5px;
            padding: 20px;
            height: 70vh;
            overflow-y: auto;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
        }

        #messages {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .message {
            background-color: #2b2c2d;
            padding: 10px;
            border-radius: 5px;
            position: relative;
        }

        .message-header {
            display: flex;
            justify-content: space-between;
            font-size: small;
            color: black;
        }

        .user-name {
            font-weight: bold;
        }

        .timestamp {
            color: #bbb;
        }

        .message-body {
            margin-top: 5px;
            color: #ddd;
        }

        #input-section {
            display: flex;
            margin-top: 20px;
        }

        #message-input {
            flex: 1;
            padding: 10px;
            border: none;
            border-radius: 5px;
            background-color: #1e1e1e;
            color: white;
            resize: none;
        }

        #send-button {
            padding: 10px 20px;
            margin-left: 10px;
            background-color: #1e1e1e;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        #send-button:hover {
            background-color: #555555;
        }

        /* Scrollbar styles */
        * {
            scrollbar-width: thin;
            scrollbar-color: #444 #2b2c2d;
        }

        *::-webkit-scrollbar {
            width: 0.9375rem;
        }

        *::-webkit-scrollbar-track {
            background: #2b2c2d;
        }

        *::-webkit-scrollbar-thumb {
            background-color: #444;
            border-radius: 1.25rem;
            border: 0.1875rem solid #2b2c2d;
        }

        h1 {
            font-size: 2.5rem;
            font-weight: bold;
            color: white;
            text-align: center;
            margin: 20px 0;
            line-height: 1.2;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-family: 'Arial', sans-serif;
        }

        .sender-message {
            background-color: grey;
            align-self: flex-end;
        }

        .receiver-message {
            background-color: #3b3c3d;
            align-self: flex-start;
        }

        #typing-writer {
    color: white;        
    font-size: 20px;    
    font-weight: bold;   
    display: inline;    
    margin-left: 50px;   
}
    </style>


<body>
    <div id="chat-section">
        <h1>Private Chat</h1>
        <img id="typing-gif" src="https://media.baamboozle.com/uploads/images/228242/1617734618_18622_gif-url.gif" alt="Chat GIF" style="width: 100px; display:none; top: 80px; position: absolute; height: auto; margin-left: 10px; vertical-align: middle;">
            <span id="typing-writer" style="display: none; margin-left: 5px;"></span>

        <div id="chat-window">
            <div id="messages"></div>
        </div>
        <div id="input-section">
            <textarea id="message-input" placeholder="Type your message..."></textarea>
            <button id="send-button">Send</button>
        </div>
    </div>
</body>`

  return chatHtml
}

const publicChat = `<head>
<title>Public Chat</title>
<style>
    body {
        margin: 0;
        font-family: Arial, sans-serif;
        background-color: #111111;
        color: white;
    }

    #chat-section {
        display: flex;
        min-height: 100vh;
        padding: 20px;
    }

    #chat-window {
        background-color: #1e1e1e;
        border-radius: 5px;
        padding: 20px;
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    #messages {
        flex: 1;
        overflow-y: auto;
        padding: 10px 0;
    }

    .message {
        background-color: #2b2c2d;
        padding: 10px;
        border-radius: 5px;
        position: relative;
        margin-bottom: 10px;
    }

    .message-header {
        display: flex;
        justify-content: space-between;
        font-size: small;
        color: gray;
    }

    .user-name {
        font-weight: bold;
        color: #111111;
    }

    .timestamp {
        color: #bbb;
    }

    .message-body {
        margin-top: 5px;
        color: #ddd;
    }

    #input-section {
        display: flex;
        margin-top: 10px;
    }

    #message-input {
        flex: 1;
        padding: 10px;
        border: none;
        border-radius: 5px;
        background-color: #444;
        color: white;
        resize: none;
    }

    #send-button {
        padding: 10px 20px;
        margin-left: 10px;
        background-color: #1e1e1e;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    #send-button:hover {
        background-color: #555555;
    }

    #online-users {
        background-color: #1e1e1e;
        border-radius: 5px;
        padding: 20px;
        margin-left: 20px;
        width: 250px;
        height: fit-content;
        overflow-y: auto;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
    }

    h1 {
        font-size: 2.5rem;
        font-weight: bold;
        color: white;
        text-align: center;
        margin: 20px 0;
        line-height: 1.2;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .sender-message {
        background-color: grey;
        align-self: flex-end; 
    }

    .receiver-message {
        background-color: #3b3c3d; 
        align-self: flex-start; 
    }

    /* Scrollbar styles */
    * {
        scrollbar-width: thin;
        scrollbar-color: #444 #2b2c2d;
    }

    *::-webkit-scrollbar {
        width: 0.9375rem;
    }

    *::-webkit-scrollbar-track {
        background: #2b2c2d;
    }

    *::-webkit-scrollbar-thumb {
        background-color: #444;
        border-radius: 1.25rem;
        border: 0.1875rem solid #2b2c2d;
    }
</style>
</head>
<body>
<div id="chat-section">
    <div id="chat-window">
        <h1>Public Chat</h1>
        <div id="messages"></div>
        <div id="input-section">
            <textarea id="message-input" placeholder="Type your message..."></textarea>
            <button id="send-button">Send</button>
        </div>
    </div>
    <div id="online-users">
        <h2>Online Users</h2>
        <ul id="user-list"></ul>
    </div>
</div>
`

const pgNotFound = `<div class="error">
<h1>Not Found - 404</h1>
<h2>The page you are looking for is not found</h2>
<br>
    <a onclick="updURL('/home', 'home')">
        Return to Home Page
    </a>
</div>


<style>
    * { 
    margin: 0; 
    padding: 0; 
    box-sizing: border-box; 
} 

body { 
    font-family: "Catamaran", sans-serif; 
    background-color: #111111;
    display: flex; 
    justify-content: center; 
    align-items: center; 
    height: 100vh; 
    padding: 0 10px; 
    overflow: hidden; 
} 

.error { 
    text-align: center; 
    background-color: #1e1e1e;
    padding: 4vw;
    border-radius: 1vw; 
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5), 0 7px 24px rgba(0, 0, 0, 0.3);
    max-width: 90vw; 
    width: 100%; 
    box-sizing: border-box; 
} 

h1 { 
    color: #bbbbbb; 
    font-size: 6vw; 
    margin-bottom: 2vw; 
} 

h2 { 
    color: #aaaaaa; 
    font-size: 4vw; 
    margin-bottom: 4vw; 
} 

a { 
    text-decoration: none; 
    background-color: #3b3b3b; 
    color: #cccccc; 
    padding: 1.5vw 3vw; 
    border-radius: 0.8vw; 
    font-weight: bold; 
    transition: background-color 0.3s ease; 
    font-size: 2vw;
    display: inline-block; 
} 

a:hover { 
    background-color: #464646; 
}
</style>`

const chatLists = `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Messaging</title>
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #111111;
            color: white;
        }

        #chat-section {
            display: flex;
            min-height: 100vh;
            padding: 20px;
        }

        #user-window {
            background-color: #1e1e1e;
            border-radius: 5px;
            padding: 20px;
            flex: 1;
            display: flex;
            flex-direction: column;
        }

        #online-users {
            background-color: #1e1e1e;
            border-radius: 5px;
            padding: 20px;
            margin-left: 20px;
            width: 250px;
            height: fit-content;
            overflow-y: auto;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
        }

        h1 {
            font-size: 2.5rem;
            font-weight: bold;
            color: white;
            text-align: center;
            margin: 20px 0;
            line-height: 1.2;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        h2 {
            font-size: 1.5rem;
            color: white;
            margin-bottom: 10px;
        }

        #user-list {
            list-style: none;
            padding: 0;
        }

        #user-list li {
            background-color: #2b2c2d;
            margin: 5px 0;
            padding: 10px;
            border-radius: 5px;
            cursor: pointer;
        }

        #user-list li:hover {
            background-color: #444;
        }

        #search-bar {
            padding: 10px;
            border: none;
            border-radius: 5px;
            background-color: #444;
            color: white;
            margin-bottom: 15px;
        }

        * {
            scrollbar-width: thin;
            scrollbar-color: #444 #2b2c2d;
        }

        *::-webkit-scrollbar {
            width: 0.9375rem;
        }

        *::-webkit-scrollbar-track {
            background: #2b2c2d;
        }

        *::-webkit-scrollbar-thumb {
            background-color: #444;
            border-radius: 1.25rem;
            border: 0.1875rem solid #2b2c2d;
        }
    </style>
</head>
<body>
    <div id="chat-section">
        <div id="user-window">
            <h1>User Messaging</h1>
            <h2>Your Recent Contacts</h2>
            <input type="text" id="search-bar" placeholder="Search users..." oninput="filterUsers()">
            <ul id="user-list"></ul>
        </div>
        <div id="online-users">
            <h2>Online Users</h2>
            <ul id="online-user-list"></ul>
        </div>
    </div>`;

    const badRequest = `<div class="error">
    <h1>Bad Request - 400</h1>
    <h2>Bad Request</h2>
    <br>
        <a onclick="updURL('/home', 'home')">
            Return to Home Page
        </a>
    </div>
    
    
    <style>
        * { 
        margin: 0; 
        padding: 0; 
        box-sizing: border-box; 
    } 
    
    body { 
        font-family: "Catamaran", sans-serif; 
        background-color: #111111;
        display: flex; 
        justify-content: center; 
        align-items: center; 
        height: 100vh; 
        padding: 0 10px; 
        overflow: hidden; 
    } 
    
    .error { 
        text-align: center; 
        background-color: #1e1e1e;
        padding: 4vw;
        border-radius: 1vw; 
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5), 0 7px 24px rgba(0, 0, 0, 0.3);
        max-width: 90vw; 
        width: 100%; 
        box-sizing: border-box; 
    } 
    
    h1 { 
        color: #bbbbbb; 
        font-size: 6vw; 
        margin-bottom: 2vw; 
    } 
    
    h2 { 
        color: #aaaaaa; 
        font-size: 4vw; 
        margin-bottom: 4vw; 
    } 
    
    a { 
        text-decoration: none; 
        background-color: #3b3b3b; 
        color: #cccccc; 
        padding: 1.5vw 3vw; 
        border-radius: 0.8vw; 
        font-weight: bold; 
        transition: background-color 0.3s ease; 
        font-size: 2vw;
        display: inline-block; 
    } 
    
    a:hover { 
        background-color: #464646; 
    }
    </style>`

export {
  pgNotFound,
  createPost,
  signInData,
  signUpData,
  getNavInfo,
  footer,
  publicChat,
  returnHome,
  getProfile,
  getPostsInfo,
  getPostInfo,
  privateChat,
  chatLists,
  badRequest
}
