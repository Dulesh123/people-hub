const departmentModel = require("../../models/model");

const createDepartment = async (req, res) => {

    try {

        const { departmentName } = req.body;

        if (!departmentName) {
            return res.status(400).json({
                success: false,
                message: "Department name is required"
            });
        }

        const departmentExists = await departmentModel.checkDepartmentExists(departmentName);

        if (departmentExists) {
            return res.status(400).json({
                success: false,
                message: "Department already exists"
            });
        }

        const department = await departmentModel.createDepartment(departmentName);

        return res.status(201).json({
            success: true,
            data: department
        });

    } catch (err) {

        return res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

module.exports = createDepartment;