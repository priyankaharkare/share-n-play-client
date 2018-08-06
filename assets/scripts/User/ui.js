const store = require('../store.js')

const signUpSuccess = function (response) {
  $('#loginModal').modal('show')
  $('#signUpModal').modal('hide')
  $('#content-msg').html("You've signed up, Please Login to begin the game!")
}

const signUpFailure = function (response) {
  $('#content-msg').html(`Sorry, please try again !,
      <br/> Please Login if you already have an account !`)
}

const signInSuccess = function (response) {
  $('#loginModal').modal('hide')
  store.user = response.user
  $('#content-msg').html("You've signed in!")
}

const signInFailure = function (response) {
  $('#content-msg').html(`Oh no ! Check your username and password and try again !`)
}

const changePasswordSuccess = function (response) {
  $('#content-msg').html('Your Password has been updated')
}

const changePasswordFailure = function (response) {
  $('#content-msg').html('Sorry, you were not able to change your password,',
    'Please try again !')
}

const signOutSuccess = function (response) {
  delete store.user
  $('#content-msg').html('You have successfully signed out ! See you soon')
}

const signOutFailureure = function (response) {
  $('#content-msg').html('Sorry, try again to Sign Out !!')
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
