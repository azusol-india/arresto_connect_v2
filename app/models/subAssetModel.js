const connection = require("../../dbConnection");
//console.log("Connection Object=====", connection);

// define the constructor object
const SubAssetModel = function() {
  this.table = "sub_assets";

  this.setTypes = function(callback) {
    connection.query("select id,type_name from type_category", function(
      error,
      typeResults
    ) {
      if (error) console.log(error);
      else callback(typeResults);
      //this.types = typeResults;
      //console.log(this.types);
    });
  };
};

// below implementation is like  the class/ static methods
SubAssetModel.prototype.getAll = function(callback) {
  //console.log(connection);
  connection.query("select * from sub_assets", (error, subRs, fields) => {
    if (error) {
      //throw error;
      callback(error, null);
    } else {
      this.setTypes(
        function(types) {
          subRs.forEach((ele, index) => {
            console.log(this);
            if (ele.sub_assets_result) {
              expectedResults = JSON.parse(ele.sub_assets_result);
              console.log(expectedResults);
              exReList = types.filter(type => {
                return expectedResults.indexOf(type.id.toString()) != -1;
              });
              subRs[index]["exRList"] = exReList;
            }

            if (ele.sub_assets_observation) {
              obs = JSON.parse(ele.sub_assets_observation);
              obsList = types.filter(type => {
                return obs.indexOf(type.id.toString()) != -1;
              });
              subRs[index]["obsList"] = obsList;
            }
          });

          callback(null, subRs);
        }.bind(this)
      );

      //callback(null, results);
    }
  });
};

SubAssetModel.prototype.getByCode = function(code, callback) {
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

SubAssetModel.prototype.getById = function(assetId, callback) {
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

SubAssetModel.prototype.insert = function(asset, callback) {};

SubAssetModel.prototype.delete = function(assetId, callback) {};

module.exports = new SubAssetModel();
