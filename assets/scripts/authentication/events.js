'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  // console.log('Sign up ran!')

  const data = getFormFields(this) // this === event.target
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  // console.log('Sign in ran!')

  const data = getFormFields(this) // this === event.target
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  //   console.log('Change Password ran!')

  const data = getFormFields(this) // this === event.target
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
const onStartGame = function (event) {
  event.preventDefault()
}
const onSignOut = function (event) {
  event.preventDefault()
  //   console.log('Sign out ran!')

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
//     const Winner(data) {
//     .then(ui.Winner)
//     .catch(ui.Winner)
// }

const showGamesPlayed = () => {
  api.allGames()
    .then(ui.allGamesSuccess)
    .catch(ui.allgamesFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#start-game').on('submit', onStartGame)
}

module.exports = {
  addHandlers
}
