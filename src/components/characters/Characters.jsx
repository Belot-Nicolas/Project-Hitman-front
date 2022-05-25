import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Cards from '../cards/Cards';
import './Characters.css'
import Cible from '../../assets/Cible.png'

const Characters = ({activeChar}) => {
  const [listsCharacters, setListsCharacters] = useState([])
 

  useEffect(() => {
    axios
    .get("http://localhost:8000/api/characters/")
    .then((res) => res.data)
    .then((data) => setListsCharacters(data))
    // console.log(listsCharacters);
}, []);

  return (

  <div className='Card-characters'> 
     <div className="cardList-container">
        {listsCharacters &&
        listsCharacters.map((card) =>
        <div key={card.id}>
            <Cards url={'character'} card={card} logo={Cible} activeCard={activeChar} />
        </div> 
        )}
      </div>
  </div>
  )
};

export default Characters;
