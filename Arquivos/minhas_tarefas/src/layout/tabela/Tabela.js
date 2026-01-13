import { useState } from "react";


import styles from "./Tabela.module.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import Modal from "../modal/Modal";
import { editarStatus, getDeletar, voltarStatus } from "../../service/api";

function Tabela({ lista, carregarPg, categorias}) {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [tarefaEditar, setTarefaEditar] = useState(null);
  
  async function deletar(id) {
    await getDeletar(id).then(() => {
      carregarPg();
    });
  }

  const handleCheckBox = async (e, id, status, trf) => {
    if (trf.status === "pendente") {
      await editarStatus(id);
    } else {
      await voltarStatus(id);
    }
    carregarPg();
    console.log("status :>> ", e.target.checked);
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
            {lista?.map((inf, i) => (
              <tr key={inf.id + i}>
                <td>
                  <input
                    type="checkbox"
                    checked={inf.status === "concluido"}
                    onChange={(e) => handleCheckBox(e, inf.id, inf.status, inf)}
                  />
                </td>
                <td>{inf.nome}</td>
                <td>{inf.categories || "Indefinido"}</td>
                <td
                  className={
                    inf.status === "pendente"
                      ? styles.pendente
                      : styles.concluido
                  }
                >
                  {inf.status}
                </td>
                <td>{inf.data}</td>
                <td>
                  <button
                    onClick={() => deletar(inf.id)}
                    className={styles.btnAcoes}
                  >
                    <FaRegTrashAlt />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleEditar(inf)}
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
