//const { Pool } = require("pg");
import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  connectionString:
    "postgresql://root:77v7Mq1v7rF8cPfypf25TCooGsQ0v3Gs@dpg-d1fcjaur433s73b4s8t0-a.oregon-postgres.render.com/rafa_ywrl",
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;

/*
async function testConection() {
  try {
    const client = await pool.connect();
    console.log("Conexion exitosa");
    client.release();
    await pool.end();
  } catch (err) {
    console.err("Error al conectar", err);
  }
}

testConection();*/
