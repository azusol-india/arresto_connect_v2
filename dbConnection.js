const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "arresto2018"
});

/* const conn = mysql.createConnection({
  host: "35.173.85.25",
  user: "xxesyrggjt",
  password: "mKwmQsXQVP",
  database: "xxesyrggjt"
}); */

conn.connect(error => {
  if (error) throw error;
  console.log("database connected");
});

module.exports = conn;
