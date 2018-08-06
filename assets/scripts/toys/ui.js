'use strict'
// const store = require('../store')
// const showItemsTemplate = require('../templates/item-listing.handlebars')

const createToySuccess = function (data) {
  // $('#createItemModal').modal('hide')
  // $('#create-item-form')[0].reset()
  $('#content-msg').html('Toy is created')
}

const createToyError = function () {
  // $('#createModalLabel').css('color', 'red')
  // $('#createModalLabel').html('Something went wrong creating item try again!')
  $('#content-msg').html('no Toy is created')
}

module.exports = {
  createToySuccess,
  createToyError
}
