const express = require("express");
const routers = express.Router();

const { Asset } = require("../models/asset"); // import the Asset Model
console.log(Asset);

routers.get("/", (req, res) => {
  //implement the routes
  console.log("asset called");
  Asset.findAndCountAll({})
    .then(asset => {
      // get the instance of sequelize
      //asset = asset.get({ plain: true });
      // console.log(JSON.stringify(asset, null, 4));
      res.send(asset);
    })
    .catch(err => {
      console.log(err.message);
      res.status(404).send("no record found");
    });
});

module.exports = routers;
