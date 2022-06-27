import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useCharacterDetail } from '../contexts/CharacterDetailProvider';

const PutCharacters = () => {

  // faire apparetre la data pour pouvoir la modifier sans devoir tout reecrire

  const [characterDetail, setCharacterDetail] = useState([]);
  const navigate = useNavigate();
  const paramsGetCharacter = useParams();
  const paramsPutCharacter = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/characters/${paramsGetCharacter.id}`)
      .then((res) => res.data)
      .then((data) => setCharacterDetail(data));
  }, [paramsGetCharacter.id]);



  
  const [name, setName] = useState(characterDetail.name);
  const [age, setAge] = useState(characterDetail.age);
  const [image, setImage] = useState(characterDetail.image);
  const [description, setDescription] = useState(characterDetail.description);
  

    const handleSubmit = () => {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("age", age);
      formData.append("image", image);
      formData.append("description", description);
  
      axios.put(`${process.env.REACT_APP_API_URL}/characters/${paramsPutCharacter.id}`, formData);
      navigate("/admin");
    };

    return (
      <div className="AddCharacters">
        <textarea
          className="nameCharacter"
          value={name}
          type="text"
          id="name"
          // placeholder="Entrer un nom du personnage"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          className="ageCharacter"
          value={age}
          type="number"
          id="age"
          placeholder="Entrer l'age du personnage"
          onChange={(event) => setAge(event.target.value)}
        />
        <textarea
          className="descriptionCharacter"
          value={description}
          id="description"
          rows="5"
          cols="50"
          placeholder="Entrer la description du personnage"
          onChange={(event) => setDescription(event.target.value)}
        />
        <input
          className="addImageCharacter"
          value={image}
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


export default PutCharacters