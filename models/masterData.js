const { Sequelize, sequelize, Model } = require("../sequelize");
const { Asset } = require("./asset");

console.log(Asset.rawAttributes);

class MasterData extends Model {}

MasterData.init(
  {
    id: {
      type: Sequelize.STRING,
      field: "mdata_id",
      primaryKey: true
    },
    clientFk: {
      type: Sequelize.STRING,
      field: "mdata_client_fk"
    },
    jobcard: {
      type: Sequelize.STRING,
      field: "mdata_jobcard"
    },
    sms: {
      type: Sequelize.STRING,
      field: "mdata_sms"
    },
    batchNo: {
      type: Sequelize.STRING,
      field: "mdata_client_fk"
    },
    serialNo: {
      type: Sequelize.STRING,
      field: "mdata_serial"
    },
    rfid: {
      type: Sequelize.STRING,
      field: "mdata_rfid"
    },
    uin: {
      type: Sequelize.STRING,
      field: "mdata_uin"
    },
    client: {
      type: Sequelize.STRING,
      field: "mdata_client"
    },
    poNo: {
      type: Sequelize.STRING,
      field: "mdata_po"
    },
    series: {
      type: Sequelize.STRING,
      field: "mdata_item_series"
    },
    asset: {
      // defining the foreign key ===============
      type: Sequelize.STRING,
      references: {
        model: Asset,
        key: "assetCode"
      },
      field: "mdata_asset"
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
    tableName: "master_data",
    timestamps: false
  }
);

Asset.hasOne(MasterData, {
  foreignKey: "asset",
  foreignKeyConstraint: true
});

/* MasterData.belongsTo(Asset, {
  constraints: false
}); */

console.log("===========================");

//module.exports.MasterData = MasterData;
MasterData.findOne({
  /*   include: [
    {
      model: Asset,
      where: { assetCode: Sequelize.col(mdata.asset) }
    }
  ] */
})
  .then(mdata => {
    // get the instance of sequelize
    //mdata = mdata.get({ plain: true });
    console.log(mdata);
  })
  .catch(err => {
    console.log(err.message);
  });
