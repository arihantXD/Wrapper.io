import { UnauthenticatedError } from "../errors/customErrors";
import { verifyJWT } from "../utils/tokenUtils";

export const authenticateUser = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) throw new UnauthenticatedError("Authentication invalid.");

  try {
    const { id, user } = verifyJWT(token);
    req.user = { id, user };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication invalid.");
  }
};
