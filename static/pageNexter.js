// let noPages
// let currentpage
// let prevButton
// let nextButton

noPages = Number(document.getElementById('pages').innerText)
currentpage = Number(document.getElementById('page-number').innerText)
prevButton = document.getElementById('prev-page')
nextButton = document.getElementById('next-page')
// console.log('no pages', noPages)
// console.log('current page', currentpage)

if (noPages === 1) {
  prevButton.style.opacity = 0.7
  nextButton.style.opacity = 0.7
  prevButton.disabled = true
  nextButton.disabled = true
} else if (currentpage === 1) {
  prevButton.style.opacity = 0.7
  prevButton.disabled = true
} else if (currentpage === noPages) {
  nextButton.style.opacity = 0.7
  nextButton.disabled = true
}

catMap = {
  1: 'sport',
  2: 'general',
  3: 'technology',
  4: 'entertainment',
  5: 'health',
  6: 'business',
  7: 'science',
  8: 'education',
  9: 'travel'
}

applyFilter = document.getElementById('filter-button')
current = 'http://localhost:8080/posts/1'
// http://localhost:8080/temp3/1?Category=2&Category=4&Category=6&Category=8
applyFilter.addEventListener('click', function () {
  // console.log('Button clicked!')
  categories = []
  checkboxes = document.querySelectorAll('input[type="checkbox"]:checked')
  checkboxes.forEach(checkbox => {
    // console.log(`Category "${catMap[checkbox.value]}" is selected.`)
    categories.push(checkbox.value)
  })
  currentURL = current + '?'

  if (categories) {
    categories.forEach(cat => {
      currentURL += `Category=${cat}&`
    })
    currentURL = currentURL.slice(0, currentURL.length - 1)
    // console.log(currentURL)

    updURL(currentURL, 'Filtered Categories')
  }
})

window.next = function () {
  check = window.location.href
  added = ''
  if (check.length > 32) {
    if (currentpage >= 10) {
      added = check.slice(30)
    } else {
      added = check.slice(29)
    }
  }
  // console.log(added)

  currentpage++
  updURL(`/posts/${currentpage}${added}`, 'Post')
  // window.location.href = `/posts/${currentpage}${added}`
}
window.prev = function () {
  check = window.location.href
  added = ''
  if (check.length > 32) {
    if (currentpage >= 10) {
      added = check.slice(30)
    } else {
      added = check.slice(29)
    }
  }
  // console.log(added)

  currentpage--
  updURL(`/posts/${currentpage}${added}`, 'Post')

  // window.location.href = `/posts/${currentpage}${added}`
}

nextButton.addEventListener('click', window.next)
prevButton.addEventListener('click', window.prev)
