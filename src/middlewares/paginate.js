import InvalidRequestError from "../erros/InvalidRequestError.js";

async function paginate (req, res, next) {
  let { limit = 1, page = 1, ordering = "_id:-1" } = req.query;
  const livroQuery = req.result;
  try {
    let [orderField, order] = ordering.split(":");
    limit = parseInt(limit);
    page = parseInt(page);
    order = parseInt(order);
  
    if (limit < 0 || isNaN(limit) || page < 0 || isNaN(page))
      throw new InvalidRequestError(
        "Os valores de 'limit' e 'page' devem ser maiores que 0"
      );
    const results = await livroQuery
      .find()
      .sort({ [orderField]: order })
      .skip((page - 1) * limit)
      .limit(limit);
    res.status(200).json(results);
  } catch (error) {
    next(error);
  }
}

export default paginate;