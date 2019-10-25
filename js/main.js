/*----- constants -----*/
const playerOne = "x"
const playerTwo = "o"




/*----- app's state (variables) -----*/

let playerOneMvs, playerTwoMvs, allMvs, btnArr




/*----- cached element references -----*/
//  btnArr =[document.getElementById('1').textContent,document.getElementById('2').textContent
// ]
const tilesTextContent = Array.from(document.querySelectorAll('.tiles')).map(item => item.textContent)

// .map(tile => tile.textContent)
console.log(tilesTextContent)
tilesTextContent

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
    btnArr
};