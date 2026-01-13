import { useEffect, useState } from "react";
import styles from "./Tabela.module.css";
import { FaTrashAlt } from "react-icons/fa";
import Modal from "./Modal";

function Tabela({ lista, setLista }) {

  const removerLinha = (i) => {
    const novosDados = [...lista];
    novosDados.splice(i, 1);
    setLista(novosDados);
  };

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
            </tr>
          </thead>
          <tbody>
            {lista.length === 0 ? (
              <tr className={styles.semDados}>
                <tr>Sem dados</tr>
              </tr>
            ) : (
              lista.map((pessoa, i) => {
                return (
                  <>
                    <tr key={i}>
                      <td>{pessoa.nome}</td>
                      <td>{pessoa.idade}</td>
                      <td>{pessoa.cpf}</td>
                      <td>{pessoa.estadoCivil}</td>
                      <td>
                        <Modal
                          valueName={pessoa.nome}
                          valueIdade={pessoa.idade}
                          valueCpf={pessoa.cpf}
                          valueEstado={pessoa.estadoCivil}
                          lista={lista}
                          setLista={setLista}
                          index={i}
                        />
                      </td>
                      <td>
                        <button
                          className={styles.btnLixo}
                          onClick={() => removerLinha(i)}
                        >
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tabela;
