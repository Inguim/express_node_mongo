import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroController {
  static async list(req, res, next) {
    const { editora } = req.query;
    let filters = { editora };
    try {
      Object.keys(filters).map(key => {
        if(!filters[key]) delete filters[key];
      });
      const listaLivros = await livro.find({ ...filters });
      // const listaLivros = await livro.find({}).populate("autor").exec(); // abordagem utilizando referencing
      res.status(200).json(listaLivros);
    } catch (error) {
      next(error);
    }
  }

  static async find(req, res, next) {
    try {
      const id = req.params.id;
      const data = await livro.findById(id);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async create(req, res, next) {
    const body = req.body;
    try {
      const autorData = await autor.findById(body.autor); // abordagem utilizando embedding
      const data = { ...body, autor: autorData ? { ...autorData._doc } : null }; // abordagem utilizando embedding
      const novoLivro = await livro.create(data); // abordagem utilizando referencing
      res.status(201).json({ message: "Criado com sucesso", livro: novoLivro });
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    const { autor: autorId, ...livroBody } = req.body;
    let data = { ...livroBody }; // abordagem utilizando embedding
    // const data = req.body; // abordagem utilizando referencing
    try {
      if (autorId) {
        // abordagem utilizando embedding
        const autorData = await autor.findById(autorId);
        data = { ...data, autor: { ...autorData._doc } };
      }
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, data);
      res.status(200).json({ message: "Atualizado com sucesso" });
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).json({ message: "Excluido com sucesso" });
    } catch (error) {
      next(error);
    }
  }
}

export default LivroController;
