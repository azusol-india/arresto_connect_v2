const express = require("express");
const router = express.Router();
const { User, validateUser } = require("../models/user");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const _ = require("lodash");

//get API
router.get("/", async (req, res) => {
  const users = await User.find({}).select("-password");
  if (!users) return res.status("404").send("No user founds");
  res.send(users);
});

router.get("/:id", (req, res) => {
  res.send('USER "ABC" listed successfully');
});

router.post("/setuser", (req, res) => {
  const userSchema = {
    email: Joi.string().required(),
    password: Joi.string()
      .required()
      .min(3)
  };

  /*   let result = Joi.validate(req.body, userSchema);
  //console.log(result);
  let error = result.error;
  console.log(error.details[0].message);
  console.log(error); */

  let { error } = Joi.validate(req.body, userSchema);
  if (error) {
    console.log(error.message);
  }

  console.log(req.body);
  res.status(200).send("user set success");
});

/* const addressSchema = Joi.object({
  country: Joi.string().required(),
  state: Joi.string(),
  city: Joi.string(),
  line1: Joi.string(),
  line2: Joi.string(),
  pincode: Joi.string()
});
const profileSchema = Joi.object().keys({
  fname: Joi.string(),
  lname: Joi.string(),
  companyName: Joi.string(),
  companyAddress: Joi.string(),
  address: addressSchema
});

const userSchema = Joi.object().keys({
  name: Joi.string()
    .min(3)
    .required(),
  email: Joi.string().required(),
  password: Joi.string()
    .min(4)
    .required(),
  profile: profileSchema
}); */

// Register the USER
router.post("/", async (req, res) => {
  // server side validation
  // validate the incoming request

  /*   const schema = Joi.object().keys({
    name: Joi.string()
      .min(3)
      .required(),
    email: Joi.string().required(),
    password: Joi.string()
      .min(4)
      .required(),
    profile: Joi.obje
  }); */

  try {
    // const valid = await Joi.validate(req.body, userSchema);
    const valid = await validateUser(req.body);
    console.log("joi/client  validation pass ");
    user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      profile: req.body.profile,
      qrcode: req.body.qrcode
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    const result = await user.save();
    res.send(result);
  } catch (err) {
    console.log("client  validation Fail ====");
    res.status(400).send(err.message);
  }

  /* const result = Joi.validate(req.body, schema)
    .then(async () => {
      user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
      const result = await user.save();
      res.send(result);
    })
    .catch(err => {
      res.status(400).send(err.message);
    }); */
});

// authenticating the user
router.post("/auth/", async (req, res) => {
  //const result = authUser(req.body); // const error = result.error;
  const { error } = authUser(req.body);

  if (error) {
    res.status(400).send(error.message);
    return;
  }
  let user = await User.findOne({ email: req.body.email });
  console.log(user);
  if (!user) {
    res.status(404).send("No Use register with this email id  !");
    return;
  }
  try {
    const valid = await bcrypt.compare(req.body.password, user.password);
    if (!valid) res.status(404).send("Invalid email or Password");
    //res.send(true);
    res.send(_.pick(user, ["_id", "name", "email"]));
  } catch (err) {
    console.log(err.message);
  }
});

function authUser(req) {
  const schema = Joi.object({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required()
  });
  return Joi.validate(req, schema);
}

// DELETE API
module.exports = router;
