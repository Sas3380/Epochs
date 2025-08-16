import { Link } from "react-router-dom";
import { tagImage } from "../assets/icons";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { httpRequest } from "../interceptor/axiosInterceptor";
import { url } from "../baseUrl";

export default function Topic({ name }) {
  const [iFollow, setIFollow] = useState(false);

  const { refetch: add } = useQuery({
    queryFn: () => httpRequest.patch(`${url}/user/intrests/?topic=${name}`),
    queryKey: ["add", "user", "intrest", name],
    enabled: false,
    onSuccess(res) {
      if (res.data.success) setIFollow(true);
    },
  });

  const { refetch: remove } = useQuery({
    queryFn: () => httpRequest.delete(`${url}/user/intrests/?topic=${name}`),
    queryKey: ["delete", "user", "intrest", name],
    enabled: false,
    onSuccess(res) {
      if (res.data.success) setIFollow(false);
    },
  });

  function handleTopicFollow() {
    if (iFollow) remove();
    else add();
  }

  return (
    <div className="flex items-center gap-3 my-4 ml-2">
      <Link
        to={`/tag/${name}`}
        className="bg-gray-200 rounded-full h-12 w-12 flex items-center justify-center"
      >
        {tagImage}
      </Link>

      <Link
        to={`/tag/${name}`}
        className="text-inherit no-underline"
      >
        <p className="font-poppins text-[13.75px] text-inherit">
          {name}
        </p>
      </Link>

      <button
        onClick={handleTopicFollow}
        className={`
          ml-auto px-4 py-2 rounded-full border 
          ${iFollow ? "bg-black border-black text-white" : "bg-transparent border-gray-500 text-black"}
        `}
      >
        {iFollow ? "Following" : "Follow"}
      </button>
    </div>
  );
}
