import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000",
});

export async function getCategories() {
  const dados = await instance.get("/categories");
  return dados.data;
}

export async function postTarefas(obj) {
    const dados = await instance.post("/tarefas", obj);
    console.log("Enviado pro Json com sucesso", obj);
    return dados.data;
 
}

export async function getTarefas() {
  const resposta = await instance.get("/tarefas");
  return resposta.data;
}

export async function getDeletar(id) {
  await instance.delete(`/tarefas/${id}`);
}

export async function editarStatus(id) {
  await instance.patch(`/tarefas/${id}`, { status: "concluido" });
}

export async function voltarStatus(id) {
  await instance.patch(`/tarefas/${id}`, { status: "pendente" });
}

export async function editarTarefa(id, obj) {
  await instance.patch(`/tarefas/${id}`, obj);
}
