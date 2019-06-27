const mongoose = require("mongoose");
//require("../database")();
const customerSchema = new mongoose.Schema({
  name: String,
  mobile: {
    type: Number,
    unique: 1
  },
  companyName: {
    type: String,
    unique: true,
    required: true
  }
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

//** New comment added  */

//** second comment  added  */

//** third  comment  added to check  */

module.exports = Customer;
