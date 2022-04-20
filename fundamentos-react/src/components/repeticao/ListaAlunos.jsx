/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import alunos from "../../data/alunos";

export default (props) => {
  const listaAlunos = alunos.map((aluno) => {
    return (
      <li key={aluno.id}>
        {aluno.id}) {aluno.nome} - {aluno.nota}
      </li>
    );
  });

  return (
    <div>
      <ul
        style={{
          listStyle: "none",
          textAlign: "justify",
          padding: "0 0 0 120px",
        }}
      >
        {listaAlunos}
      </ul>
    </div>
  );
};
