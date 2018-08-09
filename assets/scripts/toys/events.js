
const getFormFields = require('../../../lib/get-form-fields.js')
const toysUi = require('./ui.js')
const toysApi = require('./api.js')
// const usersToysUi = require('../usersToys/ui.js')

const onCreateToy = function (event) {
  $('#createToyModal').modal('hide')
  event.preventDefault()
  const data = getFormFields(event.target)
  toysApi.createToy(data)
    .then(toysUi.createToySuccess)
    .catch(toysUi.createToyError)
}

const onGetToys = () => {
  // toysUi.resetUiHandleing()
  toysApi.getToys()
    .then(toysUi.getToysSuccess)
    .catch(toysUi.getToysError)
}

const onDeleteToy = function (event) {
  event.preventDefault()
  // toyUi.resetUiHandleing()
  const toyId = $(event.target).attr('data-id')
  toysApi.deleteToy(toyId)
    // .then(onGettoys)
    .then(toysUi.deleteToySuccess)
    .catch(toysUi.deleteToyError)
}

const onGetUserToys = function (event) {
  // const data = getFormFields(event.target)
  event.preventDefault()
  toysApi.getToys()    .then(toysUi.getUserToysSuccess)
    .catch(toysUi.getUserToysError)
    // .then(toysUi.getToysSuccess)
    // .catch(toysUi.getToysError)
}

const onOpenUpdateModal = function (event) {
  // itemUi.resetUiHandleing()
  const toyId = $(event.target).attr('data-id')
  $(`[data-id="modal${toyId}"]`).modal('show')
}

const onUpdateToy = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const toyId = $(event.target).attr('data-id')
  toysApi.updateToy(data, toyId)
    .then(toysUi.updateToySuccess)
    // .then(onGettoys)
    .catch(toysUi.updateToyError)
}

const onRequestShare = function (event) {
  const toyId = $(event.target).attr('data-id')
  toysApi.requestShare(toyId)
    .then(toysUi.requestShareSuccess)
    .then(toysUi.getToys)
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
