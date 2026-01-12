const createError = require('http-errors')
const { getSignature } = require("../../service/signatureService");

async function verifySignatureFromDna(id) {
  const signature = await getSignature(id)

  if (signature.dna[62] === '1' && signature.dna[85] === '1') {
    return {
      status: 200,
      isEligible: true
    };
  }
  return {
    status: 200,
    isEligible: false
  };



}

module.exports = { verifySignatureFromDna };