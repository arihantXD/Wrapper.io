import { AiFillAudio } from "react-icons/ai";

const AudioFileInput = () => {
  return (
    <div>
      <div className="p-[20px]">
        <div>
          <h5>Insert your audio file here...</h5>
          <div className="bg-bg rounded-xl h-[60px] w-[100%] mt-[20px] gap-[20px] items-center flex px-[20px]">
            <AiFillAudio className="text-[#fa2e2e]" size={35} />
            <input
              type="text"
              className={`w-[400px] h-[30px] bg-[rgba(255,255,255,0.4) 
px-[10px] text-black border-[2px] border-grey rounded outline-none text-normal`}
            />
            <button
              type="submit"
              className=" text-black border-[2px] border-darkGrey  font-medium px-[15px] py-[3px] text-base rounded-3xl w-[150px]"
            >
              Summarize
            </button>
          </div>
        </div>
        <div className="flex  justify-center">
          <video src="/AudioFile.mp4" autoPlay muted></video>
        </div>
      </div>
    </div>
  );
};
export default AudioFileInput;
