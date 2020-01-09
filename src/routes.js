const express = require('express')
const OrdemController = require('./controller/OrdemController')
const EquipamentoController = require('./controller/EquipamentoController')



const routes = new express.Router()

// Ordem de serviços
routes.get('/ordems', OrdemController.index)
routes.post('/ordem', OrdemController.store)
routes.get('/ordem/:id', OrdemController.show)
routes.put('/ordem/:id', OrdemController.update)
routes.delete('/ordem/:id', OrdemController.destroy)


// Equipamentos
routes.post('/equipamentos', EquipamentoController.store)



module.exports = routes