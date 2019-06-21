const mongoose = require("mongoose");

const assetSchema = new mongoose.Schema({
  clientFk: Number,
  assetCode: String,
  description: String,
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
  workpermit: String,
  frequencyMonths: String,
  frequencyHours: String,
  lifespanMonths: String,
  lifespanHours: String,
  pdmFrequency: String,
  standered_certificate: String,
  notified_certificate: String,
  article11B_certificate: String,
  ec_certificate: String,
  status: String,
  createdAt: String,
  infonetStatus: String
});

const Asset = mongoose.model("Asset", assetSchema);

function validateSchema() {}
module.exports.Asset = Asset;
