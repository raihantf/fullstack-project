const userService = require('./userService')

async function RegisterUserController(req, res){
    try {
        const result = await userService.RegisterUserService(req.body)
        if (result) {
            res.send({"status": true, "message": "User sucessfully created"})
        } else {
            res.send({"status": false, "message": "error creating user"})
        }
    } catch (error) {
        throw error
    }
}

async function LoginUserController(req, res){
    var result = null
    try {
        result = await userService.LoginUserService(req.body)
        if (result.status) {
            res.send({"status": true, "message": result.message})
        } else {
            res.send({"status": false, "message": result.message})
        }
    } catch (error) {
        res.send({"status": false, "message": error.message})
        throw error
    }
}

module.exports = {RegisterUserController, LoginUserController}