import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Cards from '../cards/Cards';

const Mission = () => {
  const [listsMission, setListsMission] = useState([])
 

  useEffect(() => {
    axios
    .get("http://localhost:8000/missions/")
    .then((res) => res.data)
    .then((data) => setListsMission(data))
}, []);

  return (

  <div className='Mission'> 
     <div className="cardList-container">
        {listsMission &&
        listsMission.map((card) =>
        <div key={card.id}>
            <Cards card={card} />
        </div> 
        )}
      </div>
  </div>
  )
};

export default Mission;