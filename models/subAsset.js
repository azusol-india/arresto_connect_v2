const mongoose = require("mongoose");
const Joi = require("joi");

const subAssetSchema = new mongoose.Schema({
  clentId: {
    type: String
  },
  subAssetCode: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  uom: {
    type: String,
    required: true
  },
  inspectionType: {
    type: String,
    required: true
  },
  result: {
    type: [String]
  },
  observation: {
    type: [String]
  },
  isRepairable: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  UpdateAt: {
    type: Date,
    default: Date.now
  }
});

function validateSubAsset(subAsset) {
  const schema = Joi.object({
    clientId: Joi.any().required(),
    subAssetCode: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
    uom: Joi.string().required(),
    inspectionType: Joi.string().required(),
    result: Joi.string().required(),
    observation: Joi.string().required(),
    isRepairable: Joi.string().required(),
    ststus: Joi.string().required(),
    updateAt: Joi.string().required()
  });
  return Joi.validate(subAsset, schema);
}

const SubAsset = mongoose.model("SubAsset", subAssetSchema);

module.exports.MasterData = SubAsset; // named export
module.exports.validateMasterData = validateSubAsset;

export default SubAsset; // default export
