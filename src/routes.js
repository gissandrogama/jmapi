const express = require('express')
const OrdemController = require('./controller/OrdemController')

const routes = new express.Router()

routes.get('/ordems', OrdemController.index)
routes.post('/ordem', OrdemController.store)

module.exports = routes