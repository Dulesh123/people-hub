require("dotenv").config();

const express = require("express");

const { connectDB } = require("./config/db");

const CreateDepartment = require("./controllers/departments/CreateDepartment");
const GetDepartments = require("./controllers/departments/GetDepartments");
const UpdateDepartment = require("./controllers/departments/UpdateDepartment");
const DeleteDepartment = require("./controllers/departments/DeleteDepartment");

const CreateEmployee = require("./controllers/employees/CreateEmployee");
const GetEmployees = require("./controllers/employees/GetEmployees");
const GetEmployee = require("./controllers/employees/GetEmployee");
const UpdateEmployee = require("./controllers/employees/UpdateEmployee");
const DeleteEmployee = require("./controllers/employees/DeleteEmployee");
const UpdateStatus = require("./controllers/employees/UpdateStatus");
const ExportEmployees = require("./controllers/employees/ExportEmployees");

const GetDashboard = require("./controllers/dashboard/GetDashboard");

const app = express();

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.send("People Hub API Running...");
});

// Department Routes

app.post("/departments", (req, res) => {
    CreateDepartment(req, res);
});

app.get("/departments", (req, res) => {
    GetDepartments(req, res);
});

app.put("/departments/:id", (req, res) => {
    UpdateDepartment(req, res);
});

app.delete("/departments/:id", (req, res) => {
    DeleteDepartment(req, res);
});

// Employee Routes

app.post("/employees", (req, res) => {
    CreateEmployee(req, res);
});

app.get("/employees", (req, res) => {
    GetEmployees(req, res);
});

app.get("/employees/export", (req, res) => {
    ExportEmployees(req, res);
});

app.get("/employees/:id", (req, res) => {
    GetEmployee(req, res);
});

app.put("/employees/:id", (req, res) => {
    UpdateEmployee(req, res);
});

app.delete("/employees/:id", (req, res) => {
    DeleteEmployee(req, res);
});

app.patch("/employees/:id/status", (req, res) => {
    UpdateStatus(req, res);
});

// Dashboard

app.get("/dashboard", (req, res) => {
    GetDashboard(req, res);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});