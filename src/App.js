import React, { Component } from 'react';

import Topo from "./Topo";
import Conteudo from "./Conteudo";
import Rodape from "./Rodape";

export default function App() {
  return (
    <div>
      <Topo />
      <Conteudo />
      <Rodape />
    </div>
  );
}
