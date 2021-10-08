let playBoard = ["", "", "", "", "", "", "", "", ""];

//touch even listner that connects to a block
const playArea = document.getElementById("play-area");
let turn = 0;

playArea.addEventListener('click', (event) => {
    let char = turn % 2 == 0 ? "X" : "O";

    //know what block it is in
    console.log(event.target.id);

    document.getElementById(event.target.id).innerHTML = char;
    let index = event.target.getAttribute('data-index');
    playBoard[index] = char;
    console.log(playBoard);
    turn++;


});

//reset
function resetBoard() {
    for (let i = 0; i < 9; i++) {
        document.getElementById(`block_${i}`).innerHTML = '';
    }
}

const PLAYER_ONE = "X"
const PLAYER_TWO = "O"
const PLAYER_NONE = ""
const board = Array(9).fill(PLAYER_NONE)
// function arrayEquals(a, b) {
//     return a.every((aAtIndex, index) => aAtIndex == b[index]) // Double equal sign is important here! We're comparing booleans and strings
// }

//game logic
function gameWon() {
    const winningPositions = [
        [1, 1, 1, 0, 0, 0, 0, 0, 0], // rows
        [0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 0, 0, 1, 0, 0, 1, 0, 0], // columns
        [0, 1, 0, 0, 1, 0, 0, 1, 0],
        [0, 0, 1, 0, 0, 1, 0, 0, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 1], // diagonals
        [0, 0, 1, 0, 1, 0, 1, 0, 0],
    ]
    const justPlayerOne = board.map((value) => value === PLAYER_ONE)
    const justPlayerTwo = board.map((value) => value === PLAYER_TWO)
    // Check for player one win
    const playerOneWins = winningPositions
        .map(winningPosition => {
            return winningPosition.reduce((acc, value, index) => acc + (value && justPlayerOne[index]), 0) === 3
        })
        .some(value => value) // If any are true, return true
    // Check for player two win
    const playerTwoWins = winningPositions
        .map(winningPosition => {
            return winningPosition.reduce((acc, value, index) => acc + (value && justPlayerTwo[index]), 0) === 3
        })
        .some(value => value) // If any are true, return true
}