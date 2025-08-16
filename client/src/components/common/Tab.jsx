import { Link } from "react-router-dom";
import { toTitleCase } from "../utils/helper";

export default function Tab({ options, activeTab }) {
  return (
    <div
      className="
        flex flex-row items-center gap-7 w-full h-[30px]
        border-b border-[#f2f2f2]
        mr-auto mb-3
        overflow-x-auto hide_scroll
      "
    >
      {options.map((option) => (
        <Link
          key={option.id}
          to={option.url}
          className={`
            text-[14px] font-questrial whitespace-nowrap px-1
            ${
              activeTab === option.title
                ? "text-black border-b-2 border-black h-[96%]"
                : "text-gray-500 h-[98%]"
            }
          `}
        >
          {toTitleCase(option.title)}
        </Link>
      ))}
    </div>
  );
}
