import { useEffect, useState } from "react";
import styles from "./login.module.css";
import { getCadastro, verificarSenha } from "../service/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getCadastro();
  }, []);

  function voltarCadastro() {
    navigate("/");
  }

  async function postarLogin() {
    try {
      const dados = await getCadastro();
      const resposta = await verificarSenha(email);
      const isLogado = true

      if (email === "" || senha === "") {
        alert("Preencha todos os campos");
        return;
      }
      if (!email.includes("@") || !email.includes(".com")) {
        alert("escreva seu email corretamente");
        return;
      }
      if (senha.length < 6) {
        alert("sua senha deve conter 6 carateres no minimo");
        return;
      }
      if (!dados.some((user) => user.email === email)) {
        alert("esse email nunca foi criado, faça o cadastro");
        return;
      }
      if (!resposta.some((detalhes) => detalhes.password === senha)) {
        alert("A senha está incorreta");
        return;
      }
      const userEncontrado = dados.find((user) => user.email === email);

      localStorage.setItem("email", email);
      localStorage.setItem("id", userEncontrado.id);
      localStorage.setItem("isLogado", isLogado)

      navigate("/pagina");
      setEmail("");
      setSenha("");
    } catch (error) {
      console.log("error :>> ", error);
    }
  }

  return (
    <div className={styles.div_principal}>
      <div className={styles.metadeCadastro}>
        <h2>FAÇA O LOGIN</h2>
        <div className={styles.inputs}>
          <label>E-mail</label>
          <input
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label>Senha</label>
          <input
            placeholder="Digite sua senha"
            onChange={(e) => setSenha(e.target.value)}
            value={senha}
          />
          <button onClick={postarLogin}>Entrar</button>
          <p>ou</p>
          <button onClick={voltarCadastro}>Fazer Cadastro</button>
        </div>
        <img className={styles.livroImg} src="/images/livro.png" alt="livro" />
      </div>
    </div>
  );
}

export default Login;
