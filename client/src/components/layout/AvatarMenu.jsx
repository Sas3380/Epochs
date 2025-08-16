import { useState } from "react";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useAuth } from "../contexts/Auth";
import { DEFAULT_IMG } from "../App";
import {
  carrotIcon,
  librabryIcon,
  profileIcon,
  writeSmallIcon,
} from "../assets/icons";

export default function AvatarMenu() {
  const { isAuthenticated, user, logout } = useAuth();
  return isAuthenticated ? (
    <AuthMenu
      avatar={user?.avatar}
      email={user?.email}
      userId={user?._id}
      logout={logout}
    />
  ) : (
    <UnAuthMenu />
  );
}

function UnAuthMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <div className="avatar flex items-center gap-1">
      <img
        onClick={handleClick}
        className="w-8 h-8 rounded-full border border-gray-300 cursor-pointer"
        src={DEFAULT_IMG}
        alt="avatar"
      />
      <span onClick={handleClick} className="text-gray-500 cursor-pointer">
        {carrotIcon}
      </span>
      <Menu
        PaperProps={{
          style: { width: 250, padding: "10px 0", borderRadius: "6px", marginTop: "10px" },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <GetStarted />
      </Menu>
    </div>
  );
}

function AuthMenu({ avatar, email, userId, logout }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <div className="avatar flex items-center gap-1">
      <img
        onClick={handleClick}
        className="w-8 h-8 rounded-full border border-gray-300 cursor-pointer"
        src={avatar ?? DEFAULT_IMG}
        alt="avatar"
      />
      <span onClick={handleClick} className="text-gray-500 cursor-pointer">
        {carrotIcon}
      </span>

      <Menu
        PaperProps={{
          style: { width: 240, padding: "10px 0", borderRadius: "6px", marginTop: "10px" },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {/* Profile */}
        <Link to={`/user/${userId}`} className="no-underline text-inherit">
          <MenuItem onClick={handleClose} className="flex items-center px-4 py-2">
            <span className="text-gray-500 mr-2">{profileIcon}</span>
            <p className="text-sm text-gray-600">Profile</p>
          </MenuItem>
        </Link>

        {/* Write */}
        <Link to="/write" className="no-underline text-inherit">
          <MenuItem onClick={handleClose} className="flex items-center px-4 py-2">
            <span className="text-gray-500 mr-2">{writeSmallIcon}</span>
            <p className="text-sm text-gray-600">Write Story</p>
          </MenuItem>
        </Link>

        {/* Library */}
        <Link to={`/user/${userId}/lists`} className="no-underline text-inherit">
          <MenuItem onClick={handleClose} className="flex items-center px-4 py-2">
            <span className="text-gray-500 mr-2">{librabryIcon}</span>
            <p className="text-sm text-gray-600">Library</p>
          </MenuItem>
        </Link>

        <Divider sx={{ margin: "10px 0" }} />

        {/* Logout */}
        <MenuItem
          onClick={() => {
            handleClose();
            logout();
          }}
          className="flex flex-col items-start px-5"
        >
          <p className="text-sm text-gray-600 mb-1">Sign out</p>
          <span className="text-xs text-gray-500">{email}</span>
        </MenuItem>
      </Menu>
    </div>
  );
}

export function GetStarted({ style, topStyle }) {
  return (
    <div className="flex flex-col items-center gap-2 py-2" style={style}>
      <p className="mb-3" style={topStyle}>
        Get started on Medium
      </p>
      <Link
        to="/signin/new"
        className="bg-green-700 text-white rounded-full py-2 px-4 text-sm w-[170px] text-center no-underline"
      >
        Sign up
      </Link>
      <Link
        to="/signin/in"
        className="border border-gray-400 text-gray-600 rounded-full py-2 px-4 text-sm w-[170px] text-center no-underline"
      >
        Sign In
      </Link>
    </div>
  );
}
