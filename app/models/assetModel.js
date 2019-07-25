const connection = require("../../dbConnection");
const _ = require("lodash");
//console.log("Connection Object=====", connection);
// define the constructor object

const assetModel = function() {
  this.table = "components";
};

// below implementation is like  the class/ static methods
assetModel.getAll = function(callback) {
  //console.log(connection);
  connection.query(
    "select * from components limit 100",
    (error, results, fields) => {
      if (error) {
        //console.log(error.message);
        //throw error;
        callback(error, null);
      } else {
        console.log(results);
        callback(null, results);
      }
    }
  );
};

assetModel.getByCode = function(code, callback) {
  connection.query(
    "select * from components where component_code=?",
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

assetModel.getById = function(assetId, callback) {
  let sql = "select * from components where component_id=? OR component_code=?";
  console.log(sql);
  connection.query(sql, [assetId, assetId], function(error, results, fields) {
    if (error) callback(error, null);
    // throw error;
    else {
      //console.log("========================");
      //console.log(results);
      //return 1;
      let row = results[0];
      let expectedResults = row.component_expectedresult;
      let observations = row.component_observation;

      // get the observations & results
      exRList = [];
      obsList = [];
      connection.query("select id,type_name from type_category", function(
        error,
        typeResults
      ) {
        if (error) console.log(error);
        else types = typeResults;
        console.log(JSON.parse(expectedResults));
        expectedResults = JSON.parse(expectedResults);
        exReList = types.filter(type => {
          if (expectedResults.indexOf(type.id.toString()) != -1) {
            //console.log("===============================", type);
            return type;
          }
        });
        results[0]["exReList"] = exReList;

        observations = JSON.parse(observations);
        obsList = types.filter(type => {
          if (observations.indexOf(type.id.toString()) != -1) {
            return type;
          }
        });
        results[0]["obsList"] = obsList;
        console.log(obsList);

        callback(null, results);
      });
    }
  });
};

assetModel.insert = function(asset, callback) {};

assetModel.delete = function(assetId, callback) {};

module.exports = assetModel;
