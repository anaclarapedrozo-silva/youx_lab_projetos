import Input from "../layout/Input";
import Modal from "../layout/Modal";
import Tabela from "../layout/Tabela";
import styles from "./PaginaInicial.module.css";
import { useState, useEffect } from "react";
import { FaPencil } from "react-icons/fa6";

function PaginaInicial() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(null);
  const [estadoCivil, setEstadoCivil] = useState("");
  const [cpf, setCpf] = useState(null);
  const [pessoas, setPessoas] = useState([]);

  function handleCadastro() {
    let user = {
      nome: nome,
      idade: idade,
      estadoCivil: estadoCivil,
      cpf: cpf,
    };
    setPessoas([...pessoas, user]);
    setNome("");
    setIdade("");
    setEstadoCivil("");
    setCpf("");
  }

  const removerLinha = (id) => {
    const novosDados = [...pessoas];
    novosDados.splice(id, 1);
    setPessoas(novosDados);
  };

  return (
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
        onChange={(e) => setCpf(e.target.value)}
        value={cpf}
      />
      <button onClick={handleCadastro} className={styles.btnSalvar}>
        Salvar
      </button>
      <div className={styles.tabelinha}>
        <Tabela
          lista={pessoas}
          setLista={setPessoas}
        />
      </div>
    </div>
  );
}

export default PaginaInicial;
