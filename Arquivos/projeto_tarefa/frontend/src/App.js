import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaPrincipal from "./pages/PaginaPrincipal";
import Criar from "./pages/CriarConta";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
           <Route path='/Pagina' element={<PaginaPrincipal/>}/>
           <Route path='/' element={<Criar/>}/>
           <Route path="/Login" element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
