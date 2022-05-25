import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddMission.css";

const AddMission = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("location", location);
    formData.append("image", image);
    formData.append("description", description);

    axios.post(`${process.env.REACT_APP_API_URL}/missions`, formData);
    navigate("/admin");
  };

  return (
    <div className="AddMission">
      <input
        className="nameMission"
        type="text"
        id="name"
        placeholder="Entrer un nom de la mission"
        onChange={(event) => setName(event.target.value)}
      />
      <input
        className="locationMission"
        type="text"
        id="location"
        placeholder="Entrer un nom de la localisation"
        onChange={(event) => setLocation(event.target.value)}
      />
      <textarea
        className="descriptionMission"
        id="description"
        rows="5"
        cols="50"
        placeholder="Entrer la description de la mission"
        onChange={(event) => setDescription(event.target.value)}
      />
      <input
        className="addImageMission"
        type="file"
        id="image"
        accept="image/jpg"
        onChange={(event) => setImage(event.target.files[0])}
      />
      <button className="buttonSubMiss" type="submit" onClick={handleSubmit}>
        Ajouté
      </button>
    </div>
  );
};

export default AddMission;
