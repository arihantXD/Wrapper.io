import { FaYoutube } from "react-icons/fa";
import { PrimaryButton, SecondaryButton } from ".";
import { useState } from "react";
import axios from "axios";
const YTVideoInput = () => {
  const [inputValue, setInputValue] = useState("");
  const handleSummarize = async () => {
    // const result = await axios.get("");

    setInputValue(
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem unde laborum, quo odio necessitatibus quasi. Amet repellat, similique eligendi accusamus perspiciatis, debitis minima corporis doloremque obcaecati voluptatum fugiat. Eveniet porro impedit sed earum sint? Perspiciatis dicta non asperiores ut consectetur id. Repellendus, tempore ea nemo veritatis eveniet, impedit ullam quia officia asperiores ad at possimus facilis sint, et dignissimos enim eum quasi accusamus pariatur quos! Quibusdam quas explicabo molestias! Eius, obcaecati! Dolore exercitationem doloremque voluptatum culpa beatae voluptate non magni est numquam! Excepturi non praesentium quis molestiae officia optio, ducimus error quos vitae! Facilis unde voluptas ut sunt. Facilis molestiae et veritatis eveniet, sint cum quisquam harum voluptatibus ratione tenetur ea qui. Magni saepe vitae ducimus ratione asperiores. Deserunt, eaque itaque. Voluptates, vero vitae! Nostrum, alias, sapiente molestias, eum rem nam omnis aperiam quisquam ipsa vel dolorem commodi corrupti veniam sequi ut fugiat inventore accusamus blanditiis tenetur minus id sunt! Atque perspiciatis ducimus autem eaque vel enim rem hic eveniet beatae? Qui distinctio quas delectus quibusdam excepturi, eaque veritatis enim debitis, sunt magni ipsa laborum minima facilis numquam aliquam inventore neque quaerat molestiae ut commodi nobis eligendi consequuntur ullam eveniet! Reprehenderit, doloribus fugiat soluta aperiam expedita voluptate ipsa id corrupti itaque dolores pariatur. Quia, porro? Sequi reprehenderit mollitia soluta? Pariatur consectetur porro officia accusantium ullam ratione iste, accusamus perspiciatis voluptate itaque, aspernatur eos quibusdam blanditiis facilis neque autem voluptatum quidem veniam. Accusamus corporis molestias rerum illo esse nam aliquid repellendus tempora, architecto vero, vel voluptatum autem quod porro cum debitis laboriosam fugiat expedita et sit libero error soluta minima inventore! Sint repellendus rem cupiditate incidunt, quam reprehenderit delectus harum nesciunt pariatur quo recusandae illo atque inventore dolore maxime architecto voluptate voluptates adipisci mollitia consectetur at numquam consequatur magni labore? Debitis possimus quam, incidunt ab odio corporis unde minima. Eligendi est impedit aliquid tempora delectus minus, nihil molestiae tenetur optio accusantium sed dolorum alias incidunt fuga ipsa culpa excepturi, dignissimos, aperiam modi maxime amet. Accusamus aut omnis eligendi sequi consequuntur recusandae saepe, provident natus ut expedita officiis. Ipsa, illo. Maxime, laboriosam earum eius omnis blanditiis quaerat! Rerum dicta eligendi tempore! Iure."
    );
  };
  return (
    <div className="p-[20px]">
      <h5 className="text-white text-2xl">Paste your YouTube link here...</h5>
      <div className="bg-darkThemePrimary mt-8 outline outline-2 outline-darkThemeSecondary rounded-xl h-[60px] w-[100%] gap-[20px] items-center flex px-[20px]">
        <FaYoutube color="#fa2e2e" size={35} />
        <input
          type="text"
          placeholder="YouTube Link"
          onChange={(e) => setInputValue(e.target.value)}
          defaultValue={"inputValue"}
          className={`w-[400px] h-[30px] bg-[slate] 
            px-[10px] py-[15px] text-black border-[2px] border-darkThemeSecondary rounded-lg text-normal focus:outline focus:outline-primary focus:outline-2 focus:border-none`}
        />
        <button
          type="submit"
          onClick={handleSummarize}
          className="text-darkThemePrimary bg-white hover:bg-darkThemePrimary hover:text-white hover:outline hover:outline-2 hover:outline-primary font-medium px-[15px] py-[3px] text-base rounded-3xl w-[150px]"
        >
          Summarize
        </button>
      </div>
      {!inputValue && (
        <div className="flex justify-center mt-3 h-96">
          <video src="/YtVideo.mp4" autoPlay muted className=""></video>
        </div>
      )}
      {inputValue && (
        <div className="text-white px-[10px] mt-[20px] w-[100%]">
          <h3 className="my-[20px]">The summary for the video are</h3>
          <p className="h-[300px] p-[10px] overflow-y-scroll border-primary border-[2px]">
            {inputValue}
          </p>
        </div>
      )}
    </div>
  );
};
export default YTVideoInput;
