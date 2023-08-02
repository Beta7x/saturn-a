const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET_KEY || 'V2lkaWVzIEFkZSBQcml5YW50bwo='

exports.generateToken = (email, uuid) => {
  const token = jwt.sign({
    email,
    uuid
  }, secret, {
    expiresIn: '8h'
  })
  return token
}
