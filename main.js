// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heartButtons = document.querySelectorAll(".like-glyph")
for (const heartButton of heartButtons) {
  console.log(heartButton.textContent)
  heartButton.addEventListener("click", function (e) {
    mimicServerCall().then(() => {
      if (heartButton.textContent === EMPTY_HEART) {
        heartButton.textContent = FULL_HEART
        heartButton.className = "activated-heart"
      }
      else if(heartButton.textContent === FULL_HEART){
        heartButton.textContent = EMPTY_HEART
        heartButton.className = ""
      }
    }).catch(()=> {
      errorMessage = document.querySelector("#modal h2")
      errorMessage.className = ""
      setTimeout(()=>errorMessage.className = "hidden", 3000)
    })
  })
}






//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
