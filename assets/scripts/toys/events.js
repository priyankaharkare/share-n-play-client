
const getFormFields = require('../../../lib/get-form-fields.js')
const toysUi = require('./ui.js')
const toysApi = require('./api.js')
// const usersToysUi = require('../usersToys/ui.js')

const store = require('../store')

const onCreateToy = function (event) {
  $('#createToyModal').modal('hide')
  event.preventDefault()
  console.log(`create toy clicked`)
  const data = getFormFields(event.target)
  console.log(`data is`, data)
  const userId = store.user.id
  console.log(`userId is `, userId)
  toysApi.createToy(data)
    .then(toysUi.createToySuccess)
    .catch(toysUi.createToyError)
}

// const onRequestShare = function (event) {
//   console.log(`request share worked`)
//   console.log(`event is`, event)
//   const toyId = $(event.target).attr('data-id')
//   console.log(`toyId is `, toyId)
// // const newToy =
// }
//
// const duplicateToy = $('.{{toy-id}}').clone()
//
//
// var clonedDiv = $('#yourDivId').clone();
// clonedDiv.attr("id", "newId");
// $('#yourDivId').after(cloneDiv);

const onGetToys = () => {
  console.log(`get toy clicked`)
  // toysUi.resetUiHandleing()
  toysApi.getToys()
    .then(toysUi.getToysSuccess)
    .catch(toysUi.getToysError)
}

const onDeleteToy = function (event) {
  event.preventDefault()
  console.log(`delete toy clicked`)

  // toyUi.resetUiHandleing()
  const toyId = $(event.target).attr('data-id')
  console.log(`toyId is`, toyId)
  toysApi.deleteToy(toyId)
    // .then(onGettoys)
    .then(toysUi.deleteToySuccess)
    .catch(toysUi.deleteToyError)
}

const onGetUserToys = function (event) {
  console.log(`get user toy clicked`)
  console.log(`get user toys event is `, event)
  // const data = getFormFields(event.target)
  event.preventDefault()
  toysApi.getToys()
  // console.log(`get user toys`)
    .then(toysUi.getUserToysSuccess)
    .catch(toysUi.getUserToysError)
    // .then(toysUi.getToysSuccess)
    // .catch(toysUi.getToysError)
}

const onOpenUpdateModal = function (event) {
  // itemUi.resetUiHandleing()
  console.log(`clicked it`)
  const toyId = $(event.target).attr('data-id')
  $(`[data-id="modal${toyId}"]`).modal('show')
}

// const onOpenConfirmModal = function (event) {
//   // itemUi.resetUiHandleing()
//   console.log(`clicked it`)
//   const toyId = $(event.target).attr('data-id')
//   console.log(`toy id is `, toyId)
//   $(`[data-id="modal${toyId}"]`).modal('show')
// }

const onUpdateToy = function (event) {
  event.preventDefault()
  console.log(`update toy clicked`)

  const data = getFormFields(event.target)
  const toyId = $(event.target).attr('data-id')
  console.log(`toyId is`, toyId)
  toysApi.updateToy(data, toyId)
    .then(toysUi.updateToySuccess)
    // .then(onGettoys)
    .catch(toysUi.updateToyError)
}

const onRequestShare = function (event) {
  console.log(`request share worked`)
  console.log(`event is`, event)
  const toyId = $(event.target).attr('data-id')
  console.log(`toyId is `, toyId)
  console.log(`store.user id is `, store.user.id)
  toysApi.requestShare(toyId)
    .then(toysUi.requestShareSuccess)
    .catch(toysUi.requestShareError)
}

const addHandlers = () => {
  $('#content-msg').on('click', '.deleteButton', onDeleteToy)
  $('#content-msg').on('submit', '.update-form', onUpdateToy)
  $('#content-msg').on('click', '.updateButton', onOpenUpdateModal)
  // $('#content-msg').on('click', '.shareToyButton', onOpenConfirmModal)
  $('#content-msg').on('click', '.shareToyButton', onRequestShare)
}

module.exports = {
  onCreateToy,
  onGetToys,
  onDeleteToy,
  onUpdateToy,
  onGetUserToys,
  addHandlers,
  onOpenUpdateModal,
  onRequestShare
}
