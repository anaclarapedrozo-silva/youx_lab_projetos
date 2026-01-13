import { useState } from "react";
import Input from "../input/Input";
import styles from "./Modal.module.css";
import Select from "../select/Select";
import { editarTarefa } from "../../service/api";

function Modal({ categorias, tarefa, setFecharModal, carregarPg }) {
  const [cat, setCat] = useState(tarefa.categories);
  const [nome, setNome] = useState(tarefa.nome);
  const [data, setData] = useState(tarefa.data);

  function handleCancelar() {
    setFecharModal(false);
  }

  const handleSalvar = (id, tarefa) => {
    editarTarefa(id, {
      nome: nome,
      data: data,
      categories: tarefa.categorie,
      status: tarefa.status,
    });
    setFecharModal(false);
    carregarPg();
  };

  return (
    <div className={styles.div_fundo}>
      <div className={styles.div_modal}>
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
        <Select lista={categorias} onChange={(e) => setCat(e.target.value)} />
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
