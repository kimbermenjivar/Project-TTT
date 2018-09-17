'use strict'
const authEvents = require('./authentication/events.js')

const game = require('./game')
const events = require('./authentication/events')
const gameEvents = require('./game/events')

$(() => {
  // stuff that happens when page is loaded
  events.addHandlers()
  gameEvents.gameHandlers()
  $('.Square').on('click', function (event) {
    // console.log(event.target.id)
    // console.log(document.turn)
  })
  $('.Square').on('click', nextMove)
})
