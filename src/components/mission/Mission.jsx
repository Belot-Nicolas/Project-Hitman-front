import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Cards from '../cards/Cards';
import Fleche from "../../assets/Fleche.png"

const Mission = ({activeMission}) => {
  const [listsMission, setListsMission] = useState([])
 

  useEffect(() => {
    axios
    .get("http://localhost:8000/api/missions/")
    .then((res) => res.data)
    .then((data) => setListsMission(data))
}, []);

  return (

  <div className='Mission'> 
     <div className="cardList-container">
        {listsMission &&
        listsMission.map((card) =>
        <div key={card.id}>
            <Cards url={'mission'} card={card} image={Fleche} activeCard={activeMission}/>
        </div> 
        )}
      </div>
  </div>
  )
};

export default Mission;