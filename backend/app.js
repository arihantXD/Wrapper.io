import express from "express";
import * as dotenv from "dotenv";
import authRouter from "./routers/authRouter.js";
import dbConnection from "./utils/dbConnection.js";

const app = express();
dotenv.config();
app.use(express.json());

app.use("/api/auth", authRouter);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

const port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
  dbConnection();
  console.log(`Server listening on port ${port}.`);
});
