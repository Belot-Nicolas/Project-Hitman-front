import React from "react";
import './DetailCharacter.css'

const DetailCharacter = ({ character }) => {
  return (
    <div className="DetailCharacter">

      <div className="imageAndDescription">
        <img src={character.image} alt={character.name} />
        <div className="description">
          <span>{character.description}</span>
        </div>
      </div>

      <div className="nameAndAge">
        <div className="characterName">
          <h1>{character.name}</h1>
          <span>Age: {character.age}</span>
        </div>
      </div>
    </div>
  );
};

export default DetailCharacter;
