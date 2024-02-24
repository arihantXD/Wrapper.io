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

  // useEffect(() => {
  //   setPage(prev=>prev+1)
  // }, [selectedTopics]);

  return (
    <>
      <div className="fixed w-[100%] h-[100%] inset-0 bg-opacity-25  filter backdrop-blur-sm flex justify-center items-center">
        <div className="w-[100%] h-[100%] bg-bg  rounded">
          <div className="w-[100%] mt-[20px]">
            <div className=" gap-[15px]">
              <TopicList
                page={page}
                category={category}
                selectedTopics={selectedTopics}
              />
            </div>
            <div className="mt-[70px] flex justify-center items-end text-black ">
              <FaBookOpen size={200} />
            </div>
            <div className="mt-[0px] flex items-center justify-between px-[50px] ">
              <div
                onClick={() => {
                  if (page === category.length - 1) {
                    return;
                  }
                  setPage((prev) => prev + 1);
                }}
                className={`${
                  page === category.length - 1 && "bg-[#ddd]"
                } flex items-center gap-[5px] bg-pink px-[15px] py-[7px] rounded`}
              >
                <FaChevronLeft />
                <h4 className="">Prev </h4>
              </div>
              <div
                onClick={() => {
                  if (page === category.length - 1) {
                    return;
                  }
                  setPage((prev) => prev + 1);
                }}
                className={`${
                  page === category.length - 1 && "bg-[#ddd]"
                } flex items-center gap-[5px] bg-pink px-[15px] py-[7px] rounded`}
              >
                <h4 className="">Next </h4>
                <FaChevronRight />
              </div>
            </div>
          </div>

          <Toaster />
        </div>
      </div>
    </>
  );
};

export default QuestionModal;
