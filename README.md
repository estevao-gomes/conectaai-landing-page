<h1>Desafio Conecta.ai</h1>

O desafio consiste na criação de uma Landing Page fictícia, seguindo o design estabelecido no layout Figma visto em:
<a href="https://www.figma.com/file/bLuSxwWdU3M8b24jpsIAZZ/Conecta-Desafio-Front-End">https://www.figma.com/file/bLuSxwWdU3M8b24jpsIAZZ/Conecta-Desafio-Front-End</a>

O resultado de minha criação se encontra neste repositório.

Para poder rodar em sua máquina, basta executar os seguintes passos:
<ol>
    <li>Clone o repositório usando o comando <code>git clone https://github.com/estevao-gomes/conectaai-landing-page</code></li>
    <li>Instale as dependências utilizando o comando <code>npm install</code></li>
    <li>Execute o código utilizando o comando <code>npm run dev</code></li>
</ol>

<h2>Ferramentas</h2>
Para a criação desta página, resolvi utilizar uma stack já bastante consolidada no mercado atualmente, sendo esta ReactJS com Typescript, NextJS (em sua versão mais atual, utilizando server components) e TailwindCSS para estilização.

Typescript e React já são ferramentas comuns no mercado, com suas vantagens amplamente conhecidas.

NextJS na versão 13 permite um carregamento mais eficiente da página com o uso de SSR de maneira simples, e abre possibilidades para possíveis expansões da página para inclusão de novos recursos como integração com APIs, novas páginas usando o mesmo layout ou necessidade de paginação.

TailwindCSS é um framework que permite escrever CSS diretamente no HTML de maneira ágil e prática, com total customização quando necessário.

Além destes, foram utilizadas as bibliotecas ESLint e prettier, sendo a primeira uma ferramenta de checagem de padrão do código durante compilação, e a segunda uma ferramenta complementar que garante um código mais legível, estabelecendo regras de tabulação, organização, entre outros.


<h2>Pontos a levantar:</h2>

Fonte Artigo - No design original foi utilizada uma fonte paga uchamada Artigo, que neste código foi substituida por fonte serif semelhante (PT_serif).
