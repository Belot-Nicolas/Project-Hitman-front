import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './UpdateCharacter.css';

const UpdateCharacter = () => {
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
  
      axios.put(`${process.env.REACT_APP_API_URL}/characters`, formData);
      // navigate("/admin");
    };
  return (
    <div className='UpdateCharacter'>


    </div>
  )
}

export default UpdateCharacter