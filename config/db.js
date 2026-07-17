const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const connectDB = async () => {
  try {
    const client = await pool.connect();
    console.log(" Connected to Neon PostgreSQL");
    client.release();
  } catch (error) {
    console.error("Failed to connect to Neon PostgreSQL");
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = {
  pool,
  connectDB,
};