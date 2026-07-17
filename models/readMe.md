# People Hub Backend

A Node.js + Express + PostgreSQL backend application for managing Departments and Employees.

## Tech Stack

- Node.js
- Express.js
- PostgreSQL (NeonDB)
- pg
- dotenv

---

## Project Setup

### 1. Clone the repository

```bash
git clone <repository-url>
cd People-hub
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Create a Neon Database

1. Go to **https://neon.tech**
2. Create a new PostgreSQL database.
3. Copy the connection string.

---

### 4. Configure Environment Variables

Create a `.env` file in the project root.

```env
PORT=5000

DATABASE_URL=YOUR_NEON_DATABASE_URL
```

Example:

```env
PORT=5000

DATABASE_URL=postgresql://username:password@host/database?sslmode=require
```

---

### 5. Start the Server

```bash
node app.js
```

If everything is configured correctly, you should see:

```
🚀 Server running on http://localhost:5000
✅ Connected to Neon PostgreSQL
```

---

## Server

The application runs on:

```
http://localhost:5000
```

If you change the `PORT` value in the `.env` file, the server will run on that port instead.

Example:

```env
PORT=3000
```

Then the server URL becomes:

```
http://localhost:3000
```

---

## API Endpoints

### Departments

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/departments` | Create Department |
| GET | `/departments` | Get All Departments |
| PUT | `/departments/:id` | Update Department |
| DELETE | `/departments/:id` | Delete Department |

---

### Employees

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/employees` | Create Employee |
| GET | `/employees` | Get All Employees |
| GET | `/employees/:id` | Get Employee By ID |
| PUT | `/employees/:id` | Update Employee |
| DELETE | `/employees/:id` | Delete Employee |
| PATCH | `/employees/:id/status` | Update Employee Status |
| GET | `/employees/export` | Export Employees to CSV |

---

### Dashboard

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/dashboard` | Dashboard Statistics |

---

## Features

- Department CRUD
- Employee CRUD
- Employee Search
- Pagination
- Department Filter
- Status Filter
- Dashboard Statistics
- CSV Export
- PostgreSQL (NeonDB)

---

## Author

**Dulesh Shivakale**