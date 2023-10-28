const express = require("express");
const branchController = require("../controllers/branchController");
const routers = express.Router();

// all routes of Branch (Create ,GETall, GETOne, Put, Patch, Delete)
routers
  .post("/", branchController.createBranch)
  .get("/", branchController.getAllBranches)
  .get("/:id", branchController.getBranch)
  .put("/:id", branchController.replaceBranch)
  .patch("/:id", branchController.updateBranch)
  .delete("/:id", branchController.deleteBranch);

// export all routes
exports.routers = routers;
