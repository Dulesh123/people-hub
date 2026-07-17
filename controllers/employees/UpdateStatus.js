const employeeModel = require("../../models/model");

const updateStatus = async (req, res) => {

    try {

        const { id } = req.params;

        const { status } = req.body;

        if (status !== "Active" && status !== "Inactive") {

            return res.status(400).json({
                success: false,
                message: "Status must be Active or Inactive"
            });

        }

        const employee =
            await employeeModel.getEmployeeById(id);

        if (!employee) {

            return res.status(404).json({
                success: false,
                message: "Employee not found"
            });

        }

        const updatedEmployee =
            await employeeModel.updateEmployeeStatus(id, status);

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

module.exports = updateStatus;