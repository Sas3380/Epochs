import { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactTimeAgo from "react-time-ago";

export default function Notification({
  avatar,
  createdAt,
  message,
  read,
  userId,
  username,
  postId,
  postTitle,
}) {
  useEffect(() => {
    document.title = "Notifications - Medium";
  }, []);

  return (
    <div className="flex flex-row items-center gap-[18px] mb-[14px]">
      {/* Left indicator bar */}
      <span
        className={`w-[4px] h-full rounded-[4px] ${
          read ? "bg-white" : "bg-[#1a8917]"
        }`}
      ></span>

      {/* Avatar */}
      <div className="ml-[-5px]">
        <Link to={`/user/${userId}`}>
          <img
            className="h-[34px] w-[34px] rounded-full"
            src={avatar}
            alt="user avatar"
          />
        </Link>
      </div>

      {/* Notification content */}
      <Link
        to={postId ? `/blog/${postId}` : `/user/${userId}`}
        className="flex flex-col gap-[5px] text-inherit no-underline hover:text-black"
      >
        <p className="text-[14px]">
          {username}
          <span className="text-gray-500">{"  " + message}</span>
          {` ${postTitle ?? ""}`}
        </p>
        <p className="text-[12px] text-gray-500">
          <ReactTimeAgo
            date={Date.parse(createdAt)}
            locale="en-US"
            timeStyle="round"
          />
        </p>
      </Link>
    </div>
  );
}
