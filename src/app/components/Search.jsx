"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

  const searchMovie = (e) => {
    e.preventDefault();
    if (!searchInput) return;
    router.push(`/search/${searchInput}`);
    setSearchInput("");
  };

  return (
    <form
      className="flex justify-center max-w-lg mx-auto my-2 px-2"
      onSubmit={searchMovie}
    >
      <input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        type="text"
        placeholder="Search for a movie..."
        className="p-4 w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-amber-100 text-black"
      />
      <button
        type="submit"
        className="flex justify-center items-center p-3 w-20 text-amber-100 bg-amber-500 disabled:text-gray-400 "
        disabled={!searchInput}
      >
        <BsSearch className="text-center" />
      </button>
    </form>
  );
};

export default Search;
