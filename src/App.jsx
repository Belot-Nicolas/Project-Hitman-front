import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageCharacter from "./pages/PageCharacter";
import PageMission from "./pages/PageMission";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import UserProvider from "./contexts/UserProvider";
import "./App.css";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/character/:id" element={<PageCharacter />} />
          <Route path="/mission/:id" element={<PageMission />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/compte" element={<Account />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
