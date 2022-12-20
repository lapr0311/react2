import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokemones from "./components/ListaPokemones";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Pokemon from "./components/Pokemon";
import 'bootstrap/dist/css/bootstrap.min.css'





function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>    
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/pokemones/" element={<Pokemones/>} />
          <Route path="/pokemones/:name" element={<Pokemon/>} />
        </Routes>        
      </BrowserRouter>
    </div>
  );
}
export default App;