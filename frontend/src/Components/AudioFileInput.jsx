import { AiFillAudio } from "react-icons/ai";

const AudioFileInput = () => {
  return (
    <div>
      <div className="p-[20px]">
        <div>
          <h5 className="text-white text-2xl">
            Insert your audio file here...
          </h5>
          <div className="bg-darkThemePrimary mt-8 outline outline-2 outline-darkThemeSecondary rounded-xl h-[60px] w-[100%] gap-[20px] items-center flex px-[20px]">
            <AiFillAudio className="text-primary" size={35} />
            <input
              type="text"
              className={`w-[400px] h-[30px] bg-[slate] 
            px-[10px] py-[15px] text-black border-[2px] border-darkThemeSecondary rounded-lg text-normal focus:outline focus:outline-primary focus:outline-2 focus:border-none`}
            />
            <button
              type="submit"
              className=" text-darkThemePrimary bg-white hover:bg-darkThemePrimary hover:text-white hover:outline hover:outline-2 hover:outline-primary font-medium px-[15px] py-[3px] text-base rounded-3xl w-[150px]"
            >
              Summarize
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-3 h-96">
          <video src="/AudioFile.mp4" autoPlay muted className=""></video>
        </div>
      </div>
    </div>
  );
};
export default AudioFileInput;
