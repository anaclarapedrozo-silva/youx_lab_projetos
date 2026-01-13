import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaInicial from "./pages/PaginaInicial";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<PaginaInicial/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
