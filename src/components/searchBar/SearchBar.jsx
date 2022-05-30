import React, {useEffect, useState} from "react";
import axios from 'axios'
import "./SearchBar.css";
import { Link } from "react-router-dom";

const SearchBar = () => {

    const [dataCharacters, setDataCharacters] = useState([]);
    const [dataSearch, setDataSearch] = useState('');

    useEffect(() => {
        axios
        .get("http://localhost:8000/api/characters/")
        .then((res) => res.data)
        .then((data) => setDataCharacters(data))
    }, []);

    const handleSearch= (e)=>{
        let value = e.target.value;
        setDataSearch(value);
    }
    

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
        {dataCharacters.filter((data)=>{
            return data.name.toLowerCase().includes(dataSearch.toLowerCase());
        }).map((data) =>{
            return <div className="searchData" key={data.id}>
                <Link
                to={{pathname: `/admin/putCharacter/${data.id}`}}>
                    {data.name}
                </Link>
                </div>;
        })}
      </div>
    </div>
  );
};

export default SearchBar;
