'use strict'

const config = require('../config')
const store = require('../store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const startGame = function (data) {
  console.log(store.user)
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const updateGame = function (data) {
  console.log(store.user)
  return $.ajax({
    url: config.apiUrl + '/games' + store.game.id,
    method: 'PATCH',
    data: {
      'game': {
        'cell': {
          'index': ('0', '1', '2', '3', '4', '5', '6', '7', '8'),
          'value': ('X', 'O', 'X', ' O', 'X', 'O', 'X', 'O', 'X'),
          'over': (false)
        }
      },
      headers: {
        Authorization: 'Token token=' + store.user.token
      }
    }
  })
}
const changePassword = function () {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  startGame,
  updateGame
}
