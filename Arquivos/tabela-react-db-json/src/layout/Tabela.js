import styles from "./Tabela.module.css";
import { FaTrashAlt } from "react-icons/fa";
import Modal from "./Modal";
import { deletar } from "../service/api";
import { useState } from "react";
import CheckboxForm from "./CheckBoxForm";
function Tabela({ lista, carregarPg }) {

  const [selecionados, setSelecionados] = useState([]);
  const [cpfFormatado, setCpfFormatado] = useState([])

  async function handleDelete(id) {
    await deletar(id).then(() => {
      carregarPg();
    });
  }
   async function handleDeleteTodos(id) {
    await Promise.all(lista.map((p) => deletar(p.id)))
    carregarPg()
  }

  async function handleDeleteSelecionados() {
    await Promise.all(selecionados.map((i) => deletar(i)));
    setSelecionados([])
    
    carregarPg();
  }

  

  return (
    <div>
      <div className={styles.tabela_div}>
        <h2>Tabela</h2>
        <table className={styles.tabela}>
          <thead>
            <tr>
              <th>NOME</th>
              <th>IDADE</th>
              <th>CPF</th>
              <th>ESTADO CIVIL</th>
              <th>EDITAR</th>
              <th>REMOVER</th>
              <th>SELECIONAR</th>
            </tr>
          </thead>
          <tbody>
            {lista?.length === 0 ? (
              <tr className={styles.semDados}>
                <td>Sem dados</td>
              </tr>
            ) : (
              lista?.map((pessoa, i) => {
                return (
                  <>
                    <tr key={pessoa.id}>
                      <td>{pessoa.nome}</td>
                      <td>{pessoa.idade}</td>
                      <td>{pessoa.cpf}</td>
                      <td>{pessoa.estadoCivil}</td>
                      <td>
                        <Modal carregarPg={carregarPg} pessoa={pessoa} />
                      </td>
                      <td>
                        <button
                          className={styles.btnLixo}
                          onClick={() => handleDelete(pessoa.id)}
                        >
                          <FaTrashAlt />
                        </button>
                      </td>
                      <td>
                        <CheckboxForm
                          lista={selecionados}
                          setLista={setSelecionados}
                          pessoa={pessoa}
                          index={i}
                        />
                      </td>
                    </tr>
                  </>
                );
              })
            )}
            <div className={styles.div_btns}>
              <button className={styles.btnSelecionadosApagarTodos} onClick={handleDeleteTodos}>Apagar todos ({lista.length})</button>
              <button className={styles.btnSelecionadosApagar} onClick={handleDeleteSelecionados}>Apagar todos os selecionados ({selecionados.length})</button>
            </div>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Tabela;
