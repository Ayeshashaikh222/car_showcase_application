"use client";
import SearchManuFacturer from "./SearchManuFacturer";
import { useState } from "react";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");

  const handlerSearch = () => {};

  return (
    <form className="searchBar" onSubmit={handlerSearch}>
      <div className="searchbar__item">
        <SearchManuFacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
