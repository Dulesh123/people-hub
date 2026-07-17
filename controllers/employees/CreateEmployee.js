const employeeModel = require("../../models/model");

const createEmployee = async (req, res) => {
    try {

        const {
            employeeCode,
            fullName,
            email,
            mobile,
            departmentId,
            designation,
            salary,
            status
        } = req.body;

        // Validation
        if (!fullName) {
            return res.status(400).json({
                success: false,
                message: "Full Name is required"
            });
        }

        if (!/^[0-9]+$/.test(mobile)) {
            return res.status(400).json({
                success: false,
                message: "Mobile should contain only digits"
            });
        }

        // Employee Code Check
        const employeeCodeExists =
            await employeeModel.checkEmployeeCode(employeeCode);

        if (employeeCodeExists) {
            return res.status(400).json({
                success: false,
                message: "Employee Code already exists"
            });
        }

        // Email Check
        const emailExists =
            await employeeModel.checkEmployeeEmail(email);

        if (emailExists) {
            return res.status(400).json({
                success: false,
                message: "Email already exists"
            });
        }

        // Department Check
        const department =
            await employeeModel.checkDepartment(departmentId);

        if (!department) {
            return res.status(400).json({
                success: false,
                message: "Department does not exist"
            });
        }

        const employee =
            await employeeModel.createEmployee(req.body);

        res.status(201).json({
            success: true,
            data: employee
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }
};

module.exports = createEmployee;