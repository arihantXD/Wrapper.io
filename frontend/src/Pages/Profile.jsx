import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import QuestionModal from "../Components/QuestionModal/QuestionModal";
import { PrimaryButton } from "../Components";
import { MdOutlineEdit } from "react-icons/md";
import { MdEditOff } from "react-icons/md";
import { useState } from "react";
function Profile() {
  const [showModal, setShowModal] = useState(false);
  const [edit, setEdit] = useState(false);

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

  return (
    <>
      <div className="bg-bg w-[100%] h-[100%] flex justify-center items-center">
        <div className="relative glass-bg w-[80%] mx-auto h-[80%] p-[50px] pb-0">
          <div className="flex justify-between">
            <h3 className="text-pink">My details</h3>
            <div className="pr-[40px]" onClick={() => setEdit((prev) => !prev)}>
              {edit ? (
                <MdEditOff className="text-pink" size={30} />
              ) : (
                <MdOutlineEdit className="text-pink" size={30} />
              )}
            </div>
          </div>
          <div className="relative flex  flex-col items-center justify-between mt-[50px]">
            <div className="flex gap-[15px] items-center justify-between w-[400px] my-[7px]">
              <h5 className="text-black">Name</h5>
              <input
                type="text"
                disabled={!edit}
                className={`${
                  !edit
                    ? "bg-[rgba(255,255,255,0.4) ]"
                    : " bg-[rgba(255,255,255,1)]"
                }  px-[10px] text-black border-[2px] border-grey rounded outline-none text-normal`}
                defaultValue={data.Name}
              />
            </div>
            <div className="flex gap-[15px] items-center justify-between w-[400px] my-[7px]">
              <h5 className="text-black">Email</h5>
              <input
                type="email"
                disabled={!edit}
                className={`${
                  !edit
                    ? "bg-[rgba(255,255,255,0.4) ]"
                    : " bg-[rgba(255,255,255,1)]"
                }  px-[10px] text-black border-[2px] border-grey rounded outline-none text-normal`}
                defaultValue={data.Email}
              />
            </div>
            <div className="flex gap-[15px] items-center justify-between w-[400px] my-[7px]">
              <h5 className="text-black">Gender</h5>
              <input
                type="text"
                disabled={!edit}
                className={`${
                  !edit
                    ? "bg-[rgba(255,255,255,0.4) ]"
                    : " bg-[rgba(255,255,255,1)]"
                }  px-[10px] text-black border-[2px] border-grey rounded outline-none text-normal`}
                defaultValue={data.Gender}
              />
            </div>
            <div className="flex gap-[15px] items-center justify-between w-[400px] my-[7px]">
              <h5 className="text-black">Birthday</h5>
              <input
                type="text"
                disabled={!edit}
                className={`${
                  !edit
                    ? "bg-[rgba(255,255,255,0.4) ]"
                    : " bg-[rgba(255,255,255,1)]"
                }  px-[10px] text-black border-[2px] border-grey rounded outline-none text-normal`}
                defaultValue={data.Birthday}
              />
            </div>
            <div className="flex gap-[15px] items-center justify-between w-[400px] my-[7px]">
              <h5 className="text-black">Profession</h5>
              <input
                type="text"
                disabled={!edit}
                className={`${
                  !edit
                    ? "bg-[rgba(255,255,255,0.4) ]"
                    : " bg-[rgba(255,255,255,1)]"
                }  px-[10px] text-black border-[2px] border-grey rounded outline-none text-normal`}
                defaultValue={data.Profession}
              />
            </div>
            <div className="mt-[30px]">
              <PrimaryButton text="Update" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
