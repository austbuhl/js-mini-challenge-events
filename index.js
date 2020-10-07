/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/

const header = document.querySelector("h1#header")

header.addEventListener("click", function(e){
  toggleColor(e.target)
})

function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}


/***** Deliverable 2 *****/

const newPlayerForm = document.querySelector('#new-player-form')

newPlayerForm.addEventListener("submit", function(e){
  e.preventDefault()
  const form = e.target
  
  newPlayer = {
    number: form.number.value,
    name: form.name.value,
    nickname: form.nickname.value,
    photo: form.photo.value,
    likes: 0
  }
  form.reset()
  renderPlayer(newPlayer)
})

// need to build an object like this
// {
//   number: 11,
//   name: "Mo Salah",
//   nickname: "The Egyptian King",
//   photo: "https://cdn.cnn.com/cnnnext/dam/assets/190501145802-mo-salah-exlarge-169.jpg",
//   likes: 1000
// },

/***** Deliverable 3 *****/

function addLikes() {
  document.addEventListener("click", function(e){
    if(e.target.matches('.like-button')){
        const player = e.target.parentElement
        const likes = player.querySelector('.likes')
        const currentLikes = parseInt(likes.textContent)
        const newLikes = currentLikes + 1
        
        likes.textContent = newLikes + " likes"
    }
  })
}

// why do I have to invoke this?
addLikes()