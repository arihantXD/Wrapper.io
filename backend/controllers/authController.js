import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import { comparePassword, hashPassword } from "../utils/passwordUtils.js";
import { StatusCodes } from "http-status-codes";
import { createJWT } from "../utils/tokenUtils.js";

export const register = asyncHandler(async (req, res) => {
  const { name, email, password, selectedTopics } = req.body;
  console.log(selectedTopics);
  if (!name || !email || !password) {
    res.status(StatusCodes.BAD_REQUEST);
    throw new Error("Some input fields are empty.");
  }
  req.body.password = await hashPassword(password);

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(StatusCodes.BAD_REQUEST);
    throw new Error("User with same email exists.");
  }

  const user = await User.create({
    name,
    email,
    password: req.body.password,
    interest: selectedTopics,
  });
  if (user) {
    res.status(StatusCodes.CREATED).json({
      name: user.name,
      email: user.email,
      interest: user.interest,
    });
  } else {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Internal server error." });
  }
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(StatusCodes.BAD_REQUEST);
    throw new Error("Some input fields are empty.");
  }

  const userExist = await User.findOne({ email });

  if (!userExist) {
    res.status(StatusCodes.BAD_REQUEST);
    throw new Error("User does not exist.");
  }

  const validatePassword = comparePassword(password, userExist.password);
  if (!validatePassword) {
    res.status(StatusCodes.BAD_REQUEST);
    throw new Error("Invalid credentials.");
  }

  const token = createJWT({ _id: userExist._id, user: userExist.name });

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    secure: process.env.NODE_ENV === "production",
  });

  res.status(StatusCodes.OK).json({ msg: "User logged in." });
});
