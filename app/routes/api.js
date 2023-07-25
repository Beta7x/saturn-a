const router = require('express').Router()
const AuthController = require('../controllers/auth_controller')

router.get('/', async (_req, res) => {
  res.send({
    code: 200,
    message: 'Ok api is working 🚀'
  })
})

router.post('/register', AuthController.register)

module.exports = router
