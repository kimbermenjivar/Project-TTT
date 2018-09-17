'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
<<<<<<< 849202826a24237b93b9b46052e972d8dc38cdb5
  // console.log('Sign up ran!')

=======
>>>>>>> moved game lgic into its own file- then set up call handlers to export data to index.js and events.js- server is now responding to sign up,sign in. and sign out successfully.
  const data = getFormFields(this) // this === event.target
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
<<<<<<< 849202826a24237b93b9b46052e972d8dc38cdb5
  // console.log('Sign in ran!')
=======
>>>>>>> moved game lgic into its own file- then set up call handlers to export data to index.js and events.js- server is now responding to sign up,sign in. and sign out successfully.

  const data = getFormFields(this) // this === event.target
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  // console.log('Change Password ran!')

  const data = getFormFields(this) // this === event.target
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  //   console.log('Sign put ran!')

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
  $('#allGames').on('click', showGamesPlayed)
//   $('#start game').on('submit', OnStartGame)
}

module.exports = {
  addHandlers
}
