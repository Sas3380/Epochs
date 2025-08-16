import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchIcon } from "../assets/icons";

export default function Search() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  function handleKeyDown(e) {
    if (e.key === "Enter" && query) {
      const q = query;
      setQuery("");
      navigate(`search/stories/${q}`);
    }
  }

  return (
    <div className="flex flex-row items-center gap-2 bg-[#fafafa] h-[39px] rounded-[18px] w-[240px] justify-center px-3">
      {searchIcon}
      <input
        onKeyDown={handleKeyDown}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search Medium"
        className="w-[75%] h-[70%] border-none outline-none bg-transparent text-sm"
      />
    </div>
  );
}
