const mongoose = require("mongoose");

const mastreDataSchema = new mongoose.Schema({
  clentId: String,
  mdataType: String,
  jobcard: String,
  sms: String,
  batchNo: String,
  serialNo: String,
  rfid: String,
  barcode: String,
  uin: String,
  client: String,
  dealer: String,
  poNo: String,
  series: String,
  asset: String,
  materialInvoiceNo: String,
  materialInvoiceDate: String,
  dateOfFirstUse: String,
  dateOfInspection: String,
  inspectionDueDate: String,
  dateOfPDm: String,
  pdmDueDate: String
});

const MasterData = mongoose.model("MasterData", mastreDataSchema);
module.exports = MasterData;
