import React from 'react'
import completeLogo from "../../assets/logo.png"
import { Link } from "react-router-dom";


export default function NavbarPublic() {
  return (
    <div className="w-full h-20 bg-[#ffc017] border-b border-black">
      <div className="max-w-[70%] mx-auto flex flex-row items-center justify-between h-full">
        {/* Left logo */}
        <div>
          <Link to="/">
            <img className="h-10 w-auto" src={completeLogo} alt="Logo" />
          </Link>
        </div>

        {/* Right side buttons */}
        <div className="flex flex-row items-center gap-2.5">
          <Link
            to="/signin/write"
            className="flex flex-row items-center gap-2 text-black no-underline"
          >
            Write
          </Link>

          <Link
            to="/signin/in"
            className="border-0 outline-none bg-transparent rounded-[17px] px-3 py-2 text-black mr-[-5px] text-sm no-underline"
          >
            Sign In
          </Link>

          <Link
            to="/signin/new"
            className="bg-black text-white border-0 outline-none rounded-[17px] px-3 py-2 text-sm no-underline"
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
}
