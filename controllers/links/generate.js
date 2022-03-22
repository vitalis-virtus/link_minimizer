const { links: service } = require("../../services");
require("dotenv").config();
const shortid = require('shortid');

const generate = async (req, res, next) => {
  try {
    const { BASE_URL } = process.env;
    const {from} = req.body;
    const code = shortid.generate();


    const result = await service.getOneLinkByQuery({from})
    if(result){
        return res.status(200).json({
            status: "success",
            code: 200,
            data:{
                result
            }
        })
    }

    const to = BASE_URL + '/t/' + code;

    const newLink = await service.addLink({code, to, from, owner: req.user.id})
    res.status(201).json({
        status: "success",
        code: 201,
        data: {
            newLink
        }
    })

  } catch (error) {
    next(error);
  }
};

module.exports = generate;
