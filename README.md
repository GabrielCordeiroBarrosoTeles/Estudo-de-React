# Estudo de React
React é uma biblioteca JavaScript muito popular para construir interfaces de usuário interativas. Aqui estão os passos básicos para começar:

1. **Configuração do Ambiente de Desenvolvimento:**

   Antes de começar, você precisará configurar seu ambiente de desenvolvimento. Você pode usar o Create React App para criar um projeto React rapidamente. Para fazer isso, você precisa ter o Node.js e o npm (gerenciador de pacotes do Node.js) instalados. Use o seguinte comando para criar um novo aplicativo React:

   ```bash
   npx create-react-app meu-app
   ```

   Isso criará uma estrutura de projeto React básica em uma pasta chamada "meu-app".

2. **Estrutura do Projeto:**

   Após criar o aplicativo, você verá a seguinte estrutura de pastas:

   ```
   meu-app/
   ├── src/
   │   ├── App.js
   │   ├── index.js
   │   └── ...
   ├── public/
   │   ├── index.html
   │   └── ...
   ├── ...
   ```

   - `src/`: Contém os componentes e arquivos JavaScript do seu aplicativo.
   - `public/`: Contém o arquivo HTML principal que será usado como ponto de entrada.

3. **Criando Componentes:**

   Em React, você constrói a interface do usuário quebrando-a em componentes reutilizáveis. Cada componente é uma classe ou função JavaScript que retorna um elemento React.

   Aqui está um exemplo simples de um componente funcional:

   ```jsx
   import React from 'react';

   function MeuComponente() {
     return <div>Olá, Mundo!</div>;
   }

   export default MeuComponente;
   ```

4. **Renderização de Componentes:**

   Para renderizar um componente, você pode importá-lo e usá-lo em outro componente ou no ponto de entrada (geralmente em `src/index.js`). Por exemplo:

   ```jsx
   import React from 'react';
   import ReactDOM from 'react-dom';
   import MeuComponente from './MeuComponente'; // Importe seu componente aqui

   ReactDOM.render(<MeuComponente />, document.getElementById('root'));
   ```

   O `ReactDOM.render` é usado para renderizar o componente na página.

5. **Estado e Propriedades:**

   O estado e as propriedades são fundamentais em React. O estado é usado para armazenar informações que podem ser atualizadas e refletidas na interface do usuário, enquanto as propriedades (props) são usadas para passar dados de um componente pai para um componente filho.

   ```jsx
   import React, { useState } from 'react';

   function Contador() {
     const [contador, setContador] = useState(0);

     return (
       <div>
         <p>Contagem: {contador}</p>
         <button onClick={() => setContador(contador + 1)}>Incrementar</button>
       </div>
     );
   }
   ```

6. **Ciclo de Vida do Componente (Hooks):**

   React introduziu hooks que permitem que você adicione funcionalidades de ciclo de vida a componentes funcionais. O `useEffect` é um hook comumente usado para realizar operações após a renderização do componente.

   ```jsx
   import React, { useState, useEffect } from 'react';

   function MeuComponente() {
     const [dados, setDados] = useState([]);

     useEffect(() => {
       // Executar alguma ação após a renderização
       fetchData();
     }, []);

     async function fetchData() {
       // Buscar dados de uma API, por exemplo
       const response = await fetch('https://api.exemplo.com/dados');
       const data = await response.json();
       setDados(data);
     }

     return (
       <div>
         {/* Renderizar dados */}
       </div>
     );
   }
   ```

7. **Roteamento:**

   Para criar um aplicativo de várias páginas, você pode usar uma biblioteca de roteamento, como `react-router-dom`, que permite navegar entre diferentes componentes com base em URLs.

   ```jsx
   import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

   function App() {
     return (
       <Router>
         <Switch>
           <Route path="/pagina1" component={Pagina1} />
           <Route path="/pagina2" component={Pagina2} />
           <Route path="/" component={PaginaInicial} />
         </Switch>
       </Router>
     );
   }
   ```

Esses são os conceitos básicos para começar com React. À medida que você se torna mais familiarizado com a biblioteca, pode explorar recursos mais avançados, como gerenciamento de estado global (Redux, MobX), autenticação, e integração com APIs. React é uma tecnologia poderosa e em constante evolução, por isso é importante manter-se atualizado com as práticas recomendadas e as últimas novidades. Boa sorte com seus projetos React!

Claro! Aqui estão 15 exercícios de React com enunciados e explicações comentadas no código para cada um deles:

1. **Renderizar um Componente Simples:**
   
   Enunciado: Crie um componente chamado `OlaMundo` que renderiza a mensagem "Olá, Mundo!" em um elemento `div`.

   ```jsx
   import React from 'react';

   function OlaMundo() {
     return <div>Olá, Mundo!</div>;
   }

   export default OlaMundo;
   ```

2. **Componente com Propriedades:**

   Enunciado: Crie um componente chamado `Saudacao` que aceita uma propriedade `nome` e exibe "Olá, [nome]!".

   ```jsx
   import React from 'react';

   function Saudacao(props) {
     return <div>Olá, {props.nome}!</div>;
   }

   export default Saudacao;
   ```

3. **Contador com Estado:**

   Enunciado: Crie um contador que exiba um número e tenha botões para incrementar e decrementar o valor.

   ```jsx
   import React, { useState } from 'react';

   function Contador() {
     const [contador, setContador] = useState(0);

     return (
       <div>
         <p>Contagem: {contador}</p>
         <button onClick={() => setContador(contador + 1)}>Incrementar</button>
         <button onClick={() => setContador(contador - 1)}>Decrementar</button>
       </div>
     );
   }
   ```

4. **Listagem de Itens:**

   Enunciado: Crie um componente que recebe uma lista de itens e os exibe em uma lista não ordenada.

   ```jsx
   import React from 'react';

   function ListaDeItens(props) {
     const itens = props.itens.map((item, index) => (
       <li key={index}>{item}</li>
     ));

     return <ul>{itens}</ul>;
   }
   ```

5. **Formulário de Cadastro:**

   Enunciado: Crie um formulário de cadastro que aceita nome, email e senha. Exiba os valores digitados quando o formulário for enviado.

   ```jsx
   import React, { useState } from 'react';

   function FormularioCadastro() {
     const [dados, setDados] = useState({ nome: '', email: '', senha: '' });

     const handleChange = (e) => {
       const { name, value } = e.target;
       setDados({ ...dados, [name]: value });
     };

     const handleSubmit = (e) => {
       e.preventDefault();
       console.log(dados);
     };

     return (
       <form onSubmit={handleSubmit}>
         <input
           type="text"
           name="nome"
           placeholder="Nome"
           value={dados.nome}
           onChange={handleChange}
         />
         <input
           type="email"
           name="email"
           placeholder="Email"
           value={dados.email}
           onChange={handleChange}
         />
         <input
           type="password"
           name="senha"
           placeholder="Senha"
           value={dados.senha}
           onChange={handleChange}
         />
         <button type="submit">Cadastrar</button>
       </form>
     );
   }
   ```

6. **Toggle de Exibição:**

   Enunciado: Crie um botão que permite alternar a exibição de um texto.

   ```jsx
   import React, { useState } from 'react';

   function ToggleExibicao() {
     const [exibir, setExibir] = useState(false);

     return (
       <div>
         <button onClick={() => setExibir(!exibir)}>
           {exibir ? 'Esconder' : 'Mostrar'}
         </button>
         {exibir && <p>Texto a ser exibido/ocultado.</p>}
       </div>
     );
   }
   ```

7. **Contador de Cliques:**

   Enunciado: Crie um contador que conte quantas vezes um botão foi clicado.

   ```jsx
   import React, { useState } from 'react';

   function ContadorDeCliques() {
     const [cliques, setCliques] = useState(0);

     return (
       <div>
         <p>Cliques: {cliques}</p>
         <button onClick={() => setCliques(cliques + 1)}>Clicar</button>
       </div>
     );
   }
   ```

8. **Lista de Tarefas:**

   Enunciado: Crie um aplicativo de lista de tarefas que permite adicionar, marcar como concluída e remover tarefas.

   ```jsx
   import React, { useState } from 'react';

   function ListaDeTarefas() {
     const [tarefas, setTarefas] = useState([]);
     const [novaTarefa, setNovaTarefa] = useState('');

     const adicionarTarefa = () => {
       if (novaTarefa.trim() !== '') {
         setTarefas([...tarefas, novaTarefa]);
         setNovaTarefa('');
       }
     };

     const marcarConcluida = (index) => {
       const novasTarefas = [...tarefas];
       novasTarefas[index] = `✔️ ${novasTarefas[index]}`;
       setTarefas(novasTarefas);
     };

     const removerTarefa = (index) => {
       const novasTarefas = tarefas.filter((_, i) => i !== index);
       setTarefas(novasTarefas);
     };

     return (
       <div>
         <input
           type="text"
           placeholder="Nova tarefa"
           value={novaTarefa}
           onChange={(e) => setNovaTarefa(e.target.value)}
         />
         <button onClick={adicionarTarefa}>Adicionar</button>
         <ul>
           {tarefas.map((tarefa, index) => (
             <li key={index}>
               {tarefa}
               <button onClick={() => marcarConcluida(index)}>Concluída</button>
               <button onClick={() => removerTarefa(index)}>Remover</button>
             </li>
           ))}
         </ul>
       </div>
     );
   }
   ```

9. **Requisição à API:**

   Enunciado: Crie um componente que faça uma requisição a uma API e exiba os dados obtidos.

   ```jsx
   import React, { useEffect, useState } from 'react';

   function RequisicaoAPI() {
     const [dados, setDados] = useState([]);

     useEffect(() => {
       async function fetchData() {
         const response = await fetch('https://api.example.com/data');
         const data = await response.json();
         setDados(data);
       }

       fetchData();
     }, []);

     return (
       <div>
         <h2>Dados da API:</h2>
         <ul>
           {dados

.map((item, index) => (
             <li key={index}>{item.nome}</li>
           ))}
         </ul>
       </div>
     );
   }
   ```

10. **Rotas com React Router:**

    Enunciado: Crie uma aplicação com duas rotas usando `react-router-dom`. Crie um componente para cada rota e navegue entre elas.

    ```jsx
    import React from 'react';
    import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

    function RotaA() {
      return <div>Rota A</div>;
    }

    function RotaB() {
      return <div>Rota B</div>;
    }

    function App() {
      return (
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/rota-a">Rota A</Link>
              </li>
              <li>
                <Link to="/rota-b">Rota B</Link>
              </li>
            </ul>
          </nav>
          <Route path="/rota-a" component={RotaA} />
          <Route path="/rota-b" component={RotaB} />
        </Router>
      );
    }
    ```

11. **Formulário de Login:**

    Enunciado: Crie um formulário de login que exiba uma mensagem de boas-vindas quando o usuário faz login com sucesso.

    ```jsx
    import React, { useState } from 'react';

    function FormularioLogin() {
      const [usuario, setUsuario] = useState('');
      const [senha, setSenha] = useState('');
      const [logado, setLogado] = useState(false);

      const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de autenticação aqui (pode ser simulada com dados fixos)
        if (usuario === 'usuario' && senha === 'senha') {
          setLogado(true);
        }
      };

      return (
        <div>
          {logado ? (
            <p>Bem-vindo, {usuario}!</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Usuário"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
              <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      );
    }
    ```

12. **Paginação de Itens:**

    Enunciado: Crie um componente que exibe uma lista de itens paginada.

    ```jsx
    import React, { useState } from 'react';

    function PaginacaoDeItens({ itensPorPagina, itens }) {
      const [paginaAtual, setPaginaAtual] = useState(1);

      const indiceInicial = (paginaAtual - 1) * itensPorPagina;
      const indiceFinal = indiceInicial + itensPorPagina;
      const itensDaPagina = itens.slice(indiceInicial, indiceFinal);

      const paginas = Math.ceil(itens.length / itensPorPagina);

      return (
        <div>
          <ul>
            {itensDaPagina.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div>
            {Array.from({ length: paginas }, (_, index) => (
              <button
                key={index}
                onClick={() => setPaginaAtual(index + 1)}
                disabled={paginaAtual === index + 1}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      );
    }
    ```

13. **Modal Pop-up:**

    Enunciado: Crie um modal pop-up que seja exibido ao clicar em um botão e fechado ao clicar em um botão de fechar.

    ```jsx
    import React, { useState } from 'react';

    function Modal() {
      const [modalAberto, setModalAberto] = useState(false);

      return (
        <div>
          <button onClick={() => setModalAberto(true)}>Abrir Modal</button>
          {modalAberto && (
            <div className="modal">
              <div className="modal-conteudo">
                <button onClick={() => setModalAberto(false)}>Fechar</button>
                <p>Conteúdo do modal aqui.</p>
              </div>
            </div>
          )}
        </div>
      );
    }
    ```

14. **Arrastar e Soltar:**

    Enunciado: Crie um componente que permita ao usuário arrastar e soltar elementos em uma lista.

    ```jsx
    import React, { useState } from 'react';

    function ArrastarESoltar() {
      const [itens, setItens] = useState(['Item 1', 'Item 2', 'Item 3']);

      const handleDragStart = (e, index) => {
        e.dataTransfer.setData('index', index);
      };

      const handleDragOver = (e) => {
        e.preventDefault();
      };

      const handleDrop = (e, newIndex) => {
        const index = e.dataTransfer.getData('index');
        const newItens = [...itens];
        const [removedItem] = newItens.splice(index, 1);
        newItens.splice(newIndex, 0, removedItem);
        setItens(newItens);
      };

      return (
        <ul>
          {itens.map((item, index) => (
            <li
              key={index}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
            >
              {item}
            </li>
          ))}
        </ul>
      );
    }
    ```

15. **Gráfico de Barras:**

    Enunciado: Crie um componente que exiba um gráfico de barras com base em dados passados como propriedade.

    ```jsx
    import React from 'react';

    function GraficoDeBarras({ dados }) {
      const maiorValor = Math.max(...dados);

      return (
        <div>
          {dados.map((valor, index) => (
            <div
              key={index}
              style={{
                width: `${(valor / maiorValor) * 100}%`,
                backgroundColor: 'blue',
                height: '20px',
                marginBottom: '5px',
              }}
            />
          ))}
        </div>
      );
    }
    ```

Lembrando que esses são apenas exemplos e podem ser adaptados de acordo com as necessidades do seu projeto. Além disso, é importante estudar e praticar React continuamente para se tornar mais proficiente na criação de aplicativos React mais complexos.
