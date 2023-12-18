import BaseError from "./BaseError.js";

class ValidationError extends BaseError {
  constructor(erro = {}) {
    const messagesErros = Object.values(erro.errors)
      .map(erro => erro.message)
      .join("; ");
    super(`Ocorreram os seguintes erros: ${messagesErros}`, 400);
  }
}

export default ValidationError;