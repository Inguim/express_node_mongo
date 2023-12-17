import moongose from "mongoose";
import { autorSchema } from "./Autor.js";

const livroSchema = new moongose.Schema({
  id: { type: moongose.Schema.Types.ObjectId },
  titulo: { type: String, required: true },
  editora: { type: String },
  preco: { type: Number },
  paginas: { type: Number },
  autor: autorSchema // abordagem utilizando embedding
  // autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true}, // abordagem utilizando referencing
}, { versionKey: false });


const livro = moongose.model("livros", livroSchema);

export default livro;