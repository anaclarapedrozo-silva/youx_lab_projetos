import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaPrincipal from "./pagina/PaginaPrincipal";
import Escrever from "./escrever/Escrever";
import Confidencias from "./confidencias/Confidencias";
import Cadastro from "./login/cadastro";
import Login from "./login/login";
import Perfil from "./perfil/Perfil";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pagina" element={<PaginaPrincipal />} />
          <Route path="/escrever" element={<Escrever />} />
          <Route path="/confidencias" element={<Confidencias />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
