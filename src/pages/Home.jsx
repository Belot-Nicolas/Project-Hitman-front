import React, { useState } from "react";
import NavBar from "../components/navbar/NavBar";
import ButtonCharAndMis from "../components/buttoncharacterAndMission/ButtonCharAndMis";
import "./Home.css";
import Img47 from "../assets/Img47.png";

const Home = () => {
  return (
    <div className="Home">
      <NavBar />
      <ButtonCharAndMis />

      {/* <div className="page-home">
        <img src={Img47} alt="Agent 47" />
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
          possimus architecto sapiente deleniti doloremque vero ratione nostrum
          eaque inventore incidunt, ab voluptas, iste, earum aliquid culpa
          laboriosam animi totam nihil.
        </span>
      </div> */}
    </div>
  );
};

export default Home;
