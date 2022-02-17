import React from 'react';
import './Cards.css';

const Cards = ({card, image}) => {
  return (
  <div className='Cards'>
          <img className='img-character' src={card.image} alt={card.name} />
          <div className="card-name">
           <img className='cible' src={image} alt="Image" /> <h3>{card.name}</h3>
         </div>
  </div>
  );
};

export default Cards;
