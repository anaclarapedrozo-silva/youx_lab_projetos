import * as React from "react";
import Button from "@mui/material/Button";
import styles from "./modal.module.css";
import Estrelas from "../estrelas/estrelas";

export default function ModalAvaliar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const lista = {
    titulo: "Chapeuzinho vermelho",
    emprestimo: "14/05/2025",
    devolucao: "14/10/2025",
    pontuacao: "+20pts",
  };

  return (
    <>
      <div className={styles.divzona}>
        <Button onClick={handleOpen}>abrir modal</Button>
        {open && (
          <div className={styles.div_fundo}>
            <div className={styles.div_modal}>
              <h3 className={styles.avaliacao}>Avaliação</h3>
              <button onClick={handleClose} className={styles.btn_sair}>
                X
              </button>
              <table className={styles.tabela}>
                <thead>
                  <tr>
                    <th>Título</th>
                    <th>Empréstimo</th>
                    <th>Devolução</th>
                    <th>Pontuação</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{lista.titulo}</td>
                    <td>{lista.emprestimo}</td>
                    <td>{lista.devolucao}</td>
                    <td>{lista.pontuacao}</td>
                  </tr>
                </tbody>
              </table>
              <p>Faça sua avaliação</p>
              <div className={styles.estrelas}>
                <Estrelas />
              </div>
              <p>Adicione uma resenha sobre o livro.</p>

              <div className={styles.div_btn}>
                <input
                  className={styles.resenha}
                  placeholder="Digite aqui..."
                />
                <button className={styles.btn_enviar}>Enviar avaliação</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
