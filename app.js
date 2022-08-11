// Psuedocode

// Selecting first card starts game 
// How to flip cards? (opacity function or transform 3d effect?)
// Possible issues(double click, clicking more than 2 cards)
// Need a way to track matches and keep photo showing 
// Need a way to show its not a match and flip back over 
// A timer that starts on first click and logs time when completed
// Game finishes after last match is made 
// How to shuffle? (can I userandom number generator?)
// Will add sounds when there is match and on game end


// 3D click  n flip
let countClicks = 0;
const cards = document.querySelectorAll('.memory-card');
// const singleCard = document.querySelectorAll('*[id]');
// console.log(singleCard)
const timerDisplay = document.querySelector('.stop-watch');
let seconds = 0;
let interval  = null;
let firstCard, secondCard

function flipCard() {
    let match  = false;
   if (countClicks === 0) {
    timer();
    startTimer()
    playSoundGo()
   }

   if (this.className === "memory-card"){
    this.className=("memory-card_flip");
    countClicks +=1
}
//  below will allow cards to be fliped back over. Use just for testing 
// else if(this.className === "memory-card_flip") {
// this.className=("memory-card");}

   if(countClicks % 2 == 0  && countClicks != 0) {
    // matchfunction 
    secondCard = this.id;
    console.log(secondCard)
    
   } else {
    firstCard = this.id;
    console.log(firstCard)
   }

   if (firstCard === secondCard && countClicks <3 && countClicks >1) {
//  match!!
    match = true;
     console.log('match')
    firstCard= '';
    secondCard= '';
    countClicks= 0;
   } 
  else if (firstCard !== secondCard && countClicks <3 && countClicks >1) {
    console.log('Not a  match')
    firstCard= '';
    secondCard= '';
    countClicks= 0;
    
  }
//  console.log(countClicks)
//  console.log(firstCard)
//  console.log(secondCard)
//  console.log(match)
}
cards.forEach(card => card.addEventListener('click', flipCard, {once: true}));

// Shuffle
// Found online. Not working 
// function shuffle() {
//     var container = document.getElementsByClassName("memory-card");
//     var elementsArray = Array.prototype.slice.call(container.getElementsByClassName('memory-card'));
//       elementsArray.forEach(function(element){
//       container.removeChild(element);
//     })
//     shuffleArray(elementsArray);
//     elementsArray.forEach(function(element){
//     container.appendChild(element);
//   })
//   }
  
//   function shuffleArray(array) {
//       for (var i = array.length - 1; i > 0; i--) {
//           var j = Math.floor(Math.random() * (i + 1));
//           var temp = array[i];
//           array[i] = array[j];
//           array[j] = temp;
//       }
//       return array;
//   }





// Timer

function timer() {
    seconds++;

    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let secs = seconds % 60;
    if (secs < 10) secs = '0' + secs;
    if (mins< 10) mins = '0' + mins;
    
    timerDisplay.innerText = `${mins}:${secs}`;
}

function startTimer() {
    if(interval) {
        return
    }
    interval = setInterval(timer, 1000);
}

function stopTimer() {
    clearInterval(interval);
    interval = null;
}

function playSoundGo() {
    const congrats = document.getElementById("letsaGo");
    letsaGo.play();
}
function playSoundCongrats() {
    const congrats = document.getElementById("congrats");
    congrats.play();
}



// Game Ends

// function youWin() {
//     if (document.querySelectorAll(".memory-card_flip").length === 8) {
//         endfGame()
//         playSoundCongrats()
//     }
// }

// function endOfGame() {
    // push value  to ul before  clearing 
//     stopTimer();
//     seconds = 0;
//     timerDisplay.innerText = '00:00';
// }


//  console.log(cards[9].id);

