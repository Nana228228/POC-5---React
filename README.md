# POC 5: React com Next.js

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

   * [](#)
   * [](#)

<h2 id="introdução">Introdução</h2>
Bem-vindo ao repositório POC 5: React com Next.js🎉 Este é um recurso gratuito que ensina o passo a passo para criar um projeto React usando o bootstraping do Next.js. 
A biblioteca para desenvolvimento React permite construir páginas web por meio de componentes reutilizáveis, o que diminui consideravelmente o tamanho do código em projetos maiores, o que facilita sua organização e manutenção. Além disso, com a utilização dos estados (abordaremos em uma próxima POC) é possível atualizar somente esses componentes ao interagirem com o usuário, sem carregar toda a página, o que otimiza a performance. 

Na sua POC você deve explicar o funcionamento dos seguintes conceitos de REACT, usando Next.js:

Estrutura de Projeto NextJS 14 ou superior
Criação de componentes simples (sem estado)
Estilo CSS (global e módulo). 

    

Esse é um projeto [Next.js](https://nextjs.org) iniciado com [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), na versão NextJS 15. 


<h2>Começando o projeto</h2>

Para criar um projeto usando o framework Next.js, digite no terminal: 
```bash
nmx create-next-app@latest nome-do-projeto
```

Para entrar no diretório do projeto e iniciar o servidor de desenvolvimento, digite:

```bash
cd nome-do-projeto
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) para ver o resultado no seu brownser.

<h2 id="estrutura">Estrutura inicial</h2>

<pre>
├── app/ 
│   ├── fonts/ #Armazena as fontes customizadas 
│   ├── favicon.ico #Ícone que aparece na aba do navegador
│   ├── globals.css
│   ├── layout.js
│   └── page.js     
├── node_modules/   
├── public/      
├── .eslintrc.json
├── .gitignore
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
└── tailwind.config.js
</pre>

<h3>/app: </h3>
Este diretório é uma novidade em versões mais recentes de Next.js, parte da introdução do App Router. Ele contém arquivos como page.js, layout.js, e outras subpastas, como /fonts, que lidam com componentes de página e layouts.
<h4>page.js: </h4> Define a página principal do projeto (ex.: página inicial). Cada diretório no /app que contém um arquivo page.js mapeia para uma rota correspondente.
<h4>layout.js:</h4> Define o layout que será utilizado em uma página ou conjunto de páginas. Isso permite que você defina layouts que sejam reutilizados entre diferentes páginas.
<h4>/fonts:</h4> Diretório onde as fontes customizadas podem ser armazenadas.
<h4>favicon.ico: </h4>Ícone que aparece na aba do navegador. 

<h3>/node_modules:</h3>
Contém todas as dependências do projeto gerenciadas pelo Node.js e listadas no package.json. 

<h3>/public: </h3>
Armazena arquivos estáticos que podem ser diretamente acessados via URL no navegador.
file.svg, globe.svg, next.svg, vercel.svg, window.svg: Imagens SVG que podem ser usadas diretamente na aplicação.


<h3> Outros Arquivos </h3>

<h4>.eslintrc.json:</h4>Arquivo de configuração para o ESLint, uma ferramenta de análise estática para encontrar problemas no código JavaScript.

<h4>.gitignore:</h4>Lista de arquivos e diretórios que devem ser ignorados pelo Git, como /node_modules, arquivos de build, etc.
 
<h4>jsconfig.json:</h4>

Arquivo de configuração para facilitar a importação de módulos JavaScript. Ele define caminhos e opções para ajudar com auto-completar e resolver módulos.
<h4>next.config.mjs:</h4>

Arquivo de configuração do Next.js. Ele permite a personalização de vários comportamentos da aplicação, como rotas, otimização de imagens, etc.
<h4>package-lock.json e package.json:</h4>

package.json: Contém as dependências do projeto, scripts de build, scripts de desenvolvimento, e metadados do projeto (nome, versão, etc.).
package-lock.json: Garante que as dependências instaladas permaneçam consistentes em diferentes máquinas.
<h4>postcss.config.mjs:</h4>

Arquivo de configuração do PostCSS, uma ferramenta que processa CSS. Ele geralmente é usado em conjunto com o Tailwind CSS.
<h4>README.md:</h4>

Arquivo Markdown que contém informações sobre o projeto, como instruções de instalação e uso.
<h4>tailwind.config.js: </h4>
Arquivo de configuração do Tailwind CSS. É onde você pode personalizar temas, adicionar plugins e estender utilitários de estilo.


<h2 id="componentes">Criando componentes</h2>

Componentes são elementos reutilizáveis que compõem uma interface.
Cada componente React é um arquivo .jsx (JavaScript extended) (ou .tsx para TypeScript). Como uma boa prática, organizamos todos os componentes dentro de uma pasta /components, no diretório /app. 

<h3>Card.jsx</h3>

```
import styles from './Card.module.css';:
```
Importa um arquivo de CSS modular chamado Card.module.css, que contém os estilos usados neste componente. O CSS modular permite que os estilos sejam aplicados de forma local e isolada, evitando colisões de classes globais em toda a aplicação.
Por exemplo, a classe cartao definida no arquivo CSS modular será acessada através de styles.cartao dentro do JSX, garantindo que esses estilos sejam exclusivos para esse componente.
<br>
```
export default function Cartao({ title, children }) {:
```

Esta linha define o componente funcional Cartao, exportando-o como padrão para ser usado em outras partes da aplicação.
O componente recebe duas propriedades (ou props):
title: o título que será exibido no cartão.
children: o conteúdo (ou filhos) que será renderizado dentro do cartão. Essa prop permite que o componente seja flexível, renderizando qualquer elemento ou conteúdo passado entre as tags <Cartao> ao utilizá-lo.
<br>
```
<div className={styles.cartao}>:
```
Aqui começa o JSX que será retornado pelo componente. Um div com a classe cartao (do CSS modular) é usada como contêiner do cartão.
O uso de {styles.cartao} garante que o estilo seja aplicado diretamente da importação do CSS modular, mantendo o estilo específico e encapsulado. <br>


```
<h2 className={styles.cartaoTitle}>{title}</h2>:

```

Renderiza um título (h2) com a classe cartaoTitle (também do CSS modular) e insere o valor da prop title dentro da tag.
Assim, o título dinâmico pode ser passado como propriedade ao componente e será exibido no cartão.<br>
```
<div>{children}</div>:
```

Renderiza os filhos do componente dentro de uma div. Os children podem ser qualquer conteúdo que o desenvolvedor envolva dentro das tags <Cartao>...</Cartao>, como texto, imagens, botões, etc.

<h3>button.jsx</h3>
Aqui, estamos declarando e exportando uma função chamada Botao, que é o nosso componente funcional. Esse componente recebe dois props:

palavra: Será o texto que será exibido dentro do botão.
onClick: É uma função que será executada quando o botão for clicado.
O elemento button renderiza um botão HTML.
A className={styles.botao} atribui ao botão uma classe CSS que foi definida no arquivo button.module.css. O styles.botao é uma forma de referenciar a classe CSS botao no arquivo CSS importado.
O onClick={onClick} atribui ao botão uma função que será executada quando ele for clicado. Essa função é passada como uma prop.
Dentro das tags <button></button>, o {palavra} é o conteúdo textual do botão, que foi passado como uma prop ao componente.

<h3>page.js </h3>

Após importar os componentes, o módulo CSS da página e o Head (para manipular elementos do head HTML, como o título da página e o ícone da aba do navegador), escreve a função principal `Home(), componente que será exibido na página: 


`<div className={styles.container}>` Contém o layout principal da página. O uso de {styles.container} aplica o estilo container definido no arquivo CSS modular page.module.css.

`<Head>` Aqui você define o título da página (Exemplo de CSS no Next.js) e o ícone (favicon.ico).

`<main className={styles.main}>`: Este é o conteúdo principal da página. Dentro dele:

`<h1>`: Um título grande com o texto "Tutorial de CSS no Next.js!". O estilo title também é modular, vindo de page.module.css.
`<div className={styles.cardContainer}>`: Um contêiner para os componentes de cartão (Card). Ele cria três cartões usando:
* `[...Array(3)].map((_, index) => (...)`: Gera um array de três elementos (Array(3)) e, para cada elemento (representado por _), renderiza o componente Card. O key={index} garante que cada cartão tenha uma chave única para controle do React.
<Card key={index} title={Card Customizado ${index + 1}}>: Renderiza o componente Card com uma propriedade title, passando o número do cartão como parte do título.
<p>: Dentro de cada Card, há um parágrafo com o texto "Cartão customizaveis usando estilos modulares."
Componente Botao: O botão Botao é renderizado com um onClick que dispara um alert com a mensagem 'Aprendi Next.js!' quando clicado. O texto do botão é definido pela propriedade palavra, que aqui recebe "Clique aqui para aprender!".

