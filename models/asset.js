const { Sequelize, sequelize, Model } = require("../sequelize");

class Asset extends Model {}

Asset.init(
  {
    id: {
      type: Sequelize.STRING,
      field: "component_id",
      primaryKey: true
    },
    clientFk: {
      type: Sequelize.STRING,
      field: "component_client_fk"
    },
    assetCode: {
      type: Sequelize.STRING,
      field: "component_code",
      unique: true
    },
    description: {
      type: Sequelize.STRING,
      field: "component_description"
    },
    subAssets: {
      type: Sequelize.STRING,
      field: "component_sub_assets"
    },
    image: {
      type: Sequelize.STRING,
      field: "component_imagepath"
    },
    uom: {
      type: Sequelize.STRING,
      field: "component_uom"
    },
    inspectionType: {
      type: Sequelize.STRING,
      field: "component_inspectiontype"
    },
    expectResults: {
      type: Sequelize.STRING,
      field: "component_expectedresult"
    },
    observations: {
      type: Sequelize.STRING,
      field: "component_observation"
    },
    isRepairable: {
      type: Sequelize.STRING,
      field: "component_repair"
    },
    geo: {
      type: Sequelize.STRING,
      field: "component_geo_fancing"
    },
    status: {
      type: Sequelize.ENUM,
      values: ["active", "inactive"],
      field: "status"
    }
  },
  {
    sequelize,
    freezeTableName: true,
    tableName: "components",
    timestamps: false,
    underscored: true
  }
);

function getData() {
  Asset.findAndCountAll({
    //limit: 10
  })
    .then(asset => {
      // get the instance of sequelize
      //asset = asset.get({ plain: true });

      console.log(JSON.stringify(asset, null, 4));
      //return asset;
    })
    .catch(err => {
      console.log(err.message);
    });
}

//getData();
module.exports.Asset = Asset;
