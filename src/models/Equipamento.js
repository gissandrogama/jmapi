const mongoose = require('mongoose')

const EquipamentoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        require: true,        
    },
    setor: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('Equipamento', EquipamentoSchema)