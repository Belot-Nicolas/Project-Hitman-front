import { createContext, useContext, useState } from "react";

const CharactersContext = createContext(null);

const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  return (
    <CharactersContext.Provider value={{ characters, setCharacters }}>
      {children}
    </CharactersContext.Provider>
  );
};

export const useCharacters = () => useContext(CharactersContext);

export default CharactersProvider;
