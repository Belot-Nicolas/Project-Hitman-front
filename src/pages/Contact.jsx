import React from "react";
import NavBar from "../components/navbar/NavBar";

const Contact = () => {
  return (
    <div className="Contact">
      <NavBar />
      <div className="title">
        <h2>Un contrat a nous proposé ?</h2>
        <h2>ou juste une question ?</h2>
        <h2>C'est par ici</h2>
      </div>

      <div className="form">
        <form>
          <input type="text" id="firstname" placeholder="Nom" />
          <input type="text" id="lastname" placeholder="Prenom" />
          <input type="email" id="email" placeholder="Email" />
          <input type="text" id="phone" placeholder="telephone" />
          <textarea type="text" id="text" placeholder="Votre message" />
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
