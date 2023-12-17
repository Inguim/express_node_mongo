/* eslint-disable no-unused-vars */
import mongoose from "mongoose";

function errorHandling(erro, req, res, next) {
  console.log("Erro:", erro.message);
  if (erro instanceof mongoose.Error.CastError) {
    return res
      .status(400)
      .send({ message: "Um ou mais dados fornecidos estão incorretos." });
  }
  return res.status(500).send({ message: "Erro interno de servidor." });
}

export default errorHandling;
