import { Link } from "react-router-dom";

export default function Chip({ text, style }) {
  return (
    <Link
      to={`/tag/${text}`}
      className={`no-underline text-inherit bg-gray-100 px-3 py-2 rounded-full text-[12.5px] font-questrial`}
      style={style}
    >
      {text}
    </Link>
  );
}
