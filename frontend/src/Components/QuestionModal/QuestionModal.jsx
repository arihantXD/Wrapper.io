import { useEffect, useId, useState } from "react";

import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
import { redirect, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import TopicList from "../TopicList";
import { IoMdClose } from "react-icons/io";

const QuestionModal = ({
  isVisible,
  onClose,
  name,
  email,
  password,
  confirmPassword,
}) => {
  const handleRegister = async (selectedTopics) => {
    // if (selectedTopics.length === 0) {
    //   toast.error("Select some topics.", {
    //     duration: 1500,
    //     position: "bottom-center",
    //   });
    //   return;
    // }
    const data = {
      name,
      email,
      password,
      selectedTopics,
    };
    try {
      toast.success("User registered, please login.", {
        duration: 1500,
        position: "bottom-center",
      });
      onClose();
      return redirect("/");
    } catch (error) {
      toast.error("Internal server error.", {
        duration: 1500,
        position: "bottom-center",
      });
    }
  };

  if (!isVisible) {
    return null;
  }
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [page, setPage] = useState(0);
  const [getStarted, setGetStarted] = useState(false);

  const category = [
    {
      categoryName: "News & Politics",
      topic: [
        "Crime",
        "Business",
        "Current Affairs",
        "Political Talk Shows",
        "News",
        "current",
      ],
    },
    {
      categoryName: "Comedy",
      topic: ["Standup comedy", "Sketch Comedy", "Dark Comedy"],
    },
    {
      categoryName: "Education & Learning",
      topic: [
        "Programming",
        "Professional Development",
        "Life Skills",
        "Courses",
        "Finance",
        "Technology",
        "Business",
      ],
    },
    {
      categoryName: "Entertainment Leisure",
      topic: ["Gaming", "Social Media", "Gadgets"],
    },
    {
      categoryName: "Storytelling",
      topic: [
        "Fiction",
        "Non-fiction",
        "Horror",
        "Thriller",
        "Mythology",
        "Folklore",
        "Paranormal",
      ],
    },
    {
      categoryName: "Health & Fitness",
      topic: [
        "Outdoor activities",
        "Trying new foods",
        "Playing sports",
        "Fitness",
        "Healthy eating",
      ],
    },

    {
      categoryName: "Lifestyle & Relationships",
      topic: ["Sustainable fashion", "Clothing trends", "Makeup"],
    },

    {
      categoryName: "True Stories & Personal narratives",
      topic: ["Documentaries", "Investigation", "Interviews"],
    },
  ];
  const st = [
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
  ];
  return (
    <>
      <div className="fixed w-[100%] h-[100%] inset-0 bg-opacity-25 z-10 filter backdrop-blur-sm flex justify-center items-center">
        <div className="w-[90%] h-[90%] bg-darkThemePrimary outline outline-4 outline-darkThemeSecondary z-11 rounded-lg">
          <div
            className={`${
              getStarted && "hidden"
            } w-[100%] h-[100%] flex flex-col justify-between mt-2`}
          >
            <div className="gap-[15px]">
              <TopicList
                page={page}
                category={category}
                selectedTopics={selectedTopics}
              />
            </div>
            {/* <div className="min-h-[300px] flex justify-center items-end text-black "></div> */}
            <div className="mb-3 flex justify-between items-center">
              <div
                onClick={() => {
                  if (page === 0) {
                    return;
                  }
                  setPage((prev) => prev - 1);
                }}
                className={`bg-darkThemePrimary px-6 py-[7px] rounded cursor-pointer`}
              >
                <FaChevronLeft
                  fontSize={"32px"}
                  color={`${page - 1 === -1 ? "#FFF" : "#FD5F07"}`}
                />
              </div>
              <div
                onClick={() => {
                  if (page === category.length - 1) {
                    setGetStarted(true);
                    return;
                  }
                  setPage((prev) => prev + 1);
                }}
                className={`bg-darkThemePrimary px-6 py-[7px] rounded cursor-pointer`}
              >
                <FaChevronRight
                  fontSize={"32px"}
                  color={`${page + 1 === category.length ? "#FFF" : "#FD5F07"}`}
                />
              </div>
            </div>
          </div>
          <div className={`${!getStarted && "hidden"} w-[100%] flex h-[100%]`}>
            <div className="w-[30%] bg-darkThemeSecondary h-[100%] pt-[40px]">
              <h3 className="text-center text-primary">Wrappers.IO</h3>
              <div className="mt-[150px] gap-[10px] flex flex-col text-white  items-center">
                <h5 className="pr-[25px] mb-[10px] text-start">
                  Summarize your
                </h5>
                <div className="flex items-center gap-[20px] px-[15px] w-[200px]">
                  <h6 className="rounded-full bg-primary text-darkThemePrimary flex items-center justify-center w-[25px] h-[25px] ">
                    1
                  </h6>
                  <h6 className="">YouTube Link</h6>
                </div>
                <div className="flex  items-center gap-[20px] px-[15px] w-[200px]">
                  <h6 className="rounded-full bg-primary text-darkThemePrimary flex items-center justify-center w-[25px] h-[25px] ">
                    2
                  </h6>
                  <h6 className="">Audio File</h6>
                </div>
                <div className="flex  items-center gap-[20px] px-[15px] w-[200px]">
                  <h6 className="rounded-full bg-primary text-darkThemePrimary flex items-center justify-center w-[25px] h-[25px] ">
                    3
                  </h6>
                  <h6 className="">Text Transcript</h6>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-s-xl w-[100%] h-[100%] px-[20px] pt-[45px] relative">
                <div className="flex justify-between">
                  <h4 className="text-white">Selected Topics</h4>
                  <IoMdClose
                    size={30}
                    className=" text-white hover:text-primary cursor-pointer self-end"
                  />
                </div>
                <div className="mt-[20px] grid grid-cols-4 gap-4">
                  {console.log(selectedTopics)}
                  {selectedTopics.map((s) => {
                    return (
                      <button
                        key={parseInt(Math.random() * 10000)}
                        className={` bg-darkThemeSecondary px-[10px] py-2 text-center rounded-md text-primary font-semibold text-lg flex justify-center gap-2 `}
                      >
                        <span>{s}</span>
                      </button>
                    );
                  })}
                </div>
                <div
                  onClick={() => handleRegister()}
                  className=" flex gap-[5px] absolute  bottom-[20px]  right-[20px] bg-pink px-[15px] py-[5px] rounded-xl"
                >
                  <h4>Lets Start</h4>
                  <button className="">
                    <FaChevronRight size={25} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionModal;
