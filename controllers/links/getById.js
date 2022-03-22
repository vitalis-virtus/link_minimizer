const {links: service} = require('../../services');

const getById = async (req, res, next) =>{
    try {
        const id = req.params.id
        const link = await service.getLinkById(id)
        res.json(link);
    } catch (error) {
        
    }
}

module.exports = getById