/* eslint-disable no-unused-vars */
import mongoose from "mongoose";
import BaseError from "../erros/BaseError.js";
import InvalidRequestError from "../erros/InvalidRequestError.js";
import ValidationError from "../erros/ValidationError.js";

function errorHandling(erro, req, res, next) {
  console.log("Erro:", erro.message);
  if (erro instanceof mongoose.Error.CastError) return new InvalidRequestError().sendResponse(res);
  if (erro instanceof mongoose.Error.ValidationError) return new ValidationError(erro).sendResponse(res);
  return new BaseError().sendResponse(res);
}

export default errorHandling;
