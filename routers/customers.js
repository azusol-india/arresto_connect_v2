const express = require("express");
const router = express.Router();

// load the customer model == export into the model
const Customer = require("../models/customer");

const Joi = require("joi");
const bcrypt = require("bcrypt");
const _ = require("lodash");

router.get("/", (req, res) => {
  console.log("customer get API is called =============");
  res.send("sample message-----------");
});

module.exports = router;
