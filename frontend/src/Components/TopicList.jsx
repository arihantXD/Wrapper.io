import { useEffect, useId } from "react";
import { IoMdClose } from "react-icons/io";

const TopicList = ({ page, category, selectedTopics }) => {
  function handleSelection(topic, e) {
    e.currentTarget.className =
      "bg-[#f73f3f] translate-y-[400px] opacity-0 transition duration-500 px-[20px] py-2 text-center rounded-md text-white text-xs flex justify-center gap-2  hover:text-white";
    selectedTopics.push(topic);
  }
  return (
    <div className="flex flex-col px-[20px]" style={{ fontFamily: "Poppins" }}>
      <IoMdClose
        size={30}
        className=" text-white hover:text-primary cursor-pointer self-end"
      />
      <div>
        <h4 className="text-center text-white">
          {category[page].categoryName}
        </h4>
      </div>
      <div className="mt-[20px] grid grid-cols-4 gap-4">
        {category[page].topic.map((t) => {
          return (
            <button
              key={parseInt(Math.random() * 10000)}
              className={`bg-darkThemeSecondary px-[20px] w-[250px] py-2 text-center rounded-md text-white text-md flex justify-center gap-2 `}
              onClick={(e) => handleSelection(t, e)}
            >
              <span>{t}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default TopicList;
