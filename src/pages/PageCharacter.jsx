import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/navbar/NavBar";
import ButtonCharAndMis from "../components/buttoncharacterAndMission/ButtonCharAndMis";
import DetailCharacter from "../components/characters/DetailCharacter";
import "./PageCharacters.css"

const CharacterPage = () => {
  const [characterDetail, setCharacterDetail] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/characters/${params.id}`)
      .then((res) => res.data)
      .then((data) => setCharacterDetail(data));
  }, [params.id]);


  return (
    <div className="CharacterPage">
      <NavBar />
      <ButtonCharAndMis />
      <div className="detailCharacter" >
       <DetailCharacter character={characterDetail}/>
      </div>
    </div>
  );
};

export default CharacterPage;
