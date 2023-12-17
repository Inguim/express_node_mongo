import express from "express";
import AutorController from "../controllers/autorController.js";

const autoresRoutes = express.Router();

autoresRoutes.get("/autores", AutorController.list);
autoresRoutes.get("/autores/:id", AutorController.find);
autoresRoutes.put("/autores/:id", AutorController.update);
autoresRoutes.post("/autores", AutorController.create);
autoresRoutes.delete("/autores/:id", AutorController.delete);

export default autoresRoutes;