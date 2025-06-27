ost("/savedata", async (req, res) => {
  const { id, value } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO data (id, value) VALUES 
      ($1, $2) RETURNING *;`,
      [id, value]
    );

    return res.status(201).json({
      message: "✅ Datos guardados exitosamente",
      data: result.rows[0],
    });
  } catch (err) {
    console.error("❌ Error:", err.message);
    res.status(500).json({ error: "Error al guardar los datos" });
  }
});

app.get("/temperature", (req, res) => {
  res.json({ valor: "10 °C", timestamp: new Date().toISOString() });
});

app.get("/esteesotroenpoint", (req, res) => {
  res.json({ valor: "Hola mundo", timestamp: new Date().toISOString() });
});

app.get("/velocidad", (req, res) => {
  res.json({ nombre: "Rodolfo ", apellido: "Guerra Garcia" });
});

app.get("/UTLD", (req, res) => {
  res.json({ tipo: "Universidad Tecnologica", locacion: "De La Laguna" });
});

app.listen(PORT, () => {
  console.log(`Server corriendo en puerto ${PORT}`);
});
