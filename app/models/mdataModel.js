const conn = require("../../dbConnection");

/* const mdataModel = {
  table: "master"
};
 */
function mdataModel() {
  this.table = "";
}

mdataModel.getAll = function(callback) {
  let sql = "select * from master_data limit 100";
  conn.query(sql, (error, results) => {
    if (error) callback(error, null);
    else callback(null, results);
  });
};

module.exports = mdataModel;
