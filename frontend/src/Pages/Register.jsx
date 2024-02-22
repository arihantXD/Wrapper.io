import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Logo,
  PrimaryButton,
  PrimaryFormInput,
  SecondaryButton,
} from "../Components";
import { QuestionModal } from "../Components";
const Register = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-[100%] min-h-screen flex items-center filter backdrop-blur-lg">
      <div className="h-[500px] hidden md:block p-[20px] bg-primary rounded-l-md">
        <h3>Wrappers.io</h3>
        <h3 className="mt-[70px]">Welcome Back</h3>
        <p className="mt-[40px]">
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
            defaultValue="Arihant Kamde"
            name="name"
            placeholder="Enter your name"
            required="required"
          />
          <PrimaryFormInput
            type="text"
            defaultValue="arihant@gmail.com"
            name="email"
            placeholder="Enter your email"
            required="required"
          />
          <PrimaryFormInput
            type="password"
            defaultValue="name"
            name="name"
            placeholder="Enter your password"
            required="required"
          />
        </div>
        <div className="text-center mt-[50px]">
          <PrimaryButton onClick={() => setShowModal(true)} text="Register" />
        </div>
      </div>
      <QuestionModal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
      ></QuestionModal>
    </div>
  );
};
export default Register;
