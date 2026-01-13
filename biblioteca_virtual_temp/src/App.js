import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Criar from "./components/pages/Criar";
import Navbar from "./components/layout/Navbar";
import Login from "./components/pages/Login";
import Pagina from "./components/pages/Pagina";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/criar" element={<Criar />}></Route>
          <Route path="/pagina" element={<Pagina/>}></Route>
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
