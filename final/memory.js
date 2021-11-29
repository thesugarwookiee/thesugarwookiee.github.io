function generateHTMLForBoardSquares() {
    const numberOfSquares = 16;
    let squaresHTML = '';

    // generate HTML for board squares
    for (let i = 0; i < numberOfSquares; i++) {
        squaresHTML +=
            '<div class="board-square">\n' +
            '<div class="face-container">\n' +
            '<div class="facedown"></div>\n' +
            '<div class="faceup"></div>\n' +
            '</div>\n' +
            '</div>\n';
    }

    // insert squares HTML in DOM
    const boardElement = document.getElementById('gameboard');
    boardElement.innerHTML = squaresHTML;
}

generateHTMLForBoardSquares();

class BoardSquare {

    constructor(element, color) {
        this.element = element;


        this.element.addEventListener("click", this, false);

        this.isFaceUp = false;
        this.isMatched = false;
        this.setColor(color);
    }

    handleEvent(event) {
        switch (event.type) {
            case "click":
                // 1
                if (this.isFaceUp || this.isMatched) {
                    // 2
                    return;
                }

                // 3
                this.isFaceUp = true;
                this.element.classList.add('flipped');

                // 4
                squareFlipped(this);
        }
    }

    reset() {
        this.isFaceUp = false;
        this.isMatched = false;
        this.element.classList.remove('flipped');
    }

    matchFound() {
        this.isFaceUp = true;
        this.isMatched = true;
    }

    setColor(color) {
        const faceUpElement = this.element.getElementsByClassName('faceup')[0];
        this.color = color;
        faceUpElement.classList.add(color);
    }
}

const colorPairs = [];

function generateColorPairs() {
    if (colorPairs.length > 0) {
        return colorPairs;
    } else {
        // generates matching pair for each color
        for (let i = 0; i < 8; i++) {
            colorPairs.push('color-' + i);
            colorPairs.push('color-' + i);
        }

        return colorPairs;
    }
}

function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function shuffleColors() {
    const colorPairs = generateColorPairs()
    return shuffle(colorPairs);
}

const boardSquares = [];

function setupGame() {
    generateHTMLForBoardSquares();

    const randomColorPairs = shuffleColors();
    // 1
    const squareElements = document.getElementsByClassName("board-square");

    // 2
    for (let i = 0; i < squareElements.length; i++) {
        const element = squareElements[i];
        const color = randomColorPairs[i];
        // 3
        const square = new BoardSquare(element, color)

        // 4
        boardSquares.push(square);
    }
}

setupGame(); // DO NOT ERASE THIS OR GAME WILL NOT RUN

// 1
let firstFaceupSquare = null;

function squareFlipped(square) {
  // 2
  if (firstFaceupSquare === null) {
    firstFaceupSquare = square;
    return
  }

  // 3
  if (firstFaceupSquare.color === square.color) {
    // 4
    firstFaceupSquare.matchFound();
    square.matchFound();

    firstFaceupSquare = null;
  } else {
    // 5
    const a = firstFaceupSquare;
    const b = square;

    firstFaceupSquare = null;

    setTimeout(function() {
      a.reset();
      b.reset();
    }, 400);
  }
}