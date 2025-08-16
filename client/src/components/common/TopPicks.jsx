import { useQuery } from "@tanstack/react-query";
import { url } from "../baseUrl";
import { httpRequest } from "../interceptor/axiosInterceptor";
import StoryCard from "./StoryCard";

export default function TopPicks({ text, showImg = false }) {
  const { data: response } = useQuery({
    queryFn: () => httpRequest.get(`${url}/post/suggest/posts`),
    queryKey: ["suggest", "post"],
  });

  return (
    <div className="w-[90%] ml-auto">
      <h5 className="text-[#434343] font-questrial text-[14px] ml-2 my-3 mb-5 tracking-[0.55px]">
        {text}
      </h5>

      <div className="flex flex-col gap-5">
        {response?.data.map((item) => (
          <StoryCard
            key={item.post._id}
            avatar={item.user.avatar}
            showImg={showImg}
            image={item.post.image}
            postId={item.post._id}
            title={item.post.title}
            userId={item.user._id}
            username={item.user.name}
          />
        ))}
      </div>
    </div>
  );
}
