import React, { useState } from 'react';
import NavBar from '../components/navbar/NavBar';
import Characters from '../components/characters/Characters';
import Mission from '../components/mission/Mission';
import './Home.css';
import Img47 from '../assets/Img47.png';

const Home = () => {
  const [charactersActive, setCharactersActive] = useState(false);
  const [missionActive, setMissionActive] = useState(false);

  function activeCharacter(){
    setCharactersActive(!charactersActive)
}
  function activeMission(){
    setMissionActive(!missionActive)
}

console.log(activeCharacter)

    return (
  <div className='Home'>
      <NavBar />
    <div className='characters-and-misison'>
          <div className='characters'>
            <button onClick={activeCharacter}>P E R S O N N A G E</button>
            <div>
            {charactersActive? <Characters /> : null}
            </div>
          </div>

          <div className='mission'>
            <button onClick={activeMission}>M I S S I O N</button>
            <div>
            {missionActive? <Mission /> : null}
            </div>
          </div>
      </div>    
    <div className="page-home">
    <img src={Img47} alt="Agent 47" />
    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Eius possimus architecto sapiente deleniti doloremque vero ratione nostrum eaque inventore incidunt,
       ab voluptas, iste, earum aliquid culpa laboriosam animi totam nihil.</span>
    </div>  
  </div>
  )   
};

export default Home;
