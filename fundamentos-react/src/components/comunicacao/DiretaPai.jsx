/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import DiretaFilho from "./DiretaFilho";

export default (props) => {
  return (
    <div>
      <DiretaFilho nome="Junior" idade={20} nerd={true} />
      <DiretaFilho nome="Gabriel" idade={17} nerd={false} />
    </div>
  );
};
