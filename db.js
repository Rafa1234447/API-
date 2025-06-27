//const { Pool } = require("pg");
import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  connectionString:
    "postgresql://rafa_avew_user:XmfCRcNCAFNLCR5R2DOi5mLyEVOfKcMS@dpg-d1fc32vgi27c73clfj90-a.oregon-postgres.render.com/rafa_avew",
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
