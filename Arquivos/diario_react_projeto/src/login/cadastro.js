import { useEffect, useState } from "react";
import styles from "./cadastro.module.css";
import { getCadastro, postCadastro } from "../service/api";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getCadastro();
  }, []);

  function irLogin() {
    navigate("/login");
  }

  async function postarCadastro() {
    try {
      const dados = await getCadastro();
      if (!email.includes("@") || !email.includes(".com")) {
        alert("escreva seu email corretamente");
        return;
      }
      if (senha.length < 6) {
        alert("sua senha deve conter 6 carateres no minimo");
        return;
      }
      if (senha !== confirmarSenha) {
        alert("confirme a sua senha corretamente");
        return;
      }
      if (dados.some((user) => user.email === email)) {
        alert("esse email já foi criado, faça Cadastro");
        return;
      }
      await postCadastro({
        email: email,
        password: senha
      });
      setEmail("");
      setSenha("");
      setConfirmarSenha("");
      navigate("/login");
    } catch (error) {
      console.log("error :>> ", error);
    }
  }

  return (
    <div className={styles.div_principal}>
      <div className={styles.metadeCadastro}>
        <h2>FAÇA SEU CADASTRO</h2>
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
          <label>Confirmar senha</label>
          <input
            placeholder="Confirme sua senha"
            onChange={(e) => setConfirmarSenha(e.target.value)}
            value={confirmarSenha}
          />
          <button onClick={postarCadastro}>Entrar</button>
          <p>ou</p>
          <button onClick={irLogin}>Fazer Login</button>
        </div>
        <img className={styles.livroImg} src="/images/livro.png" alt="livro" />
      </div>
    </div>
  );
}

export default Cadastro;
