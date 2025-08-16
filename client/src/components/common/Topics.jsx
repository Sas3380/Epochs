import { useQuery } from "@tanstack/react-query";
import { url } from "../baseUrl";
import { httpRequest } from "../interceptor/axiosInterceptor";
import Chip from "./Chip";
import { useAuth } from "../contexts/Auth";

export default function Topics({ text = "Recommended topics" }) {
  const { user } = useAuth();
  const { data } = useQuery({
    queryFn: () =>
      httpRequest.get(`${url}/post/suggest/topics?userId=${user?._id}`),
    queryKey: ["suggest", "topics"],
  });

  return (
    <div className="w-[90%] ml-auto">
      <h5 className="text-[#434343] font-questrial text-[14px] ml-2 my-3 tracking-[0.55px]">
        {text}
      </h5>
      <div className="flex flex-row flex-wrap">
        {data?.data?.map((item) => (
          <Chip
            key={item._id}
            text={item.name}
            className="bg-gray-200 font-questrial px-4 py-2 m-[4.5px_3px] text-[13.8px]"
          />
        ))}
      </div>
    </div>
  );
}
