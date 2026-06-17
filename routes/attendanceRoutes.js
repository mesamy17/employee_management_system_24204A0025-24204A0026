const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  createAttendance,
  getAttendance,
  getAttendanceById,
  updateAttendance,
  deleteAttendance,
} = require("../controllers/attendanceController");

router.post("/", authMiddleware, createAttendance);

router.get("/", authMiddleware, getAttendance);

router.get("/:id", authMiddleware, getAttendanceById);

router.put("/:id", authMiddleware, updateAttendance);

router.delete("/:id", authMiddleware, deleteAttendance);

module.exports = router;
