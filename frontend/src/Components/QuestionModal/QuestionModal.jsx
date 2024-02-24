import { useEffect, useId, useState } from "react";

import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
import { redirect } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import TopicList from "../TopicList";

const QuestionModal = ({
  isVisible,
  onClose,
  name,
  email,
  password,
  confirmPassword,
}) => {
  const handleRegister = async (selectedTopics) => {
    if (selectedTopics.length === 0) {
      toast.error("Select some topics.", {
        duration: 1500,
        position: "bottom-center",
      });
      return;
    }
    const data = { name, email, password, selectedTopics };
    try {
      const result = await axios.post("/api/auth/register", data);
      toast.success("User registered, please login.", {
        duration: 1500,
        position: "bottom-center",
      });
      onClose();
      return redirect("/login");
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
        "crime",
        "business",
        "current events",
        "Political talk shows",
        "National/International news",
        "current",
      ],
    },
    {
      categoryName: "Comedy",
      topic: [" standup comedy", "sketch comedy", "dark comedy"],
    },
    {
      categoryName: "Education & Learning",
      topic: [
        "Programming",
        "Professional Development",
        "Life skills",
        "lectures & Courses",
        "Finance",
        "Technology",
        "Business",
      ],
    },
    {
      categoryName: "Entertaining & Leisure",
      topic: ["Gaming", "Social Media", "Gadgets"],
    },
    {
      categoryName: "Storytelling",
      topic: [
        "Fiction",
        "Non-fiction",
        "Horror and Thriller",
        "Mythology and Folklore",
        "Supernatural and Paranormal",
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
      <div className="fixed w-[100%] h-[100%] inset-0 bg-opacity-25  filter backdrop-blur-sm flex justify-center items-center">
        <div className="w-[100%] h-[100%] bg-bg  rounded">
          <div className={`${getStarted && "hidden"} w-[100%] mt-[50px]`}>
            <div className=" gap-[15px]">
              <TopicList
                page={page}
                category={category}
                selectedTopics={selectedTopics}
              />
            </div>
            <div className="min-h-[200px] flex justify-center items-end text-black "></div>
            <div className="mt-[0px] flex items-center justify-between px-[50px] ">
              <div
                onClick={() => {
                  if (page === 0) {
                    return;
                  }
                  setPage((prev) => prev - 1);
                }}
                className={`${
                  page - 1 === -1 ? "bg-[#ddd] " : "bg-pink"
                } flex items-center gap-[5px]   px-[15px] py-[7px] rounded`}
              >
                <FaChevronLeft />
                <h4 className="">Prev </h4>
              </div>

              {/* <div className="flex text-sm flex-wrap">
                {selectedTopics.map((topic) => {
                  return (
                    <button
                      key={parseInt(Math.random() * 10000)}
                      className={` bg-grey px-[20px] py-2 text-center rounded-md text-white text-xs flex justify-center gap-2 `}
                      onClick={(e) => handleSelection(t, e)}
                    >
                      <span>{topic}</span>
                    </button>
                  );
                })}
              </div> */}
              <div
                onClick={() => {
                  if (page === category.length - 1) {
                    setGetStarted(true);
                    return;
                  }
                  setPage((prev) => prev + 1);
                }}
                className={`${
                  page + 1 === category.length ? "bg-[#7ef57e] " : "bg-pink"
                } flex items-center gap-[5px]   px-[15px] py-[7px] rounded`}
              >
                <h4 className="">Next </h4>
                <FaChevronRight />
              </div>
            </div>
          </div>
          <div className={`${!getStarted && "hidden"} w-[100%] flex h-[100%]`}>
            <div className="w-[30%] bg-pink h-[100%] rounded-s-xl pt-[40px]">
              <h3 className="text-white text-center">Wrappers.io</h3>
              <div className="mt-[150px] gap-[10px] flex flex-col items-center">
                <h5 className="pr-[25px] mb-[10px] text-start">
                  Summarize your
                </h5>
                <div className="flex  items-center gap-[20px] px-[15px] w-[200px]">
                  <h6 className="rounded-full bg-grey flex items-center justify-center w-[25px] h-[25px] ">
                    1
                  </h6>
                  <h6 className="">You Tube Link</h6>
                </div>
                <div className="flex  items-center gap-[20px] px-[15px] w-[200px]">
                  <h6 className="rounded-full bg-grey flex items-center justify-center w-[25px] h-[25px] ">
                    2
                  </h6>
                  <h6 className="">Audio File</h6>
                </div>
                <div className="flex  items-center gap-[20px] px-[15px] w-[200px]">
                  <h6 className="rounded-full bg-grey flex items-center justify-center w-[25px] h-[25px] ">
                    3
                  </h6>
                  <h6 className="">Text Transcript</h6>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-s-xl w-[100%] h-[100%] px-[20px] pt-[45px] relative">
                <h4>The selected topic are... </h4>
                <div className="mt-[20px] flex flex-wrap gap-[15px]">
                  {st.map((s) => {
                    return (
                      <button
                        key={parseInt(Math.random() * 10000)}
                        className={` bg-pink px-[20px] py-2 text-center rounded-md text-white text-xs flex justify-center gap-2 `}
                      >
                        <span>{s}</span>
                      </button>
                    );
                  })}
                </div>
                <div className=" flex gap-[5px] absolute  bottom-[20px]  right-[20px] bg-pink px-[15px] py-[5px] rounded-xl">
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
