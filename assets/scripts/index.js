'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const addHandlers = require('./authentication/events')

const moves = ['', '', '', '', '', '', '', '', '']
let playerXTurn = true // Is it currently the X Player's turn-used boolean since its t/f
const moveCount = 0 // How many successful moves have occurred
const winner = false // Has a winner been found?
const points1 = 0 // player 1 points
const points2 = 0 // player 2 points
const size = 3

// Responsible for creating a tic tac toe board in HTML
const drawBoard = function () {}
// Responsible for resetting game logic like turn and moveCount.  Also turns winner back to false

// Checks board to see if last move created a win condition
const checkForWinner = function () {}

const tryMove = function () {

}

// Returns all answers
const loadAnswers = function () {
  return [
    [0, 1, 2], // Top Row
    [0, 4, 8], // Left > Right Diagonal
    [0, 3, 6], // Left Column
    [3, 4, 5], // Middle Row
    [2, 4, 6], // Right > Left Diagonal
    [6, 7, 8], // Bottom Row
    [2, 5, 8], // Right Column
    [1, 4, 7] // Middle Column
  ]
}

// CLICK HANDLER TO HANDLE CLICKS ON BOARD CELLS
// AND MAKES AN X OR O, ADD THAT CLICK TO THE
// moves ARRAY, AND THEN SWITCH TO THE OTHER PLAYER
// CHECK IF SOMEONE WON

const squareClickHandler = function () {
  console.log('Click Handler Clicked')
  console.log(this)
  if (playerXTurn) {
    this.innerText = 'X'
  } else {
    this.innerText = 'O'
  }
  playerXTurn = !playerXTurn
}

const onRestart = function (event) {
  event.preventDefault()   
  console.log('onRestart ran')
  $('.butt').html('')
  playerXTurn = true
}
// Document onReady.  Runs once when the site has loaded
$(() => {
  addHandlers()
  $('.butt').on('click', squareClickHandler)
  $('#restart').on('click', onRestart)
})
// targeting the RESTART button//

