const mongoose = require('mongoose')

const OrdemSchema = new mongoose.Schema({
    equipamento: String,
    setor: String,
    data: String,
    descricao: String,
    solicitante: String,
    status: {
        type: Boolean,
        default: false,
    }, 
}, {
    timestamps: true,
})

module.exports = mongoose.model('Ordem', OrdemSchema)