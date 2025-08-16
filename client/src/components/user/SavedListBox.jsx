import { Link } from "react-router-dom";

export default function SavedListBox({ name, stories, images, userId }) {
  return (
    <Link
      to={`/user/${userId}/lists?active=${name}`}
      className="w-full bg-[#fafafa] rounded-md border-2 border-[#e2e2e2] h-[128px] flex flex-row items-center justify-between overflow-hidden no-underline text-inherit"
    >
      {/* Left section */}
      <div className="ml-[22px]">
        <h3 className="text-base font-semibold">{name}</h3>
        <p className="text-[13px] text-gray-600">{stories} stories</p>
      </div>

      {/* Right image */}
      <div>
        <img
          className="h-[130px] max-w-[130px] object-cover"
          src={images.at(-1)}
          alt="list preview"
        />
      </div>
    </Link>
  );
}
