"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search) {
      router.push(`/search/${search}`);
    }
  };

  return (
    <div className="flex items-center border rounded h-13 flex-1">
      <IoSearch className="m-4 text-xl" />
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
        className="outline-none flex-1 h-full text-lg"
        type="text"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
