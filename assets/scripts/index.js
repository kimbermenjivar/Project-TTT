'use strict'

const game = require('./game')
const events = require('./authentication/events')

$(() => {
  // stuff that happens when page is loaded
  game.startGame()
  //   squareClickHandler()
  //   setMessage()
  //   nextMove()
  //   switchTurn()
  //   checkForWinner()
  //   checkRow()
  //   pickAnotherSquare()
  events.addHandlers()

  $('.Square').on('click', function (event) {
    console.log(event.target.id)
    console.log(document.turn)
  })
  $('.Square').on('click', game.nextMove)
})
