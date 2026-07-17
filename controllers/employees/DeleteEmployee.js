const employeeModel = require("../../models/model");

const deleteEmployee = async (req, res) => {

    try {

        const { id } = req.params;

        const employee =
            await employeeModel.getEmployeeById(id);

        if (!employee) {

            return res.status(404).json({
                success: false,
                message: "Employee not found"
            });

        }

        await employeeModel.deleteEmployee(id);

        res.status(200).json({
            success: true,
            message: "Employee deleted successfully"
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

module.exports = deleteEmployee;