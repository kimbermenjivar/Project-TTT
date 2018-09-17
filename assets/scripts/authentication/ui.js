'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').css('background-color', 'green')
<<<<<<< 72f733f1140d90057470fa33749b081680388db4
  $('#sign-up')[0].reset()
//   console.log('signUpSuccess ran. Data is:', data)
}

const signUpFailure = function () {
  $('#message').text('Error on sign')
  $('#message').css('background-color', 'red')
  $('#sign-up')[0].reset()
//   console.log('signUpFailure ran. Data is:', error)
=======
  //   console.log('hello')
  //   console.log('signUpSuccess ran. Data is:', data)
}

const signUpFailure = function () {
  $('#message').text('Error on sign up')
  $('#message').css('background-color', 'red')
  //   console.log('signUpFailure ran. Data is:', error)
>>>>>>> Update game logic to display number of gammes played by a user
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#message').css('background-color', 'green')
<<<<<<< 72f733f1140d90057470fa33749b081680388db4
  $('#sign-in')[0].reset()
  //   console.log('signInSuccess ran. Data is:', data)
=======
  //   console.log(store)
>>>>>>> Update game logic to display number of gammes played by a user
  store.user = data.user
}

const signInFailure = function () {
  $('#message').text('Error on sign in')
  $('#message').css('background-color', 'red')
<<<<<<< 72f733f1140d90057470fa33749b081680388db4
  $('#sign-in')[0].reset()
//   console.log('signInFailure ran. Data is:', error)
=======
  //   console.log('signInFailure ran. Data is:', error)
>>>>>>> Update game logic to display number of gammes played by a user
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  $('#message').css('background-color', 'green')
  //   console.log('signOutSuccess ran and nothing was returned')
  store.user = null
}

const signOutFailure = function () {
  $('#message').text('Error on sign out')
  $('#message').css('background-color', 'red')
  //   console.log('signOutFailure ran. Data is:', error)
}
const RESTARTSuccess = function () {
  $('#message').text('changed password successfully')
  $('#message').css('background-color', 'green')
  //   console.log('RESTARTSuccess ran and nothing was returned')
}

const RESTARTFailure = function () {
  $('#message').text('Error on Restart')
  $('#message').css('background-color', 'red')
  //   console.log('RESTARTFailure ran. Data is:', error)
}

const allGamesSuccess = function (data) {
  console.log(data)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  RESTARTSuccess,
  RESTARTFailure,
  allGamesSuccess
}
