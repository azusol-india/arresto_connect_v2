const Sequelize = require("sequelize");
const sequelize = new Sequelize("arresto2018", "root", "", {
  host: "localhost",
  dialect: "mysql"
});
// connection object
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

//sequelize.sync();

const Model = Sequelize.Model;
class Mdata extends Model {}
Mdata.init(
  {
    id: {
      type: Sequelize.NUMBER,
      field: "mdata_id",
      primaryKey: true
    },
    domainClientFk: {
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
    batch: {
      type: Sequelize.STRING,
      field: "mdata_batch"
    },
    uin: {
      type: Sequelize.STRING,
      field: "mdata_uin"
    },
    client: {
      type: Sequelize.STRING,
      field: "mdata_client"
    },
    dealer: {
      type: Sequelize.STRING,
      field: "mdata_dealer"
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
      type: Sequelize.STRING,
      field: "mdata_asset"
    },
    invoiceNo: {
      type: Sequelize.STRING,
      field: "mdata_material_invoice"
    },
    invoiceDate: {
      type: Sequelize.STRING,
      field: "mdata_material_invoice_date"
    },
    qty: {
      type: Sequelize.STRING,
      field: "mdata_qty"
    },
    status: {
      type: Sequelize.STRING,
      field: "status"
    },
    dateInspection: {
      type: Sequelize.STRING,
      field: "date_of_inspection"
    },
    dateFirstuse: {
      type: Sequelize.STRING,
      field: "date_of_first_use"
    },
    dateInspection: {
      type: Sequelize.STRING,
      field: "date_of_inspection"
    }
  },
  {
    sequelize,
    freezeTableName: true,
    tableName: "master_data",
    modelName: "mdata",
    timestamps: false
  }
);

Mdata.findAll()
  .then(items => {
    console.log("All users:", items);
  })
  .catch(err => {
    console.log(err.message);
  });

console.log(Mdata);
console.log();
const mongoose = require("mongoose");

const assetSchema = new mongoose.Schema({
  clientFk: Number,
  assetCode: String,
  description: String,
  subAsset: [String],
  image: String,
  uom: {
    type: String,
    required: 1
  },
  inspectionType: String,
  expectedResult: [String],
  observation: [String],
  isRepairable: String,
  geoFancing: String,
  workpermit: String,
  frequencyMonths: String,
  frequencyHours: String,
  lifespanMonths: String,
  lifespanHours: String,
  pdmFrequency: String,
  standered_certificate: String,
  notified_certificate: String,
  article11B_certificate: String,
  ec_certificate: String,
  status: String,
  createdAt: String,
  infonetStatus: String
});

const Asset = mongoose.model("Asset", assetSchema);

function validateSchema() {}
module.exports.Asset = Asset;
