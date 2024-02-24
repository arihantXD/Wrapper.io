import { useState } from "react";
import YTVideoInput from "../Components/YTvideoInput";
import VideoTranscriptInput from "../Components/VideoTranscriptInput";
import AudioFileInput from "../Components/AudioFileInput";
import Navbar from "../Components/Navbar/Navbar";

const Product = () => {
  const [inputType, setInputType] = useState("ytVideo");
  return (
    <div
      className="w-[100%] h-[100%] bg-darkThemePrimary overflow-hidden"
      style={{ fontFamily: "Poppins" }}
    >
      <Navbar></Navbar>
      {/* <div>
        <h3 className="text-pink ">Wrappers.io</h3>
      </div> */}
      <div className="pt-[10px] h-[100%] w-[100%] flex px-3 pb-5">
        <div className="flex flex-col w-[350px] pt-5">
          <h4 className="text-white mb-8 w-[100%] text-center border-primary border-r-2">
            Available Inputs
          </h4>
          <div className="flex flex-col gap-8 items-center font-semibold border-r-2 border-primary h-[78%]">
            <button
              onClick={() => setInputType("ytVideo")}
              className="w-[70%] transition py-2 text-white rounded-xl bg-darkThemePrimary hover:bg-white outline outline-2 outline-primary hover:text-darkThemePrimary hover:outline hover:outline-2 hover:outline-darkThemePrimary"
            >
              YouTube Video
            </button>
            <button
              onClick={() => setInputType("videoTranscript")}
              className="w-[70%] transition py-2 text-white rounded-xl bg-darkThemePrimary hover:bg-white outline outline-2 outline-primary hover:text-darkThemePrimary hover:outline hover:outline-2 hover:outline-darkThemePrimary"
            >
              Video Transcript
            </button>
            <button
              onClick={() => setInputType("audioFile")}
              className="w-[70%] transition py-2 text-white rounded-xl bg-darkThemePrimary hover:bg-white outline outline-2 outline-primary hover:text-darkThemePrimary hover:outline hover:outline-2 hover:outline-darkThemePrimary"
            >
              Audio File
            </button>
          </div>
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
