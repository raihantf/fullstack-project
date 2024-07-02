const userModel = require("./userModel")
const key = '1234567891234567'
const encryptor = require('simple-encryptor')(key)

async function RegisterUserService(userDetails){
    var userModelData = new userModel()
    userModelData.name = userDetails.name
    userModelData.username = userDetails.username
    var encryptedPassword = encryptor.encrypt(userDetails.password)
    userModelData.password = encryptedPassword

    try {
        await userModelData.save()
        return true
    } catch (error) {
        console.error('Error saving user data:', error)
        return false
    }
}

async function LoginUserService(userDetails){
    const userExist = await userModel.collection.findOne({username: userDetails.username})

    if (userExist != undefined && userExist != null){
        var decrypted = encryptor.decrypt(userExist.password)

        if (decrypted == userDetails.password){
            return ({status: true, message: "Login User Validated sucessfully"})
        } else {
            return ({status: false, message: "User Validated failed"})
        }
    } else {
        return ({status: false, message: "Invalid User"})
    }
}

module.exports = {RegisterUserService, LoginUserService}