import moongose from "mongoose";
import { autorSchema } from "./Autor.js";

const livroSchema = new moongose.Schema({
  id: { type: moongose.Schema.Types.ObjectId },
  titulo: { 
    type: String, 
    required: [true, "O campo 'titulo' é obrigatório"] 
  },
  editora: { 
    type: String, 
    required: [true, "O campo 'editora' é obrigatório"] 
  },
  preco: { type: Number },
  paginas: { type: Number },
  autor: autorSchema // abordagem utilizando embedding
  // autor: {type: moongose.Schema.Types.ObjectId, ref: 'autores', required: true}, // abordagem utilizando referencing
}, { versionKey: false });


const livro = moongose.model("livros", livroSchema);

export default livro;