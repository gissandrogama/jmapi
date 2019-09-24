const Ordem = require ("../models/OrdemServ")

module.exports = {
    async index(req, res){
        const ordems = await Ordem.find().sort('-createAt')
        
        return res.json(ordems)
    },

    async show(req, res){
        const ordem = await Ordem.findById(req.params.id)

        return res.json(ordem)
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

    async update(req, res){
        const ordem = await Ordem.findByIdAndUpdate(req.params.id, req.body, { new: true })

        return res.json(ordem)
    },

    async destroy(req, res){
        await Ordem.findByIdAndRemove(req.params.id)

        return res.send()
    }
}