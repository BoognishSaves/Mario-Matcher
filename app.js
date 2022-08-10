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
const timerDisplay = document.querySelector('.stop-watch');
let seconds = 0;
let interval  = null;

function flipCard() {
   if (countClicks === 0) {
    timer();
    startTimer()
    playSoundGo()
   }
   if (this.className === "memory-card"){
    this.className=("memory-card_flip");
    countClicks +=1
   
   //  call firstCard function here? firstCard()
//    } else if(this.className === "memory-card_flip") {
//     this.className=("memory-card");
   }
}
cards.forEach(card => card.addEventListener('click', flipCard));

// Matching

// const doesItMatch = document.querySelectorAll('.memory-card_flip');
// console.log(doesItMatch)
// doesItMatch.forEach()




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



// Game Ends

// function endOfGame() {
//     stopTimer();
//     seconds = 0;
//     timerDisplay.innerText = '00:00';
// }


 // console.log(cards[9].id);

// cards.addEventListener('click', clicked)
