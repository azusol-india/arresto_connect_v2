const Sequelize = require("sequelize");
// create databse connection
const sequelize = new Sequelize("arresto2018", "root", "", {
  host: "localhost",
  dialect: "mysql"
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected");
  })
  .catch(err => {
    console.log(err.message);
    console.log("connection error");
  });

exports.Sequelize = Sequelize;
exports.sequelize = sequelize;
