import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Logo,
  PrimaryButton,
  PrimaryFormInput,
  SecondaryButton,
} from "../Components";
import { QuestionModal } from "../Components";
import toast from "react-hot-toast";
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
    <div className="min-h-[100%] flex items-center w-[100%] bg-bg lg:py-[30px]">
      <div className="lg:min-h-[100%] xs:w-[90%] glass-bg lg:flex-col lg:justify-center lg:py-[30px] flex min-h-[500px] max-h-[900px] h-[80%] w-[80%] mx-auto ">
        <div className="lg:hidden w-[55%] my-auto px-[15px] border-r-[2px] border-pink">
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
        <div className="lg:border-t-[3px] lg:border-pink lg:mx-auto lg:py-[30px] lg:w-[100%] w-[45%] flex flex-col justify-center items-center">
          <div className="lg:w-[100%] w-[90%] mx-auto lg:px-[15px] flex flex-col items-center gap-[15px]">
            <h4 className="text-center text-pink">Wrappers.io</h4>
            <span className="text-sm text-center mb-[10px]">
              Personalized Podcasts In Minutes
            </span>
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
          <div className=" mt-[40px] flex gap-[20px]">
            <PrimaryButton
              text="Register"
              onClick={() => {
                const result = checkPassword();
                if (result) setShowModal(true);
              }}
            />
            <Link to="/login">
              <SecondaryButton text="Login" />
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
export default Register;

// <QuestionModal
//   isVisible={showModal}
//   name={name}
//   email={email}
//   password={password}
//   confirmPassword={confirmPassword}
//   onClose={() => setShowModal(false)}
// ></QuestionModal>
