import { Router } from "express";

const router = Router();

const products = []; // Array para almacenar los productos temporalmente

// Ruta GET para obtener los productos
router.get("/api/products", (req, res) => {
  res.json(products);
});

// Exportar el router
export default router;
