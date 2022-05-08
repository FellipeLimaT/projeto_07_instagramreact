import React from 'react'
import ReactDOM from 'react-dom'


function Lista(){
  return (
    <ul>
      <li>Item 1 novo</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  ) 
}

const listaReact = Lista();
const elemento = document.querySelector(".root");

ReactDOM.render(listaReact, elemento)


