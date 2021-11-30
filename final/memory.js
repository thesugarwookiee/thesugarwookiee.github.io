//make the board
function generateHTMLForBoardSquares() {
    const numberOfSquares = 16;
    let squaresHTML = '';

    // make the board with a loop
    for (let i = 0; i < numberOfSquares; i++) {
        squaresHTML +=

            '<div class="square">\n' +
            '<div class="card">\n' +
            '<div class="flipdown"></div>\n' +
            '<div class="flipup"></div>\n' +
            '</div>\n' +
            '</div>\n';

    }
    //make the board write to the html
    const boardElement = document.getElementById('gameboard');
    boardElement.innerHTML = squaresHTML;
}

generateHTMLForBoardSquares();

//board square interactions
class BoardSquare {

    //set the foundation
    constructor(element, color) {
        this.element = element;


        this.element.addEventListener("click", this, false);

        this.isFlipUp = false;
        this.isMatched = false;
        this.setColor(color);
    }

    //'flip' when clicked by adding class
    handleEvent(event) {
        switch (event.type) {
            case "click":
                if (this.isFlipUp || this.isMatched) {
                    return;
                }

                this.isFlipUp = true;
                this.element.classList.add('flipped');

                squareFlipped(this);
        }
    }

    //turn it back over if it's not a match
    reset() {
        this.isFlipUp = false;
        this.isMatched = false;
        this.element.classList.remove('flipped');
    }

    //find your matches and keep them
    matchFound() {
        this.isFlipUp = true;
        this.isMatched = true;
    }

    //add the color to the square as you flip it
    setColor(color) {
        const flipUpElement = this.element.getElementsByClassName('flipup')[0];

        flipUpElement.classList.remove(this.color);

        this.color = color;
        flipUpElement.classList.add(color);
    }
}

//make pairs of colors
const colorPairs = [];

function generateColorPairs() {
    if (colorPairs.length > 0) {
        return colorPairs;
    } else {
        for (let i = 0; i < 8; i++) {
            colorPairs.push('color' + i);
            colorPairs.push('color' + i);
        }
        return colorPairs;
    }
}

//mix up the array of squares
function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    //very useful random function time
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

//shuffle up the colored squares with the separate functions
function shuffleMatches() {
    const colorPairs = generateColorPairs()
    return shuffle(colorPairs);
}

//make the game appear and function
const boardSquares = [];

function setupGame() {
    generateHTMLForBoardSquares();

    const randomColorPairs = shuffleMatches();
    const squareElements = document.getElementsByClassName("square");

    for (let i = 0; i < squareElements.length; i++) {
        const element = squareElements[i];
        const color = randomColorPairs[i];
        const square = new BoardSquare(element, color)

        boardSquares.push(square);
    }
}

setupGame();

//flip squares and check for 'first' and matches to determine whether or not to flip it back over
let firstFlipupSquare = null;

function squareFlipped(square) {
    if (firstFlipupSquare === null) {
        firstFlipupSquare = square;
        return
    }
    if (firstFlipupSquare.color === square.color) {
        firstFlipupSquare.matchFound();
        square.matchFound();

        firstFlipupSquare = null;
    } else {
        const a = firstFlipupSquare;
        const b = square;

        firstFlipupSquare = null;

        setTimeout(function () {
            a.reset();
            b.reset();
        }, 600);
    }
}

//reset the game
const resetButton = document.getElementById("reset-button");

resetButton.addEventListener('click', () => {
    resetGame();
});;

function resetGame() {
    firstFlipupSquare = null;

    boardSquares.forEach((square) => {
        square.reset()
    });

    setTimeout(() => {

        const randomColorPairs = shuffleMatches();

        //change the colors of the pairs
        for (let i = 0; i < boardSquares.length; i++) {
            const newColor = randomColorPairs[i];
            const square = boardSquares[i];

            square.setColor(newColor);
        }
    }, 500);
}