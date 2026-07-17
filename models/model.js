const { pool } = require("../config/db");

// Create Department
const createDepartment = async (departmentName) => {
    const query = `
        INSERT INTO departments (departmentName)
        VALUES ($1)
        RETURNING *;
    `;

    const result = await pool.query(query, [departmentName]);
    return result.rows[0];
};

// Get All Departments
const getAllDepartments = async () => {
    const query = `
        SELECT *
        FROM departments
        ORDER BY id;
    `;

    const result = await pool.query(query);
    return result.rows;
};

// Get Department By Id
const getDepartmentById = async (id) => {
    const query = `
        SELECT *
        FROM departments
        WHERE id = $1;
    `;

    const result = await pool.query(query, [id]);
    return result.rows[0];
};

// Check Duplicate Department
const checkDepartmentExists = async (departmentName) => {
    const query = `
        SELECT *
        FROM departments
        WHERE departmentName = $1;
    `;

    const result = await pool.query(query, [departmentName]);
    return result.rows[0];
};

// Update Department
const updateDepartment = async (id, departmentName) => {
    const query = `
        UPDATE departments
        SET departmentName = $1
        WHERE id = $2
        RETURNING *;
    `;

    const result = await pool.query(query, [departmentName, id]);
    return result.rows[0];
};

// Count Employees in Department
const countEmployees = async (departmentId) => {
    const query = `
        SELECT COUNT(*) AS total
        FROM employees
        WHERE departmentId = $1;
    `;

    const result = await pool.query(query, [departmentId]);
    return parseInt(result.rows[0].total);
};

// Delete Department
const deleteDepartment = async (id) => {
    const query = `
        DELETE FROM departments
        WHERE id = $1;
    `;

    await pool.query(query, [id]);
};

// Check Employee Code
const checkEmployeeCode = async (employeeCode) => {
    const query = `
        SELECT *
        FROM employees
        WHERE employeeCode = $1;
    `;

    const result = await pool.query(query, [employeeCode]);
    return result.rows[0];
};

// Check Employee Email
const checkEmployeeEmail = async (email) => {
    const query = `
        SELECT *
        FROM employees
        WHERE email = $1;
    `;

    const result = await pool.query(query, [email]);
    return result.rows[0];
};

// Check Department Exists
const checkDepartment = async (departmentId) => {
    const query = `
        SELECT *
        FROM departments
        WHERE id = $1;
    `;

    const result = await pool.query(query, [departmentId]);
    return result.rows[0];
};

// Create Employee
const createEmployee = async (employee) => {

    const query = `
        INSERT INTO employees
        (
            employeeCode,
            fullName,
            email,
            mobile,
            departmentId,
            designation,
            salary,
            status
        )
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
        RETURNING *;
    `;

    const values = [
        employee.employeeCode,
        employee.fullName,
        employee.email,
        employee.mobile,
        employee.departmentId,
        employee.designation,
        employee.salary,
        employee.status
    ];

    const result = await pool.query(query, values);

    return result.rows[0];
};

// Get All Employees
const getAllEmployees = async () => {

    const query = `
        SELECT
            e.*,
            d.departmentName
        FROM employees e
        JOIN departments d
        ON e.departmentId = d.id
        ORDER BY e.id;
    `;

    const result = await pool.query(query);

    return result.rows;
};

// Get Employee By Id
const getEmployeeById = async (id) => {

    const query = `
        SELECT
            e.*,
            d.departmentName
        FROM employees e
        JOIN departments d
        ON e.departmentId = d.id
        WHERE e.id = $1;
    `;

    const result = await pool.query(query, [id]);

    return result.rows[0];
};

// Update Employee
const updateEmployee = async (id, employee) => {

    const query = `
        UPDATE employees
        SET
            employeeCode=$1,
            fullName=$2,
            email=$3,
            mobile=$4,
            departmentId=$5,
            designation=$6,
            salary=$7,
            status=$8
        WHERE id=$9
        RETURNING *;
    `;

    const values = [
        employee.employeeCode,
        employee.fullName,
        employee.email,
        employee.mobile,
        employee.departmentId,
        employee.designation,
        employee.salary,
        employee.status,
        id
    ];

    const result = await pool.query(query, values);

    return result.rows[0];
};

// Delete Employee
const deleteEmployee = async (id) => {

    const query = `
        DELETE FROM employees
        WHERE id = $1;
    `;

    await pool.query(query, [id]);
};

// Update Employee Status
const updateEmployeeStatus = async (id, status) => {

    const query = `
        UPDATE employees
        SET status = $1
        WHERE id = $2
        RETURNING *;
    `;

    const result = await pool.query(query, [status, id]);

    return result.rows[0];
};
module.exports = {

    // Department
    createDepartment,
    getAllDepartments,
    getDepartmentById,
    checkDepartmentExists,
    updateDepartment,
    countEmployees,
    deleteDepartment,

    // Employee
    checkEmployeeCode,
    checkEmployeeEmail,
    checkDepartment,
    createEmployee,
    getAllEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee,
    updateEmployeeStatus

};