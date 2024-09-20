import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {

const [valor,setValor] = useState("");

const texto = () =>{
  setValor("Este es el texto a mostrar")
}


const borrar = () =>{
  setValor("");
}

  return (
    <div className="App">
      <h1>Boton</h1>
      <h2>{valor}</h2>
      <button onClick={texto}>Mostrar texto</button>
      <button onClick={borrar}>Borrar texto</button>
    </div>
  );
}

export default App;
