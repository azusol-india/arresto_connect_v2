const express = require("express");
const routers = express.Router();

const { Asset } = require("../models/asset"); // import the Asset Model
//console.log(Asset);

/**
 * Sequelize Module Implementation
 */
routers.get("/", (req, res) => {
  //implement the routes
  console.log("asset called");
  Asset.findAll({
    where: {
      clientFk: 376
    },
    limit: 100
  })
    .then(assets => {
      // get the instance of sequelize
      //sendData = assets.get({ plain: true });
      //console.log(JSON.stringify(assets, null, 4));
      //sendData = assets.values();
      res.send(JSON.stringify(assets, null, 4));
    })
    .catch(err => {
      console.log(err.message);
      res.status(404).send("no record found");
    });
});
module.exports = routers;
