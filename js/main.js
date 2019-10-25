/*----- constants -----*/
const playerOne = "x"
const playerTwo = "o"




/*----- app's state (variables) -----*/

let playerOneMvs, playerTwoMvs, allMvs, btnArr




/*----- cached element references -----*/






/*----- event listeners -----*/

document.getElementById('board').addEventListener('click', handleBoxClick);











/*----- functions -----*/
init();

 
function handleBoxClick(evt) {
    if( allMvs.length % 2 === 0){
        evt.target.textContent = playerOne
        allMvs.push(playerOne)
        playerOneMvs.push(playerOne)
    } else if ( allMvs.length % 2 === 1 ) {
        evt.target.textContent = playerTwo
        allMvs.push(playerTwo)
        playerTwoMvs.push(playerTwo)
    }
};

function init() {
    allMvs =[]
    playerOneMvs = []
    playerTwoMvs = []
    btnArr = []
};