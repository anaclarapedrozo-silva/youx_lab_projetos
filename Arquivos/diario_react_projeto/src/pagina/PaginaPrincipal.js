import { useLocation, useNavigate } from "react-router-dom";
import Topo from "../topo/Topo";
import styles from "./PaginaPrincipal.module.css";

function PaginaPrincipal() {
  const navigate = useNavigate();
  const location = useLocation();
  const emailLocalizado = location.state?.email || "";
  function handleEscrever() {
    navigate("/escrever", {
      state: {
        email: emailLocalizado,
      },
    });
  }
  return (
    <>
    {localStorage.getItem("isLogado") && (
    <div>
      <Topo emailLocalizado={emailLocalizado}/>
      <div className={styles.pag}>
        <h2>
          Bem-vindo ao <span className={styles.diario}>Diário Virtual</span>
        </h2>
        <p>Coloque seus pensamentos em palavras</p>
        <img className={styles.livroImg} src="/images/livro.png" alt="livro" />
        <button onClick={handleEscrever}>Escrever</button>
      </div>
    </div>
    )}
    </>
  );
}

export default PaginaPrincipal;
