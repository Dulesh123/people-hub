const createDepartment = require("../controllers/departments/CreateDepartment");
const getDepartments = require("../controllers/departments/GetDepartments");
const updateDepartment = require("../controllers/departments/UpdateDepartment");
const deleteDepartment = require("../controllers/departments/DeleteDepartment");

module.exports = (app) => {

    // Create Department
    app.post("/departments", (req, res) => {
        createDepartment(req, res);
    });

    // Get All Departments
    app.get("/departments", (req, res) => {
        getDepartments(req, res);
    });

    // Update Department
    app.put("/departments/:id", (req, res) => {
        updateDepartment(req, res);
    });

    // Delete Department
    app.delete("/departments/:id", (req, res) => {
        deleteDepartment(req, res);
    });

};