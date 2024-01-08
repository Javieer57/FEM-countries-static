import { searchQuery } from "@store/countriesStore.js";
import { SearchIcon } from "@components/SearchIcon";
import { useEffect, useState } from "react";

export const Search = () => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      searchQuery.set(query);
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [query]);

  useEffect(() => {
    return () => {
      searchQuery.set("");
    };
  }, []);

  return (
    <div className="bg-white rounded shadow relative w-full max-w-[30rem] overflow-hidden dark:bg-darkBlue-500 dark:text-white text-[#848484]">
      <input
        type="text"
        placeholder="Search for a country…"
        className="p-5 py-4 pl-[4.5rem] w-full peer text-sm focus:pl-5 transition-all duration-500 bg-transparent placeholder:text-inherit"
        value={query}
        onInput={(e) => setQuery(e.target.value)}
        autoComplete="off"
      />

      <SearchIcon
        size={"1rem"}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 peer-focus:opacity-0 peer-focus:left-4 transition-all duration-500"
      />
    </div>
  );
};
