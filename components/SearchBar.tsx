'use client';

import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex items-center w-[300px] px-5 py-2 rounded-full border-2 border-white ">
      <input
        type="text"
        placeholder="Search"
        className="flex-1 bg-transparent outline-none text-white font-semibold placeholder-white placeholder-opacity-80"
      />
      <div className="w-5 h-5">
        <Search className="text-white" />
      </div>
    </div>
  );
};

export default SearchBar;
