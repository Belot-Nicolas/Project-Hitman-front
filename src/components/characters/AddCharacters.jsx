import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddCharacters.css";

const AddCharacters = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("age", age);
    formData.append("image", image);
    formData.append("description", description);

    axios.post(`${process.env.REACT_APP_API_URL}/characters`, formData);
    navigate("/admin");
  };
  return (
    <div className="AddCharacters">
      <input
        className="nameCharacter"
        type="text"
        id="name"
        placeholder="Entrer un nom du personnage"
        onChange={(event) => setName(event.target.value)}
      />
      <input
        className="ageCharacter"
        type="text"
        id="age"
        placeholder="Entrer l'age du personnage"
        onChange={(event) => setAge(event.target.value)}
      />
      <textarea
        className="descriptionCharacter"
        id="description"
        rows="5"
        cols="50"
        placeholder="Entrer la description du personnage"
        onChange={(event) => setDescription(event.target.value)}
      />
      <input
        className="addImageCharacter"
        type="file"
        id="image"
        accept="image/jpg"
        onChange={(event) => setImage(event.target.files[0])}
      />
      <button className="buttonSubChar" type="submit" onClick={handleSubmit}>
        Ajouté
      </button>
    </div>
  );
};

export default AddCharacters;
