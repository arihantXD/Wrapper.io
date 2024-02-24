import { Link, useNavigate } from "react-router-dom";
import {
  Logo,
  PrimaryButton,
  PrimaryFormInput,
  SecondaryButton,
} from "../Components";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import Navbar from "../Components/Navbar/Navbar";
import { myContext } from "../App";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("localUser");
    if (user) navigate("/");
  }, []);

  const localUser = [
    {
      name: "yoshita",
      email: "yoshi@gmail.com",
      password: "yoshi",
      profession: "student",
      interest: "",
      gender: "Female",
      age: "18",
      dateOfBirth: "01/01/1999",
    },
    {
      name: "akansha",
      email: "ak@gmail.com",
      password: "akansha",
      profession: "rocket scientist",
      interest: "",
      gender: "Female",
      age: "40",
      dateOfBirth: "01/01/1999",
    },
  ];
  const handleLogin = async (email, password) => {
    const data = { email, password };
    if (!email || !password) {
      toast.error("Some fields are empty.", {
        duration: 1500,
        position: "bottom-center",
      });
      return false;
    }
    try {
      const used = email === "yoshi@gmail.com" ? localUser[0] : localUser[1];
      localStorage.setItem("localUser", JSON.stringify(used));
      toast.success("User logged in successfully.", {
        duration: 1500,
        position: "bottom-center",
      });
      return navigate("/product");
    } catch (error) {
      toast.error(error?.response?.data?.message, {
        duration: 5000,
        position: "bottom-center",
      });
    }
  };

  return (
    <>
      <div className="h-[100%] flex flex-col gap-8 w-[100%] bg-darkThemePrimary background-wrap">
        <Navbar />
        <div className="rounded-xl overflow-clip xs:w-[90%] bg-darkThemeSecondary lg:flex-col flex min-h-[500px] h-[80%] w-[80%] mx-auto ">
          <div className="register-login-sidebar w-[55%]">
            <span className="text-center text-white text-5xl">Wrappers.io</span>
            <div className="liquid"></div>
          </div>
          <div className="lg:hidden border-r-[2px] border-primary h-[100%] my-auto"></div>
          <div className="lg:border-t-[3px] lg:border-primary lg:mx-auto lg:py-[40px] lg:w-[100%] w-[45%] flex flex-col justify-center items-center">
            <div className="lg:w-[100%] w-[90%] mx-auto lg:px-[15px] flex flex-col items-center gap-[15px]">
              <h4 className="text-center text-primary">Wrappers.io</h4>
              <span className="text-sm text-white text-center mb-[10px]">
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
                activateAnimation={true}
                text="Login"
                onClick={() => handleLogin(email, password)}
              />
              <Link to="/register">
                <SecondaryButton text="Register" />
              </Link>
            </div>

            <p className="hidden lg:block lg:mt-[40px] text-black text-center text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nam
              incidunt commodi iusto eos quia magnam quod officiis ut
              distinctio.
            </p>
          </div>
        </div>
        <div class="bubble x1"></div>
        <div class="bubble x2"></div>
        <div class="bubble x3"></div>
        <div class="bubble x4"></div>
        <div class="bubble x5"></div>
        <div class="bubble x6"></div>
        <div class="bubble x7"></div>
        <div class="bubble x8"></div>
        <div class="bubble x9"></div>
        <div class="bubble x10"></div>
      </div>
    </>
  );
};
export default Login;
