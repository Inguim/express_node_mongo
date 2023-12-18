import moongose from "mongoose";

const autorSchema = new moongose.Schema({
  id: { type: moongose.Schema.Types.ObjectId },
  nome: { 
    type: String, 
    required: [true, "O campo 'nome' é obrigatório"] 
  },
  nacionalidade: { type: String },
}, { versionKey: false });


const autor = moongose.model("autores", autorSchema);

export { autor, autorSchema };