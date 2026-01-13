import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styles from "./ModalMUi.module.css";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import {
  bgcolor,
  borderRadius,
  display,
  flexDirection,
  height,
} from "@mui/system";
import { editarSenha } from "../service/api";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  height: 450,
  bgcolor: "#E6CFA9",
  border: "none",
  boxShadow: "1px 1px 10px 1px #9A3F3F",
  p: 4,
  borderRadius: 5,
  display: "flex",
  flexDirection: "column",
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [senha, setSenha] = React.useState("");
  const [novaSenha, setNovaSenha] = React.useState("");
  const [confirmeSenha, setConfirmeSenha] = React.useState("");
  const emailLocalizado = localStorage.getItem("email");

  async function editarPassword() {
    const newUser = await axios.get(
      `http://localhost:5000/users?email=${emailLocalizado}`
    );
    if (senha === "" || novaSenha === "" || confirmeSenha === "") {
      alert("Preencha os campos");
      return;
    }
    if (senha !== newUser.data[0].password) {
      alert("A senha está incorreta.");
      return;
    }
    if (novaSenha !== confirmeSenha) {
      alert("Confirme a senha corretamente.");
      return;
    }
    await editarSenha(newUser.data[0].id, novaSenha);
    setSenha("");
    setConfirmeSenha("");
    setNovaSenha("")
    handleClose();
  }
  return (
    <div className={styles.modal}>
      <button onClick={handleOpen} className={styles.btnAbrir}>
        Mudar senha
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        className={styles.modalzao}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className={styles.h1}>MUDAR SENHA</h1>
          <label className={styles.label}>Digite sua senha</label>
          <input
            placeholder="Digite sua senha"
            onChange={(e) => setSenha(e.target.value)}
            className={styles.input}
            value={senha}
          />
          <label className={styles.label}>Digite sua nova senha</label>
          <input
            placeholder="Digite sua nova senha"
            onChange={(e) => setNovaSenha(e.target.value)}
            className={styles.input}
            value={novaSenha}
          />
          <label className={styles.label}>Confirme a nova senha</label>
          <input
            placeholder="Confirme sua senha"
            onChange={(e) => setConfirmeSenha(e.target.value)}
            className={styles.input}
            value={confirmeSenha}
          />
          <div className={styles.botoes}>
            <button onClick={editarPassword} className={styles.btnAcoes}>
              Salvar
            </button>
            <button onClick={handleClose} className={styles.btnAcoes}>
              Cancelar
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
