import User from "../models/userModel.js";
import { comparePassword, hashPassword } from "../utils/passwordUtils.js";
import { StatusCodes } from "http-status-codes";
import { createJWT } from "../utils/tokenUtils.js";
import {
  BadRequestError,
  UnauthenticatedError,
} from "../errors/customErrors.js";

export const register = async (req, res) => {
  const { name, email, password, selectedTopics } = req.body;
  req.body.password = await hashPassword(password);

  const user = await User.create({
    name,
    email,
    password: req.body.password,
    interest: selectedTopics,
  });
  res.status(StatusCodes.CREATED).json({ message: "User registered." });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  console.log(password);
  const userExist = await User.findOne({ email });

  if (!userExist) {
    throw new BadRequestError("User does not exist.");
  }

  const validatePassword = await comparePassword(password, userExist.password);
  console.log(validatePassword);
  if (!validatePassword) {
    throw new UnauthenticatedError("Invalid credentials.");
  }

  const token = createJWT({ id: userExist._id, user: userExist.name });

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    secure: process.env.NODE_ENV === "production",
  });

  res.status(StatusCodes.OK).json({ message: "User logged in." });
};
