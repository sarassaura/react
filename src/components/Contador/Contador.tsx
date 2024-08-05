import { useState } from "react";
import "./Contador.css";

function Contador() {
  const [valor, setValor] = useState(0);

  function somarMaisUm() {
    setValor((num) => num + 1);
  }

  console.log(valor);

  return (
    <div className="container">
      <p>O valor é: {valor}</p>
      <button onClick={somarMaisUm}>Adicionar +1</button>
    </div>
  );
}

export default Contador;
