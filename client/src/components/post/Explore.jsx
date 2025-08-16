import { useQuery } from "@tanstack/react-query";
import { url } from "../baseUrl";
import { httpRequest } from "../interceptor/axiosInterceptor";
import Post from "./Post";
import Topics from "./Topics";

export default function Explore() {
  const { data, isError, isLoading } = useQuery({
    queryFn: () => httpRequest.get(`${url}/post/explore`),
    queryKey: ["explore", "unauth"],
  });

  return (
    <div className="flex flex-row w-[70%] mx-auto">
      {/* Left Section: Posts */}
      <div className="w-[58%] pt-12 min-h-[97vh] flex flex-col gap-10 mr-auto mt-8">
        <div>
          {data?.data?.map((item) => (
            <Post
              key={item.post._id}
              unAuth={true}
              showUserList={true}
              filterPost={() => {}}
              filterAuthorPost={() => {}}
              postId={item.post._id}
              timestamp={item.post.createdAt}
              title={item.post.title}
              username={item.user.name}
              userId={item.user._id}
              image={item.post.image}
              tag={item.post.tags.at(0)}
              userImage={item.user.avatar}
              summary={item.post.summary}
            />
          ))}
        </div>
      </div>

      {/* Right Section: Topics */}
      <div className="w-[31%] pt-12 flex flex-col gap-10 mt-8">
        <Topics
          text="Discover more of what matters to you"
          style={{
            backgroundColor: "transparent",
            border: "1px solid gray",
            borderRadius: "6px",
          }}
        />
      </div>
    </div>
  );
}
