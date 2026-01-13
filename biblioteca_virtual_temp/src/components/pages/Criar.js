import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  TextField,
} from "@mui/material";
import Titulo from "../layout/Titulo";
import Inputs from "../layout/Input";
import styles from "./Criar.module.css";
import { ImExit } from "react-icons/im";
import { FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import Alerta from "../layout/Alert";

function Criar() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [showPassword, setShowPassword] = React.useState(true);
  const [showConfirmar, setShowConfirmar] = React.useState(true);
  const [mensagemAlerta, setMensagemAlerta] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmar = () => setShowConfirmar((show) => !show)

  const navigate = useNavigate();

  function handleLogar() {
    navigate("/");
  }

  function handlePagina() {
    navigate("/", {
      state: {
        nome: nome,
      },
    });
  }

  function handleVerificar() {
    if (email == "" || senha == "" || nome == "" || confirmarSenha == "") {
      setMensagemAlerta("Preencha todos os campos.");
      setTimeout(() => setMensagemAlerta(""), 3000);
      return;
    }
    if (!email.includes("@") || !email.includes(".com")) {
      setMensagemAlerta("E-mail inválido.");
      setTimeout(() => setMensagemAlerta(""), 3000);
      return;
    }
    if (senha.length < 6) {
      setMensagemAlerta("A senha deve conter no minímo 6 caracteres.");
      setTimeout(() => setMensagemAlerta(""), 3000);
      return;
    }
    if (confirmarSenha !== senha) {
      setMensagemAlerta("Confirme sua senha corretamente.");
      setTimeout(() => setMensagemAlerta(""), 3000);
      return;
    }
    if (senha === senha.toUpperCase()) {
      setMensagemAlerta("Você não está usando o CapsLk?");
    }
    setMensagemAlerta("");
    fetch(`http://localhost:5000/usuarios?email=${email}`)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.length > 0) {
          alert("Essa conta já existe.");
          return;
        }
        fetch("http://localhost:5000/usuarios", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha,
          }),
        })
          .then((resp) => resp.json())
          .then((data) => {
            if (data.length > 0) {
              alert("Esse usuário já existe!");
              return;
            }
            alert("Conta criada com sucesso");
            setNome("");
            setEmail("");
            setSenha("");
            setConfirmarSenha("");
            handlePagina();
          })
          .catch((err) => {
            alert("Erro ao criar a conta!");
            console.error(err);
          });
        console.log(`Válido`);
      });
  }

  return (
    <Container maxWidth="sm">
      <Box
        component="section"
        sx={{
          boxShadow: "1px 1px 10px 1px #d9a299",
          height: 520,
          width: 400,
          padding: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
          mt: "32px",
          backgroundColor: "#FAF7F3",
        }}
      >
        {mensagemAlerta && <Alerta aviso={mensagemAlerta} />}
        <Titulo
          titulo="CRIAR CONTA"
          subtitulo="Preencha os dados para criar sua conta"
        ></Titulo>
        <div className={styles.div_inputs}>
          <Inputs
            textAnt="Nome completo*"
            textDep=""
            label="Nome completo"
            onChange={(e) => setNome(e.target.value)}
          ></Inputs>
          <Inputs
            textAnt=""
            textDep="Deve conter @ e terminar com .com"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          ></Inputs>
          <TextField
            id="outlined-basic"
            variant="outlined"
            type={showPassword ? "password" : "text"}
            label="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            sx={{
              marginBottom: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              height: " 60px",
            }}

          
          />
          <Button
            variant="outlined"
            onClick={handleClickShowPassword}
            sx={{
              position: "absolute",
              border: "none",
              color: "#d9a299",
              fontSize: "25px",
              left: "730px",
              top: "340px",
            }}
          >
            {" "}
            {showPassword ? <FaEyeSlash /> : <IoEyeSharp />}
          </Button>
          <TextField
            id="outlined-basic"
            variant="outlined"
            type={showConfirmar ? "password" : "text"}
            label="Confirmar senha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            sx={{
              marginBottom: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              height: " 60px",
            }}
          />
          <Button
            variant="outlined"
            onClick={handleClickShowConfirmar}
            sx={{
              position: "absolute",
              border: "none",
              color: "#d9a299",
              fontSize: "25px",
              left: "730px",
              top: "420px",
            }}
          >
            {" "}
            {showConfirmar ? <FaEyeSlash /> : <IoEyeSharp />}
          </Button>
          <Button
            variant="contained"
            onClick={handleVerificar}
            sx={{
              width: "100%",
              backgroundColor: "#da9299",
              height: "25px",
            }}
          >
            <FaUserPlus /> CRIAR
          </Button>
        </div>
        <Divider>
          <Chip
            label="ou"
            size="small"
            sx={{
              alignItems: "center",
              margin: "10px",
              backgroundColor: "#dcc5b2",
              color: "#FAF7F3",
            }}
          />
        </Divider>
        <Button
          variant="outlined"
          onClick={handleLogar}
          sx={{
            width: "100%",
            color: "#da9299",
            height: "25px",
            border: "1px solid #da9299",
          }}
        >
          <ImExit /> FAZER LOGIN
        </Button>
      </Box>
    </Container>
  );
}

export default Criar;
