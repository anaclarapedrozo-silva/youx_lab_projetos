import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { CiFaceSmile } from "react-icons/ci";
import { CiFaceFrown } from "react-icons/ci";
import { CiFaceMeh } from "react-icons/ci";
import styles from "./Dashboard.module.css";
import BasicModal from "../modal/ModalMUi";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#E6CFA9",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: "#9A3F3F",
  borderRadius: "16px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
}));

export default function Dashboard({ email }) {
  const [lista, setLista] = useState([]);
  const [listaPessoas, setListaPessoas] = useState([]);
  const [listaFeliz, setListaFeliz] = useState([]);
  const [listaTriste, setListaTriste] = useState([]);
  const [listaNormal, setListaNormal] = useState([]);
  const [numeroSenha, setNumeroSenha] = useState(null);
  const emailLocalizado = localStorage.getItem("email");

  async function numeroSegredo() {
    const resposta = await axios.get(
      `http://localhost:5000/segredos?email=${email}`
    );
    setLista(resposta.data);
  }

  async function numeroPessoas() {
    const resposta = await axios.get(`http://localhost:5000/users`);
    setListaPessoas(resposta.data);
  }

  async function numeroEmojis() {
    const resposta = await axios.get(
      `http://localhost:5000/segredos?email=${emailLocalizado}`
    );
    const resp = resposta.data;

    const pessoa = await axios.get(
      `http://localhost:5000/users?email=${emailLocalizado}`
    );

    const pes = pessoa.data;

    setNumeroSenha(pes[0].password.length);

    const feliz = resp.filter((resposta) => resposta.emoji === "feliz");
    setListaFeliz(feliz);
    const triste = resp.filter((resposta) => resposta.emoji === "triste");
    setListaTriste(triste);
    const normal = resp.filter((resposta) => resposta.emoji === "normal");
    setListaNormal(normal);
    console.log("feliz :>> ", feliz);
  }

  useEffect(() => {
    numeroSegredo();
    numeroPessoas();
    numeroEmojis();
  }, [])

  const pontos = "*".repeat(numeroSenha);
  console.log('pontos :>> ', pontos);


  function mudarSenha () {

  }
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6}>
          <Item>
            <h3>NÚMERO DE SEGREDOS</h3>
            <h1>{lista.length}</h1>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Item>
            <h3>NÚMERO DE PESSOAS CADASTRADAS</h3>
            <h1>{listaPessoas.length}</h1>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Item>
            <h3>SUAS EMOÇÕES</h3>
            <h4>
              <CiFaceSmile className={styles.emoji} /> {listaFeliz.length}
            </h4>
            <h4>
              <CiFaceMeh className={styles.emoji} /> {listaNormal.length}
            </h4>
            <h4>
              <CiFaceFrown className={styles.emoji} /> {listaTriste.length}
            </h4>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Item>
            <h3>INFORMAÇÕES PESSOAIS</h3>
            <h4>E-mail: {emailLocalizado}</h4>
            <h4>Senha: {pontos}</h4>
            <BasicModal/>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
