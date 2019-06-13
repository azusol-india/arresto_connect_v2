const express = require("express");
const router = express.Router();

// load the customer model == export into the model
const Customer = require("../models/customer");

const Joi = require("joi");
const bcrypt = require("bcrypt");
const _ = require("lodash");

router.get("/", (req, res) => {
  const customers = Customer.find({});
  console.log(customers);

  if (!customers) return res.status(404).send("No customer fond");
  res.send(customers);
});

router.post("/", async (req, res) => {
  try {
    const customer = Customer({
      name: req.body.name,
      mobile: req.body.mobile,
      companyName: req.body.companyName
    });
    console.log(customer);
    const result = await customer.save();
    res.send(result);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
