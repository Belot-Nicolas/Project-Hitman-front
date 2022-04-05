import React, { useState } from "react";
import Characters from "../characters/Characters";
import Mission from "../mission/Mission";

import "./ButtonCharAndMis.css";

const ButtonCharAndMis = () => {
  const [charactersActive, setCharactersActive] = useState(false);
  const [missionActive, setMissionActive] = useState(false);


  function activeCharacter() {
    if(charactersActive == false && missionActive == false){
    setCharactersActive(true);
    }
    if(charactersActive == true && missionActive == false){
    setCharactersActive(false);
    }
    else {
      setMissionActive(false)
      setCharactersActive(true)
    }
  }

  
  function activeMission() {
    if(missionActive == false && charactersActive == false){
    setMissionActive(true);
    }
    if(missionActive == true && charactersActive == false){
      setMissionActive(false);
      }
    else {
      setMissionActive(true)
      setCharactersActive(false)
    }
  }


  return (
    <div>
      <div className="characters-and-misison">
          <div className="button-container">
            <button  onClick={activeCharacter}>P E R S O N N A G E</button>
            <button  onClick={activeMission}>M I S S I O N</button>
          </div>
        <div className="characters">
          
            {charactersActive ? <Characters activeChar={activeCharacter} /> : null}
        </div>

        <div className="mission">
          {missionActive ? <Mission activeMission={activeMission} /> : null}
        </div>
      </div>
    </div>
  );
};

export default ButtonCharAndMis;
