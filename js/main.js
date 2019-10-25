/*----- constants -----*/
const playerOne = "x"
const playerTwo = "o"




/*----- app's state (variables) -----*/

let playerOneMvs, playerTwoMvs, allMvs




/*----- cached element references -----*/






/*----- event listeners -----*/

document.getElementById('board').addEventListener('click', handleBoxClick);











/*----- functions -----*/

 
function handleBoxClick(evt) {
    evt.target.textContent = playerOne
    console.log('box was clicked')
}

function init() {
    allMvs =[]
};