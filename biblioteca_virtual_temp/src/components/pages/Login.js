import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  TextField,
  Alert
} from "@mui/material";
import "./Login.module.css";
import Titulo from "../layout/Titulo";
import { ImExit } from "react-icons/im";
import { FaUserPlus } from "react-icons/fa";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [alerta, setAlerta] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(true);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  function handleCriarConta() {
    navigate("/criar");
  }

  function handlePagina(nome) {
    navigate("/pagina", {
      state: {
        nome: nome,
      },
    });
  }

  function HandleEntrar() {
    if (email === "" || senha === "") {
      alert("E-mail ou senha vazio");
      setAlerta(true);
      return;
    }
    if (!email.includes("@")) {
      alert("Erro, seu email não possui @");
      setAlerta(true);
      return;
    }
    if (!email.includes(".com")) {
      alert("Erro, seu email não possui .com");
      setAlerta(true);
      return;
    }
    if (senha.length < 6) {
      alert("A senha deve conter no minímo 6 caracteres");
      setAlerta(true);
      return;
    }
    fetch(`http://localhost:5000/usuarios?email=${email}`)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.length === 0) {
          alert('Senha incorreta')
          setAlerta(true);
          return;
        }
        const usuario = data[0];
        if (usuario.senha === senha) {
          alert("Login realizado com sucesso");
          handlePagina(usuario.nome);
        } else {
          setAlerta(true);
        }
      })
      .catch((err) => {
        console.error("Erro ao buscar usuário", err);
        setAlerta(true);
      });
    console.log(`e-mail:  ${email}`);
    console.log(`senha: ${senha}`);
  }

  return (
    <Container maxWidth="sm">
      <Box
        component="section"
        sx={{
          boxShadow: "1px 1px 10px 1px #d9a299",
          height: 500,
          width: 400,
          display: "flex",
          position: "absolute",
          top: 50,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
          backgroundColor: "#FAF7F3",
        }}
      >
        {alerta ? (
          <Alert variant="filled" severity="error" sx={{
            position: 'absolute',
            top: '-4%'
          }}>
            Algo errado, preencha os dados corretamente.
          </Alert>
        ) : (
          <></>
        )}
        <Titulo
          titulo="BIBLIOTECA VIRTUAL"
          subtitulo="Faça o login para acessar o sistema"
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Email*"
          error={alerta}
          helperText="Precisa de @ e terminar com '.com'"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            width: "350px",
            color: "#504B38",
            position: "absolute",
            top: 140,
            marginTop: '-12px'
          
          }}
        ></TextField>
        <TextField
          id="outlined-basic"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          label="Senha"
          value={senha}
          error={alerta}
          helperText="Minímo 6 caracteres."
          onChange={(e) => setSenha(e.target.value)}
          sx={{
            width: "350px",
            color: "#FAF7F3",
            position: "absolute",
            top: 210,
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
            left: "300px",
            top: "220px",
          }}
        >
          {" "}
          {showPassword ? <FaEyeSlash /> : <IoEyeSharp />}
        </Button>

        <Button
          variant="contained"
          onClick={HandleEntrar}
          sx={{
            position: "absolute",
            top: 310,
            width: "300px",
            backgroundColor: "#d9a299",
            fontFamily: "inherit",
            fontSize: "15px",
          }}
        >
          <ImExit /> Entrar
        </Button>
        <div>
          <Divider
            sx={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Chip
              label="ou"
              size="small"
              sx={{
                alignItems: "center",
                mt: "240px",
                backgroundColor: "#dcc5b2",
                color: "#FAF7F3",
              }}
            />
          </Divider>
        </div>
        <Button
          variant="outlined"
          onClick={handleCriarConta}
          sx={{
            position: "absolute",
            top: 390,
            alignItems: "center",
            width: "300px",
            border: "1px solid #d9a299",
            color: "#d9a299",
          }}
        >
          <FaUserPlus /> Criar conta
        </Button>
      </Box>
    </Container>
  );
}

export default Login;
