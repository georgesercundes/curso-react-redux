import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ min, max }) => {
  const numeroAleatorio = Math.floor(min + Math.random() * (max - min));
  return (
    <div>
      <h2>Valor Aleatório</h2>
      <p>
        <strong>Valor Mínimo: {min}</strong>
      </p>
      <p>
        <strong>Valor Máximo: {max}</strong>
      </p>
      <p>
        <strong>Valor Escolhido: {numeroAleatorio}</strong>
      </p>
    </div>
  );
};
