const mongoose = require("mongoose");
const Joi = require("joi");

const mastreDataSchema = new mongoose.Schema({
  clentId: {
    type: String
  },
  mdataType: {
    type: String,
    required: true
  },
  jobcard: {
    type: String,
    required: true
  },
  sms: {
    type: String,
    required: true
  },
  batchNo: {
    type: String,
    required: true
  },
  serialNo: {
    type: String,
    required: true
  },
  rfid: {
    type: String,
    required: true
  },
  barcode: {
    type: String,
    required: true
  },
  uin: {
    type: String,
    required: true
  },
  client: {
    type: String,
    required: true
  },
  dealer: {
    type: String,
    required: true
  },
  poNo: {
    type: String,
    required: true
  },
  series: {
    type: String,
    required: true
  },
  asset: {
    type: String,
    required: true
  },
  materialInvoiceNo: {
    type: String,
    required: true
  },
  materialInvoiceDate: {
    type: String,
    required: true
  },
  dateOfFirstUse: {
    type: String,
    required: true
  },
  dateOfInspection: {
    type: String,
    required: true
  },
  inspectionDueDate: {
    type: String,
    required: true
  },
  dateOfPdm: {
    type: String,
    required: true
  },
  pdmDueDate: {
    type: String,
    required: true
  }
});

function validateMasterData(user) {
  const dataSchema = Joi.object({
    mdataType: Joi.any().required(),
    jobcard: Joi.string().required(),
    sms: Joi.string().required(),
    batchNo: Joi.string().required(),
    serialNo: Joi.string().required(),
    rfid: Joi.string().required(),
    uin: Joi.string().required(),
    barcode: Joi.string().required(),
    uin: Joi.string().required(),
    client: Joi.string().required(),
    dealer: Joi.string().required(),
    poNo: Joi.string().required(),
    asset: Joi.string().required(),
    series: Joi.string().required(),
    materialInvoiceNo: Joi.string().required(),
    materialInvoiceDate: Joi.string().required(),
    dateOfFirstUse: Joi.string().required(),
    dateOfInspection: Joi.string().required(),
    inspectionDueDate: Joi.string().required(),
    dateOfPdm: Joi.string().required(),
    pdmDueDate: Joi.string().required()
  });
  return Joi.validate(user, dataSchema);
}

const MasterData = mongoose.model("MasterData", mastreDataSchema);

module.exports.MasterData = MasterData;
module.exports.validateMasterData = validateMasterData;
