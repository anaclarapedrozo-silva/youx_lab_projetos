import React, { useEffect, useState } from "react";
import { FaPencil } from "react-icons/fa6";
import styles from "./Modal.module.css";
import { editar } from "../service/api";

function Modal({
  pessoa,
  carregarPg,
}) {
  const [modalAberto, setModalAberto] = useState(false);

  const [nome, setNome] = useState();
  const [idade, setIdade] = useState();
  const [estadoCivil, setEstadoCivil] = useState();
  const [cpf, setCpf] = useState();

  useEffect(() => {
    if (modalAberto) {
      setNome(pessoa.nome);
      setIdade(pessoa.idade);
      setEstadoCivil(pessoa.estadoCivil);
      setCpf(pessoa.cpf);
      carregarPg()
    }
  }, [modalAberto]);

  const handleSalvar = () => {
    let newUser = {
      nome: nome,
      idade: idade,
      estadoCivil: estadoCivil,
      cpf: cpf,
    };

    try {
      const atualizado = editar(pessoa.id, newUser);
      console.log("Usuário atualizado com sucesso! ", atualizado);
      setModalAberto(false);
      carregarPg()
    } catch (erro) {
      console.log("Erro ao atualizar usuário. ", erro);
    }
    
  };

  function SetModal() {
    setModalAberto(true);
  }

  function closeModal() {
    setModalAberto(false);
    carregarPg()
  }

  return (
    <>
      <button className={styles.btnEditar} onClick={SetModal}>
        <FaPencil />
      </button>
      {modalAberto && (
        <div className={styles.container_modal}>
          <div className={styles.modal}>
            <button onClick={closeModal} className={styles.sair_btn}>
              X
            </button>
            <h2>Atualizar Cadastro</h2>
            <div className={styles.inputs}>
              <label>Nome</label>
              <input
                className={styles.input}
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              ></input>

              <label>Idade</label>
              <input
                className={styles.input}
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
              ></input>

              <label>Estado civil</label>
              <input
                className={styles.input}
                value={estadoCivil}
                onChange={(e) => setEstadoCivil(e.target.value)}
              ></input>

              <label>CPF</label>
              <input
                className={styles.input}
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              ></input>

              <div className={styles.btn}>
                <button onClick={() => handleSalvar()}>Salvar</button>
                <button onClick={closeModal}>Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
