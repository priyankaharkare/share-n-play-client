'use strict'
const store = require('../store')
const showToysTemplate = require('../templates/toys.handlebars')
const showUserToyTemplate = require('../templates/UserToys.handlebars')

const createToySuccess = function (data) {
  store.toy = {}
  store.toy.id = data.toy.id
  // $('#createItemModal').modal('hide')
  // $('#create-item-form')[0].reset()
  $('#content-msg').html('Toy is created')
 }

const createToyError = function () {
  // $('#createModalLabel').css('color', 'red')
  // $('#createModalLabel').html('Something went wrong creating item try again!')
  $('#content-msg').html('no Toy is created')
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
    $('#content-msg').html(showUserToys)
  } else {
    $('#content-msg').text('You have no toys. Please create a toy!')
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
}

const deleteToySuccess = function () {
}

const updateToySuccess = function (toyId) {
  $(`[data-id="modal${toyId}"]`).modal('hide')
}

const requestShareSuccess = function (toyId) {

}
// const updateItemSuccess = function (itemId) {
//   $(`[data-id="modal${itemId}"]`).modal('hide')
//   $('.modal-backdrop').remove()
//   $('.update-form')[0].reset()
// }

module.exports = {
  createToySuccess,
  createToyError,
  getToysSuccess,
  deleteToySuccess,
  updateToySuccess,
  getUserToysSuccess,
  requestShareSuccess
}
