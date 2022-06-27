import React from "react";
import Cards from "../cards/Cards";
import "./Characters.css";
import Cible from "../../assets/Cible.png";
import { useCharacters } from "../../contexts/CharactersProvider";

const Characters = ({ activeChar }) => {
  const { characters } = useCharacters();

  return (
    <div className="Card-characters">
      <div className="cardList-container">
        {characters &&
          characters.map((card) => (
            <div key={card.id}>
              <Cards
                url={"character"}
                card={card}
                logo={Cible}
                activeCard={activeChar}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Characters;
