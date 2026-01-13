import { useEffect, useState } from "react";
import { pegarLivros } from "../../service/api";
import styles from "./Pagina.module.css";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export function Pagina() {
  const [listaLivros, setListaLivros] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const lista = [];
  const navigate = useNavigate();

  async function livros() {
    const response = await pegarLivros();
    if (pesquisa === "") {
      setListaLivros(response);
    } else {
      response.map((livro) => {
        if (livro.nome.includes(pesquisa)) {
          lista.push(livro);
        }
        setListaLivros(lista);
      });
    }
  }

  const verDetalhes = (livroo) => {
    localStorage.setItem("livro", livroo.nome);
    navigate("/detalhes");
  };

  useEffect(() => {
    livros();
  }, []);

  return (
    <>
      <div className={styles.div_pag}>
        <input
          placeholder="Pesquisar em BookMarket "
          className={styles.pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
          value={pesquisa}
        />
        <FaSearch className={styles.procurar} />
        <div className={styles.div_pai}>
          {listaLivros?.map((livro) => (
            <div className={styles.div_livros}>
              <h4>{livro.nome}</h4>
              <img src={livro.imagem} className={styles.capa} />
              <p>R${livro.preço}</p>

              <div className={styles.div_btn}>
                <button
                  className={styles.btn}
                  onClick={() => verDetalhes(livro)}
                >
                  Ver detalhes
                </button>
                <button className={styles.btnCompra}>
                  <FaCartShopping />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
