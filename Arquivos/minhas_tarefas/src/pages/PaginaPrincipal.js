import { useEffect, useState } from "react";
import Input from "../layout/input/Input";
import Select from "../layout/select/Select";
import styles from "./PaginaPrincipal.module.css";
import { getCategories, getTarefas, postTarefas} from "../service/api";
import Tabela from "../layout/tabela/Tabela";

function PaginaPrincipal() {
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [categoria, setCategoria] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [info, setInfos] = useState([]);
  const [valorStatus, setValorStatus] = useState("");
  const status = [
    {
      id: "1",
      name: "Todos",
    },
    { id: "2", name: "pendente" },
    {
      id: "3",
      name: "concluido",
    },
  ];

  useEffect(() => {
    carregarPagina();
    console.log("valorStatus :>> ", valorStatus);
  }, [valorStatus]);

  useEffect(() => {
    carregarCategorias();
  }, []);

  async function carregarPagina() {
    try {
      const tarefas = await getTarefas();
      let tarefasFiltradas = [...tarefas];
      if (valorStatus && valorStatus !== "Todos") {
        tarefasFiltradas = tarefas.filter(
          (inf) => inf.status.toLowerCase() === valorStatus.toLowerCase()
        );
      }

      setInfos(tarefasFiltradas);
    } catch (err) {
      console.error("Erro ao buscar usuário");
    }
  }

  async function carregarCategorias() {
    try {
      const categoriasDados = await getCategories();
      setCategorias(categoriasDados);
    } catch (error) {
      console.log("carregarCategorias", error);
    }
  }

  async function handleEnviar() {
    try {
      if (nome === "" || data === "") {
        alert("Preencha todos os campos");
      } else {
        postTarefas({
          nome: nome,
          data: data,
          categories: categoria,
          status: "pendente",
        });
      }

      const tarefas = await getTarefas();
      setInfos(tarefas);
      setNome("");
      setData("");
    } catch (erro) {
      console.log("erro: ", erro);
    }
    carregarPagina();
  }

  return (
    <>
      <div className={styles.container_pag}>
        <h2>Minhas tarefas</h2>
        <h4>Adicionar tarefas</h4>
        <Input
          type="text"
          placeholder="Nome da tarefa"
          label="Nome da tarefa"
          onChange={(e) => setNome(e.target.value)}
          value={nome}
        />
        <Input
          type="date"
          placeholder="Data de entrega"
          label="Data de entrega"
          onChange={(e) => setData(e.target.value)}
          value={data}
        />
        <Select
          lista={categorias}
          onChange={(e) => setCategoria(e.target.value)}
          value={categoria}
        />
        <button onClick={handleEnviar} className={styles.btnEnviar}>
          Enviar
        </button>
        <Select
          lista={status}
          onChange={(e) => setValorStatus(e.target.value)}
          className={styles.selectFiltro}
        />
        <div>
          <Tabela
            lista={info}
            carregarPg={() => carregarPagina()}
            setLista={setInfos}
            categorias={categorias}
          />
        </div>
      </div>
    </>
  );
}

export default PaginaPrincipal;
