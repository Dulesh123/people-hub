const departmentModel = require("../../models/model");

const deleteDepartment = async (req, res) => {

    try {

        const { id } = req.params;

        const department = await departmentModel.getDepartmentById(id);

        if (!department) {
            return res.status(404).json({
                success: false,
                message: "Department not found"
            });
        }

        const totalEmployees = await departmentModel.countEmployees(id);

        if (totalEmployees > 0) {

            return res.status(400).json({
                success: false,
                message: "Department contains employees"
            });

        }

        await departmentModel.deleteDepartment(id);

        return res.status(200).json({
            success: true,
            message: "Department deleted successfully"
        });

    } catch (err) {

        return res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

module.exports = deleteDepartment;