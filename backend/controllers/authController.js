import User from "../models/userModel.js";
import { comparePassword, hashPassword } from "../utils/passwordUtils.js";
import { StatusCodes } from "http-status-codes";
import { createJWT } from "../utils/tokenUtils.js";
import {
  BadRequestError,
  UnauthenticatedError,
} from "../errors/customErrors.js";

export const register = async (req, res) => {
  const {
    name,
    email,
    password,
    selectedTopics,
    dateOfBirth,
    profession,
    gender,
  } = req.body;
  req.body.password = await hashPassword(password);

  // const user = await User.create({
  //   name,
  //   email,
  //   password: req.body.password,
  //   interest: selectedTopics,
  //   dateOfBirth,
  //   profession,
  //   gender,
  // });
  // res.status(StatusCodes.CREATED).json({ message: "User registered." });
  console.log(name, email, password, dateOfBirth, profession, gender);
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  // const userExist = await User.findOne({ email });

  // if (!userExist) {
  //   throw new BadRequestError("User does not exist.");
  // }

  // const validatePassword = await comparePassword(password, userExist.password);
  // if (!validatePassword) {
  //   throw new UnauthenticatedError("Invalid credentials.");
  // }

  // const token = createJWT({ id: userExist._id, user: userExist.name });

  // res.cookie("token", token, {
  //   httpOnly: true,
  //   expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
  //   secure: process.env.NODE_ENV === "production",
  // });
  // res.status(StatusCodes.OK).json({
  //   id: userExist._id,
  //   name: userExist.name,
  //   message: "User logged in.",
  // });
};

export const getUser = async (req, res) => {
  const { id } = req.params;
  console.log(id);
};
