const Ordem = require('../models/OrdemServ')

module.exports = {
    async index(req, res){
        const notordems = await Ordem.find({ status: true }).sort('-creatAt')

        return res.json(notordems)
    }
}