import React, { useState } from "react";
import "./SearchBar.css";
import { Link } from "react-router-dom";
import { useCharacters } from "../../contexts/CharactersProvider";

const SearchBar = () => {
  const { characters } = useCharacters();
  const [dataSearch, setDataSearch] = useState("");

  const handleSearch = (e) => {
    let value = e.target.value;
    setDataSearch(value);
  };

  return (
    <div className="SearchBar">
      <input
        type="text"
        name="searchBar"
        id="searchBar"
        placeholder="Rechercher le personnage à modifier"
        onChange={handleSearch}
      />
      <div className="searchResults">
        {characters
          .filter((data) => {
            return data.name.toLowerCase().includes(dataSearch.toLowerCase());
          })
          .map((data) => {
            return (
              <div className="searchData" key={data.id}>
                <Link to={{ pathname: `/admin/putCharacter/${data.id}` }}>
                  {data.name}
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SearchBar;
