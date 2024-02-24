import { useState } from "react";
import YTVideoInput from "../Components/YTvideoInput";
import VideoTranscriptInput from "../Components/VideoTranscriptInput";
import AudioFileInput from "../Components/AudioFileInput";

const Product = () => {
  const [inputType, setInputType] = useState("");
  return (
    <div className="w-[100%] h-[100%] p-[20px] overflow-hidden">
      {/* <div>
        <h3 className="text-pink ">Wrappers.io</h3>
      </div> */}
      <div className="mt-[50px] h-[100%] w-[100%] flex">
        <div className="py-[20px] min-w-[350px] flex flex-col h-[85%] pr-[20px] border-r-[2px] border-pink [&>button]:p-[10px]  text-center [&>button]:my-[10px] [&>button]:rounded-xl [&>button]:w-[250px] [&>button]:bg-[#BBE2EC]">
          <h4 className="text-black">Available types of inputs</h4>
          <button
            onClick={() => setInputType("ytVideo")}
            className="hover:bg-[#0D9276] transition"
          >
            You Tube Video
          </button>
          <button
            onClick={() => setInputType("videoTranscript")}
            className="hover:bg-[#0D9276] transition"
          >
            Video Transcript
          </button>
          <button
            onClick={() => setInputType("audioFile")}
            className="hover:bg-[#0D9276] transition"
          >
            Audio File
          </button>
        </div>
        <div className="w-[70%]">
          {inputType === "ytVideo" && <YTVideoInput />}
          {inputType === "audioFile" && <AudioFileInput />}
          {inputType === "videoTranscript" && <VideoTranscriptInput />}
        </div>
      </div>
    </div>
  );
};
export default Product;
