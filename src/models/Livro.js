import moongose from "mongoose";

const livroSchema = new moongose.Schema({
    id: { type: moongose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number },
}, { versionKey: false });


const livro = moongose.model("livros", livroSchema);

export default livro;