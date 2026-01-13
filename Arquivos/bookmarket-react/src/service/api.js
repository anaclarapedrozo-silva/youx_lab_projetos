import axios from "axios"

export async function pegarLivros() {
    const dados = await axios.get("http://localhost:5000/livros")
    return dados.data
}

export async function pegarLivrosEspecificos(nome) {
    const dados = await axios.get(`http://localhost:5000/livros?nome=${nome}`)
    console.log('dados.data :>> ', dados.data);
    return dados
}