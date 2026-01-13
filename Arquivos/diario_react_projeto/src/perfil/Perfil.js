import styles from "./Perfil.module.css";
import Topo from "../topo/Topo";
import { MdOutlineExitToApp } from "react-icons/md";
import Dashboard from "../dashboard/Dashboard";
import { useNavigate } from "react-router-dom";

function Perfil() {
  const emailLocalizado = localStorage.getItem("email");
  const navigate = useNavigate();

  function sair() {
    navigate("/login");
  }

  return (
    <div className={styles.info}>
      <Topo className={styles.topo} />

      <img className={styles.livroImg} src="/images/people.png" alt="livro" />
      <p>{emailLocalizado}</p>
      <button className={styles.sair} onClick={sair}>
        <MdOutlineExitToApp />
      </button>
      <Dashboard email={emailLocalizado} />
    </div>
  );
}

export default Perfil;
