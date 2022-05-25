import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

const Cards = ({ url,card, logo, activeCard }) => {
  console.log(card.image)
  return (
    <div className="Cards">
      <div className="card">
        <div className="card_face">
        <Link to={{pathname: `/${url}/${card.id}`}} >
           <img
            className="img-character"
            src={`${process.env.REACT_APP_API_PIC}/${card.image}`}
            alt={card.name}
            onClick={activeCard}
          />
          </Link>
          <div className="card-name">
            <img className="cible" src={logo} alt={card.name} /> 
            <h3>{card.name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
