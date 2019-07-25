const { sequelize, Sequelize } = require("../config/sequelize");
// const Model = sequelize.model();

// class Mdata extends Model {}

// Mdata.init({
//   /** columns definition  */
// });

const Mdata = sequelize.define(
  "mdata",
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
console.log(typeof Mdata); // class=== function
console.log("=============", Mdata);
console.info(Mdata);
