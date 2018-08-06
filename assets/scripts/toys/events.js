
const getFormFields = require('../../../lib/get-form-fields.js')
const toysUi = require('./ui.js')
const toysApi = require('./api.js')

const onCreateToy = function (event) {
  event.preventDefault()
  console.log(`create toy clicked`)
  const data = getFormFields(event.target)
  console.log(`data is`, data)
  console.log(`event is`, event)
  toysApi.createToy(data)
    .then(toysUi.createToySuccess)
    // .then(onGetToys)
    .catch(toysUi.createToyError)
}

module.exports = {
  onCreateToy
}
