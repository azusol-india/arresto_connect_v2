"use strict";
const assetModel = require("../models/assetModel");

const assetRouter = function(app) {
  app.route("/api/v1/assets").get((req, res) => {
    assetModel.getAll(function(error, results) {
      if (error) res.status(500).send(error);
      res.send(results);
    });
  });

  app.route("/api/v1/assets/:id").get((req, res) => {
    let id = req.params.id;
    assetModel.getById(id, function(error, results) {
      if (error) res.status(500).send(error);
      res.send(results);
    });

    //res.send("sub asset post request trigger");
  });

  app.route("/api/v1/assets/:id").post((req, res) => {
    res.send("sub asset post request trigger");
  });

  app.route("/api/v1/assets/:id").delete((req, res) => {
    let id = req.params.id;
    assetModel.delete();
  });
};

module.exports = assetRouter;

/* module.exports = function(app) {
  var todoList = require("../controllers/todoListController");

  // todoList Routes
  app
    .route("/tasks")
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);

  app
    .route("/tasks/:taskId")
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
};
 */
