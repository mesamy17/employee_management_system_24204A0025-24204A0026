const Attendance = require("../models/Attendance");

// CREATE
exports.createAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.create(req.body);

    res.status(201).json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL
exports.getAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find().populate("employee");

    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET BY ID
exports.getAttendanceById = async (req, res) => {
  try {
    const attendance = await Attendance.findById(req.params.id).populate(
      "employee",
    );

    if (!attendance) {
      return res.status(404).json({
        message: "Attendance not found",
      });
    }

    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
exports.updateAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );

    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
exports.deleteAttendance = async (req, res) => {
  try {
    await Attendance.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Attendance deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
