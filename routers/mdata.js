const express = require("express");
const router = express.Router();

// load the customer model == export into the model
const masterData = require("../models/masterData");

const Joi = require("joi");
const bcrypt = require("bcrypt");
const _ = require("lodash");

router.get("/", async (req, res) => {
  const mdataSet = await masterData.find({});
  console.log(mdataSet);
  if (!mdataSet) return res.status(404).send("No customer fond");
  res.send(mdataSet);
});

router.post("/", async (req, res) => {
  try {
    const mdata = new masterData(
      _.pick(req.body, [
        "clientId",
        "mdataType",
        "jobcard",
        "sms",
        "batchNo",
        "serialNo",
        "rfid",
        "barcode",
        "uin",
        "client",
        "dealer",
        "poNo",
        "series",
        "asset",
        "materialInvoiceNo",
        "materialInvoiceDate",
        "dateOfFirstUse",
        "dateOfInspection",
        "inspectionDueDate",
        "dateOfPdm",
        "pdmDueDate"
      ])
    );
    console.log(mdata);
    const result = await mdata.save();
    res.send(result);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
