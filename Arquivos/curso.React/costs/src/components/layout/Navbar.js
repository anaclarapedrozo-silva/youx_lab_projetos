import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";
import logo from "../../img/costs_logo.png";
import Container from "./Container";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Costs" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.links}>
            <Link to="/" className={styles.link1}>Home</Link>
          </li>
          <li className={styles.links}>
            <Link to="/projects" className={styles.link1}>Projetos</Link>
          </li>
          <li className={styles.links}>
            <Link to="/empresa" className={styles.link1}>Empresa</Link>
          </li>
          <li className={styles.links}>
            <Link to="/contato" className={styles.link1}>Contato</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
