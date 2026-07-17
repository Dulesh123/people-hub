const createEmployee = require("../controllers/employees/CreateEmployee");
const getEmployees = require("../controllers/employees/GetEmployees");
const getEmployee = require("../controllers/employees/GetEmployee");
const updateEmployee = require("../controllers/employees/UpdateEmployee");
const deleteEmployee = require("../controllers/employees/DeleteEmployee");
const updateStatus = require("../controllers/employees/UpdateStatus");
const exportEmployees = require("../controllers/employees/ExportEmployees");

module.exports = (app) => {

    // Create Employee
    app.post("/employees", (req, res) => {
        createEmployee(req, res);
    });

    // Get All Employees
    app.get("/employees", (req, res) => {
        getEmployees(req, res);
    });

    // Export Employees
    app.get("/employees/export", (req, res) => {
        exportEmployees(req, res);
    });

    // Get Employee By ID
    app.get("/employees/:id", (req, res) => {
        getEmployee(req, res);
    });

    // Update Employee
    app.put("/employees/:id", (req, res) => {
        updateEmployee(req, res);
    });

    // Delete Employee
    app.delete("/employees/:id", (req, res) => {
        deleteEmployee(req, res);
    });

    // Update Employee Status
    app.patch("/employees/:id/status", (req, res) => {
        updateStatus(req, res);
    });

};