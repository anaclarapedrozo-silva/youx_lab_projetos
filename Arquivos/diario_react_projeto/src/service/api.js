import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000",
});

export async function getSegredos() {
  const dados = await instance.get("/segredos");
  console.log("dados :>> ", dados);
  return dados.data;
}

export async function postSegredos(obj) {
  return await instance.post(`/segredos/`, obj);
}

export async function deleteSegredo(id) {
  await instance.delete(`/segredos/${id}`);
}

export async function getCadastro() {
  const resposta = await instance.get("/users");
  return resposta.data;
}

export async function postCadastro(obj) {
  await instance.post("/users", obj);
}

export async function verificarSenha(email) {
  const dados = await instance.get(`/users?email=${email}`);
  return dados.data;
}

export async function editarSenha(id, senha) {
  await instance.patch(`/users/${id}`, {
    password: senha
  })
  console.log('editado com sucesso :>> ', id, senha);
}