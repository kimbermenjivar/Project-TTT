'use strict'

const gameAPI = require('./api')
const ui = require('./ui')

// const clickHandler = function (event) { // Handles Game events // should be somewhere else
//   gameLogic.clickEvent(event)
// }

const newGame = function (event) {
  event.preventDefault()
  // console.log('New game ran!')
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

const addHandlers = () => {
//   $('.row').click(clickHandler) // Handles Game events
  $('#newGame').click(newGame)
  $('#allGames').click(allGames)
}

module.exports = {
  addHandlers
}
