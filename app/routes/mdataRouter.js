const express = require("express");
const router = express.Router();
const mdataModel = require("../models/mdataModel");

router.get("/", (req, res) => {
  mdataModel.getAll((error, results) => {
    if (error) res.status(500).send(error);
    else res.send(results);
  });
});

module.exports = router;
