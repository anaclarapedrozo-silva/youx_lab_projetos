import { useEffect, useState } from "react";
import styles from "./Detalhes.module.css";
import axios from "axios";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { LuBookOpen } from "react-icons/lu";

export default function HalfRating({ n }) {
  console.log("n :>> ", n);
  return (
    <Stack spacing={1}>
      <Rating name="half-rating-read" value={n || 0} precision={0.5} readOnly />
    </Stack>
  );
}
export function Detalhes() {
  const nome = localStorage.getItem("livro");
  const [lista, setLista] = useState([]);

  async function buscarInfos() {
    const response = await axios.get(
      `http://localhost:5000/livros?nome=${nome}`
    );
    setLista(response.data[0]);
  }

  useEffect(() => {
    buscarInfos();
  }, []);

  useEffect(() => {
    console.log("lista.estrelas :>> ", lista.estrelas);
  }, [lista]);

  console.log("lista :>> ", lista);
  return (
    <div className={styles.detalhes}>
      <div className={styles.infos}>
        <img src={lista.imagem} className={styles.imagem} />
      </div>
      <div className={styles.div_informacoes}>
        <h1>{lista.nome}</h1>
        <HalfRating n={lista.estrelas} />
        <p>{lista.sinopse}</p>
        <div className={styles.pag}>
          <LuBookOpen className={styles.book} />
          <p>{lista.paginas}</p>
        </div>
        <div className={styles.botoes}>
          <button className={styles.btnAcoes}>Comprar agora</button>
          <button className={styles.btnAcoes}>Adicionar ao carrinho</button>
        </div>
      </div>
    </div>
  );
}
