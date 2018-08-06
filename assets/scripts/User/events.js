'use strict '

const getFormFields = require('../../../lib/get-form-fields.js')
const authApi = require('./api')
const authUi = require('./ui')

const onSignUp = function (event) {
  console.log(`on sign up button works`)
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(`event.target is`, event.target)
  console.log(`data is`, data)
  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpFailure)
}

const onSignIn = function (event) {
  console.log(`on sign in button works`)
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(`data is`, data)

  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .catch(authUi.signInFailure)
}

const onChangePassword = function (event) {
  console.log(`on change pw button works`)

  event.preventDefault()
  const data = getFormFields(event.target)

  authApi.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordFailure)
}

const onSignOut = function (data) {
  event.preventDefault()
  authApi.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.signOutFailure)
}

module.exports = {
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onChangePassword: onChangePassword,
  onSignOut: onSignOut
}
