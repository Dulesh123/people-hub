const { pool } = require("../../config/db");

const getEmployees = async (req, res) => {

    try {

        let {
            page = 1,
            limit = 10,
            search = "",
            department = "",
            status = ""
        } = req.query;

        page = parseInt(page);
        limit = parseInt(limit);

        let query = `
            SELECT
                e.*,
                d.departmentName
            FROM employees e
            JOIN departments d
            ON e.departmentId = d.id
            WHERE 1=1
        `;

        const values = [];
        let count = 1;

        if (search) {

            query += `
                AND (
                    LOWER(e.fullName) LIKE LOWER($${count})
                    OR LOWER(e.employeeCode) LIKE LOWER($${count})
                )
            `;

            values.push(`%${search}%`);
            count++;

        }

        if (department) {

            query += `
                AND e.departmentId = $${count}
            `;

            values.push(department);
            count++;

        }

        if (status) {

            query += `
                AND e.status = $${count}
            `;

            values.push(status);
            count++;

        }

        query += `
            ORDER BY e.id
            LIMIT $${count}
            OFFSET $${count + 1}
        `;

        values.push(limit);
        values.push((page - 1) * limit);

        const result = await pool.query(query, values);

        res.status(200).json({
            success: true,
            page,
            limit,
            total: result.rows.length,
            data: result.rows
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

module.exports = getEmployees;