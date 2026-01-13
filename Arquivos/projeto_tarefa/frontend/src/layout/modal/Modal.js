import { useState } from "react";
import Input from "../input/Input";
import styles from "./Modal.module.css";
import Select from "../select/Select";
import { editarTarefa } from "../../service/api";

function Modal({ categorias, tarefa, setFecharModal, carregarPg }) {
  const [categoria, setCategoria] = useState(tarefa.categories.name);
  const [nome, setNome] = useState(tarefa.nome);
  const [data, setData] = useState(tarefa.data);

  function handleCancelar() {
    setFecharModal(false);
  }

  const handleSalvar = (id, tarefa) => {
    editarTarefa(id, {
      nome: nome,
      data: data,
      categories: categoria
    });
    setFecharModal(false);
    carregarPg();
    
  };

  const handleSair = () => {
    setFecharModal(false);
  };
  console.log("tarefa.categorie :>> ", tarefa.categorie);

  return (
    <div className={styles.div_fundo}>
      <div className={styles.div_modal}>
        <button className={styles.btnSair} onClick={handleCancelar}>
          X
        </button>
        <h2>Editar tarefa</h2>
        <Input
          type="text"
          placeholder="Edite o nome da tarefa"
          label="Nome da tarefa"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <Input
          type="date"
          placeholder="Define a data"
          label="Data"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <img
          src="/images/tarefa.png"
          alt="mc gorila"
          className={styles.mcgorila}
        />
        <Select
          lista={categorias}
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          texto="Escolha a categoria"
        />
        <button
          className={styles.btnSalvar}
          onClick={() => handleSalvar(tarefa.id, tarefa)}
        >
          Salvar
        </button>
        <button className={styles.btnSalvar} onClick={handleCancelar}>
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default Modal;
