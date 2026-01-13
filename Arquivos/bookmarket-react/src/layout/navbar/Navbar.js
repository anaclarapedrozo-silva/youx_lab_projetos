import { Link } from "react-router-dom";
import Container from "../container/Container";
import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <Container>
      <div className={styles.navbar}>
        <ul className={styles.lista}>
          <li className={styles.app}>
            <Link to="/" className={styles.link}>
              <img src="../imagens/livro.png" className={styles.img} />
            </Link>
            <h2 className={styles.h2}>BookMarket</h2>
          </li>
          <li>
            <Link to="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/carrinho" className={styles.link}>
              Ver carrinho
            </Link>
          </li>
          <li>
            <Link to="/carrinho" className={styles.link}>
              Perfil
            </Link>
          </li>
        </ul>
      </div>
    </Container>
  );
}
