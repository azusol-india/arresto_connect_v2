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

const mongoose = require("mongoose");
const dbConnection = function() {
  mongoose
    .connect("mongodb://localhost/playground")
    .then(() => {
      console.log("db connected success==============");
    })
    .catch(err => {
      console.log("db connected fail !!!!!!!!!!");
    });
};
module.exports = dbConnection;
