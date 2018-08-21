import React, { Component } from "react";

//Tópicos:
// - Trabalhando com estado - Consumindo e atualizando;
// - Funções como eventos - Usando funções do componente em eventos do front.

class Ex2 extends Component {
  //Estado inicial do componente
  state = {
    numero: 0
  };

  //Soma 2 ao numero atual, usado para demonstrar duas formas de atualizar o status com a função setState.
  somar2 = () => {
    //Salvando o contexto da classe em uma variavel, pois conforme entramos em outros contextos, o this é alterado.
    //Dessa forma sempre que usarmos _this, fazemos referencia ao contexto original.
    const _this = this;
    //Exemplo de setState que recebe por parametro uma função e não um objeto. (no nosso caso, uma arrow function)
    //https://medium.com/@wisecobbler/using-a-function-in-setstate-instead-of-an-object-1f5cfd6e55d1
    this.setState(
      (prevState /*Estado anterior*/, props /*Propriedades*/) => {
        //Retorna o objeto que será atualizado no estado.
        return { numero: prevState.numero + 1 };
      },
      //callback (função que será executada quando a chamada de antes terminar) para o setState,
      // utilizando uma arrow function citada antes
      () => {
        //Exemplo de setState que recebe por parametro o objeto do estado a ser atualizado.
        this.setState({ numero: _this.state.numero + 1 });
      }
    );
  };

  somar = () => {};

  diminuir = () => {};

  render() {
    return (
      <div className="App">
        <input type="number" value={this.state.numero} readOnly />
        <br />
        <button onClick={this.somar2}>+</button>
        <button>-</button>
      </div>
    );
  }
}

export default Ex2;
