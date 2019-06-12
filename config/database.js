/* const mongoose = require("mongoose");
const config = require("config");
const dbString = config.get("dbString");
mongoose.connect(dbString, err => {
  // error callback
  if (err) {
    console.log("DB Connection error");
  } else {
    console.log(`connected to ${dbString}`);
  }
});
 */

const os = require("os");
const mongoose = require("mongoose");
const host = os.hostname();
console.log(host);

const dbConnection = function() {
  let conString = "";
  if (host == "DESKTOP-5ESDTJT" || host == "Reema-PC") {
    conString = "mongodb://localhost/playground";
  } else {
    conString =
      "mongodb+srv://azusoluser:password2019@cluster0-pydbi.mongodb.net/test?retryWrites=true&w=majority";
  }
  console.log(conString);
  mongoose
    .connect(conString)
    .then(() => {
      console.log(conString);
      console.log("db connected success==============");
    })
    .catch(err => {
      console.log("db connected fail !!!!!!!!!!");
    });
};

module.exports = dbConnection;
// new comment added
