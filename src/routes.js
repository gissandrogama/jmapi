const express = require('express')
const OrdemController = require('./controller/OrdemController')

const routes = new express.Router()

routes.post('/ordem', OrdemController.store)

module.exports = routes