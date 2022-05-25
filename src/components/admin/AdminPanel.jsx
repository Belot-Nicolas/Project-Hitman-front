import React from "react";
import AddCharacters from "../characters/AddCharacters";
import AddMission from "../mission/AddMission";
import NavBar from "../navbar/NavBar";
import ButtonCharAndMis from "../buttoncharacterAndMission/ButtonCharAndMis";
import "./AdminPanel.css";

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
      </div>
    </div>
  );
};

export default AdminPanel;
