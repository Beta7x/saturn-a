const userRepo = require('../repositories/user_repo')
const bcrypt = require('bcrypt')
const { generateToken } = require('../helpers/token')
const { PrismaClientInitializationError } = require('@prisma/client/runtime/library')

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return MSG.sendResponse(
        res,
        HTTP_STATUS.BAD_REQUEST,
        ERROR.MISSING_ARGS
      )
    }

    const user = await userRepo.findUser(email)
    const validPassword = await bcrypt.compare(password, user.password)
    console.log(validPassword)
    if (!user || !validPassword) {
      return MSG.sendResponse(
        res,
        HTTP_STATUS.UNAUTHORIZED,
        ERROR.INVALID_EMAIL_OR_PASS
      )
    }

    const token = generateToken(user.email, user.id)
    const response = { access_token: token }
    return MSG.sendResponse(
      res,
      HTTP_STATUS.OK,
      SUCCESS.LOGIN,
      response
    )
  } catch (error) {
    if (error instanceof PrismaClientInitializationError) {
      return MSG.internalError(res)
    } else {
      return MSG.internalError(res)
    }
  }
}
