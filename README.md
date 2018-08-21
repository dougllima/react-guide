# Arquivos

- **public** - Pasta que contei os arquivos base onde o React será renderizado
	- **index.html** - Página HTML base onde a aplicação será renderizada (onde está o elemento *root*)
- **src** - Pasta contendo os componentes do projeto e todos códigos fontes.
	- **index.js** - Componente principal do app, carregará todo app dentro dele e é renderizado na página index.html
	- **Title.js** - Componente que contem um titulo usando a tag html *h1*, usado para mostrar o funcionamento dos estados e das funções de ciclo de vida no React.
	- **Text.js** - Componente contendo um texto usando a tag html *p*, usado para mostrar o funcionamento das propriedades no React.
- **package.json** - Arquivo de configuração do npm, gerenciador de pacotes do projeto.

# Funcionamento

1. A página **index.html** é lida e colocada como base para a aplicação React.
2. O ReactDOM localiza o elemento informado como raiz e cria o **virtual DOM** dentro dele (index.js, linha 26~29) 
3. É realizada a **renderização** dos componentes, seguindo a **estrutura de arvore**.
4. É atribuído uma key **unica dentro do escopo** (automaticamente ou não) para cada elemento da DOM, para **facilitar o controle do que precisa ser atualizado**.
5. O React **monitora mudanças de estado/propriedades** que possam acarretar mudanças na tela, e **atualiza somente o necessário**.

# Exercícios

 No arquivo **src/index.js** já estão importados os outros componentes para os exercícios (linhas 7 e 8).
 Para trocar qual componente será renderizado na tela principal, altere a linha 30, trocando `<App />` por, por exemplo, `<Ex1 />` e então abra o arquivo **ex1/Ex1.js** para edita-lo.

Ex1 - Nesse componente são implementadas funções na classe que podem ser usadas pelo componente, e essas funções retornam um elemento JSX. 
- Faça com que a função `renderizarTexto` exiba seu retorno na tela, assim como a função `renderizarTitulo`;
- Adapte a função `renderizarTitulo` para não precisar do bind no construtor da classe.
- Altere a função `renderizarTexto` para que possa ser usada em todos os textos renderizados na tela (individualmente para cada um).

Ex2 - Nesse componente são implementados os conceitos de estados e eventos do front.

- A função `somar2` soma 2 ao numero atual, porém na verdade ela soma 1 ao valor atual de duas formas diferentes, analise-as;
- Implemente a função `somar` utilizando o `setState` funcional;
- Implemente a função `diminuir` utilizando `setState` com um objeto como parâmetro;
- Implemente a chamada para esses métodos nos botões referentes do front.

Ex3 - Nesses componentes exploramos a passagem de propriedades para componentes filhos, o gerenciamento do estado de um componente e os métodos nativos do React que controlam o ciclo de vida de um componente.

- Analise as funções utilizadas nos inputs de texto da tela e o comportamento do componente quando se edita algum campo.
- Edite a renderização dos componentes `Title` e `Text` para utilizar os valores do estado ao invés de um valor fixo nos seus parâmetros. 
- Após essa edição, apenas um dos componentes funcionou conforme esperado. Isso se deve ao comportamento da função `componentDidMount`, que utilizamos para atualizar o status do componente a partir de suas props. Analise [esse diagrama](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) e [essas listas de funções](https://reactjs.org/docs/react-component.html#the-component-lifecycle) do ciclo de vida dos componentes e tente realizar as alterações para que o estado do componente seja sempre atualizado quando suas propriedades mudarem.
- Compare o funcionamento das funções `trocaTitulo` e `trocaTexto`, e a partir disso, tente unificar as duas em uma unica função que serviria para qualquer propriedade.