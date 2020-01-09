const Equipamento = require ("../models/Equipamento")

module.exports = {
    async index(req, res){
        
        const equipamentos = await Equipamento.find({ status: false }).sort('-createAt')        

        return res.json(equipamentos)
        
    },

    async show(req, res){
        const equipamento = await Ordem.findById(req.params.id)

        return res.json(equipamento)
    },

    async store(req, res){
        const { name, descricao, setor } = req.body

        const equipamento = await Ordem.create({
            name,
            descricao,
            setor,             
        })
        return res.json(equipamento)
    },

    async update(req, res){
        const equipamento = await Ordem.findByIdAndUpdate(req.params.id, req.body, { new: true })

        return res.json(equipamento)
    },

    async destroy(req, res){
        await Ordem.findByIdAndRemove(req.params.id)

        return res.send()
    }
}