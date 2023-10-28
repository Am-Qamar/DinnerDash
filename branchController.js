const Branch = require("../models/branchModel");
const Company = require("../models/companyModel");

//get all branches
async function getAllBranches(req, res) {
  try {
    // fetching data from the database
    const allBraches = await Branch.find({}).exec();

    //checking data is receiving of not
    if (!allBraches) {
      throw new Error("No data found");
    } else {
      // Respond with a 200 OK status and a success message
      res.status(200).json(allBraches);
    }
  } catch (error) {
    console.error("Error fetching all companies:", error);

    // Handle errors by responding with a 500 Internal Server Error
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getBranch(req, res) {
  try {
    const id = req.params.id;

    //Find speific branch
    const oneBranch = await Branch.findOne({ _id: id })
      .populate("comId")
      .exec();

    //checking return data from the database
    if (!oneBranch) {
      throw new Error("No company found with this id");
    } else {
      // Respond with a 200 OK status and a success message
      res.status(200).json(oneBranch);
    }
  } catch (error) {
    console.error("Error:", error.message);

    // Handle errors by responding with a 500 Internal Server Error
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function createBranch(req, res) {
  try {
    const { comId, NOE, Location, NOS } = req.body;

    //checking input
    if (!comId || !NOE || !Location || !NOS) {
      throw new Error("Something is missing in the input");
    }

    // checking Compnay id is present or not
    const oneCompany = await Company.findOne({ _id: ComId });
    if (!oneCompany) {
      throw new Error("ComId is not defind!");
    }

    //creating object of the Model
    const newBranch = new Branch({ comId, NOE, Location, NOS });

    //save in branch
    await newBranch.save();

    // Respond with a 200 OK status and a success message
    res.status(200).json({ message: "Successfully created a company" });
  } catch (error) {
    console.error("Error:", error.message);

    // Handle errors by responding with a 500 Internal Server Error
    res.status(500).json({ error: "Internal Server Error" });
  }
}
async function replaceBranch(req, res) {
  try {
    const id = req.params.id;

    //find by ID and replace
    const ReplaceBranch = await Branch.findOneAndReplace({ _id: id }, req.body);
    if (!ReplaceBranch) {
      throw new Error("Not updated (PUT:Replace). Item not found ");
    } else {
      // Respond with a 200 OK status and a success message
      res.status(200).json({ message: "updateed succeefully(PUT:Replace)" });
    }
  } catch (error) {
    console.error("error", error.message);

    // Handle errors by responding with a 500 Internal Server Error
    res.status(500).json({ message: "Internal server error" });
  }
}
async function updateBranch(req, res) {
  try {
    const id = req.params.id;

    //find by ID and update
    const UpdateBranch = await Branch.findOneAndUpdate({ _id: id }, req.body);
    if (!UpdateBranch) {
      throw new Error("Not updated (PATCH:update). Item not found");
    } else {
      // Respond with a 200 OK status and a success message
      res.status(200).json({ message: "updateed succeefully(PATCH:update)" });
    }
  } catch (error) {
    console.error("error", error.message);

    // Handle errors by responding with a 500 Internal Server Error
    res.status(500).json({ message: "Internal server error" });
  }
}
async function deleteBranch(req, res) {
  try {
    const id = req.params.id;

    //find by ID and delete
    const deleteBranch = await Branch.findOneAndDelete({ _id: id });
    if (!deleteBranch) {
      throw new Error("Not Deleted. Item not found");
    } else {
      // Respond with a 200 OK status and a success message
      res.status(200).json({ message: "Deleted succeefully." });
    }
  } catch (error) {
    console.error("error", error.message);

    // Handle errors by responding with a 500 Internal Server Error
    res.status(500).json({ message: "Internal server error" });
  }
}
module.exports = {
  getAllBranches,
  getBranch,
  createBranch,
  replaceBranch,
  updateBranch,
  deleteBranch,
};
