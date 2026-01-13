import Topo from "../topo/Topo";
import styles from "./Escrever.module.css";
import { CiFaceFrown } from "react-icons/ci";
import { CiFaceMeh } from "react-icons/ci";
import { CiFaceSmile } from "react-icons/ci";
import {postSegredos } from "../service/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Escrever() {
  const [data, setData] = useState("");
  const [texto, setTexto] = useState("");
  const navigate = useNavigate();
  const emailLocalizado = localStorage.getItem("email");
  let face = "";

  const handleFace = (emoção) => {
    face = emoção;
    console.log("face :>> ", face);
  };

  async function handlePostar() {
    try {
      await postSegredos({
        data: data,
        texto: texto,
        emoji: face,
        email: emailLocalizado,
      });
      setData("");
      setTexto("");
      navigate("/confidencias");
      console.log("postado com sucesso no json");
    } catch (error) {
      console.log("error :>> ", error);
    }
  }

  return (
    <div>
      <Topo />
      <div className={styles.form}>
        <h1>O que tem para hoje?</h1>
        <label>Data</label>
        <input
          type="date"
          className={styles.inputData}
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <label>O que você está sentindo?</label>
        <textarea
          className={styles.inputText}
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        ></textarea>
        <label>Seu humor hoje se parece mais com: </label>
        <div className={styles.divEmojis}>
          <button
            className={styles.emojisBtn}
            onClick={() => handleFace("triste")}
          >
            <CiFaceFrown />
          </button>
          <button
            className={styles.emojisBtn}
            onClick={() => handleFace("normal")}
          >
            <CiFaceMeh />
          </button>
          <button
            className={styles.emojisBtn}
            onClick={() => handleFace("feliz")}
          >
            <CiFaceSmile />
          </button>
        </div>
        <div>
          <button className={styles.btnAcoes} onClick={handlePostar}>
            Salvar
          </button>
          <button className={styles.btnAcoes}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}

export default Escrever;
