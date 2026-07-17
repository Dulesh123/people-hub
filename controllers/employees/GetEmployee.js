const employeeModel = require("../../models/model");

const getEmployee = async (req, res) => {

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

        res.status(200).json({
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

module.exports = getEmployee;