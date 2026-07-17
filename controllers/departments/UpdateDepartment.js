const departmentModel = require("../../models/model");

const updateDepartment = async (req, res) => {

    try {

        const { id } = req.params;
        const { departmentName } = req.body;

        const department = await departmentModel.getDepartmentById(id);

        if (!department) {
            return res.status(404).json({
                success: false,
                message: "Department not found"
            });
        }

        const updatedDepartment = await departmentModel.updateDepartment(id, departmentName);

        return res.status(200).json({
            success: true,
            data: updatedDepartment
        });

    } catch (err) {

        return res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

module.exports = updateDepartment;