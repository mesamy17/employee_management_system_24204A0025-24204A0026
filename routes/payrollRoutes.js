const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  createPayroll,
  getPayrolls,
  getPayrollById,
  updatePayroll,
  deletePayroll,
} = require("../controllers/payrollController");

router.post("/", authMiddleware, createPayroll);

router.get("/", authMiddleware, getPayrolls);

router.get("/:id", authMiddleware, getPayrollById);

router.put("/:id", authMiddleware, updatePayroll);

router.delete("/:id", authMiddleware, deletePayroll);

module.exports = router;
