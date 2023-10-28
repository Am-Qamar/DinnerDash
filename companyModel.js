const mongoose = require("mongoose");

// Schema of model company using mongoose
const CompanySchema = new mongoose.Schema({
  //Name of the Company
  name: {
    type: String,
    required: true,
  },
  //Number of Employees company have
  NOE: {
    type: Number,
    required: true,
  },
  //Number of Branches company have
  NOB: {
    type: Number,
    required: true,
  },
  //Owner of the company
  owner: {
    type: String,
  },
});

//Creating Model Company
const companyModel = mongoose.model("Company", CompanySchema);

//export Model Company
module.exports = companyModel;
