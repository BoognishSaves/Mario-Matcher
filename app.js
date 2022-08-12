let countClicks = 0;
const cards = document.querySelectorAll('.memory-card');
// const singleCard = document.querySelectorAll('*[id]');
// console.log(singleCard)
const timerDisplay = document.querySelector('.stop-watch');
let seconds = 0;
let interval  = null;
let firstCard, secondCard
let noMatch = []
let congratsMessage = document.getElementById('victory');

function flipCard() {
   if (countClicks === 0) {
    timer();
    startTimer()
    playSoundGo()
   }

   if (this.className.includes("memory-card")){
    const classArr = this.className.split(' ')
    // console.log("This should be an arr: ", classArr)
    classArr[this.className.indexOf('memory-card')] = "memory-card_flip"
    // console.log("This should say memory-card_flip: ", classArr)
    //Join back to string
    const classStr = classArr.join(' ')
    // console.log("This converts back to string: ", classStr)
    //Update DOM so CSS animation works
    this.className = classStr
    countClicks +=1
    }
    // below will allow cards to be flipped back over.

   if(countClicks % 2 == 0  && countClicks != 0) {
    //matchfunction 
    secondCard = this.className;
    console.log(secondCard)
   } else {
    firstCard = this.className;
    console.log(firstCard)
   }

   if (firstCard === secondCard && countClicks <3 && countClicks >1) {
    //match!!
    match = true;
    console.log('match')
    firstCard= '';
    secondCard= '';
    countClicks= 0;
   } 
   else if (firstCard !== secondCard && countClicks === 2) {
    // console.log("Does this make it here and if so what value does it have: ", this.className)
    //No match
    console.log('Not a match')
    noMatch.push(firstCard, secondCard);
    // console.log("Here are the classes of the 2 cards that don't match: ", noMatch[0], noMatch[1])
    //Grab second class of first card to flip later
    let secondClass = noMatch[0].split(' ')[1]
    for (let i = 0; i < noMatch.length; i++) {
        setTimeout( () => {
            const classArr = noMatch[i].split(' ')
            classArr[0] = "memory-card"
            // console.log("This arr should have memory-card: ", classArr)
            //Join back to string. ' ': After each word put a space
            const classStr = classArr.join(' ')
            //Update current 'this' object class via DOM
            this.className = classStr
        },1000)
    }
    // console.log(noMatch)
    firstCard= '';
    secondCard= '';
    countClicks= 0;
    setTimeout(() => {
        noMatch = []
        //Check for any memory-card_flip class in DOM and update. Should only work on the first 'this' object that is no longer accessible
        const toFlip = document.querySelector(`.memory-card_flip.${secondClass}`)
        //Update className
        toFlip.className = `memory-card ${secondClass}`
    }, 3000)
    }
    if (document.querySelectorAll(".memory-card_flip").length === 16) {
                endOfGame()
                playSoundCongrats()
                
            }
}

cards.forEach(card => card.addEventListener('click', flipCard));


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
    congratsMessage.innerText = "Congratulations!!!!"
}

// Game Ends

function endOfGame() {
    // push value  to ul before  clearing 
    
    stopTimer();
    seconds = 0;

    setTimeout(() => {
        timerDisplay.innerText = '00:00';
        congratsMessage.innerText = " "
    },  10000)
   


}


