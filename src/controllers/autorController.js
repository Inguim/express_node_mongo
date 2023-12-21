import NotFound from "../erros/NotFound.js";
import { autor } from "../models/index.js";

class AutorController {
  static async list(req, res, next) {
    try {
      const listaAutores = await autor.find({});
      res.status(200).json(listaAutores);
    } catch (error) {
      next(error);
    }
  }

  static async find(req, res, next) {
    try {
      const id = req.params.id;
      const data = await autor.findById(id);
      if (!data) next(new NotFound("Id autor não localizado"));
      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async create(req, res, next) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({ message: "Criado com sucesso", livro: novoAutor });
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Atualizado com sucesso" });
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({ message: "Excluido com sucesso" });
    } catch (error) {
      next(error);
    }
  }
}

export default AutorController;
