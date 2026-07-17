const departmentModel = require("../../models/model");

const getDepartments = async (req, res) => {

    try {

        const departments = await departmentModel.getAllDepartments();

        return res.status(200).json({
            success: true,
            data: departments
        });

    } catch (err) {

        return res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

module.exports = getDepartments;