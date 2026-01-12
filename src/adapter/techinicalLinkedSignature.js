const createError = require('http-errors')
const { getSignature } = require("../../service/signatureService");
const { getTechnical } = require("../../service/technicalService");
const { repository } = require('../../repository');

async function techinicalLinkedSignature(idTechnical, idSignature) {

  const hasLink = await repository.findOne({ signatureId: idSignature });
  if (hasLink) {
  throw new createError.Conflict("Signature already linked to technical");
  }

  const technical = await getTechnical(idTechnical);
  if (technical.status.toLowerCase() === "inactive") {
    throw new createError.BadRequest("Technical not Active");
  }
  
  const signature = await getSignature(idSignature);
  


  const link = {
    technicalId: technical.id,
    technicalName: technical.name,
    technicalEmail: technical.email,
    technicalPhone: `${technical.phone_ddd} ${technical.phone_number}`,
    signatureId: signature.id,
    signatureName: signature.name,
    signatureEmail: signature.email,
    signaturePhone: `${signature.phone.ddd} ${signature.phone.number}`
  };

  await repository.insertOne(link);

  return {
    status: 201,
    message: "Signature linked to Tecnhical"
  };

}

module.exports = { techinicalLinkedSignature };