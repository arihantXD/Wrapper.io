import { StatusCodes } from "http-status-codes";

export const errorHandlingMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const message = err.message || "Something went wrong, try again later";

  res.status(statusCode).json({ message });
};
