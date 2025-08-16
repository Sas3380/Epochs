import { Link } from "react-router-dom";
import {
  carrotIcon,
  mediumLogo,
  NotificationIcon,
  writeBlogIcon,
} from "../../assets/icons";
//todos
import { useAuth } from "../contexts/Auth";
import AvatarMenu from "./AvatarMenu";
import Search from "./Search";

export default function Navbar({ notificationsCount }) {
  return (
    <nav className="h-[56px] border-b border-[rgba(242,242,242,1)] flex flex-row items-center justify-between">
      {/* Left */}
      <div className="ml-[23px] flex flex-row items-center gap-[17px]">
        <Link to="/">{mediumLogo}</Link>
        <Search />
      </div>

      {/* Right */}
      <div className="mr-[25px] flex flex-row items-center gap-[30px] h-full">
        {/* Write button */}
        <Link
          to="/write"
          className="flex flex-row items-center gap-2 text-gray-500 no-underline"
        >
          <span className="text-[rgba(117,117,117,1)]">{writeBlogIcon}</span>
          <p className="text-[14.5px] mt-[-4px]">Write</p>
        </Link>

        {/* Notifications */}
        <div className="relative">
          <Link
            to="/notifications"
            className="text-[rgba(117,117,117,1)] no-underline relative"
          >
            {NotificationIcon}
            {notificationsCount > 0 && (
              <span className="absolute top-[-15px] right-[-5px] text-[9.5px] bg-[#1a8917] text-white px-[3.75px] py-[3px] rounded-[4px]">
                {notificationsCount}
              </span>
            )}
          </Link>
        </div>

        {/* Avatar */}
        <AvatarMenu />
      </div>
    </nav>
  );
}
