import styles from "./Confidencias.module.css";
import axios from "axios";
import { CiFaceSmile } from "react-icons/ci";
import { CiFaceFrown } from "react-icons/ci";
import { CiFaceMeh } from "react-icons/ci";
import Topo from "../topo/Topo";
import { useEffect, useState } from "react";
import { deleteSegredo, getSegredos } from "../service/api";
import Modal from "../modal/Modal";

function Confidencias() {
  const [segredos, setSegredos] = useState([]);
  const [segredosDetalhes, setSegredosDetalhes] = useState([]);
  const emailLocalizado = localStorage.getItem("email");
  const [modalAberto, setModalAberto] = useState(false);

  useEffect(() => {
    carregarPg();
  }, []);

  const apagarSegredo = async (id) => {
    try {
      await deleteSegredo(id);
      await getSegredos();
    } catch (error) {
      console.log("error :>> ", error);
    }
    carregarPg();
  };

  const verDetalhes = async (id) => {
    try {
      const dados = await axios.get(`http://localhost:5000/segredos?id=${id}`);
      setSegredosDetalhes(dados.data[0]);
      console.log('dados.data :>> ', dados.data);
      console.log('dados.data[0] :>> ', dados.data[0]);
      setModalAberto(true);
      carregarPg();
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  const carregarPg = async () => {
    try {
      const dados = await axios.get(
        `http://localhost:5000/segredos?email=${emailLocalizado}`
      );
      setSegredos(dados.data);
    } catch (error) {
      console.log("erro ao salvar segredos :>> ", error);
    }
  };

  return (
    <>
      <Topo />

      <div className={styles.div_pai}>
        {segredos.map((segredo, index) => (
          <div className={styles.div_segredo} key={index}>
            <h4>{segredo.data || "Data indefinida"}</h4>
            <p>{segredo.texto}</p>
            <div className={styles.div_btn}>
              <button
                className={styles.btnAcoes}
                onClick={() => verDetalhes(segredo.id)}
              >
                Ver detalhes
              </button>
              <button
                className={styles.btnAcoes}
                onClick={() => apagarSegredo(segredo.id)}
              >
                Apagar
              </button>
            </div>
          </div>
        ))}
        {modalAberto && (
          <Modal lista={segredosDetalhes} setModal={setModalAberto} setSegredos={setSegredos}/>
        )}
      </div>
    </>
  );
}

export default Confidencias;
