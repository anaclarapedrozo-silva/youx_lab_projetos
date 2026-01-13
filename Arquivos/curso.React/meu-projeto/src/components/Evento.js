import Button from "./evento/Button";

function Evento() {
  function meuEvento() {
    console.log("Ativando primeiro evento");
  }

  function segundoEvento() {
    console.log("Ativando o segundo evento");
  }
  return (
    <div>
      <p>Clique para disparar um evento</p>
      <Button text="primeiro evento" event={meuEvento} />
      <Button text="segundo evento" event={segundoEvento} />
      <button className="btn" onClick={meuEvento}>
        Ativar
      </button>
    </div>
  );
}

export default Evento;
