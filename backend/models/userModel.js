import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  interest: {
    type: [],
  },
  dateOfBirth: {
    type: String,
  },
  profession: {
    type: String,
  },
  Gender: {
    type: String,
  },
});

export default mongoose.model("User", userSchema);
