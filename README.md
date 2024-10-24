Na sua POC você deve explicar o funcionamento dos seguintes conceitos de REACT, usando Next.js:

Estrutura de Projeto NextJS 14 ou superior
Criação de componentes simples (sem estado)
Estilo CSS (global e módulo). 
   * [](#)
   * [](#)
    

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



