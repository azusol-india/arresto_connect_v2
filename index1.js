const express = require("express"); // return function
const mysql = require("mysql");
const app = express();
app.use(express.json());

/* const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "arresto2018"
});

connection.connect(error => {
  if (error) {
    console.error("error in connetion", error);
    throw error;
  }
  console.log("database connected : process id :" + connection.threadId);
}); */

app.get("/api/v1/clients", (req, res) => {
  connection.query("select * from ar_clients_2018", function(
    error,
    results,
    fields
  ) {
    if (error) {
      console.log(error);
    } else {
      //console.log(results);
      res.send(results);
    }
  });
  console.log("showing the arresto clients");
});

app.get("/api", (req, res) => {
  res.send("Node server running successfully !!");
  console.log("------");
});

// register assets routes with the express app
const assetRoutes = require("./app/routes/assetRoute")(app);

const subAssetRouter = require("./app/routes/subAssetRouter.js");
app.use("/api/v1/sub-assets", subAssetRouter);

/**
 *  Asset Module routes define here
 *  */
/* app
  .route("/api/v1/assets")
  .get((req, res) => {
    res.send("asset Get request");
  })
  .post((req, res) => {
    res.send("asset Get request");
  });

app
  .route("/api/v1/assets/:uin")
  .get((req, res) => {})
  .put((req, res) => {})
  .delete((req, res) => {}); */

/* //Appling the middle ware
 console.log("==============");

const userRouter = require("./routers/users");
const customerRouetr = require("./routers/customers");
const mdataRouter = require("./routers/mdata");

app.use("/api/users", userRouter);
app.use("/api/customers", customerRouetr);
app.use("/api/mdata", mdataRouter);
 */
/*
app.get("/api", (req, res) => {
  console.log("node server running successfully !!");
  res.send("API running successfully !!");
}); */

//console.log(process.env);
const PORT = process.env.PORT || 5000;
app.listen(PORT, server => {
  console.log("server listening at port : " + PORT);
});
