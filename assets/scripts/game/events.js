'use strict'

const gameAPI = require('./api')
const ui = require('./ui')

const newGame = function (event) {
  event.preventDefault()
  //   console.log(store)
  resetGame()
  gameAPI.newGame(event)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const allGames = function (event) {
  event.preventDefault()
  // console.log('All Games ran!')
  gameAPI.getAllGames(event)
    .then(ui.allGamesSuccess)
    .catch(ui.newGameFailure)
}

const resetGame = function () {
  document.winner = null
  $('.Square').each(function () {
    this.textContent = ''
  })
  return document.winner
}

const gameHandlers = () => {
  $('#newGame').click(newGame)
  $('#allGames').click(allGames)
}

module.exports = {
  gameHandlers,
  resetGame
}
