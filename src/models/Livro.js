import moongose from "mongoose";
import { autorSchema } from "./Autor.js";

const livroSchema = new moongose.Schema(
  {
    id: { type: moongose.Schema.Types.ObjectId },
    titulo: {
      type: String,
      required: [true, "O campo 'titulo' é obrigatório"],
    },
    editora: {
      type: String,
      required: [true, "O campo 'editora' é obrigatório"],
      enum: {
        values: ["Classicos", "Novos"],
        message: "A editora '{VALUE}' não é um valor permitido",
      },
    },
    preco: { type: Number },
    paginas: {
      type: Number,
      validate: {
        validator: (value) => {
          return value >= 10 && value <= 5000;
        },
        message: "O número de páginas deve estar entre 10 e 5000: Valor fornecido '{VALUE}'"
      },
    },
    autor: autorSchema, // abordagem utilizando embedding
    // autor: {type: moongose.Schema.Types.ObjectId, ref: 'autores', required: true}, // abordagem utilizando referencing
  },
  { versionKey: false }
);

const livro = moongose.model("livros", livroSchema);

export { livro, livroSchema };
