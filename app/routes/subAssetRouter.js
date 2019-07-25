const express = require("express");
const router = express.Router();

const subAssetModel = require("../models/subAssetModel");
//console.log(subAssetModel);

// get request
router.get("/", (req, res) => {
  subAssetModel.getSubAssets(function(error, results) {
    if (error) {
      //console.log(error);
      console.error(error);
      res.status(500).send(error);
      return;
    }
    console.log(results);
    res.send(results);
  });
});

/* router.get("/:code/?:client_id", (req, res) => {
  res.send("sub-asset get by uin ");
}); */

router.get("/:id", (req, res) => {
  let id = req.params.id;
  subAssetModel.getById(id, (error, results) => {
    if (error) return res.status(500).send(error);
    res.send(results);
  });
});

module.exports = router;
