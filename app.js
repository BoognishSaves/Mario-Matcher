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
const cards = document.querySelectorAll('.memory-card');
console.log(cards)

function flipCard() {
   if (this.className === "memory-card"){
    this.className=("memory-card_flip");
   //  call firstCard function here? firstCard()
   } else if(this.className === "memory-card_flip") {
    this.className=("memory-card");
   }
}
cards.forEach(card => card.addEventListener('click', flipCard));

// Set first card

// function firstCard() {
//     if (this.)
// }
