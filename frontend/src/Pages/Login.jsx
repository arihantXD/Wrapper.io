import { Link, useNavigate } from "react-router-dom";
import {
  Logo,
  PrimaryButton,
  PrimaryFormInput,
  SecondaryButton,
} from "../Components";
import { useState } from "react";
import toast from "react-hot-toast";
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
      return navigate("/home");
    } catch (error) {
      toast.error(error?.response?.data?.message, {
        duration: 1500,
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="h-[100vh] flex items-center w-[100%] bg-bg">
      <div className=" xs:w-[90%] glass-bg lg:flex-col lg:justify-center flex min-h-[500px]  h-[80%] w-[80%] mx-auto ">
        <div className="lg:hidden w-[55%] my-auto px-[15px] ">
          <h3 className="text-center text-pink">Wrappers.io</h3>
          <img
            className="xl:h-[280px] xl:w-[400px] w-[500px] mx-auto h-[350px]"
            src="/Podcast_Main.svg"
            alt=""
          />
          <p className="text-black text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nam
            incidunt commodi iusto eos quia magnam quod officiis ut distinctio.
          </p>
        </div>
        <div className="lg:hidden border-r-[2px] border-pink h-[80%] my-auto"></div>
        <div className="lg:border-t-[3px] lg:border-pink lg:mx-auto lg:py-[40px] lg:w-[100%] w-[45%] flex flex-col justify-center items-center">
          <div className="lg:w-[100%] w-[90%] mx-auto lg:px-[15px] flex flex-col items-center gap-[15px]">
            <h4 className="text-center text-pink">Wrappers.io</h4>
            <span className="text-sm text-center mb-[10px]">
              Personalized Podcasts In Minutes
            </span>
            <PrimaryFormInput
              type="email"
              width="70%"
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
          <div className=" mt-[40px] flex gap-[20px]">
            <PrimaryButton
              text="Login"
              onClick={() => handleLogin(email, password)}
            />
            <Link to="/register">
              <SecondaryButton text="Register" />
            </Link>
          </div>

          <p className="hidden lg:block lg:mt-[40px] text-black text-center text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nam
            incidunt commodi iusto eos quia magnam quod officiis ut distinctio.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
