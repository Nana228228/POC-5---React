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

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte maneira:

```
Estrutura inicial
├── app/ 
/components
  ├── Card.js
  ├── Card.module.css
  ├── Button.jsx
  └── Button.module.css    
/fonts
  └── global.css
/layout.js
/page.js
/public
  └── favicon.ico    
├── .eslintrc.json
├── .gitignore
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
└── tailwind.config.js

```

## Descrição dos Componentes

### 1. **Card.js**

O componente `Card` é utilizado para exibir informações em formato de cartão. Ele aceita um título e conteúdo como filhos.

```javascript
import styles from './Card.module.css';

export default function Cartao({ title, children }) {
  return (
    <div className={styles.cartao}>
      <h2 className={styles.cartaoTitle}>{title}</h2>
      <div>{children}</div>
    </div>
  );
}
```

#### Estilos (Card.module.css)

```css
.cartao {
  background-color: var(--card-background);
  padding: var(--padding);
  border-radius: var(--button-radius);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.14);
  margin-bottom: 14px;
  margin-right: 8px;
  width: 250px;
}

.cartaoTitle {
  font-size: 1.6rem;
  margin-bottom: 8px;
}

@media screen and (max-width: 900px) {
  .cartao {
    width: 100%;
  }
}
```

### 2. **Button.jsx**

O componente de botão que aceita um texto e uma função de clique como propriedades.

```javascript
import styles from "./Button.module.css";

export default function Botao({ palavra, onClick }) {
  return (
    <button className={styles.botao} onClick={onClick}>
      {palavra}
    </button>
  );
}
```

#### Estilos (Button.module.css)

```css
.botao {
  background-color: var(--primary-color);
  color: #fff;
  padding: var(--padding);
  border: none;
  border-radius: var(--button-radius);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.botao:hover {
  background-color: var(--secondary-color);
}
```

### 3. **Estilos Globais (global.css)**

Define variáveis CSS globais e estilos para o corpo da aplicação, incluindo suporte para temas claros e escuros.

```css
:root {
  --primary-color: #23d467;
  --secondary-color: #148f4f;
  --card-background: #f9f9f9;
  --button-radius: 8px;
  --padding: 16px;
  --background-color: #ffffff;
  --text-color: #333;
}

@media (prefers-color-scheme: dark) {
  :root {
    --primary-color: #23d467;
    --secondary-color: #148f4f;
    --card-background: #3d3d3d;
    --background-color: #282727;
    --text-color: #f1f1f1;
  }
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);
}
```

### 4. **Layout (layout.js)**

Define o layout principal da aplicação, incluindo as fontes personalizadas.

```javascript
import localFont from "next/font/local";
import "./global.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
```

### 5. **Página Principal (page.js)**

A página principal da aplicação que utiliza os componentes `Card` e `Button`.

```javascript
'use client';
import Botao from "./components/Button";
import Head from 'next/head';
import styles from './page.module.css';
import Card from './components/Card';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Exemplo de CSS no Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Tutorial de CSS no Next.js!</h1>
        <div className={styles.cardContainer}>
          {[...Array(3)].map((_, index) => (
            <Card key={index} title={`Card Customizado ${index + 1}`}>
              <p>Cartões customizáveis usando estilos modulares.</p>
            </Card>
          ))}
        </div>
        <Botao onClick={() => alert('Aprendi Next.js!')} palavra="Clique aqui para aprender!" />
      </main>
    </div>
  );
}
```

#### Estilos (page.module.css)

```css
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 16px;
}

.main {
  padding: 16px;
  text-align: center;
}

.title {
  font-size: 2.5rem;
  color: rgb(88, 209, 88);
}

.cardContainer {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin-bottom: 24px;
}
```

##Resultado visual

O código presente neste repositório, quando executado em um navegador apresenta o versículo no centro da página, como mostra a imagem a seguir:

<img style="border-radius:50%;width=300px; height:430px; display: flex; align-items: center; " src="raposa.jpg">

<img style="border-radius:50%;width=300px; height:430px; display: flex; align-items: center; " src="raposa.jpg">

<img style="border-radius:50%;width=300px; height:430px; display: flex; align-items: center; " src="raposa.jpg">

## Tecnologias Utilizadas

- **Next.js**: Framework React para construção de aplicações web.
- **CSS Modules**: Para escopo local de estilos.
- **JavaScript**: Linguagem de programação principal.

## Licença

Este projeto está licenciado sob a **MIT License**. Veja o arquivo `LICENSE` para mais detalhes.

## Autores:

- Ana Julia Blande Silva 
- Gabriel Aboboreira 
- Naomi 



