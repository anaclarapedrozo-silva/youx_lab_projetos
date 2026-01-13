import { useState } from "react";
import styles from "./Tabela.module.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import Modal from "../modal/Modal";
import { editarStatus, getDeletar, voltarStatus } from "../../service/api";

function Tabela({ lista, carregarPg, categorias }) {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [tarefaEditar, setTarefaEditar] = useState(null);
  
  async function deletar(id) {
    await getDeletar(id).then(() => {
      carregarPg();
    });
    console.log("id :>> ", id);
  }

  const handleCheckBox = async (e, id, tarefa) => {
    if (tarefa.status === "Pendente") {
      await editarStatus(id);
    } else{
      await voltarStatus(id);
    }
    carregarPg();
    console.log("status :>> ", e.target.checked);
    console.log("tarefa.status :>> ", tarefa.status);
  };

  const handleEditar = (tarefa) => {
    setMostrarModal(true);
    setTarefaEditar(tarefa);
  };

  return (
    <>
      <div className={styles.tabela_div}>
        <table className={styles.tabela}>
          <thead>
            <tr>
              <th>Concluídos</th>
              <th>Nome</th>
              <th>Categoria</th>
              <th>Status</th>
              <th>Data de entrega</th>
              <th>Apagar</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {lista?.map((tarefa, i) => (
              <tr key={tarefa.id + i}>
                <td>
                  <input
                    type="checkbox"
                    checked={tarefa.status === "Concluído"}
                    onChange={(e) => handleCheckBox(e, tarefa.id, tarefa)}
                  />
                </td>
                <td>{tarefa.nome}</td>
                <td>{tarefa.categories.name || "Indefinido"}</td>
                <td
                  className={
                    tarefa.status === "Pendente"
                      ? styles.pendente
                      : styles.concluido
                  }
                >
                  {tarefa.status}
                </td>
                <td>{tarefa.data}</td>
                <td>
                  <button
                    onClick={() => deletar(tarefa.id)}
                    className={styles.btnAcoes}
                  >
                    <FaRegTrashAlt />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleEditar(tarefa)}
                    className={styles.btnAcoes}
                  >
                    <FaPencil />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          {mostrarModal && tarefaEditar && (
            <Modal
              categorias={categorias}
              tarefa={tarefaEditar}
              setFecharModal={setMostrarModal}
              carregarPg={carregarPg}
            />
          )}
        </table>
      </div>
    </>
  );
}

export default Tabela;
