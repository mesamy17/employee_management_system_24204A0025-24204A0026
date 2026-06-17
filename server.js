require("dotenv").config();

const express = require("express");

const cors = require("cors");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");

const employeeRoutes = require("./routes/employeeRoutes");

const departmentRoutes = require("./routes/departmentRoutes");

const attendanceRoutes = require("./routes/attendanceRoutes");

const payrollRoutes = require("./routes/payrollRoutes");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/employees", employeeRoutes);

app.use("/api/departments", departmentRoutes);

app.use("/api/attendance", attendanceRoutes);

app.use("/api/payroll", payrollRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});
