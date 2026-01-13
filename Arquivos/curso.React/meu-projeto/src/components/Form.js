import { useState } from "react";

function Form() {
  function cadastrar(evt) {
    evt.preventDefault();
    console.log(`O usuário ${name} foi cadastrado com a senha ${password}`);
    console.log("Cadastrou o usuário");
  }
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <h1>Meu cadastro</h1>
      <form onSubmit={cadastrar}>
        <div>
          <label htmlFor="name" id="name" name="name">
            Nome:{" "}
          </label>
          <input
            type="text"
            placeholder="Digite o seu nome"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha: </label>
          <input type="text" placeholder="Digite a sua senha" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div>
          <input type="submit" value="Cadastro" />
        </div>
      </form>
    </div>
  );
}

export default Form;
