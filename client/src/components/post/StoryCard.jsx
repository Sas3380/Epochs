import { Link } from "react-router-dom";

export default function StoryCard({
  showImg,
  image,
  postId,
  title,
  userId,
  username,
  avatar,
}) {
  return (
    <div className={`ml-2 ${showImg ? "mb-[15px]" : "mb-0"}`}>
      {/* First line with avatar + username */}
      <div className="flex flex-row items-center gap-2">
        <Link to={`/user/${userId}`}>
          <img className="w-[22px] rounded-full" src={avatar} alt="" />
        </Link>
        <Link
          to={`/user/${userId}`}
          className="font-['Roboto_Slab'] text-[12.75px] tracking-[0.25px] text-[rgb(29,29,29)] no-underline mt-[-4px]"
        >
          {username}
        </Link>
      </div>

      {/* Post details */}
      <div className="flex flex-row justify-between">
        <Link
          to={`/blog/${postId}`}
          className={`font-['Poppins'] font-bold text-[14px] mt-[5px] ${
            showImg ? "mr-[10px]" : ""
          } no-underline text-inherit`}
        >
          {title}
        </Link>

        {showImg && (
          <Link to={`/blog/${postId}`}>
            <img
              className="mt-[-12px] w-[55px] h-[55px] object-cover"
              src={image}
              alt=""
            />
          </Link>
        )}
      </div>
    </div>
  );
}
