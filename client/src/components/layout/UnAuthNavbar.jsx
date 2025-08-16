import { Link } from "react-router-dom";
import { mediumLogo, writeBlogIcon } from "../assets/icons";
import AvatarMenu from "./AvatarMenu";
import Search from "./Search";

export default function UnAuthNavbar() {
  return (
    <nav className="h-14 border-b border-gray-100 flex items-center justify-between">
      {/* Left Section */}
      <div className="ml-6 flex items-center gap-4">
        <Link to="/">{mediumLogo}</Link>
        <Search />
      </div>

      {/* Right Section */}
      <div className="mr-6 flex items-center gap-7 h-full">
        {/* Write Button */}
        <Link
          to="/signin/write"
          className="flex items-center gap-2 text-gray-600 no-underline"
        >
          <span className="text-gray-500">{writeBlogIcon}</span>
          <p className="text-sm -mt-1">Write</p>
        </Link>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2">
          <Link
            to="/signin/new"
            className="bg-green-700 text-white rounded-full px-3 py-2 text-sm no-underline"
          >
            Sign up
          </Link>
          <Link
            to="/signin/in"
            className="border border-gray-300 text-gray-500 rounded-full px-3 py-2 text-sm no-underline"
          >
            Sign In
          </Link>
        </div>

        {/* Avatar Menu */}
        <AvatarMenu />
      </div>
    </nav>
  );
}
