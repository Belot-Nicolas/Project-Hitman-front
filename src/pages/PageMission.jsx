import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/navbar/NavBar";
import ButtonCharAndMis from "../components/buttoncharacterAndMission/ButtonCharAndMis";
import DetailCharacter from "../components/characters/DetailCharacter";
import "./PageCharacters.css"

const PageMission = () => {
  const [missionDetail, setMissionDetail] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/missions/${params.id}`)
      .then((res) => res.data)
      .then((data) => setMissionDetail(data));
  }, [params.id]);


  return (
    <div className="CharacterPage">
      <NavBar />
      <ButtonCharAndMis />
      <div className="detailCharacter">
       <DetailCharacter character={missionDetail}/>
      </div>
    </div>
  );
};

export default PageMission;