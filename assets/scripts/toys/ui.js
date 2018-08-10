'use strict'
const store = require('../store')
const showToysTemplate = require('../templates/toys.handlebars')
const showUserToyTemplate = require('../templates/UserToys.handlebars')

const clearFields = function () {
  $('#sign-in-form').find('input').val('')
  $('#sign-up-form').find('input').val('')
  $('#change-password-form').find('input').val('')
  // $('.update-form').find('input').val('')
  $('#create-toy-form').find('input').val('')
}

const createToySuccess = function (data) {
  store.toy = {}
  store.toy.id = data.toy.id
  // $('#createItemModal').modal('hide')
  // $('#create-item-form')[0].reset()
  $('#successModal').modal('show')
  $('#success-message').html(`You have added your toy! `)
  clearFields()
}

const createToyError = function () {
  // $('#createModalLabel').css('color', 'red')
  // $('#createModalLabel').html('Something went wrong creating item try again!')
  clearFields()
  $('#successModal').modal('show')
  $('#success-message').html(`Uh oh, please try again! `)
}

const getUserToysSuccess = function (data) {
  store.toys = data.toys
  const userToys = []
  for (let i = 0; data.toys.length > i; i++) {
    if (data.toys[i].user !== null) {
      if (data.toys[i].user.id === store.user.id) {
        userToys.push(data.toys[i])
      }
    }
  }

  if (userToys.length > 0) {
    const showUserToys = showUserToyTemplate({
      toys: userToys
    })
    $('#successModal').modal('show')
    $('#success-message').html(`Your toys below! `)
    $('#content-msg').html(showUserToys)
    clearFields()
  } else {
    $('#content-msg').text('You have no toys. Please create a toy!')
    clearFields()
  }
}

// stick to code above
const getToysSuccess = function (data) {
  store.toys = data.toys
  const allToys = []
  for (let i = 0; data.toys.length > i; i++) {
    if (data.toys[i].is_available === true) {
      allToys.push(data.toys[i])
    }
  }
  const showAllToys = showToysTemplate({
    toys: allToys
  })
  $('#content-msg').html(showAllToys)
  $('#successModal').modal('show')
  $('#success-message').html(`All toys below !`)
  clearFields()
}

const deleteToySuccess = function () {
  $('#successModal').modal('show')
  $('#success-message').html(`Toy deleted ! `)
  clearFields()
}

const updateToySuccess = function (toyId) {
  clearFields()
  $('#content-msg').html('')
  $('.modal-backdrop').remove()
  $('#successModal').modal('show')
  $('#success-message').html(`Toy has been updated !!`)
  // $('#content-msg').html('Toy is Updated !')
}

const requestShareSuccess = function (toyId) {
  console.log(`request happened`)
  $('.modal-backdrop').remove()
  clearFields()
  $('#content-msg').html('')
  $('#successModal').modal('show')
  $('#success-message').html(`Transfer Requested !! Hope the kids enjoy the toy! `)
}

module.exports = {
  createToySuccess,
  createToyError,
  getToysSuccess,
  deleteToySuccess,
  updateToySuccess,
  getUserToysSuccess,
  requestShareSuccess
}
