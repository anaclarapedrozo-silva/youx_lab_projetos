import React, { useEffect, useState } from "react";
import { FaPencil } from "react-icons/fa6";
import styles from "./Modal.module.css";

function Modal({
  valueName,
  valueIdade,
  valueCpf,
  valueEstado,
  setLista,
  index,
  lista,
}) {
  const [modalAberto, setModalAberto] = useState(false);

  const [nome, setNome] = useState();
  const [idade, setIdade] = useState();
  const [estadoCivil, setEstadoCivil] = useState();
  const [cpf, setCpf] = useState();

  useEffect(() => {
    if(modalAberto){
      setNome(valueName)
      setIdade(valueIdade)
      setEstadoCivil(valueEstado)
      setCpf(valueCpf)
      console.log('toda vez que o modal tiver aberto os valores nos inputs irao atualizar.')
    }
  }, [modalAberto])

  const handleSalvar = (index) => {
    let newUser = {
      nome: nome,
      idade: idade,
      estadoCivil: estadoCivil,
      cpf: cpf,
    };
    const novosDados = [...lista];
    novosDados.splice(index, 1, newUser);
    setModalAberto(false);
    setLista(novosDados);
  };

  function SetModal() {
    setModalAberto(true);
  }

  function closeModal() {
    setModalAberto(false);
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
                <button onClick={() => handleSalvar(index)}>Salvar</button>
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
