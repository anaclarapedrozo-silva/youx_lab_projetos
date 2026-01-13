import { useState } from "react";

function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail (evt) {
        evt.preventDefault()
        setUserEmail(email)
    }

    function limparEmail () {
        setEmail('')
    }

  return (
    <div>
      <h2>Cadastre o seu e-mail!</h2>
      <form>
        <label type="email">E-mail</label>
        <input type="email" placeholder="Digite o seu email" onChange={(e) => setEmail(e.target.value)}/>
        <button type='submit' onClick={enviarEmail} >Enviar</button>
        {userEmail &&(
            <div>
                <p>O e-mail do usuário é {userEmail}</p>
                <button onClick={limparEmail}>Limpar e-mail</button>
            </div>
        )}
      </form>
    </div>
  );
}

export default Condicional;
