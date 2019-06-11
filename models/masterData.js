const mongoose = require("mongoose");

const mastreDataSchema = new mongoose.Schema({});

const MasterData = mongoose.model("MasterData", mastreDataSchema);
module.exports = MasterData;
