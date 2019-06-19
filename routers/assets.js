const express = require("express");
const routers = express.Router();
const _ = require("lodash");

const { Asset } = require("../models/asset");
// import the Asset Model
//console.log(Asset);

/**
 * Momgoose implementation
 */
routers.post("/", async (req, res) => {
  // validate the post request
  const reqData = _.pick(req.body, [
    "clientfk",
    "assetCode",
    "desc",
    "subAsset",
    "image",
    "uom",
    "inspectinType",
    "expectedResult",
    "observation",
    "isRepairable",
    "geoFancing",
    "status"
  ]);
  try {
    const asset = new Asset(reqData);
    await asset.save();
    res.send(asset);
  } catch (err) {
    console.log("==== Error while  the document");
    res.send(400).send(err.message);
  }
});

//get the asset data
routers.get("/", async (req, res) => {
  const assets = await Asset.find();
  if (!assets) {
    res.status(404).send("no asset found !");
  }
  res.send(assets);
});

module.exports = routers;
