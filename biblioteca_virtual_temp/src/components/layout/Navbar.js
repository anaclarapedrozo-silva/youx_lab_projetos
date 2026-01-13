import styles from "./Navbar.module.css";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/entrar">Entrar</Link>
        </li>
        <li>
          <Link to="/criar">Criar</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
