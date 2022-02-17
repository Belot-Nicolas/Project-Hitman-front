import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Characters from './components/characters/Characters';
import './App.css';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path ="/" element={<Home />} />
     </Routes>
    </div>
  );
}

export default App;
