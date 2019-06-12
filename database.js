const mongoose = require("mongoose");

console.log("*********************** getting custom property");
console.log(mongoose.testProp);

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
