const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const bcrypt = require('bcrypt')

exports.createUser = async user => {
  user.password = bcrypt.hashSync(user.password, 10)
  return await prisma.user.create({ data: user })
}

exports.findUser = async email => {
  return await prisma.user.findUnique({
    where: {
      email
    }
  })
}
