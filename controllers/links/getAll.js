const {links: service} = require('../../services');

const getAll = async (req, res, next) =>{
    try {
        const links = await service.getLink(req.user.id) 
        res.json(links);
        
    } catch (error) {
        next(error)
    }
}

module.exports = getAll