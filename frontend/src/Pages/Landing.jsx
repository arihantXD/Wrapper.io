import { useContext } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { myContext } from "../App";

const Landing = () => {
  const emotionArray = [
    { name: "Joy", icon: "😆" },
    { name: "Excitement", icon: "🤠" },
    { name: "Desire", icon: "😒" },
    { name: "disappointment", icon: "😡" },
    { name: "sadness", icon: "🥺" },
  ];
  const { emotion, setEmotion } = useContext(myContext);
  return (
    <>
      <div className="relative bg-darkThemePrimary h-[100vh]">
        <Navbar></Navbar>
        <div className="pt-20 flex justify-center px-8">
          <div className="flex flex-col gap-2 items-start border-r-2 border-primary pr-2">
            <span className="text-white text-5xl flex gap-0 items-center">
              <span className="inline-block">Wrappers.</span>
              <span className="gap-0 px-0 text-primary relative flex right-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-10 relative top-[3px]"
                >
                  <path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" />
                  <path d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z" />
                </svg>
                <span className="inline-block font-extralight text-[50px] px-0 text-primary relative right-[6px]">
                  O
                </span>
              </span>
            </span>
            <span className="text-xl text-slate font-extralight mt-4">
              Uncover the stories that matter to you
            </span>
            <span className="text-white text-md font-light mt-2">
              Feeling overwhelmed by your podcast queue? Don't have time to
              listen to hours of content every week? We have a solution for you.
            </span>
            <span className="text-white text-md font-light mt-2">
              Introducing{" "}
              <span className="text-primary font-semibold">Wrappers.IO</span>,
              your one-stop shop for personalized podcast summaries. Tell us
              your interests, and we'll use AI to analyze your favorite
              podcasts, delivering concise and engaging summaries that highlight
              the key points, insights, and actionable takeaways.
            </span>
          </div>
          <img src="/podcastSeating1.jpg" alt="" className="rounded-e-lg" />
        </div>
      </div>
    </>
  );
};
export default Landing;
