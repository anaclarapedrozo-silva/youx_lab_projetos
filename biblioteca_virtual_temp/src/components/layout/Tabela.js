import BasicModal from "./Modal";
import styles from "./Tabela.module.css";

function Tabela({ livros }) {
  return (
    <div className={styles.tabela}>
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>Nome do Livro</th>
            <th>Nome do Autor</th>
            <th>Data de Cadastro</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <tr key={livro.id}>
              <td>{livro.ISBN}</td>
              <td>{livro.NomeDoLivro}</td>
              <td>{livro.NomeDoAutor}</td>
              <td>{livro.DataDeCadastro}</td>
              <td><BasicModal livro={livro}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tabela;
