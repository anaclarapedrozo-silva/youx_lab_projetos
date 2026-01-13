import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import styles from "./Modal.module.css";
import Modal from "@mui/material/Modal";
import Sinopse from "./Sinopse";

function BasicModal({ livro }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{
          bgcolor: "#d9a299",
          fontSize: "11px",
        }}
      >
        Visualizar
      </Button>
      <Modal
        className={styles.container_modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            height: 400,
            bgcolor: "#F0E4D3",
            border: "none",
            boxShadow: "1px 1px 12px 1px #D9A299",
            p: 4,
          }}
        >
          <Button
            sx={{
              position: "absolute",
              left: "600px",
              top: "10px",
              fontSize: "20px",
              color: "#d9a299",
            }}
            onClick={handleClose}
          >
            X
          </Button>

          <h1>{livro.NomeDoLivro}</h1>
          <p>
            <strong>AUTOR: </strong> {livro.NomeDoAutor}
          </p>
          <p>
            <strong>PÁGINAS: </strong> {livro.Paginas}
          </p>
          <p>
            <strong>EDITORA: </strong> {livro.Editora}
          </p>
          <img src={livro.Imagem} alt={livro.NomeDoLivro} width="130" />
          <Sinopse livro={livro} />
        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal;
