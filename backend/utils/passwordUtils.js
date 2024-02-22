import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  const newPass = password.toString();
  return await bcrypt.hash(newPass, 10);
};

export const comparePassword = async (password, encodedPassword) => {
  return await bcrypt.compare(password, encodedPassword);
};
