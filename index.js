const express = require("express"); // return function
const app = express();

app.use(express.json());

//Appling the middle ware
const userRouter = require("./routers/users");
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("Node server running successfully !!");
});

/*
app.get("/api", (req, res) => {
  console.log("node server running successfully !!");
  res.send("API running successfully !!");
}); */

const PORT = process.env.PORT || 5000;

app.listen(PORT, server => {
  console.log("server listening at port : " + PORT);
});
