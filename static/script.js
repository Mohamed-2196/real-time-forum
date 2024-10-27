import * as page from '../static/pages.js'
import { bigMama, bossBaby, smallDada } from './message.js'

let whereami = window.location.href
// console.log(whereami)
let nav
let content
let footer
let createPostDiv
let activeScript = false
let activeScript2 = false
let activeScript3 = false
let activeScript4 = false
let err = false
window.updURL = function (URL, title, arg = '') {
  window.history.replaceState({}, title, URL)
  // console.log(window.location.href)
  updatePage(arg)

  if (title === 'Category') {
    // console.log('Trigger')
  }
}

let url = window.location.href
const params = new URLSearchParams(url.search)

// function updURL (URL, title) {
//   window.history.replaceState({}, title, URL)
// }

// addEventListener('click', updURL)

async function updatePage (arg = '') {
  let uData = await getCurrentUser()
  let username = uData[0]
  let logged = uData[1]

  let ppNum = getPostsPageNo()
  // console.log(logged)

  if (!logged) {
    let bismillah
    content = document.createElement('div')
    if (window.location.href === 'http://localhost:8080/signUp') {
      bismillah = await page.signUpData(arg)
    } else {
      bismillah = await page.signInData(arg)
    }
    content.innerHTML = bismillah
    // if(window.location.href === 'http://localhost:8080/signUpTemp') {

    // }

    document.body.innerHTML = ``
    document.body.appendChild(content)
  } else {
    if (window.location.href === 'http://localhost:8080/logout') {
      await fetch(`/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }).catch(error => console.error('Error fetching data:', error))

      updURL('/signIn', 'SignIN')
      return
    }

    nav = document.createElement('div')
    footer = document.createElement('div')
    content = document.createElement('div')
    createPostDiv = document.createElement('div')
    createPostDiv.innerHTML = page.createPost

    let bismillah1 = await page.getNavInfo()

    nav.innerHTML = bismillah1
    footer.innerHTML = page.footer
    if (window.location.href === 'http://localhost:8080/home' || window.location.href === 'http://localhost:8080/') {
      let bismillah2 = await page.returnHome()
      content.innerHTML = bismillah2
    } else if (
      window.location.href === `http://localhost:8080/profile/${ppNum}`
    ) {
      let bismillah3 = await page.getProfile(ppNum)
      content.innerHTML = bismillah3
    } else if (
      window.location.href === `http://localhost:8080/posts/${ppNum}`
    ) {
      activeScript = true
      let bismillah4 = await page.getPostsInfo(ppNum)
      content.innerHTML = bismillah4
    } else if (window.location.href === `http://localhost:8080/post/${ppNum}`) {
      // activeScript2 = true
      let bismillah5 = await page.getPostInfo(ppNum)
      content.innerHTML = bismillah5
    } else if (
      url.includes(`http://localhost:8080/posts/${ppNum}`) &&
      params.has('Category')
    ) {
      activeScript = true
      let bismillah4 = await page.getPostsInfo(ppNum)
      content.innerHTML = bismillah4
    } else if (window.location.href === `http://localhost:8080/Chat/${ppNum}`) {
      let bismillah6
      if (ppNum === username) {
        bismillah6 = page.badRequest
        err = true
      } else {
        bismillah6 = await page.privateChat(ppNum)
        activeScript2 = true
      }
      content.innerHTML = bismillah6
    } else if (window.location.href === `http://localhost:8080/publicChat`) {
      let bismillah7 = page.publicChat
      activeScript3 = true
      content.innerHTML = bismillah7
    } else if (window.location.href === `http://localhost:8080/chatlist`) {
      let bismillah9 = page.chatLists
      activeScript4 = true
      content.innerHTML = bismillah9
    } else {
      let bismillah8 = page.pgNotFound
      content.innerHTML = bismillah8
      err = true
    }
    document.body.innerHTML = ``
    if (!err) {
      document.body.appendChild(nav)
      document.body.appendChild(content)
      document.body.appendChild(footer)
      document.body.appendChild(createPostDiv)
    } else {
      err = false
      document.body.appendChild(content)
    }
    if (activeScript) {
      activeScript = false
      const scriptElement = document.createElement('script')
      scriptElement.src = '../static/pageNexter.js'
      document.body.appendChild(scriptElement)
    } else if (activeScript2) {
      activeScript2 = false
      let script = document.createElement('script')
      script.innerHTML = bigMama(ppNum)
      document.body.appendChild(script)
    } else if (activeScript3) {
      activeScript3 = false
      let script2 = document.createElement('script')
      let temp = bossBaby()
      script2.innerHTML = temp
      document.body.appendChild(script2)
    } else if (activeScript4) {
      activeScript4 = false
      let script3 = document.createElement('script')
      script3.innerHTML = smallDada()
      document.body.appendChild(script3)
    }

    const scriptElement = document.createElement('script')
    scriptElement.src = '../static/postCreate.js'
    document.body.appendChild(scriptElement)
    const scriptElement2 = document.createElement('script')
    scriptElement2.src = '../static/notification.js'
    document.body.appendChild(scriptElement2)
  }
}


updatePage()

function getPostsPageNo () {
  let arr = window.location.href.split('/')
  return arr[arr.length - 1]
}

async function getCurrentUser () {
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
  return [username, loggedIn]
}

window.addCommentFunc = async function (pid) {
  const form = document.getElementById('formComment')
  const comment = form.elements['user-comment'].value
  const commentADJ = comment.replace(/ /g, '+')

  // console.log(`localhost:8080/temp5/${pid}?user-comment=` + commentADJ)

  await fetch(`/postComment/${pid}?user-comment=` + commentADJ, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }).catch(error => console.error('Error fetching data:', error))

  updURL(`/post/${pid}`, 'Profile')
}

window.addPost = async function () {
  const postTitle = document.getElementById('title-id').value
  const postBody = document.getElementById('body-id').value
  const postBodyADJ = postBody.replace(/ /g, '+')
  const postCategories = Array.from(
    document.querySelectorAll('input[name="Category"]:checked')
  ).map(checkbox => checkbox.value)

  let currentURL = ''
  currentURL += '?post-title=' + postTitle
  currentURL += '&body=' + postBodyADJ
  postCategories.forEach(cat => {
    currentURL += `&Category=${cat}`
  })

  let idNumber

  await fetch(`/createPost${currentURL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => {
      idNumber = data.ID
      // console.log(data)
    })
    .catch(error => console.error('Error fetching data:', error))

  updURL(`/post/${idNumber}`, 'Post')
}
// http://localhost:8080/temp?email=abc%40abc.com&username=abc&password=123123123&confirm+password=123123123&conditions=on
window.makeAccount = async function () {
  const email = document.querySelector('input[name="email"]').value
  const username = document.querySelector('input[name="username"]').value
  const password = document.querySelector('input[name="password"]').value
  const firstName = document.querySelector('input[name="first-name"]').value
  const lastName = document.querySelector('input[name="last-name"]').value
  const age = document.querySelector('input[name="age"]').value
  const gender = document.querySelector('select[name="gender"]').value
  const confirmPassword = document.querySelector(
    'input[name="confirm password"]'
  ).value
  const agreeToTerms = document.querySelector(
    'input[name="conditions"]'
  ).checked
  let bool = agreeToTerms ? 'on' : 'off'

  let arg = `?email=${email}&username=${username}&first-name=${firstName}&last-name=${lastName}&age=${age}&gender=${gender}&password=${password}&confirm+password=${confirmPassword}&conditions=${bool}`
  // console.log(arg)

  let eMsg
  await fetch('/signUp' + arg, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      eMsg = data.errorMsg
    })
    .catch(error => console.error('Error fetching data:', error))
  // console.log('E:' + eMsg)
  if (eMsg) {
    updURL(`/signUp`, 'Sign Up', eMsg)
  } else {
    updURL(`/home`, 'Home')
  }
}

window.logAccount = async function () {
  const emailOrUsername = document.querySelector('input[name="input"]').value
  const password = document.querySelector('input[name="password"]').value
  // const emailOrUsername = document.getElementById('input').value
  // const password = document.getElementById('password').value
  let arg = `?input=${emailOrUsername}&password=${password}`
  let eMsg
  await fetch('/signIn' + arg, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      eMsg = data.errorMsg
    })
    .catch(error => console.error('Error fetching data:', error))
  // console.log('E:' + eMsg)
  if (eMsg) {
    updURL(`/signIn`, 'Sign Up', eMsg)
  } else {
    updURL(`/home`, 'Home')
  }
}
