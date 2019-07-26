const connection = require("../../dbConnection");
const _ = require("lodash");
//console.log("Connection Object=====", connection);
// define the constructor object

const AssetModel = function() {
  this.table = "components";
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
AssetModel.prototype.getAll = function(callback) {
  console.log("***************************", this.table);
  //console.log(connection);
  connection.query(
    "select * from components limit 100",
    (error, assetRs, fields) => {
      if (error) {
        //throw error;
        callback(error, null);
      } else {
        //console.log(assetRs);
        this.setTypes(
          function(types) {
            assetRs.forEach((ele, index) => {
              console.log(this);
              if (ele.component_expectedresult) {
                expectedResults = JSON.parse(ele.component_expectedresult);
                console.log(expectedResults);
                exReList = types.filter(type => {
                  return expectedResults.indexOf(type.id.toString()) != -1;
                });
                assetRs[index]["exRList"] = exReList;
              }

              if (ele.component_observation) {
                obs = JSON.parse(ele.component_observation);
                obsList = types.filter(type => {
                  return obs.indexOf(type.id.toString()) != -1;
                });
                assetRs[index]["obsList"] = obsList;
              }
            });

            callback(null, assetRs);
          }.bind(this)
        );
      }
    }
  );
};

AssetModel.prototype.getByCode = function(code, callback) {
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

AssetModel.prototype.getById = function(assetId, callback) {
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

AssetModel.prototype.insert = function(asset, callback) {};

AssetModel.prototype.delete = function(assetId, callback) {};

module.exports = new AssetModel();
