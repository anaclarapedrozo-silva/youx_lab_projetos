import Container from "./layout/container/Container";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./layout/navbar/Navbar";
import { Cadastro } from "./pages/cadastro/Cadastro";
import { Carrinho } from "./pages/carrinho/Carrinho";
import { Detalhes } from "./pages/detalhes/Detalhes";
import { Login } from "./pages/login/Login";
import { Pagina } from "./pages/pagina/Pagina";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-heigth">
        <Routes>
          <Route exact path="/" element={<Pagina />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/detalhes" element={<Detalhes />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
