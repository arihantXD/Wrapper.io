import React, { useContext, useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import QuestionModal from "../Components/QuestionModal/QuestionModal";
import { PrimaryButton } from "../Components";
import { MdOutlineEdit } from "react-icons/md";
import { MdEditOff } from "react-icons/md";
import { useState } from "react";
import { SecondaryButton } from "../Components";
// import Navbar from "../Components/Navbar/Navbar";
import axios from "axios";
import { myContext } from "../App";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
function Profile() {
  const { user, setUser } = useContext(myContext);
  const [showModal, setShowModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();

  const category = [
    {
      categoryName: "Technical",
      topic: [
        "Machine Learning",
        "AI",
        "Web",
        "Android",
        "UI/UX",
        "Cloud",
        "Docker",
        "Kubernetes",
        "iOS",
        "Data Analytics",
      ],
    },
  ];

  const data = {
    Name: "Arihant Kamde",
    Email: "kamdearihant01@gmail.com",
    Gender: "Male",
    Birthday: "02-jan-2000",
    Profession: "Software Engineer",
  };

  const handleLogout = () => {
    localStorage.clear();
    setUser("");
    toast.success("User logged out.", {
      duration: 1500,
      position: "bottom-center",
    });
    navigate("/");
  };

  return (
    <>
      <div className="bg-darkThemePrimary w-[100%] h-[100%] flex flex-col gap-8">
        <Navbar></Navbar>
        <div className="relative bg-darkThemeSecondary w-[80%] mx-auto h-[80%] p-[50px] pb-0 rounded-lg">
          <div className="flex justify-between">
            <h3 className="text-primary">My Profile</h3>
            <div className="pr-[40px]" onClick={() => setEdit((prev) => !prev)}>
              {edit ? (
                <MdEditOff className="text-primary" size={30} />
              ) : (
                <MdOutlineEdit className="text-primary" size={30} />
              )}
            </div>
          </div>
          <div className="relative flex flex-col items-start justify-between mt-[50px]">
            <div className="w-[100%] grid grid-cols-4 gap-[15px] items-center my-[7px]">
              <h5 className="text-white">Name</h5>
              <input
                type="text"
                disabled={!edit}
                className={`${
                  !edit
                    ? "bg-darkThemeSecondary text-white"
                    : " bg-darkThemePrimary text-white"
                } w-[100%] col-span-2 px-2 text-black text-normal border-b-2 rounded-lg border-primary focus:outline-0`}
                defaultValue={data.Name}
              />
            </div>
            <div className="grid grid-cols-4 gap-[15px] items-center w-[100%] my-[7px]">
              <h5 className="text-white">Email</h5>
              <input
                type="email"
                disabled={!edit}
                className={`${
                  !edit
                    ? "bg-darkThemeSecondary text-white"
                    : " bg-darkThemePrimary text-white"
                } col-span-2 w-[100%] px-2 text-black text-normal border-b-2 border-primary rounded-lg focus:outline-0`}
                defaultValue={data.Email}
              />
            </div>
            <div className="w-[100%] grid grid-cols-4 gap-[15px] items-center my-[7px]">
              <h5 className="text-white">Gender</h5>
              <input
                type="text"
                disabled={!edit}
                className={`${
                  !edit
                    ? "bg-darkThemeSecondary text-white"
                    : " bg-darkThemePrimary text-white"
                } col-span-2 w-[100%] px-2 text-black text-normal border-b-2 border-primary rounded-lg focus:outline-0`}
                defaultValue={data.Gender}
              />
            </div>
            <div className="w-[100%] grid grid-cols-4 gap-[15px] items-center my-[7px]">
              <h5 className="text-white">Birthday</h5>
              <input
                type="text"
                disabled={!edit}
                className={`${
                  !edit
                    ? "bg-darkThemeSecondary text-white"
                    : " bg-darkThemePrimary text-white"
                } col-span-2 w-[100%] px-2 text-black text-normal border-b-2 border-primary rounded-lg focus:outline-0`}
                defaultValue={data.Birthday}
              />
            </div>
            <div className="w-[100%] grid grid-cols-4 gap-[15px] items-center my-[7px]">
              <h5 className="text-white">Profession</h5>
              <input
                type="text"
                disabled={!edit}
                className={`${
                  !edit
                    ? "bg-darkThemeSecondary text-white"
                    : " bg-darkThemePrimary text-white"
                } col-span-2 w-[100%] px-2 text-black text-normal border-b-2 border-primary rounded-lg focus:outline-0`}
                defaultValue={data.Profession}
              />
            </div>
            <div className="mt-[30px] flex gap-4">
              <PrimaryButton text="Update" />
              <SecondaryButton
                onClick={handleLogout}
                text="Log Out"
              ></SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
