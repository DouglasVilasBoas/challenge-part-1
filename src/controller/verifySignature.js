const createError = require('http-errors')
const adapter = require('../adapter/verifySignature')

async function verifySignatureFromDna(req, res) {
  try {
    const signature = await adapter.verifySignatureFromDna(req.params.id)
    return res.send(signature)
  } catch (error) {
    if (createError.isHttpError(error)) {
      return res.status(error.statusCode).send({
        status: error.statusCode,
        error: error.message,
      })
    }
    return res.status(error.response?.data?.statusCode || 500)
    .send(error.response?.data ? error.response?.data : { error: error.message })
  }
}

module.exports = { verifySignatureFromDna };