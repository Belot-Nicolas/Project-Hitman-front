import { Routes, Route, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useCharacters } from "./contexts/CharactersProvider";
import { useMissions } from "./contexts/MissionsProvider";
import { useCharacterDetail } from "./contexts/CharacterDetailProvider";
import UserProvider from "./contexts/UserProvider";
import axios from "axios";
import Home from "./pages/Home";
import PageCharacter from "./pages/PageCharacter";
import PageMission from "./pages/PageMission";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import AdminRoutes from "./components/admin/AdminRoutes";
import AdminPanel from "./components/admin/AdminPanel";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import PutCharacters from "./pages/PutCharacters";

function App() {
  AOS.init({
    duration: 2000,
  });

  const paramsGetCharacter = useParams()

  const { setCharacters } = useCharacters();
  const { setMissions } = useMissions();
  const { setCharacterDetail } = useCharacterDetail();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/characters`)
      .then((res) => res.data)
      .then((data) => setCharacters(data));
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/missions`)
      .then((res) => res.data)
      .then((data) => setMissions(data));
  }, []);


  return (
    <div className="App">
      <UserProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/character/:id" element={<PageCharacter />} />
          <Route path="/mission/:id" element={<PageMission />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/compte" element={<Account />} />
          <Route path="/admin" element={<AdminRoutes />}>
            <Route index element={<AdminPanel />} />
            <Route path="/admin/putCharacter/:id" element={<PutCharacters/>} />
            <Route path="/admin/putMission/:id" />
          </Route>
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
