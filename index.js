const express = require("express"); // return function
const app = express();
app.use(express.json());

require("./config/database")();

//Appling the middle ware
const userRouter = require("./routers/users");
const customerRouetr = require("./routers/customers");
const mdataRouter = require("./routers/mdata");
const assetRouter = require("./routers/assets");

app.use("/api/users", userRouter);
app.use("/api/customers", customerRouetr);
app.use("/api/mdata", mdataRouter);
app.use("/api/assets", assetRouter);

app.get("/", (req, res) => {
  res.send("Node server running successfully !!");
});

/*
app.get("/api", (req, res) => {
  console.log("node server running successfully !!");
  res.send("API running successfully !!");
}); */

//console.log(process.env);
const PORT = process.env.PORT || 5000;
app.listen(PORT, server => {
  console.log("server listening at port : " + PORT);
  var host = server.address().address;
  var port = server.address().port;
  console.log('running at http://' + host + ':' + port)
});
