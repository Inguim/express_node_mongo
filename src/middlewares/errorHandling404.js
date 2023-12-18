import NotFound from "../erros/NotFound.js";

function errorHandling404(req, res, next) {
  const error = new NotFound();
  next(error);
}

export default errorHandling404;