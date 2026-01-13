import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000",
});

export async function getUsuarios() {
  try {
    const dados = await instance.get("/usuarios");
    return dados.data;
  } catch (err) {
    console.error("erro ao buscar o usuário:", err);
  }
}


export async function postUsuarios(pessoaSalvar) {
  try {
    const dados = await instance.post("/usuarios", pessoaSalvar);
    return dados.data;
  } catch (erro) {
    console.log("erro ao enviar dados: ", erro);
  }
}

export async function editar(id, pessoa) {
  try {
    await instance.patch(`/usuarios/${id}`, {
      nome: pessoa.nome,
      idade: pessoa.idade,
      estadoCivil: pessoa.estadoCivil,
      cpf: pessoa.cpf,
    });
  } catch (err) {
    console.log("erro ao editar usuário", err);
  }
}

export async function deletar(id) {
   try {
    await instance.delete(`/usuarios/${id}`);
  }catch(erro){
    console.log("Erro ao deletar usuário: ", erro)
  }
  }

