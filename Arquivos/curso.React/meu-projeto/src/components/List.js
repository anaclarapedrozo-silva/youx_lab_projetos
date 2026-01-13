import Item from "./Item";

function List() {
  return (
    <>
      <div>
        <h1>Minha lista</h1>
        <ul>
          <Item marca="BMW" lancamento={1929}></Item>
          <Item marca="Audi" lancamento={1993}></Item>
          <Item marca="Honda" lancamento={1971}></Item>
        </ul>
      </div>
    </>
  );
}

export default List;
