import { createContext, useContext, useState } from "react";

const MissionsContext = createContext(null);

const MissionsProvider = ({ children }) => {
  const [missions, setMissions] = useState([]);

  return (
    <MissionsContext.Provider value={{ missions, setMissions }}>
      {children}
    </MissionsContext.Provider>
  );
};

export const useMissions = () => useContext(MissionsContext);

export default MissionsProvider;