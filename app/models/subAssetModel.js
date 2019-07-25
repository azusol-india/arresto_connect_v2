const connection = require("../../dbConnection");
//console.log("Connection Object=====", connection);
console.log("**********************");
// define the constructor object
const subAssetModel = function() {
  this.table = "sub_assets";
};

// below implementation is like  the class/ static methods
subAssetModel.getSubAssets = function(callback) {
  //console.log(connection);
  connection.query("select * from sub_assets", function(
    error,
    results,
    fields
  ) {
    if (error) {
      //console.log(error.message);
      //throw error;
      callback(error, null);
    } else {
      //console.log(fields);
      callback(null, results);
    }
  });
};

subAssetModel.getByCode = function(code, callback) {
  connection.query(
    "select * from sub_assets where sub_assets_code=?",
    [code],
    function(error, results, fields) {
      if (error) {
        throw error;
      } else {
        callback(null, results);
      }
    }
  );
};

subAssetModel.getById = function(assetId, callback) {
  connection.query(
    "select * from sub_assets where sub_assets_id=?",
    [assetId],
    function(error, results, fields) {
      if (error) {
        throw error;
      } else {
        callback(null, results);
      }
    }
  );
};

subAssetModel.insert = function(asset, callback) {};

subAssetModel.delete = function(assetId, callback) {};

module.exports = subAssetModel;
