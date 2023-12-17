import livro from "../models/Livro.js";

class LivroController {
  static async list(req, res) {
    try {
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha na requisição` });
    }
  }

  static async find(req, res) {
    try {
      const id = req.params.id;
      const data = await livro.findById(id);
      res.status(200).json(data);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha na requisição` });
    }
  }

  static async create(req, res) {
    try {
      const novoLivro = await livro.create(req.body);
      res.status(201).json({ message: "Criado com sucesso", livro: novoLivro });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha na inclusão` });
    }
  }

  static async update(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndUpdate(id, req.body);
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
      await livro.findByIdAndDelete(id);
      res.status(200).json({ message: "Excluido com sucesso" });;
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Falha na exclusão` });
    }
  }
}

export default LivroController;
