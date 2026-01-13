import axios from "axios";

const instance = axios.create({
  baseURL: "http://10.0.0.29:8083/categoria",
});

const instance2 = axios.create({
  baseURL: "http://10.0.0.29:8083"
})

 instance2.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")
  if(token){
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default instance2;

// export async function getCategories() {
//   const token = localStorage.getItem("token")
//   const { data } = await instance2.get("/categoria/todas"{
//     headers:  token ? {Authorization: `Bearer ${token}` }: {}
//   })

//   console.log(token)
//   console.log("token de cate")

//   return data;
// }

export async function getCategories() {
  const token = localStorage.getItem("token");

  try {
    const response = await instance2.get("/categoria/todas", {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });

    // debug (mostra os headers que foram enviados)
    console.log("request headers:", response.config.headers);

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar categorias:", error);
    throw error;
  }
}

export async function postTarefas(obj) {
  const { data } = await instance2.post("/tarefa/salvar", obj);
  console.log("Enviado pro Json com sucesso", obj);
  return data;
}

export async function getTarefas() {
  const {data} = await instance2.get("/tarefa");
  return data;
}

export async function getDeletar(id) {
  console.log("id :>> ", id);
  await instance2.delete(`/tarefa/${id}`);
}

export async function editarTarefa(id, obj) {
  await instance2.patch(`/tarefa/${id}`, obj);
}

export async function editarStatus(id) {
  await instance2.patch(`/tarefa/concluir/${id}`);
}

export async function voltarStatus(id) {
  await instance2.patch(`/tarefa/voltar/${id}`);
}

export async function enviarLogin(obj) {
  await instance2.post("/users/cadastrar", obj)
}

export async function verLogin(obj) {
  const response = await instance2.post("/users/login", obj)
  const token = response.data.token;
  localStorage.setItem("token", token)
  localStorage.setItem("user", obj.login)
  console.log("token", token)
  console.log("nome", obj.login);
  return obj.login
}
