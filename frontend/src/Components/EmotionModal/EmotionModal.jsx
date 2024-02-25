import React from "react";
import { IoMdClose } from "react-icons/io";
import { useContext } from "react";
import { myContext } from "../../App";
function EmotionModal({ isVisible, onClose }) {
  const { emotion, setEmotion, user } = useContext(myContext);
  if (!isVisible || !user) {
    return null;
  }
  return (
    <div className="fixed w-[100%] h-[100%] inset-0 bg-opacity-25 z-10 filter backdrop-blur-sm flex justify-center items-center">
      <div className="w-[60%] h-[60%] bg-darkThemePrimary outline outline-4 outline-darkThemeSecondary z-11 rounded-lg py-2 px-2">
        <div className="flex w-[100%] justify-end">
          <IoMdClose
            size={30}
            className=" text-white hover:text-primary cursor-pointer self-end"
            onClick={() => onClose(false)}
          />
        </div>
        <div className="mt-8 flex flex-col justify-start gap-12 items-center h-[100%]">
          <span className="text-white text-2xl">
            How are you feeling today?
          </span>
          <div className="flex gap-8 text-5xl">
            <button
              onClick={() => {
                onClose(false);
                setEmotion({ name: "joy", icon: "😆" });
                localStorage.setItem("emotion", "joy");
              }}
            >
              😆
            </button>
            <button
              onClick={() => {
                onClose(false);
                setEmotion({ name: "excitement", icon: "🤠" });
                localStorage.setItem("emotion", "excitement");
              }}
            >
              🤠
            </button>
            <button
              onClick={() => {
                onClose(false);
                setEmotion({ name: "desire", icon: "😒" });
                localStorage.setItem("emotion", "desire");
              }}
            >
              😒
            </button>
            <button
              onClick={() => {
                onClose(false);
                setEmotion({ name: "disappointment", icon: "😡" });
                localStorage.setItem("emotion", "disappointment");
              }}
            >
              😡
            </button>
            <button
              onClick={() => {
                onClose(false);
                setEmotion({ name: "sadness", icon: "🥺" });
                localStorage.setItem("emotion", "sadness");
              }}
            >
              🥺
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmotionModal;
