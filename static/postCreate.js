 createPage = document.getElementById('create')
 cats = document.getElementsByClassName('check')
 addButt = document.getElementById('add-post-butt')
 remButt = document.getElementById('exit-button')
 title = document.getElementById('title-id')
 body = document.getElementById('body-id')
 submit = document.getElementById('submit')
 titleData = ''
 bodyData = ''

function hide () {
  createPage.classList.remove('hide')
  addButt.classList.add('hide')
  remButt.classList.remove('hide')
}
function appear () {
  createPage.classList.add('hide')
  addButt.classList.remove('hide')
  remButt.classList.add('hide')
}

addButt.addEventListener('click', hide)
remButt.addEventListener('click', appear)

title.addEventListener('input', e => {
  titleData = e.target.value
  if (
    titleData.trim().length != 0 &&
    bodyData.trim().length != 0 &&
    titleData.length <= 30 &&
    checkboxes()
  ) {
    submit.style.opacity = 1
    submit.disabled = false
  } else {
    submit.style.opacity = 0.7
    submit.disabled = true
  }
})
body.addEventListener('input', e => {
  bodyData = e.target.value
  if (
    titleData.trim().length != 0 &&
    bodyData.trim().length != 0 &&
    titleData.length <= 30 &&
    checkboxes()
  ) {
    submit.style.opacity = 1
    submit.disabled = false
  } else {
    submit.style.opacity = 0.7
    submit.disabled = true
  }
})

function checkboxes () {
  let flag = false
  Array.from(cats).forEach(function (element) {
    if (element.checked) {
      // console.log(12)
      flag = true
    }
  })

  return flag
}

Array.from(cats).forEach(function (element) {
  element.addEventListener('change', function () {
    if (
      checkboxes() &&
      titleData.trim().length != 0 &&
      bodyData.trim().length != 0 &&
      titleData.length <= 30
    ) {
      submit.style.opacity = 1
      submit.disabled = false
    } else {
      submit.style.opacity = 0.7
      submit.disabled = true
    }
  })
})

