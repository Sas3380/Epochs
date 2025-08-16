import { useQuery } from "@tanstack/react-query";
import { httpRequest } from "../interceptor/axiosInterceptor";
import { url } from "../baseUrl";
import Post from "./Post";

export default function SavedPosts({ listName }) {
  const { data: response } = useQuery({
    queryFn: () => httpRequest.get(`${url}/post/saved/${listName}`),
    queryKey: ["saved", "listname", "get", "all"],
  });

  return (
    <div className="w-full">
      {/* List Title */}
      <h1 className="text-2xl font-bold mb-14">
        {response?.data?.name}
      </h1>

      {/* Saved Posts */}
      <div className="flex flex-col gap-10">
        {response?.data?.posts?.map((item) => (
          <Post
            key={item.post._id}
            showUserList={true}
            postId={item.post._id}
            timestamp={item.post.createdAt}
            title={item.post.title}
            username={item.user.name}
            userId={item.user._id}
            image={item.post.image}
            tag={item.post.tags.at(0)}
            userImage={item.user.avatar}
            summary={item.post.summary}
            showMuteicon={false}
            showMoreIcon={false}
          />
        ))}
      </div>
    </div>
  );
}
