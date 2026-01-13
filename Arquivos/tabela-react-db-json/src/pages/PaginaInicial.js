import Aviso from "../layout/Aviso";
import Input from "../layout/Input";
import Tabela from "../layout/Tabela";
import { getUsuarios, postUsuarios } from "../service/api";
import styles from "./PaginaInicial.module.css";
import { useEffect, useState } from "react";

function PaginaInicial() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(null);
  const [estadoCivil, setEstadoCivil] = useState("");
  const [cpf, setCpf] = useState(null);
  const [pessoas, setPessoas] = useState([]);
  const [mostrarMsg, setMostrarMsg] = useState(false);

  async function carregarPagina() {
    try {
      const usuarios = await getUsuarios();
      setPessoas(usuarios);
    } catch (err) {
      console.error("Erro ao buscar usuário");
    }
  }
  useEffect(() => {
    carregarPagina();
  }, []);

  async function enviar() {
    
    try {
      await postUsuarios({
        nome: nome,
        idade: idade,
        estadoCivil: estadoCivil,
        cpf: cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4'),
      });
      setMostrarMsg(false);
      await carregarPagina();
    } catch (erro) {
      console.error("Erro ao enviar usuario");
    }
  }

  function handleCadastro() {
    if (nome === "" || idade === "" || cpf === "" || estadoCivil === "") {
      setMostrarMsg(true);
      return;
    }
    enviar();
    setMostrarMsg(false);
    setNome("");
    setIdade("");
    setEstadoCivil("");
    setCpf("");
    carregarPagina();
  }

  return (
    <>
      <div className={styles.div_inicial}>
        <h1>Novo cadastro</h1>
        <Input
          type="text"
          placeholder=""
          label="Nome"
          onChange={(e) => setNome(e.target.value)}
          value={nome}
        />
        <Input
          type="number"
          placeholder=""
          label="Idade"
          onChange={(e) => setIdade(e.target.value)}
          value={idade}
        />
        <Input
          type="text"
          placeholder=""
          label="Estado civil"
          onChange={(e) => setEstadoCivil(e.target.value)}
          value={estadoCivil}
        />
        <Input
          type="number"
          placeholder=""
          label="CPF"
          maxLength={14}
          onChange={(e) => setCpf(e.target.value)}
          value={cpf}
        />
        <button onClick={handleCadastro} className={styles.btnSalvar}>
          Salvar
        </button>
        <div className={styles.tabelinha}>
          <Tabela lista={pessoas} carregarPg={() => carregarPagina()} />
        </div>
        {mostrarMsg && <Aviso />}
      </div>
    </>
  );
}

export default PaginaInicial;
