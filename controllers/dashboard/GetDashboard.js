const { pool } = require("../../config/db");

const getDashboard = async (req, res) => {

    try {

        // Total Employees
        const totalEmployees = await pool.query(`
            SELECT COUNT(*) AS total
            FROM employees;
        `);

        // Active Employees
        const activeEmployees = await pool.query(`
            SELECT COUNT(*) AS total
            FROM employees
            WHERE status = 'Active';
        `);

        // Inactive Employees
        const inactiveEmployees = await pool.query(`
            SELECT COUNT(*) AS total
            FROM employees
            WHERE status = 'Inactive';
        `);

        // Total Departments
        const totalDepartments = await pool.query(`
            SELECT COUNT(*) AS total
            FROM departments;
        `);

        // Employees Per Department
        const employeesPerDepartment = await pool.query(`
            SELECT
                d.id,
                d.departmentName,
                COUNT(e.id) AS totalEmployees
            FROM departments d
            LEFT JOIN employees e
            ON d.id = e.departmentId
            GROUP BY d.id, d.departmentName
            ORDER BY d.departmentName;
        `);

        res.status(200).json({
            success: true,
            data: {
                totalEmployees: Number(totalEmployees.rows[0].total),
                activeEmployees: Number(activeEmployees.rows[0].total),
                inactiveEmployees: Number(inactiveEmployees.rows[0].total),
                totalDepartments: Number(totalDepartments.rows[0].total),
                employeesPerDepartment: employeesPerDepartment.rows
            }
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

module.exports = getDashboard;