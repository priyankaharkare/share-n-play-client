'use strict'

const store = require('../store')
const config = require('../config')

const createToy = function (data) {
  console.log(`create toy api data is `, data)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/toys',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createToy
}
