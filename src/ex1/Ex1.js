import React, { Component } from "react";

//Tópicos:
// Funções nos componentes - Funções de bind e funções anonimas;
// Renderização segmentada - Segmentando o JSX para facilitar a leitura.

class Ex1 extends Component {
  constructor(props) {
    super(props);

    //Linka o contexto da classe (this) com o contexto que deve ser utilizado na função renderizarTitulo
    this.renderizarTitulo = this.renderizarTitulo.bind(this);
  }

  render() {
    return (
      <div className="App">
        {/* Executa a função referenciada e renderizado o resultado dela na tela. */}
        {this.renderizarTitulo()}
        <br />
        <p>Outro texto</p>
        <br />
        <p>Mais um texto</p>
        <br />
        <p>Mais outro</p>
        <br />
        <p>Ultimo Texto</p>
      </div>
    );
  }

  // Cria uma função que pode ser utilizada no componente, porém precisa do bind executado no construtor.
  renderizarTitulo() {
    //Retorna um elemento JSX.
    return <h1>Titulo</h1>;
  }

  // Cria uma função de seta para evitar ter que fazer o bind como na função acima
  //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  renderizarTexto = () => {
    //Retorna um elemento JSX.
    return <p>Primeiro Texto</p>;
  };
}

export default Ex1;
