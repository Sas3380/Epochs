import { Link } from "react-router-dom";
import { mediumLogo, moreIcon, NotificationIcon } from "../assets/icons";
import AvatarMenu from "./AvatarMenu";

export default function WriteNavbar({ onClick, disabled, buttonText }) {
  return (
    <div className="flex flex-row items-center justify-between h-[70px]">
      {/* Left logo */}
      <div>
        <Link to="/">{mediumLogo}</Link>
      </div>

      {/* Right side */}
      <div className="flex flex-row items-center gap-[18px]">
        {/* Action button */}
        <button
          disabled={disabled}
          onClick={() => {
            if (!disabled) onClick();
          }}
          className={`text-white border-0 outline-none px-3 py-[6px] rounded-[15px] tracking-[0.2px] cursor-pointer ${
            disabled ? "bg-[#cbe4ca]" : "bg-[#1a8917]"
          }`}
        >
          {buttonText}
        </button>

        {/* More icon */}
        <span className="text-gray-500 cursor-pointer">{moreIcon}</span>

        {/* Notifications */}
        <Link to="/notifications">
          <span className="text-gray-500 cursor-pointer">
            {NotificationIcon}
          </span>
        </Link>

        {/* Avatar menu */}
        <AvatarMenu />
      </div>
    </div>
  );
}
