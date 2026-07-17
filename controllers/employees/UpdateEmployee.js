const employeeModel = require("../../models/model");

const updateEmployee = async (req, res) => {
    try {

        const { id } = req.params;

        const employee = await employeeModel.getEmployeeById(id);

        if (!employee) {
            return res.status(404).json({
                success: false,
                message: "Employee not found"
            });
        }

        const {
            fullName,
            email,
            mobile,
            departmentId
        } = req.body;

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

        const department =
            await employeeModel.checkDepartment(departmentId);

        if (!department) {
            return res.status(400).json({
                success: false,
                message: "Department does not exist"
            });
        }

        const updatedEmployee =
            await employeeModel.updateEmployee(id, req.body);

        res.status(200).json({
            success: true,
            data: updatedEmployee
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }
};

module.exports = updateEmployee;