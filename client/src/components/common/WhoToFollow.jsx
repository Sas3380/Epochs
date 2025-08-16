import { useQuery } from "@tanstack/react-query";
import { url } from "../baseUrl";
import { httpRequest } from "../interceptor/axiosInterceptor";
import UserCard from "./UserCard";

export default function WhoToFollow() {
  const { data: response } = useQuery({
    queryFn: () => httpRequest.get(`${url}/user/suggest`),
    queryKey: ["who", "follow"],
  });

  return (
    <div className="w-[90%] ml-auto">
      <h5 className="text-[#434343] font-questrial text-[14px] ml-2 my-3 mb-4 tracking-[0.55px]">
        Who to follow
      </h5>

      <div className="flex flex-col gap-4">
        {response?.data.map((item) => (
          <UserCard
            key={item._id}
            avatar={item.avatar}
            _id={item._id}
            name={item.name}
            bio={item.bio}
            followers={item.followers}
          />
        ))}
      </div>
    </div>
  );
}
