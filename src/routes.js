const express = require('express')
const OrdemController = require('./controller/OrdemController')
const OsnotController = require('./controller/OsnotController')

const routes = new express.Router()

routes.get('/ordems', OrdemController.index)
routes.post('/ordem', OrdemController.store)
routes.get('/ordem/:id', OrdemController.show)
routes.put('/ordem/:id', OrdemController.update)
routes.delete('/ordem/:id', OrdemController.destroy)

module.exports = routes