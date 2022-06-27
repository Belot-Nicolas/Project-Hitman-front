import React from "react";
import Cards from "../cards/Cards";
import Fleche from "../../assets/Fleche.png";
import { useMissions } from "../../contexts/MissionsProvider";

const Mission = ({ activeMission }) => {
  const { missions } = useMissions();

  return (
    <div className="Mission">
      <div className="cardList-container">
        {missions &&
          missions.map((card) => (
            <div key={card.id}>
              <Cards
                url={"mission"}
                card={card}
                logo={Fleche}
                activeCard={activeMission}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Mission;
