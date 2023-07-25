const message = {
  sendResponse: (res, code, message, data) => {
    console.log(`==========> ${code} <========== \n${message}`)
    const response = {
      code,
      message,
      data
    }
    return res.status(code).send(response)
  },
  internalError: res => {
    const code = HTTP_STATUS.INTERNAL_SERVER_ERROR
    const message = ERROR.INTERNAL_SERVER
    console.log(`==========> ${code} <========== \n${message}`)
    const response = {
      code,
      message,
    }
    return res.status(code).send(response)
  }
}

module.exports = message
