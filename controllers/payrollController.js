const Payroll = require("../models/Payroll");

// CREATE
exports.createPayroll = async (req, res) => {
  try {
    const payroll = await Payroll.create(req.body);

    res.status(201).json(payroll);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL
exports.getPayrolls = async (req, res) => {
  try {
    const payrolls = await Payroll.find().populate("employee");

    res.status(200).json(payrolls);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET BY ID
exports.getPayrollById = async (req, res) => {
  try {
    const payroll = await Payroll.findById(req.params.id).populate("employee");

    if (!payroll) {
      return res.status(404).json({
        message: "Payroll not found",
      });
    }

    res.status(200).json(payroll);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
exports.updatePayroll = async (req, res) => {
  try {
    const payroll = await Payroll.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(payroll);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
exports.deletePayroll = async (req, res) => {
  try {
    await Payroll.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Payroll deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
