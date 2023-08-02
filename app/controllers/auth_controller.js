const registerService = require('../services/register_service')
const loginService = require('../services/login_service')

exports.register = async (req, res) => {
  try {
    return await registerService.register(req, res)
  } catch (error) {
    console.log(error)
  }
}

exports.login = async (req, res) => {
  try {
    return await loginService.login(req, res)
  } catch (error) {
    console.log(error)
  }
}
