import express from "express";
import LivroController from "../controllers/livroController.js";

const livrosRoutes = express.Router();

livrosRoutes.get("/livros", LivroController.list);
livrosRoutes.get("/livros/:id", LivroController.find);
livrosRoutes.put("/livros/:id", LivroController.update);
livrosRoutes.post("/livros", LivroController.create);
livrosRoutes.delete("/livros/:id", LivroController.delete);

export default livrosRoutes;