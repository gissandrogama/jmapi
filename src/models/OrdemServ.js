const mongoose = require('mongoose')

const OrdemSchema = new mongoose.Schema({
    equipamento: {
        type: String,
        required: true,
    },
    setor: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    solicitante: {
        type: String,
        required: true,
    },
    data_atend:{
        type: String,
    },
    status: {
        type: Boolean,
        default: false,
    }, 
}, {
    timestamps: true,
})

module.exports = mongoose.model('Ordem', OrdemSchema)