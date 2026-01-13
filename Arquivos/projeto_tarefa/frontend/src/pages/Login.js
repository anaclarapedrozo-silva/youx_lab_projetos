import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { FaEye } from "react-icons/fa";
import { HiEyeOff } from "react-icons/hi";
import { verLogin } from "../service/api";

function Login() {
  const [login, setlogin] = useState("");
  const [senha, setSenha] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const navigate = useNavigate();

  async function handleEntrar() {
    const resposta = await verLogin({
      login: login,
      password: senha
    })

    if(resposta.nome === null){
      console.log("essa conta nunca foi criada")
    }else{
      navigate("/Pagina", {
        state:{
          nome:login,
          token: resposta.token
        }
      })
    }
  }

  function handleCriar() {
    navigate("/");
  }

  return (
    <div className={styles.divona}>
      <div className={styles.divinputs}>
        <h2>FAZER LOGIN</h2>
        <label>Nome de usuário</label>
        <input
          placeholder="Digite o seu user"
          onChange={(e) => setlogin(e.target.value)}
        />
        <label>Senha</label>
        <input
          placeholder="Digite a sua senha"
          onChange={(e) => setSenha(e.target.value)}
          type={showPassword ? "text" : "password"}
        />
        <button className={styles.btnEye} onClick={handleClickShowPassword}>
          {showPassword ? <FaEye /> : <HiEyeOff />}
        </button>
        <img
          src="/images/tarefa.png"
          alt="mc gorila"
          className={styles.mcgorila}
        />
        <div className={styles.infos}>
          <p>A senha deve conter no minímo 8 caracteres.</p>
          <p>O e-mail deve conter @ e ".com"</p>
        </div>
        <div>
          <button className={styles.btnAcoes} onClick={handleEntrar}>
            Entrar
          </button>
          <button className={styles.btnAcoes} onClick={handleCriar}>
            Criar conta
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
