const { Parser } = require("json2csv");
const { pool } = require("../../config/db");

const exportEmployees = async (req, res) => {
    try {

        const query = `
            SELECT
                e.employeeCode,
                e.fullName,
                e.email,
                e.mobile,
                d.departmentName,
                e.designation,
                e.salary,
                e.status,
                e.createdAt
            FROM employees e
            JOIN departments d
            ON e.departmentId = d.id
            ORDER BY e.id;
        `;

        const result = await pool.query(query);

        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No employees found."
            });
        }

        const fields = [
            "employeecode",
            "fullname",
            "email",
            "mobile",
            "departmentname",
            "designation",
            "salary",
            "status",
            "createdat"
        ];

        const parser = new Parser({ fields });

        const csv = parser.parse(result.rows);

        res.header("Content-Type", "text/csv");
        res.attachment("employees.csv");

        return res.send(csv);

    } catch (err) {

        return res.status(500).json({
            success: false,
            message: err.message
        });

    }
};

module.exports = exportEmployees;