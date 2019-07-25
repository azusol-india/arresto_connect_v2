const express = require("express");
const router = express.Router();

// load the customer model == export into the model
//const masterData = require("../models/masterData");
const { MasterData, validateMasterData } = require("../models/masterData");

const Joi = require("joi");
const bcrypt = require("bcrypt");
const _ = require("lodash");

// MDATA LIST GET API

router.get("/:uin", async (req, res) => {
  const paramObj = req.params;
  console.log(paramObj);
  if (paramObj.uin) {
    uin = paramObj.uin;
  }
  //const mdataSet = await MasterData.findOne({ uin: uin });
  mdataSet = MasterData.aggregate(
    [
      { $match: { uin: uin } },
      {
        $lookup: {
          localField: "asset",
          from: "assets",
          foreignField: "assetCode",
          as: "assetInfo"
        }
      },
      { $unwind: "$assetInfo" },
      {
        $lookup: {
          form: "subassets",
          localField: "subAsset",
          foreignField: "subAssetCode",
          as: "subAssetInfo"
        }
      },
      { $unwind: "$subAsstInfo" }
      // { $addField: "$assetInfo" }
    ],
    (err, result) => {
      if (err) {
        next(err);
      } else {
        console.log(result);
        if (!result) return res.status(404).send("No customer fond");
        res.send(result);
      }
    }
  );

  //console.log(mdataSet);
});

router.get("/", async (req, res) => {
  const mdataSet = await MasterData.find({});
  console.log(mdataSet);
  if (!mdataSet) return res.status(404).send("No customer fond");
  res.send(mdataSet);
});

// Mdata post API
router.post("/", async (req, res) => {
  const { error } = validateMasterData(req.body);
  if (error) {
    res.status(400).send(error.message);
  }

  try {
    const mdata = new MasterData(
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
    //console.log(mdata);
    const result = await mdata.save();
    res.send(result);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
