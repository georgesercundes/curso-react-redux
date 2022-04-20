/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import produtos from "../../data/produtos";
import "./TabelaProdutos.css";

export default (props) => {
  const tabelaProdutos = produtos.map((produto, i) => {
    return (
      <tr key={produto.id} className={i % 2 === 0 ? "Par" : "Impar"}>
        <td>{produto.id}</td>
        <td style={{ textAlign: "justify" }}>{produto.nome}</td>
        <td>R$ {produto.preco}</td>
      </tr>
    );
  });

  return (
    <div className="TabelaProdutos">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{tabelaProdutos}</tbody>
      </table>
    </div>
  );
};
