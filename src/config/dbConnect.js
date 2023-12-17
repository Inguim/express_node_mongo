import moongose from "mongoose";

async function conectaNaDatabase() {
  moongose.connect(process.env.DB_CONECTION_STRING);
  return moongose.connection;
}

export default conectaNaDatabase;
