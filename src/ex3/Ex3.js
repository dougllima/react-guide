import React, { Component } from "react";

import Title from "./Title";
import Text from "./Text";

//Tópicos:
// - Passagem de props
// - Gerenciamento de state
// - Métodos do ciclo de vida dos componentes

class Ex3 extends Component {
  // Estado inicial do componente
  state = {
    titulo: "Titulo Ex3",
    texto: "Testanderson"
  };

  //Função para realizar a troca do titulo,
  // como ela vai ser anexada ao Change de um input,
  // recebe automaticamente um parametro Event (js)
  trocaTitulo = event => {
    //event = evento disparado pelo listener do javascript
    //target = o elemento que recebeu o listener
    //value = o valor do elemento naquele momento
    const tituloInput = event.target.value;

    //Atualizando a chave titulo do nosso estado atual para receber o valor da variavel tituloInput
    this.setState({ titulo: tituloInput });
  };

  //Mesma função para troca de uma propriedade, porém feita de forma mais genérica.
  trocaTexto = event => {
    //event = evento disparado pelo listener do javascript
    //target = o elemento que recebeu o listener
    //value = o valor do elemento naquele momento
    const value = event.target.value;
    //name = atributo name do elemento target
    const name = event.target.name;

    //buscando nosso estado atual
    var state = this.state;
    //atualizando somente a chave que está com o mesmo nome que o elemento para receber seu valor
    state[name] = value;

    //Sobreescrevendo todo o estado atual pelo estado atualizado.
    this.setState(state);
  };

  //Método da classe Component que deve retornar um componente jsx para ser renderizado.
  render() {
    return (
      <div className="App">
        <Title title="Titulo" />
        <Text text="Texto" />

        <label>Titulo: </label>
        {/* Criando um input e dizendo o  que fazer caso o valor dele seja alterado na tela. */}
        <input type="text" onChange={this.trocaTitulo} />
        <br />
        <br />
        <label>Valor state.titulo: </label>
        {this.state.titulo}
        <br />
        <br />
        <label>Texto: </label>
        <input type="text" name="texto" onChange={this.trocaTexto} />
        <br />
        <br />
        <label>Valor state.texto: </label>
        {this.state.texto}
      </div>
    );
  }
}

export default Ex3;
