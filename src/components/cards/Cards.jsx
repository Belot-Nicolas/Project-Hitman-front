import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Cards.css";

const Cards = ({ card, image }) => {
  const params = useParams();
  return (
    <div className="Cards">
      <div className="card">
        <div className="card_face">
        <Link to={{pathname: `/character/${card.id}`}} >
           <img
            className="img-character"
            src={card.image}
            alt={card.name}
          />
          </Link>
          <div className="card-name">
            <img className="cible" src={image} alt={card.name} /> 
            <h3>{card.name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
