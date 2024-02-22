import { Link, redirect, useNavigate } from "react-router-dom";
import {
  Logo,
  PrimaryButton,
  PrimaryFormInput,
  SecondaryButton,
} from "../Components";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (email, password) => {
    const data = { email, password };
    try {
      const result = await axios.post("/api/auth/login", data);
      toast.success("User logged in successfully.", {
        duration: 1500,
        position: "bottom-center",
      });
      navigate("/home");
      // return redirect("/landing");
    } catch (error) {
      console.log(error.response);
      toast.error("Internal server error.", {
        duration: 1500,
        position: "bottom-center",
      });
    }
  };
  return (
    <div className="h-[100vh] w-[100%]  flex items-center">
      <div className="h-[500px] hidden md:block p-[20px] bg-primary rounded-l-md">
        <h3>Wrappers.io</h3>
        <h3 className="mt-[70px] text-center">Welcome</h3>
        <p className="mt-[40px] text-center">
          Here for the first time? Click on the button below to register.
        </p>
        <div className="mt-[70px] text-center">
          <Link to="/register">
            <SecondaryButton text="Register" />
          </Link>
        </div>
      </div>
      <div className="md:h-[500px] md:w-[70%] px-[10px] w-[90%] mx-auto min-w-[350px]  py-[50px]  md:rounded-l-md">
        <div className="text-center">
          <Logo />
        </div>
        <h3 className="mt-[10px] font-medium text-center">Login</h3>
        <div className="mt-[40px] flex flex-col items-center gap-[15px]">
          <PrimaryFormInput
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <PrimaryFormInput
            type="password"
            name="name"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="text-center mt-[50px]">
          <PrimaryButton
            text="Login"
            onClick={() => handleLogin(email, password)}
          />
        </div>
      </div>
      <Toaster />
    </div>
  );
};
export default Login;
