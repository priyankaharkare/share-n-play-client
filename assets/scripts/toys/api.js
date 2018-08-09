'use strict'

const store = require('../store')
const config = require('../config')

const createToy = function (data) {
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
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/toys',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteToy = function (toyId) {
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

const requestShare = function (toyId) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/toys/' + toyId,
    data: {
      toy: {
        is_available: false,
        user_id: store.user.id
      }
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createToy,
  getToys,
  deleteToy,
  updateToy,
  requestShare
}
