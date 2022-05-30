import React from "react";
import AddCharacters from "../characters/AddCharacters";
import AddMission from "../mission/AddMission";
import NavBar from "../navbar/NavBar";
import ButtonCharAndMis from "../buttoncharacterAndMission/ButtonCharAndMis";
import "./AdminPanel.css";
import UpdateCharacter from "../characters/UpdateCharacter";
import SearchBar from "../searchBar/SearchBar";

const AdminPanel = () => {
  return (
    <div>
      <NavBar />
      <ButtonCharAndMis />
      <div className="addCharactersAndMissions">
        <div className="addCharacters">
          <span>Ajouté un personnage</span>
          <AddCharacters />
        </div>
        <div className="addMissions">
          <span>Ajouté une mission</span>
          <AddMission />
        </div>
        <div className="updateCharacter">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
