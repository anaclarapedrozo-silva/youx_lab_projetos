import styles from "./Modal.module.css";
import { CiFaceSmile } from "react-icons/ci";
import { CiFaceFrown } from "react-icons/ci";
import { CiFaceMeh } from "react-icons/ci";
import { deleteSegredo } from "../service/api";
import { FaQuestion } from "react-icons/fa";
import axios from "axios";

function Modal({ lista, setModal, setSegredos }) {

  function fecharModal() {
    setModal(false);
  }

  const apagar = async(id) => {
    await deleteSegredo(id)
    carregarPg(setSegredos)
    setModal(false)
  }

  const carregarPg = async (setSegredos) => {
    try {
      const dados = await axios.get(
        `http://localhost:5000/segredos?email=${lista.email}`
      );
      setSegredos(dados.data);
    } catch (error) {
      console.log("erro ao salvar segredos :>> ", error);
    }
  };

  function VerificarEmoji() {
    if (lista.emoji === "feliz") {
      return <CiFaceSmile />;
    }
    if (lista.emoji === "triste") {
      return <CiFaceFrown />;
    }if(lista.emoji === "normal"){
      return <CiFaceMeh />;
    }else{
      return <FaQuestion/>
    }
  }

  return (
    <div className={styles.div_fundo}>
      <div className={styles.div_modal}>
        <h1>{lista.data || "Data indefinida"}</h1>
        <h2>
          <VerificarEmoji />
        </h2>
        <button onClick={fecharModal} className={styles.sairbtn}>
          X
        </button>
        <p>{lista.texto}</p>
        <div className={styles.div_btn}>
          <button className={styles.acoesbtn} onClick={fecharModal}>Voltar</button>
          <button className={styles.acoesbtn} onClick={() => apagar(lista.id)}>Apagar segredo</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
