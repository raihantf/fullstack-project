const express = require('express')

const userController = require('../src/user/userController')
const router = express.Router()

router.post('/user/login', userController.LoginUserController)
router.post('/user/register', userController.RegisterUserController)

module.exports = router