//const { Pool } = require("pg");
import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  connectionString:
    "postgresql://rafa_p761_user:70Xqropj3l9FCocIxEF4o5dD8Rnb27up@dpg-d2fo2ser433s73bk7vm0-a.oregon-postgres.render.com/rafa_p761",
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
