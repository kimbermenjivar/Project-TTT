'use strict'

const store = require('../store')

const newGameSuccess = (data) => {
  // console.log("The Current Game ID: " + data.game.id)
  store.game = data.game
}

const newGameFailure = () => {
  $('#message').text('Something went wrong, please try again.')
  setTimeout(() => {
    $('#message').text('')
  }, 2000)
}

const allGamesSuccess = (data) => {
  store.allGames = data.games
  $('#message').text(`${store.allGames.length} games have been played on this account`)
  setTimeout(() => {
    $('#message').text('')
  }, 2000)
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  allGamesSuccess
}
