const Company = require("../models/companyModel");

async function getAllCompanies(req, res) {
  try {
    const allCompanies = await Company.find({}).exec();
    if (!allCompanies) {
      throw new Error("No data found");
    } else {
      // Respond with a 200 OK status and a success message
      res.status(200).json(allCompanies);
    }
  } catch (error) {
    console.error("Error fetching all companies:", error);

    // Handle errors by responding with a 500 Internal Server Error
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getCompany(req, res) {
  try {
    const id = req.params.id;

    // fetch Specific company
    const oneCompany = await Company.findOne({ _id: id }).exec();
    if (!oneCompany) {
      throw new Error("No company found with this id");
    } else {
      // Respond with a 200 OK status and a success message
      res.status(200).json(oneCompany);
    }
  } catch (error) {
    console.error("Error:", error.message);

    // Handle errors by responding with a 500 Internal Server Error
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function createCompany(req, res) {
  try {
    //taking data from the frontend
    const { name, NOE, NOB, owner } = req.body;

    //checking input
    if (!name || !NOE || !NOB || !owner) {
      throw new Error("Something is missing in the input");
    }

    //creating instance of the Model Company
    const newCompany = new Company({ name, NOE, NOB, owner });

    //Save in database
    await newCompany.save();

    // Respond with a 200 OK status and a success message
    res.status(200).json({ message: "Successfully created a company" });
  } catch (error) {
    console.error("Error:", error.message);

    // Handle errors by responding with a 500 Internal Server Error
    res.status(500).json({ error: "Internal Server Error" });
  }
}
async function replaceCompany(req, res) {
  try {
    const id = req.params.id;

    //Find by id and Replace
    const ReplaceCompany = await Company.findOneAndReplace(
      { _id: id },
      req.body
    );
    if (!ReplaceCompany) {
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
async function updateCompany(req, res) {
  try {
    const id = req.params.id;

    //Find by id and update
    const updateCompany = await Company.findOneAndUpdate({ _id: id }, req.body);

    if (!updateCompany) {
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

async function deleteCompany(req, res) {
  try {
    const id = req.params.id;

    //Find by id and delete
    const deleteCompany = await Company.findOneAndDelete({ _id: id });
    if (!deleteCompany) {
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
  getAllCompanies,
  getCompany,
  createCompany,
  replaceCompany,
  updateCompany,
  deleteCompany,
};
