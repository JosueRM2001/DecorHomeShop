const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Middleware para procesar JSON en las solicitudes
app.use(bodyParser.json());

// Ruta POST para agregar productos
app.post("/api/products", (req, res) => {
  const { name, price, description, category } = req.body;

  // Validación de campos
  if (!name || !price || !description || !category) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  // Simulación de respuesta exitosa
  res.status(201).json({
    message: "Producto creado exitosamente",
    product: { name, price, description, category },
  });
});

// Ruta para manejar otras URLs no definidas
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Inicia el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
