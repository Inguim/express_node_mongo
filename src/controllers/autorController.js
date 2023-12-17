import { autor } from "../models/Autor.js";

class AutorController {
  static async list(req, res) {
    try {
      const listaAutores = await autor.find({});
      res.status(200).json(listaAutores);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha na requisição` });
    }
  }

  static async find(req, res) {
    try {
      const id = req.params.id;
      const data = await autor.findById(id);
      res.status(200).json(data);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha na requisição` });
    }
  }

  static async create(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({ message: "Criado com sucesso", livro: novoAutor });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha na inclusão` });
    }
  }

  static async update(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Atualizado com sucesso" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha na atualização` });
    }
  }

  static async delete(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({ message: "Excluido com sucesso" });;
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha na exclusão` });
    }
  }
}

export default AutorController;
