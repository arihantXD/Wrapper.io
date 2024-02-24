import { FaYoutube } from "react-icons/fa";
import { PrimaryButton, SecondaryButton } from ".";
const YTVideoInput = () => {
  return (
    <div className="p-[20px]">
      <h5 className="text-white text-2xl">Paste your YouTube link here...</h5>
      <div className="bg-darkThemePrimary mt-8 outline outline-2 outline-darkThemeSecondary rounded-xl h-[60px] w-[100%] gap-[20px] items-center flex px-[20px]">
        <FaYoutube color="#fa2e2e" size={35} />
        <input
          type="text"
          placeholder="YouTube Link"
          className={`w-[400px] h-[30px] bg-[slate] 
            px-[10px] py-[15px] text-black border-[2px] border-darkThemeSecondary rounded-lg text-normal focus:outline focus:outline-primary focus:outline-2 focus:border-none`}
        />
        <button
          type="submit"
          className="text-darkThemePrimary bg-white hover:bg-darkThemePrimary hover:text-white hover:outline hover:outline-2 hover:outline-primary font-medium px-[15px] py-[3px] text-base rounded-3xl w-[150px]"
        >
          Summarize
        </button>
      </div>
      <div className="flex justify-center mt-3 h-96">
        <video
          src="/YtVideo.mp4"
          autoPlay
          muted
          className="rounded-lg outline outline-2 outline-darkThemeSecondary"
        ></video>
      </div>
    </div>
  );
};
export default YTVideoInput;
