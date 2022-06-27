import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CharactersProvider from "./contexts/CharactersProvider";
import MissionsProvider from "./contexts/MissionsProvider";
import CharacterDetailProvider from "./contexts/CharacterDetailProvider";

ReactDOM.render(
  <CharactersProvider>
    <MissionsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MissionsProvider>
  </CharactersProvider>,

  document.getElementById("root")
);
