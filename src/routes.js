const express = require("express");
const UserController = require("./controllers/UserController");
const ProjectController = require("./controllers/ProjectController");

const routes = express.Router();

routes
  .get("/users", UserController.index)
  .post("/users", UserController.create)
  .put("/users/:id", UserController.update)
  .delete("/users/:id", UserController.delete);

routes
  .get("/projects", ProjectController.index)
  .post("/users/:user_id/projects", ProjectController.create)
  .put("/projects/:id", ProjectController.update)
  .delete("/projects/:id", ProjectController.delete);

module.exports = routes;
