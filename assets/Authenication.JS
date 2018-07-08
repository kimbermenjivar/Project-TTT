const addHandlers = () => {
    $('#sign-up').on('submit', onSignUp)
    $('#sign-in').on('submit', onSignIn)
    $('#change-password').on('submit', onChangePassword)
    $('#sign-out').on('submit', onSignOut)
  //   $('#start game').on('submit', OnStartGame)
}
