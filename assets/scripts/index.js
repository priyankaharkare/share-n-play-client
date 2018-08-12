'use strict'

const authEvents = require('./user/events')
const toyEvents = require('./toys/events')

// const authUi = require('./user/ui')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  toyEvents.addHandlers()

  // Authentication Event Handler
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)

  // create Toy
  $('#create-toy-form').on('submit', toyEvents.onCreateToy)

  // view toys
  $('#view-all-toys-btn').on('click', toyEvents.onGetToys)
  // user toys
  $('#view-user-toys-btn').on('click', toyEvents.onGetUserToys)
  // update toy
  // $('#content-msg').on('submit', '.update-toy-form', toyEvents.onUpdateToy)

  $('.close-button').click(function () {
    $('#sign-in-form').find('input').val('')
    $('#sign-up-form').find('input').val('')
    $('#change-password-form').find('input').val('')
    $('.update-form').find('input').val('')
    // $('#create-toy-form').find('input').val('')
  })

  // $('.why-toyShare').click(function () {
  //   $('.modal-backdrop').remove()
  // })

  $(document).ready(function () {
    $('#sign-up-button').show()
    $('#sign-in-button').show()
    $('#change-password-button').hide()
    $('#sign-out-button').hide()
    $('#create-toy-button').hide()
    $('#view-all-toys-btn').hide()
    $('#view-user-toys-btn').hide()
    $('.share-toy-button').hide()
    $('#sign-out').hide()
    $('.faq-button').hide()
  })
})
