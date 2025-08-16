import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import { plusIcon } from "../assets/icons";
import { url } from "../baseUrl";
import { useAuth } from "../contexts/Auth";
import { httpRequest } from "../interceptor/axiosInterceptor";

const DEFAULT_OPTIONS = [
  { id: 1, title: "For you", url: "/" },
  { id: 2, title: "Following", url: "/tag/Following" },
];

export default function SuggestionBar({ activeTab }) {
  const { user } = useAuth();
  const { data: response } = useQuery({
    queryFn: () => httpRequest.get(`${url}/user/intrests`),
    queryKey: ["intrests", "get", user?._id],
  });

  const [options] = useState(DEFAULT_OPTIONS);

  return (
    <div
      className="
        flex flex-row items-center gap-7 w-[90%] h-[30px]
        border-b border-[#f2f2f2]
        mr-auto mb-3 mt-3
        overflow-x-auto hide_scroll
      "
    >
      {/* ➕ Add Interests */}
      <Link
        to="/suggestions"
        className="text-gray-500 -mt-1 h-full flex items-center"
      >
        {plusIcon}
      </Link>

      {/* Default Tabs */}
      {options.map((option) => (
        <Link
          key={option.id}
          to={option.url}
          className={`text-[14px] font-questrial whitespace-nowrap px-1 ${
            activeTab === option.title
              ? "text-black border-b-2 border-black h-[94%]"
              : "text-gray-500 h-[98%]"
          }`}
        >
          {option.title}
        </Link>
      ))}

      {/* User Interests */}
      {response?.data.intrests.map((item) => (
        <Link
          key={item}
          to={`/tag/${item}`}
          className={`text-[14px] font-questrial whitespace-nowrap px-1 ${
            activeTab === item
              ? "text-black border-b-2 border-black h-[94%]"
              : "text-gray-500 h-[98%]"
          }`}
        >
          {item}
        </Link>
      ))}
    </div>
  );
}
