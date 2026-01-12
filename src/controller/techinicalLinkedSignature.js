const createError = require('http-errors')
const adapter = require('../adapter/techinicalLinkedSignature')

async function techinicalLinkedSignature(req, res) {
  try {
    const { idTechnical, idSignature } = req.body
    const result = await adapter.techinicalLinkedSignature(idTechnical, idSignature);

    return res.status(result.status).send(result)

  } catch (error) {
    console.log(error)
    if (createError.isHttpError(error)) {
      return res.status(error.statusCode).send({
        status: error.statusCode,
        message: error.message,
      })
    }
    return res.status(error.response?.data?.statusCode || 500)
      .send(error.response?.data ? error.response?.data : { error: error.message })
  }
}

module.exports = { techinicalLinkedSignature };