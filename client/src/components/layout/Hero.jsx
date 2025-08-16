import { Link } from "react-router-dom";
import mmm from "../assets/mmm.png";

export default function Hero() {
  return (
    <div className="w-full h-[450px] bg-[#ffc017] border-b border-black relative">
      <div className="max-w-[70%] mx-auto flex flex-row items-center justify-between h-full">
        {/* Left content */}
        <div className="flex flex-col gap-[42px]">
          <p className="text-[100px] font-['DM_Serif_Display'] z-[99]">
            Stay curious.
          </p>
          <p className="text-[30px] w-[60%] z-[99]">
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
          <Link
            to="/signin/new"
            className="bg-black text-white rounded-[37px] px-8 py-[14px] text-[20px] font-bold no-underline w-fit"
          >
            Start reading
          </Link>
        </div>

        {/* Right image */}
        <div>
          <img
            className="h-[95%] ml-auto absolute right-0 top-0 py-[15px]"
            src={mmm}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
