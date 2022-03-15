import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageCharacter from "./pages/PageCharacter";
import Contact from "./pages/Contact";
import Account from "./pages/Account"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/character/:id" element={<PageCharacter />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/compte" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
