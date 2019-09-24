const mongoose = require('mongoose')

const OrdemSchema = new mongoose.Schema({
    equipamento: {
        type: String,        
    },
    setor: {
        type: String,
    },
    data: {
        type: Date,
        default: Date.now,        
    },
    descricao: {
        type: String,
    },
    solicitante: {
        type: String,
    },
    data_atend:{
        type: Date,
        default: Date.now,
    },
    status: {
        type: Boolean,
        default: false,
    }, 
}, {
    timestamps: true,
})

module.exports = mongoose.model('Ordem', OrdemSchema)