const express = require("express");
const companyController = require("../controllers/companyController");
const routers = express.Router();

// all routes of Company (Create ,GETall, GETOne, Put, Patch, Delete)
routers
  .post("/", companyController.createCompany)
  .get("/", companyController.getAllCompanies)
  .get("/:id", companyController.getCompany)
  .put("/:id", companyController.replaceCompany)
  .patch("/:id", companyController.updateCompany)
  .delete("/:id", companyController.deleteCompany);

//export all routes
exports.routers = routers;
