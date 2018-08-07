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
const getToys = function () {
  // console.log(`get Toys data is`, data)
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/toys',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteToy = function (toyId) {
  console.log(`toyId is`, toyId)
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/toys/' + toyId,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateToy = function (data, toyId) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/toys/' + toyId,
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createToy,
  getToys,
  deleteToy,
  updateToy
}
