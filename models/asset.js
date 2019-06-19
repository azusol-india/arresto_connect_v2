const mongoose = require("mongoose");

const assetSchema = new mongoose.Schema({
  clientFk: Number,
  assetCode: String,
  desc: String,
  subAsset: [String],
  image: String,
  uom: {
    type: String,
    required: 1
  },
  inspectionType: String,
  expectedResult: [String],
  observation: [String],
  isRepairable: String,
  geoFancing: String,
  status: String
});
const Asset = mongoose.model("Asset", assetSchema);

function validateSchema() {}

module.exports.Asset = Asset;
