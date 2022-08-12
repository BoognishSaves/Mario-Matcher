# John Paul Haddad SEI-Project 1- Memory Card 

## Game Description:
### The game of Memory, also  known as Concentration, was published in today's form by Ravensburger in 1959. The rules require the player to find a matching word, picture, or card from cards placed face down. If the cards they flip over don't match, then they must place them back and commit their location to memory. My modernized version of the game pays homage to the popular Mario Brothers video game with its theme. You are competeting against yourself to beat your best time.

## Game Pictures:

![Gameboardoverview](https://user-images.githubusercontent.com/100719674/184262937-aa42de93-ed3c-4d11-8a40-2491e7f62e8e.png)
### Shown above is the gameboard in its starting position. The timer starts when the player flips the first card. This is also accompanied by an enthusiastic "Let'sa Go!!" from Mario himself.

![First card starts timer](https://user-images.githubusercontent.com/100719674/184263201-facdc71d-45d2-4c70-9f67-261451654cf2.png)
### The first card has been flipped and the game has begun. The player must flip a second card to find the match.

![No match flips back](https://user-images.githubusercontent.com/100719674/184263448-d1a57345-2197-441f-8843-d978b7489206.png)
### If the second card selected is not a match, the cards return to their original position. Note that the timer continues to run.


![Matching cards](https://user-images.githubusercontent.com/100719674/184263543-ab6c363d-7b00-4b57-8f21-3c03b1751fc8.png)
### When the player finds a match, the card faces remain face-up. This ensures the player can reference their small victory as they struggle to find another matching pair.

![allmatchesmade](https://user-images.githubusercontent.com/100719674/184263780-b1be034d-e198-4559-a284-9561509ce385.png)
### Once the player has located all the matching pairs, the timer stops, 'Congratulations!!!!' appears, and Mario says "Congratulations!". This is the end of the game.

![Timer Resets](https://user-images.githubusercontent.com/100719674/184263967-5f06d5d1-67ea-4415-a321-599876621023.png)
### After 10 seconds the timer reverts to the start and the message disappears.

## Technology Used:
### HTML was used to structure the gameboard and cards. Each card being assigned a front and back photo. Additionally, this is where the sounds were stored for later reference.
### CSS styled the HTML elements and added the 3D card flipping animation. I was able to find the font used in the Super Mario Brothers game. 
### JavaScript was the key to the functionality. It controlled the flipping cards based upon 'clicks' that triggered DOM elements. 'if' statements were used to determine the first and second cards and determine if they matche![splitandjoinfun](https://user-images.githubusercontent.com/100719674/184265274-c4bccab8-9e9d-4f04-a966-7285aa5f50a9.png)
d. A 'for' loop was used to deteremine mismatches and return the cards to their original state.

## Challenging Code:
<img width="641" alt="HTML Setup" src="https://user-images.githubusercontent.com/100719674/184264829-097d0c80-3138-4fa7-867a-0f87d585c8bb.png">
### The HTML was set up initially with ID's to designate card faces. Isolating these became particularly challenging especially when it came to mismatches. I ended up using a split() method to divide them and place them in to an array. This allowed me to convert one of the classes to aid in the flipping of the cards. Then I used the join() method to return them to a string.
![Uploading splitandjoinfun.png…]()

![IsMatch?](https://user-images.githubusercontent.com/100719674/184265352-6395097e-4279-4d83-9fff-739e7d09ba8e.png)

## Link to Game

https://boognishsaves.github.io/Matching-Game-/

## Next Steps:

### There is a lot I have planned to ensure this game is the best matching game there has ever been. I'd like to have the cards flip over and shuffle at the end of each game. Additionally, I would like to push the players finishing time to the unordered list to the right. Overall, this build was challenging and helped me to understand programming, how to be comfortable being uncomfortable, and to utilize my resources. Our player may find hours of joy when playing this match game. Personally, I found it in the journey. Enjoy!!!!


