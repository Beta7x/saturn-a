const { PrismaClientKnownRequestError, PrismaClientInitializationError } = require('@prisma/client/runtime/library')
const userRepo = require('../repositories/user_repo')
const uuid = require('uuid').v4

exports.register = async (req, res) => {
  try {
    const id = uuid()
    const { first_name, last_name, email, password } = req.body
    const user = await userRepo.createUser({
      id,
      firstName: first_name,
      lastName: last_name,
      email,
      password
    })
    return MSG.sendResponse(res, HTTP_STATUS.CREATED, SUCCESS.REGISTER, user)
  } catch (error) {
    // console.log(error)
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return MSG.sendResponse(res, HTTP_STATUS.CONFLICT, ERROR.USER_EXIST)
      }
    } else if (error instanceof PrismaClientInitializationError) {
      return MSG.internalError(res)
    } else {
      return MSG.internalError(res)
    }
  }
}
