const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://azusoluser:password2019@cluster0-pydbi.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
    //"mongodb://localhost/playground"
  )
  .then(db => {
    console.log("mongo connected");
  })
  .catch(err => {
    console.log(err.message);
    console.log("mongo connection error");
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
  }
});

// compile the schema into model
const User = mongoose.model("User", userSchema);

/* async function getUsers() {
  const users = await User.find({});
  console.log(users);
}
getUsers();
 */

module.exports = User;
