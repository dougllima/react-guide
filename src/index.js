//IMPORTS DO REACT
import React from "react";
import ReactDOM from "react-dom";
//IMPORTS DE OUTROS COMPONENTES
import Title from "./Title";
import Text from "./Text";
import Ex1 from "./ex1/Ex1";
import Ex2 from "./ex2/Ex2";
import Ex3 from "./ex3/Ex3";

//IMPORTS DE CSS
import "./styles.css";

// Componente funcional, basicamente uma função que retorna JSX (esse HTML escrito no javascript),
//não possui estado nem funções de "life-cicle"
function App() {
  //Retorna um elemento JSX que vai ser renderizado na tela
  return (
    <div className="App">
      {/*Renderiza outros componentes dentro do componente atual*/}
      {/*Passando a propriedade title com o valor "Titulo 1" para o componente Title */}
      <Title title="Titulo 1" />
      <Text text="Texto" />
    </div>
  );
}

//Busca na tela qual elemento será o principal (olhar em public/index.html)
const rootElement = document.getElementById("root");

//Renderiza o componente APP dentro do elemento localizado acima (rootElement)
ReactDOM.render(<App />, rootElement);
