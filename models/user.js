const mongoose = require("mongoose");
const Joi = require("joi");

//console.log(config.get("dbString"));

/* mongoose
  .connect(
    //"mongodb+srv://azusoluser:password2019@cluster0-pydbi.mongodb.net/test?retryWrites=true&w=majority",
    "mongodb://localhost/playground",
    { useNewUrlParser: true }
  )
  .then(db => {
    console.log("mongo connected===========");
  })
  .catch(err => {
    console.log(err.message);
    console.log("mongo connection error");
  });
 */

const addressSchema = new mongoose.Schema({
  country: String,
  state: String,
  city: String,
  line1: String,
  line2: String,
  pincode: String
});
const profileSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  imeiNo: String,
  companyName: String,
  companyAddress: String,
  address: addressSchema
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 255,
    required: 1
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  profile: profileSchema,
  qrcode: String
});

/* const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 255,
    required: 1
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  profile: {
    type: new mongoose.Schema({
      fname: String,
      lname: String,
      imeiNo: String,
      companyName: String,
      companyAddress: String,
      address: {
        type: new mongoose.Schema({
          country: String,
          state: String,
          city: String,
          line1: String,
          line2: String,
          pincode: String
        }),
        required: true
      }
    }),
    required: true
  }
}); */

// compile the schema into model
const User = mongoose.model("User", userSchema);
async function getUsers() {
  const users = await User.find({});
  console.log(users);
}
//getUsers();
//console.log(mongoose.testProperty);

function validateUser(user) {
  const addressSchema = Joi.object({
    country: Joi.string().required(),
    state: Joi.string(),
    city: Joi.string(),
    line1: Joi.string(),
    line2: Joi.string(),
    pincode: Joi.string().required()
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
    profile: profileSchema.required(),
    qrcode: Joi.string().required()
  });

  return Joi.validate(user, userSchema);
}

module.exports.User = User;
module.exports.validateUser = validateUser;
