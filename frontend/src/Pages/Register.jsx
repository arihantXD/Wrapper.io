import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Logo,
  PrimaryButton,
  PrimaryFormInput,
  SecondaryButton,
} from "../Components";
import { QuestionModal } from "../Components";
import toast, { Toaster } from "react-hot-toast";
const Register = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const checkPassword = () => {
    if (!name || !email || !password || !confirmPassword) {
      toast.error("Some fields are empty.", {
        duration: 1500,
        position: "bottom-center",
      });
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("Password not matched.", {
        duration: 1500,
        position: "bottom-center",
      });
      return false;
    }
    return true;
  };

  return (
    <div className="w-[100%] min-h-screen flex items-center filter backdrop-blur-lg">
      <div className="h-[500px] hidden md:block p-[20px] bg-primary rounded-l-md">
        <h3>Wrappers.io</h3>
        <h3 className="mt-[70px] text-center">Welcome Back</h3>
        <p className="mt-[40px] text-center">
          Already a member? Click on the button below to login.
        </p>
        <div className="mt-[70px] text-center">
          <Link to="/login">
            <SecondaryButton text="Login" />
          </Link>
        </div>
      </div>
      <div className="md:w-[70%] px-[10px] w-[90%] mx-auto min-w-[350px]  py-[50px]  md:rounded-l-md">
        <div className="text-center">
          <Logo />
        </div>
        <h3 className="mt-[10px] font-medium text-center">Create Account</h3>
        <div className="mt-[40px] flex flex-col items-center gap-[15px]">
          <PrimaryFormInput
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
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
          <PrimaryFormInput
            type="password"
            name="name"
            placeholder="Confirm your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            required
          />
        </div>
        <div className="text-center mt-[50px]">
          <PrimaryButton
            onClick={() => {
              const result = checkPassword();
              if (result) setShowModal(true);
            }}
            text="Register"
          />
        </div>
        <Toaster />
      </div>
      <QuestionModal
        isVisible={showModal}
        name={name}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        onClose={() => setShowModal(false)}
      ></QuestionModal>
    </div>
  );
};
export default Register;
