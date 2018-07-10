'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
// const store = require('../store')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this) // this === event.target
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this) // this === event.target
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this) // this === event.target
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
const onStartGame = function (event) {
  event.preventDefault()
  api.startGame()
    .then(ui.onStartGameSuccess)
    .catch(ui.onStartGameFailure)
}

//     const Winner(data) {
//     .then(ui.Winner)
//     .catch(ui.Winner)
// }
// const addHandlers = () => {
//   $('#sign-up').on('submit', onSignUp)
//   $('#sign-in').on('submit', onSignIn)
//   $('#change-password').on('submit', onChangePassword)
//   $('#sign-out').on('submit', onSignOut)
// //   $('#start game').on('submit', OnStartGame)
// }

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#start-game').on('click', onStartGame)
  $('.Square').on('click', onStartGame)
}
module.exports = {
  addHandlers
}
