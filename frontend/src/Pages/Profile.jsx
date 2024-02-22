import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import QuestionModal from "../Components/QuestionModal/QuestionModal";
import { useState } from "react";
function Profile() {
  const [showModal, setShowModal] = useState(false);
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
  return (
    <>
      <Navbar></Navbar>
      <div
        className="flex flex-col items-center mt-6"
        style={{ fontFamily: "Inter" }}
      >
        <div
          id="profile-name"
          className="w-[75%] grid grid-cols-2 items-center justify-items-center"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-36 h-36 text-primary"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-4xl">John Wick</span>
            <button
              className="bg-primary rounded-md py-2 text-slate font-semibold text-lg hover:shadow-primary hover:shadow-sm hover:text-white"
              onClick={() => setShowModal(true)}
            >
              Add Interest
            </button>
          </div>
        </div>
        <div className="mt-8 w-[75%] flex flex-col gap-4">
          <div className="w-[100%] grid grid-cols-2 justify-items-center border-b-1 border-primary py-2 shadow-sm shadow-primary">
            <span className="text-xl">Email</span>
            <span className="text-xl">john_wick@gmail.com</span>
          </div>
          <div className="rounded bg-white">
            <div className="flex flex-col gap-2 mt-2 mb-2 md:mb-4 lg:mb-6 text-xl font-semibold">
              <span>Interests</span>
            </div>
            <div className="w-[100%] flex gap-2 flex-wrap justify-start mb-4">
              {category.map((category, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-4 text-md font-semibold"
                  >
                    <div>{category.categoryName}</div>
                    <div className="grid grid-cols-5 gap-2">
                      {category.topic.map((topic, index) => {
                        return (
                          <button
                            key={index}
                            onClick={(e) => {
                              handleSelection(e, topic);
                            }}
                            className="bg-primary px-2 py-2 text-center rounded-md text-slate flex justify-center gap-2 hover:shadow-primary hover:shadow-sm hover:text-white"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>{topic}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <QuestionModal
          isVisible={showModal}
          onClose={() => setShowModal(false)}
        ></QuestionModal>
      </div>
    </>
  );
}

export default Profile;
