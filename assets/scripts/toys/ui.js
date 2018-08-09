'use strict'
const store = require('../store')
const showToysTemplate = require('../templates/toys.handlebars')
const showUserToyTemplate = require('../templates/UserToys.handlebars')

const createToySuccess = function (data) {
  console.log(`create toy success data is`, data)
  store.toy = {}
  store.toy.id = data.toy.id
  // $('#createItemModal').modal('hide')
  // $('#create-item-form')[0].reset()
  $('#content-msg').html('Toy is created')
  console.log(`data.toy.id is`, data.toy.id)
}

const createToyError = function () {
  // $('#createModalLabel').css('color', 'red')
  // $('#createModalLabel').html('Something went wrong creating item try again!')
  $('#content-msg').html('no Toy is created')
}

const getUserToysSuccess = function (data) {
  store.toys = data.toys
  console.log(`get user toys data is `, data)
  console.log('store.user.id is ', store.user.id)
  const userToys = []
  for (let i = 0; data.toys.length > i; i++) {
    if (data.toys[i].user !== null) {
      if (data.toys[i].user.id === store.user.id) {
        console.log('data.toys[i].user.id is ', data.toys[i].user.id)
        userToys.push(data.toys[i])
      }
    }
  }

  if (userToys.length > 0) {
    const showUserToys = showUserToyTemplate({
      toys: userToys
    })
    $('#content-msg').html(showUserToys)
    console.log(`user Toys is `, userToys)
    // console.log(`showUser Toys is `, showUserToys)
  } else {
    $('#content-msg').text('You have no toys. Please create a toy!')
  }
}

// stick to code above
const getToysSuccess = function (data) {
  console.log(`data is`, data)
  store.toys = data.toys
  console.log(`data.toys `, data.toys)
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
  console.log(`item is deleted`)
  // console.log(`data is`, data)
}

const updateToySuccess = function (toyId) {
  console.log(`item is updated`)
  $(`[data-id="modal${toyId}"]`).modal('hide')
}

const requestShareSuccess = function (toyId) {
  console.log('is it sharing')
  console.log(`toy sharing of`, toyId, `successful`)
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
