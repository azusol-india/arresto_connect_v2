const mongoose = require("mongoose");
//console.log(config.get("dbString"));

mongoose
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

mongoose.testProperty = "sachin tyagi";

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
  profile: {
    type: new mongoose.Schema({
      fname: {
        type: String
      },
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
    required: true,
    required: true
  }
});

// compile the schema into model
const User = mongoose.model("User", userSchema);

async function getUsers() {
  const users = await User.find({});
  console.log(users);
}
//getUsers();
console.log(mongoose.testProperty);

module.exports = User;
