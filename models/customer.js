const mongoose = require("mongoose");
console.log("*********************** setting mongoose property");
mongoose.testProp = "sachin kumar tyagi";
//require("../database")();

const customerSchema = new mongoose.Schema({
  name: String,
  mobile: Number,
  companyName: String
});

// compile the schema into the cutomer model
const Customer = mongoose.model("Customer", customerSchema);

/* async function createCustomer() {
  //each instance is the document
  const customer = new Customer({
    name: "varun kausik",
    mobile: "123456789",
    companyName: "Azusole Pvt limited"
  });
  const result = await customer.save();
  console.log(result);
}
createCustomer(); */

module.exports = Customer;
