const Sequelize = require("sequelize");
const Model = Sequelize.Model;
// db connection
/* const sequelize = new Sequelize("arresto2018", "root", "", {
  host: "localhost",
  dialect: "mysql"
});
 */
const sequelize = new Sequelize("xxesyrggjt", "xxesyrggjt", "mKwmQsXQVP", {
  host: "35.173.85.25",
  dialect: "mysql"
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err.message);
  });

/* module.exports={
    Sequelize:Sequelize,
    sequelize:sequelize,
    Model:Model
}   */
exports.Sequelize = Sequelize;
exports.sequelize = sequelize;
exports.Model = Model;
