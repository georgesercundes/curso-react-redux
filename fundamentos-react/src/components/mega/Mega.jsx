/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import "./Mega.css";

// Solução do Professor

export default (props) => {
  function gerarNumeroNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max - min)) + min;
    return array.includes(aleatorio)
      ? gerarNumeroNaoContido(min, max, array)
      : aleatorio;
  }

  function gerarNumeros(qtde) {
    const numeros = Array(qtde)
      .fill(0)
      .reduce((nums) => {
        const novoNumero = gerarNumeroNaoContido(1, 20, nums);
        return [...nums, novoNumero];
      }, [])
      .sort((n1, n2) => n1 - n2);

    return numeros;
  }

  function gerarNumerosPeriodicamente() {
    setInterval(() => {
      setNumeros(gerarNumeros(qtde));
    }, 5000);
  }

  const [qtde, setQtde] = useState(props.qtde || 6);
  const numerosIniciais = gerarNumeros(qtde);
  const [numeros, setNumeros] = useState(numerosIniciais);

  return (
    <div className="Mega">
      <h2>Mega</h2>
      <h3>
        {numeros.map((num, i) => (
          <span key={i}>{num}</span>
        ))}
      </h3>
      <div>
        <label>Qtde de Números</label>
        <input
          min={6}
          max={15}
          type="number"
          value={qtde}
          onChange={(e) => {
            setQtde(+e.target.value);
          }}
        />
      </div>
      <button onClick={() => gerarNumerosPeriodicamente()}>
        Gerar Números
      </button>
    </div>
  );
};

// Minha Solução

// export default (props) => {
//   const [qtdNumeros, setQtdNumeros] = useState(6);
//   const [numeros, setNumeros] = useState([]);

//   const gerarNumAleatorio = (num) => (num = parseInt(Math.random() * 60) + 1);

//   const gerarNumerosAleatorios = (qtd) => {
//     const nums = Array(qtd).fill(0).map(gerarNumAleatorio);
//     const numsSemRepetidos = [...new Set(nums)];
//     return nums.length === numsSemRepetidos.length
//       ? numsSemRepetidos
//       : gerarNumerosAleatorios(qtd);
//   };

//   const ordemCrescente = (a, b) => a - b;

//   const gerarNumeros = (qtd) =>
//     gerarNumerosAleatorios(qtd).sort(ordemCrescente);

//   return (
//     <div className="Mega">
//       <h2>Desafio Mega Sena</h2>
//       <div>
//         <label htmlFor="MegaInput">
//           Quantidade de números a serem sorteados:{" "}
//         </label>
//         <input
//           id="MegaInput"
//           type="number"
//           value={qtdNumeros}
//           onChange={(e) => setQtdNumeros(parseInt(e.target.value))}
//         ></input>
//       </div>
//       <h3>{numeros.join(" ")}</h3>
//       <button onClick={(e) => setNumeros(gerarNumeros(qtdNumeros))}>
//         sortear
//       </button>
//     </div>
//   );
// };
