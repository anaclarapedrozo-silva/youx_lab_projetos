import { useState } from "react";
import styles from "./CriarConta.module.css";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { HiEyeOff } from "react-icons/hi";
import { enviarLogin } from "../service/api";

function Criar() {
  const [login, setlogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmarpassword, setConfirmarpassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showPassword2, setShowPassword2] = useState(true);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

  const obj = { login: login, email: email };

  const navigate = useNavigate();

  const handleCriar = async (login, email, password) => {
    // if (!email.includes("@") || !email.includes(".com")) {
    //   alert("Preencha o e-mail corretamente");
    //   return;
    // }
    // if (password.length < 8) {
    //   alert("A password não tem o minímo de caracteres exigido");
    //   return;
    // }
    // if (confirmarpassword !== password) {
    //   alert("Confirme a password corretamente");
    //   return;
    // }
    try {
      await enviarLogin({
        login: login,
        email: email,
        password: password,
      });
      navigate("/Pagina", {
        state: {
          login: login,
        },
      });
      console.log("enviado com sucesso");
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  function handleLogar() {
    navigate("/Login");
  }

  return (
    <div className={styles.divona}>
      <div className={styles.divinputs}>
        <h2>CRIAR CONTA</h2>
        <label>login</label>
        <input
          placeholder="Digite o seu login"
          onChange={(e) => setlogin(e.target.value)}
        />
        <label>E-mail</label>
        <input
          placeholder="Digite o seu e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>password</label>
        <input
          placeholder="Digite a sua password"
          onChange={(e) => setpassword(e.target.value)}
          type={showPassword ? "text" : "password"}
        />
        <button className={styles.btnEye} onClick={handleClickShowPassword}>
          {showPassword ? <FaEye /> : <HiEyeOff />}
        </button>
        <label>Confirmar a password</label>
        <input
          placeholder="Confirme a password"
          onChange={(e) => setConfirmarpassword(e.target.value)}
          type={showPassword2 ? "text" : "password"}
        />
        <button className={styles.btnEye2} onClick={handleClickShowPassword2}>
          {showPassword2 ? <FaEye /> : <HiEyeOff />}
        </button>
        <img
          src="/images/tarefa.png"
          alt="mc gorila"
          className={styles.mcgorila}
        />
        <hr />
        <div>
          <button
            className={styles.btnAcoes}
            onClick={() => handleCriar(login, email, password)}
          >
            Entrar
          </button>
          <button className={styles.btnAcoes} onClick={handleLogar}>
            Fazer login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Criar;
