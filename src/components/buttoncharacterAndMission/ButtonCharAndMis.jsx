import React, { useState } from "react";
import Characters from "../characters/Characters";
import Mission from "../mission/Mission";
import "./ButtonCharAndMis.css";

const ButtonCharAndMis = () => {
  const [charactersActive, setCharactersActive] = useState(false);
  const [missionActive, setMissionActive] = useState(false);

  function activeCharacter() {
    setCharactersActive(!charactersActive);
  }
  function activeMission() {
    setMissionActive(!missionActive);
  }
  return (
    <div>
      <div className="characters-and-misison">
        <div className="characters">
          <button onClick={activeCharacter}>P E R S O N N A G E</button>
          <div>{charactersActive ? <Characters /> : null}</div>
        </div>

        <div className="mission">
          <button onClick={activeMission}>M I S S I O N</button>
          <div>{missionActive ? <Mission /> : null}</div>
        </div>
      </div>
    </div>
  );
};

export default ButtonCharAndMis;
