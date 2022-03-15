import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/navbar/NavBar";
import ButtonCharAndMis from "../components/buttoncharacterAndMission/ButtonCharAndMis";
import DetailCharacter from "../components/characters/DetailCharacter";

const CharacterPage = () => {
  const [characterDetail, setCharacterDetail] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/characters/${params.id}`)
      .then((res) => res.data)
      .then((data) => setCharacterDetail(data));
  }, [params.id]);

  console.log(characterDetail);

  return (
    <div className="CharacterPage">
      <NavBar />
      <ButtonCharAndMis />
      <div className="detailCharacter">
       <DetailCharacter character={characterDetail}/>
      </div>
    </div>
  );
};

export default CharacterPage;

// au onClick de l'image desactivé le OnClick du button personnage et mission 
// metre une marging entre ButtonCharAndMis et DetailCharacter