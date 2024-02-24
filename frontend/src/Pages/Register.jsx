import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Logo,
  PrimaryButton,
  PrimaryFormInput,
  SecondaryButton,
} from "../Components";
import { QuestionModal } from "../Components";
import toast from "react-hot-toast";
import Navbar from "../Components/Navbar/Navbar";
const Register = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [profession, setProfession] = useState("");
  const [birthday, setBirthday] = useState("");
  const checkPassword = () => {
    // if (!name || !email || !password || !confirmPassword) {
    //   toast.error("Some fields are empty.", {
    //     duration: 1500,
    //     position: "bottom-center",
    //   });
    //   return false;
    // }
    return true;
  };
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("localUser");
    if (user) navigate("/");
  }, []);
  return (
    <div className="min-h-[100%] flex flex-col gap-6 w-[100%] bg-darkThemePrimary lg:py-[30px]">
      <Navbar />
      <div className="lg:rounded-xl lg:overflow-clip lg:min-h-[100%] xs:w-[90%] bg-darkThemeSecondary lg:justify-center lg:py-[30px] flex min-h-[500px]   h-[80%] w-[80%] mx-auto ">
        <div className="register-login-sidebar lg:hidden lg:h-[100%] w-[55%] px-[15px] border-r-[2px] border-primary">
          <span
            className="text-center text-primary text-5xl"
            style={{ textTransform: "none" }}
          >
            Wrappers.IO
          </span>
          <div className="liquid w-100%"></div>
        </div>
        <div className="w-[45%] my-2 ml-2 flex flex-col items-center">
          <div className="flex flex-col gap-2 items-center w-[100%]">
            <h4 className="text-center text-primary">Wrappers.IO</h4>
            <span className="text-sm text-white text-center mb-[10px]">
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
            <PrimaryFormInput
              type="text"
              name="birthday"
              placeholder="Date of Birth(MM/DD/YYYY)"
              focus={true}
              onChange={(e) => setBirthday(e.target.value)}
              value={birthday}
              required
            />
            <PrimaryFormInput
              type="text"
              name="profession"
              placeholder="Profession"
              onChange={(e) => setProfession(e.target.value)}
              value={profession}
              required
            />
            <PrimaryFormInput
              type="text"
              name="gender"
              placeholder="Gender"
              onChange={(e) => setGender(e.target.value)}
              value={gender}
              required
            />
          </div>
          <div className="flex gap-3 mt-3">
            <PrimaryButton
              text="Register"
              activateAnimation={true}
              onClick={() => {
                const result = checkPassword();
                if (result) setShowModal(true);
              }}
            />
            <Link to="/login">
              <SecondaryButton text="Login" />
            </Link>
          </div>
        </div>
      </div>
      <QuestionModal
        isVisible={showModal}
        name={name}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        birthday={birthday}
        gender={gender}
        profession={profession}
        onClose={() => setShowModal(false)}
      ></QuestionModal>
    </div>
  );
};
export default Register;
