'use strict'
// consst store = require('../store')
// const showToysTemplate = require('../templates/toys.handlebars')
// const showUserToyTemplate = require('../templates/UserToys.handlebars')

const uploadImageSuccess = function (data) {
  // store.image = {}
  // store.toy.id = data.toy.id
  // $('#createItemModal').modal('hide')
  // $('#create-item-form').reset()
  // $('#successModal').modal('show')
  // $('#success-message').html(`Your toy has been added.`)
  // $('#content-msg').empty()

  console.log(`upload image success`)
}

const uploadImageError = function () {
  // $('#createModalLabel').css('color', 'red')
  // $('#createModalLabel').html('Something went wrong creating item try again!')
  // clearFields()
  // $('#successModal').modal('show')
  // $('#success-message').html(`Uh oh, please try again! `)
  console.log(`upload image fail`)
}

module.exports = {
  uploadImageError,
  uploadImageSuccess
}
