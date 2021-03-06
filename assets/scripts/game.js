'use strict'

const gameAPI = require('./game/api')

function startGame () {
  for (let i = 1; i <= 9; i++) {
    clearBox(i)
  }
}
document.turn = 'X'
document.winner = null
setMessage(document.turn + ' gets to start.')

function setMessage (msg) {
//   console.log(msg)
  document.getElementById('message').innerText = msg
  //  if(square.innerText = document.turn;
  // switchTurn();
  // } else{
  //     setMessage("Pick another square.")
}

function nextMove (square) {
  const index = this.dataset.index
  if (document.winner) { // != null
    // setMessage(document.turn + ' already won.')
    gameAPI.resetGame()
  } else if (square.target.innerText === '') {
    square.target.innerText = document.turn
    gameAPI.updateGame(index, document.turn, false)
    switchTurn(index)
    if (!document.winner) {
      setMessage(document.turn + ' Pick another square.')
    }
  }
}

function switchTurn (index) {
  if (checkForWinner(document.turn)) {
    //   debugger
    setMessage(' Awesome ' + document.turn + ', You Win!')
    gameAPI.updateGame(index, document.turn, true)
    document.winner = document.turn
  } else if (document.turn === 'X') {
    (document.turn = 'O')
  } else {
    document.turn = 'X'
    setMessage(" It's " + document.turn + "'s turn.'")
  }
}

function checkForWinner (move) {
  let result = false
  if (checkRow(0, 1, 2, move) ||
        checkRow(3, 4, 5, move) ||
        checkRow(6, 7, 8, move) ||
        checkRow(0, 3, 6, move) ||
        checkRow(1, 4, 7, move) ||
        checkRow(2, 5, 8, move) ||
        checkRow(0, 4, 8, move) ||
        checkRow(2, 4, 6, move)) {
    result = true
    return result
  }
}

function checkRow (a, b, c, move) {
  let result = false
  if (getBox(a) === move && getBox(b) === move && getBox(c) === move) {
    result = true
  }
  return result
}

function getBox (number) {
  return document.getElementById('s' + number).innerText
}

// // use require with a reference to bundle the file and use it in this file
// // const example = require('./example')
// let page = document.getElementById(TTT).page;
// // use require without a reference to ensure a file is bundled
// // require('./example')

// const addHandlers = require('./authentication/events')

// const moves = ['', '', '', '', '', '', '', '', '']
// let playerXTurn = true // Is it currently the X Player's turn-used boolean since its t/f
// const moveCount = 0 // How many successful moves have occurred
// const winner = false // Has a winner been found?
// const points1 = 0 // player 1 points
// const points2 = 0 // player 2 points
// const size = 3

// // Responsible for creating a tic tac toe board in HTML
// const drawBoard = function () {}
// // Responsible for resetting game logic like turn and moveCount.  Also turns winner back to false

// // Checks board to see if last move created a win condition
// let checkForWinner = function (if button = ((checkForWinner(loadAnswers.[] - 1);
// squares[parseSquare] = player;
//     let checkForWinner =("X");
//     else checkForWinner('O');

//     if (player == 'O')
//     player = 'X';
//     else player = 'O'
//     result =true
//     return result;
// }
// }
// const tryMove = function () {

// }

// // Returns all answers
// let loadAnswers = function () {
//   return [
//     [0, 1, 2], // Top Row
//     [0, 4, 8], // Left > Right Diagonal
//     [0, 3, 6], // Left Column
//     [3, 4, 5], // Middle Row
//     [2, 4, 6], // Right > Left Diagonal
//     [6, 7, 8], // Bottom Row
//     [2, 5, 8], // Right Column
//     [1, 4, 7] // Middle Column

//   ]
// }

// // CLICK HANDLER TO HANDLE CLICKS ON BOARD CELLS
// // AND MAKES AN X OR O, ADD THAT CLICK TO THE
// // moves ARRAY, AND THEN SWITCH TO THE OTHER PLAYER
// // CHECK IF SOMEONE WON
// const onStart = function (event) {
//   event.preventDefault()
//   console.log('onStart ran')
//   $('.butt').html('')
//   playerXTurn = true
//   if(idElement == "player")
// function startGame () {
//   document.turn = 'X'
// }
// function nextMove (square) {
//   square.innerText = document.turn
// }

function clearBox (number) {
  document.getElementById('s' + number).innerText = ' '
}
// const squareClickHandler = function (squareClickHandler, selectedSq) {
//   console.log('Click Handler Clicked')
//   console.log(this)

// }
//   if (playerXTurn) {
//     this.innerText = 'X'
//   } else {
//     this.innerText = 'O'
//   }
//   playerXTurn = !playerXTurn
// /(SquareClickHandler)
// $('#start').on('click', onStart)

// // targeting the START button//
// / Document onReady.Runs once when the site has loaded
// $(() => {
//   addHandlers(

module.exports = {
  startGame,
  nextMove
// checkForWinner
}
