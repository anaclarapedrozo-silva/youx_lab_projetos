import { useNavigate } from "react-router-dom";
import styles from "./Topo.module.css";
import { LuBookLock } from "react-icons/lu";

function Topo() {

  const email = localStorage.getItem("email");
  
  const navigate = useNavigate();

  function handleHome() {
    navigate("/pagina");
  }

  function handleEscrever() {
    navigate("/escrever");
  }

  function handleConfidencias() {
    navigate("/confidencias");
  }

  function handlePerfil() {
    navigate("/perfil");
  }

  return (
    <div className={styles.topoDiario}>
      <h1 className={styles.book}>
        <LuBookLock />
      </h1>
      <h1 className={styles.diarioVirtual}>Diário Virtual</h1>
      <div className={styles.divinha}>
        <button onClick={handleHome}>Home</button>
        <button onClick={handleEscrever}>Escrever</button>
        <button onClick={handleConfidencias}>Suas confidências</button>
        <button onClick={handlePerfil}>Perfil</button>
      </div>
    </div>
  );
}

export default Topo;
