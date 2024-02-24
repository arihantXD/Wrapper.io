import { useState } from "react";
import { redirect } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

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
  const category = [
    {
      categoryName: "General Info",
      topic: ["ML", "AI", "Web", "Android", "UI/UX", "Cloud"],
    },
    // {
    //   categoryName: "Technical",
    //   topic: ["Machine Learning", "AI", "Web", "Android", "UI/UX", "Cloud"],
    // },
    // {
    //   categoryName: "Meditatio",
    //   topic: ["Machine Learning", "AI", "Web", "Android", "UI/UX", "Cloud"],
    // },
    // {
    //   categoryName: "Heath Care",
    //   topic: ["Machine Learning", "AI", "Web", "Android", "UI/UX", "Cloud"],
    // },
  ];
  function handleSelection(e, topic) {
    if (!selectedTopics.find((element) => element === topic)) {
      setSelectedTopics([...selectedTopics, topic]);
      e.currentTarget.className =
        "bg-[green] w-[200px] py-2 text-center rounded-md text-slate flex justify-center gap-2 hover:shadow-primary hover:shadow-sm hover:text-white";
      e.currentTarget.firstElementChild.firstElementChild.setAttribute(
        "d",
        "M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
      );
    } else {
      setSelectedTopics(selectedTopics.filter((element) => element !== topic));
      e.currentTarget.className =
        "bg-primary w-[200px] py-2 text-center rounded-md text-slate flex justify-center gap-2 hover:shadow-primary hover:shadow-sm hover:text-white";
      e.currentTarget.firstElementChild.firstElementChild.setAttribute(
        "d",
        "M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
      );
    }
  }
  return (
    <>
      <div className="fixed w-[100%] h-[100%] inset-0 bg-opacity-25  filter backdrop-blur-sm flex justify-center items-center">
        <div className="w-[100%] h-[100%] bg-[#334155]  rounded">
          <div className="p-[30px]">
            <div className="flex flex-col gap-2 mt-2 mb-2 md:mb-4 lg:mb-6">
              <h3 className="text-primary">Wrappers.io</h3>
              <span className="text-base font-normal text-white">
                Please select your interests from the below mentioned
                categories.
              </span>
            </div>
            <div className="w-[100%] flex gap-2 flex-wrap justify-center mb-4">
              {category.map((category, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-4 text-md font-medium text-black"
                  >
                    <div>{category.categoryName}</div>
                    <div className="flex flex-wrap justify-center gap-2">
                      {category.topic.map((topic, index) => {
                        return (
                          <button
                            key={index}
                            onClick={(e) => {
                              handleSelection(e, topic);
                            }}
                            className="bg-pink px-[20px] py-2 text-nowrap text-center rounded-md text-white text-xs flex justify-center gap-2 hover:shadow-primary hover:shadow-sm hover:text-white"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="white"
                              className="w-[16px] h-[16px] "
                            >
                              <path
                                fillRule="evenodd"
                                d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
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
            <div className="w-[100%] flex gap-2 flex-wrap justify-center mb-4">
              {category.map((category, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-4 text-md font-medium text-black"
                  >
                    <div>{category.categoryName}</div>
                    <div className="flex flex-wrap justify-center gap-2">
                      {category.topic.map((topic, index) => {
                        return (
                          <button
                            key={index}
                            onClick={(e) => {
                              handleSelection(e, topic);
                            }}
                            className="bg-grey px-[20px] py-2 text-center rounded-md text-white text-xs flex justify-center gap-2 hover:shadow-primary hover:shadow-sm hover:text-white"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="white"
                              className="w-[16px] h-[16px] "
                            >
                              <path
                                fillRule="evenodd"
                                d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
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
            <div className="flex justify-center lg:justify-end gap-3">
              <button
                onClick={() => handleRegister(selectedTopics)}
                className="bg-pink px-2 py-1 rounded-md text-slate hover:text-white hover:shadow-[green] hover:shadow-sm"
              >
                Submit
              </button>
              <button
                onClick={onClose}
                className="bg-danger px-2 py-1 rounded-md text-slate hover:text-white hover:shadow-danger hover:shadow-sm"
              >
                Cancel
              </button>
            </div>
          </div>
          <Toaster />
        </div>
      </div>
    </>
  );
};

export default QuestionModal;
