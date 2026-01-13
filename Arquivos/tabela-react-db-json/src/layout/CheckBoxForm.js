import React, { useState } from "react";

function CheckboxForm({ lista, setLista, pessoa }) {
  const [checkBoxValue, setCheckBoxValue] = useState(false);

  const handleCheckBox = (e) => {
    setCheckBoxValue(e.target.checked);
    console.log("O valor da checkbox agora é ", checkBoxValue);
    if (checkBoxValue) {
      
      console.log("Nada a adicionar na lista");

      const removerPessoa = () => {
        let index = lista.indexOf(pessoa.id);
        const novaLista = [...lista];
        novaLista.splice(index, 1);
        setLista(novaLista);
        console.log(
          "Como esse objeto nao esta mais selecionado eu apaguei ele da lista: ",
          lista
        );
      };

      removerPessoa();
    } else {
      if (lista.find((p) => p.id === pessoa.id)) {
        console.log("Esse objeto ja esta selecionado");
      } else {
        setLista([...lista, pessoa.id]);
        console.log("Adicionado na lista: ", lista);
      }
    }
  };

  return (
    <>
      <div>
        <input
          type="checkbox"
          name="opcao"
          checked={checkBoxValue}
          onChange={handleCheckBox}
        />
      </div>
    </>
  );
}

export default CheckboxForm;
