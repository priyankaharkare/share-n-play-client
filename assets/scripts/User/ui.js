const store = require('../store.js')

const signUpSuccess = function (response) {
  $('#loginModal').modal('show')
  $('#signUpModal').modal('hide')
  // $('#content-msg').html("You've signed up")
  $('#successModal').modal('show')
  $('#success-message').html('Welcome ' + store.user.email + 'Login to start sharing the toys')
}

const signUpFailure = function (response) {
  $('#successModal').modal('show')
  $('#success-message').html(`Sorry, please try again !,
      <br/> Please Login if you already have an account !`)
}

const signInSuccess = function (response) {
  $('#sign-up-button').hide()
  $('#loginModal').modal('hide')
  $('#change-password-button').show()
  $('#sign-out').show()
  $('.share-toy-button').show()

  // $('#create-toy-button').show()
  $('#view-all-toys-btn').show()
  $('#view-user-toys-btn').show()

  store.user = response.user
  store.user.id = response.user.id
  // $('#content-msg').html("You've signed in!")
  console.log(`user id is `, response.user.id)
  // $('#successModal').modal('show')
  $('#success-message').html('Successfully logged in as ' + store.user.email)
}

const signInFailure = function (response) {
  $('#successModal').modal('show')
  $('#success-message').html(`Sign in error, please try again`)
}

const changePasswordSuccess = function (response) {
  $('#successModal').modal('show')
  $('#success-message').html(`Your password has been updated`)
}

const changePasswordFailure = function (response) {
  $('#successModal').modal('show')
  $('#success-message').html(`Sorry, we could not change your password, Please try again ! `)
}

const signOutSuccess = function (response) {
  delete store.user
  $('#sign-up-button').show()
  $('#sign-in-button').show()
  $('#change-password-button').hide()
  $('#create-toy-button').hide()
  $('#view-all-toys-btn').hide()
  $('.share-toy-button').hide()
  $('#view-user-toys-btn').hide()
  $('#sign-out').hide()

  $('#successModal').modal('show')
  $('#success-message').html(`You are signed out, GoodBye and See You Soon !`)
}

const signOutFailureure = function (response) {
  $('#successModal').modal('show')
  $('#success-message').html(`We could not sign you out, try again !`)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess,
  changePasswordFailure,
  changePasswordSuccess,
  signOutSuccess,
  signOutFailureure
}
