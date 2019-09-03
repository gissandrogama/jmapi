const Ordem = require ("../models/OrdemServ")

module.exports = {
    async indexedDB(req, res){
    
    },

    async store(req, res){
        const { equipamento, setor, data, descricao, solicitante} = req.body

        const ordem = await Ordem.create({
            equipamento,
            setor,
            data,
            descricao,
            solicitante, 
        })
        return res.json(ordem)
    },
}