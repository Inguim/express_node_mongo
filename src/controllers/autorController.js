import { autor } from "../models/Autor.js";
import moongose from "mongoose";

class AutorController {
  static async list(req, res) {
    try {
      const listaAutores = await autor.find({});
      res.status(200).json(listaAutores);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Falha na requisição" });
    }
  }

  static async find(req, res) {
    try {
      const id = req.params.id;
      const data = await autor.findById(id);
      if (!data) {
        return res.status(404).json({ message: "Id autor não localizado" });
      }
      return res.status(200).json(data);
    } catch (error) {
      if (error instanceof moongose.Error.CastError) {
        return res
          .status(400)
          .json({ message: "Um ou mais dados fornecidos estão incorretos" });
      } 
      console.log(error);
      return res
        .status(500)
        .json({ message: "Falha na requisição" });
    }
  }

  static async create(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({ message: "Criado com sucesso", livro: novoAutor });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha na inclusão` });
    }
  }

  static async update(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Atualizado com sucesso" });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Falha na atualização" });
    }
  }

  static async delete(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({ message: "Excluido com sucesso" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Falha na exclusão" });
    }
  }
}

export default AutorController;
