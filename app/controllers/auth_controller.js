const registerService = require('../services/register_service')

exports.register = async (req, res) => {
    try {
        return await registerService.register(req, res)
    } catch (error) {
        console.log(error)
    }
}
