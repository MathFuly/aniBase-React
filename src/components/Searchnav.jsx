import React from "react";

import { useSearch } from "../hooks/useSearch";

import { FaSearch } from "react-icons/fa";

const Searchnav = () => {
  const { handleSubmit, search, setSearch } = useSearch();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Find a Anime"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default Searchnav;
