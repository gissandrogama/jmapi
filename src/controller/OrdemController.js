const Ordem = require ("../models/OrdemServ")

module.exports = {
    async index(req, res){
        const ordems = await Ordem.find().sort('-createAt')
        
        return res.json(ordems)
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