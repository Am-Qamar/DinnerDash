const express = require("express");
const mongoose = require("mongoose");
const companyController = require("./controllers/companyController");
const companyRouter = require("./routes/companyRoutes");
const branchRouter = require("./routes/branchRoutes");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

// Define the port to listen
const port = process.env.PORT || 3000;

//connecting to mongoose
mongoose
  .connect("mongodb://127.0.0.1:27017/CompaniesRecord", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to MongoDB on localhost");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Use the Company routes defined in companyRouter
app.use("/companies", companyRouter.routers);
// Use the branch routes defined in branchRouter
app.use("/branches", branchRouter.routers);

// listening to the Port
app.listen(port, function () {
  console.log("server is running");
});
