//Imports básicos do React para criar um componente
import React, { Component } from "react";
//Import utilizado para definir propriedades padrão do componente
import PropTypes from "prop-types";

// Componente de classe
//permite usar estado, métodos de life-cicle e propriedades tipadas/padrões
class Text extends Component {
  //Define o tipo das propriedades que o componente espera
  static propTypes = {
    // Informando que o componente espera uma propriedade text,
    //do tipo string.
    text: PropTypes.string
  };

  // Define as propriedades padrão do componente,
  //para caso não sejam passadas quando o componete é renderizado.
  static defaultProps = {
    text: "Pequeno Texto"
  };

  // Função obrigatória de um componente de classe,
  //deve retornar o elemento que deve ser renderizado
  render() {
    // Lendo as propriedades do componente para dentro de váriaveis diferentes
    //utilizando desconstrução, só um recurso util do javascript
    //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Atribuicao_via_desestruturacao#Desestrura%C3%A7%C3%A3o_de_objeto
    const { text } = this.props;

    //Retorna o que deve ser renderizado na tela pelo componente
    return (
      //Tag html que será renderizada.
      <p>
        {/* Expressões e váriaveis javascript devem estar entre chaves 
        para serem interpretadas nesse html */}
        {text}
      </p>
    );
  }
}

export default Text;
