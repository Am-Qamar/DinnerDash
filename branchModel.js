const mongoose = require("mongoose");

// Schema of model company using mongoose
const branchSchema = new mongoose.Schema({
  //Company Id (behave like foreign key)
  comId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
  // number of Employees branch have
  NOE: {
    type: Number,
    required: true,
  },
  // Location of the branch
  Location: {
    type: String,
    required: true,
  },
  // Number of systems Company
  NOS: {
    type: Number,
  },
});

const Branch = mongoose.model("Branch", branchSchema);
module.exports = Branch;
