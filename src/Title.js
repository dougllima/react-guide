import React, { Component } from "react";

class Title extends Component {
  // Construtor da classe,
  //usado como uma forma de definir o estado inicial do componente

  // É obrigatório que tenha um parametro props.
  constructor(props) {
    //e que chame o método super
    //(Construtor da classe componente que ele extendeu)
    //passando esse parametro props.
    super(props);

    //Define o estado inicial do componente.
    this.state = {
      title: ""
    };
  }

  // Tudo isso poderia ser substituido pelo código abaixo
  //(mas não poderiamos usar a váriavel prop)
  /*
    state = {
      title: ""
    }
  */

  // Uma das funções do ciclo de vida do componente,
  //é executada toda vez que o componente é montado pelo React para ser utilizado.
  //https://reactjs.org/docs/react-component.html#the-component-lifecycle
  componentDidMount() {
    //"If ternario", faz o mesmo que o código abaixo dele
    var title = this.props.title ? this.props.title : "Titulo";
    /*
    var title;

    //No javascript isso equivale a verificar se a váriavel existe 
    //(mas cuidadado quando tratar com booleanos, pois false também cairia no else)
    if(this.props.title){
      title = this.props.title;
    } else {
      title = "Titulo";
    }
    */

    // A função setState é a unica forma de alterar um estado quando se está fora do construtor do componente.
    // Deve-se passar por parametro o novo estado (ou uma função que gere ele)
    //e um callback caso desejado (algo a ser realizado quando a operação de atualizar o estado terminou.)
    this.setState({ title: title }, console.log("OK"));
  }

  render() {
    return <h1>{this.state.title}</h1>;
  }
}

export default Title;
