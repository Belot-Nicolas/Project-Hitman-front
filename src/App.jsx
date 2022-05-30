import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageCharacter from "./pages/PageCharacter";
import PageMission from "./pages/PageMission";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import UserProvider from "./contexts/UserProvider";
import "./App.css";
import AOS from 'aos'
import 'aos/dist/aos.css';
import AdminRoutes from "./components/admin/AdminRoutes";
import AdminPanel from "./components/admin/AdminPanel";

function App() {

  AOS.init({
    duration : 2000
  })

  return (
    <div className="App">
      <UserProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/character/:id" element={<PageCharacter />} />
          <Route path="/mission/:id" element={<PageMission />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/compte" element={<Account />} />
          <Route path="/admin" element ={<AdminRoutes />}>
            <Route index element={<AdminPanel/>}/>
            <Route path="/admin/putCharacter/:id" />
            <Route path="/admin/putMission/:id" />
          </Route>
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
