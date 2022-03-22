const {user: service} = require('../../services');
const {validationResult} = require('express-validator');

const register = async (req, res, next) =>{
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                status: "errror",
                code: 400,
                message: "Incorrect input data"
            })
        }
        const {email, password} = req.body

        const candidate = await service.getOne({email});
        if(candidate){
            return res.status(409).json({
                status: "error",
                code: 409,
                message: "User is already register"
            })
        }

        await service.add({email,password});
        res.status(200).json({
            status: "success",
            code: 200,
            message: "Success registration"
        })


    } catch (error) {
        next(error)
    }
}

module.exports = register;