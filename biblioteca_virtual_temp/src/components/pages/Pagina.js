import styles from "./Pagina.module.css";
import { FaBook } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import { IoExitSharp } from "react-icons/io5";
import { Button } from "@mui/material";
import Tabela from "../layout/Tabela";
import { useEffect, useState } from "react";

function Pagina() {
  const navigate = useNavigate();
  const location = useLocation();
  const nome = location.state?.nome || "Leitor";

  const [livros, setLivros] = useState([]);

  function handleVoltar() {
    navigate("/");
  }

  useEffect(() => {
    fetch(`http://localhost:5000/livros`)
      .then((resp) => resp.json())
      .then((data) => setLivros(data) 
     )
      .catch((err) => {
        console.error("erro", err);
      });
  }, []);


  return (
    <div className={styles.divona}>
      <div className={styles.container_inicial}>
        <FaBook className={styles.livrinho} />
        <h3>Biblioteca Virtual</h3>
        <h4>Olá, {nome}</h4>

        <Button
          variant="text"
          onClick={handleVoltar}
          sx={{
            color: "#f0e4d3",
            fontSize: "30px",
          }}
        >
          {" "}
          <IoExitSharp className={styles.exit} />
        </Button>
      </div>
      <Tabela livros={livros} />
    </div>
  );
}

export default Pagina;
