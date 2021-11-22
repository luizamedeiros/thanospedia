# thanospedia

## Resumo da aplicação

Essa aplicação é um Single Page Application que lista os quadrinhos recebidos através da <a href="https://developer.marvel.com/"> API da Marvel. </a> É possível, também, pesquisar por quadrinhos através de seus títulos. O resultado da pesquisa é mostrado na tela de forma dinâmica, enquanto o usuário digita. Para ver mais informações sobre o quadrinho desejado, basta selecioná-lo na lista, e aparecerá uma modal contendo as informações do quadrinho.


## Como usar?
<ol>
<li> Baixe e descompacte o projeto, ou faça um <b> git clone </b> no repositório. </li>
<li> Faça um <b> npm install </b> para baixar as dependências necessárias. </li>
<li> Faça <b> npm start </b> para abrir o projeto em modo de desenvolvimento, ou <b> npm build </b> para abrir o projeto em modo de produção. </li>
</ol>

## Tecnologias

A aplicação foi feita usando o <a href="https://reactjs.org/"> React</a> v.17.0.2.
<ul>
<li> Para facilitar a implementação e sua manutenção, ela foi feita de forma componentizada.</li>
<li> O desenvolvimento de modais foi feito utilizando o <a href="https://sweetalert2.github.io/"> sweetalert2 </a>, por ser customizável, bonito, e por questões de acessibilidade.</li>
<li> Para deixar a aplicação responsiva, foi utilizado <a href="https://www.w3schools.com/css/css_rwd_mediaqueries.asp"> media query </a> para configurar os elementos em telas menores que 768px. Sendo assim, dispositivos como celulares e tablets têm uma versão mais amigável para as suas telas.</li>
</ul>

## Considerações

Algumas considerações referentes à acessibilidade, responsividade, e possíveis melhorias:

<ul>
<li> O label foi desenvolvido para a barra de pesquisa, mas teve o seu estilo configurado para não ser exibido na tela, por decisões estilísticas. Ainda, ter o label configurado é uma boa prática de acessibilidade, para usuários que dependem de tecnologias de leitores de tela. </li>
<li> Embora o sweetalert2 tenha modais responsivos, para telas menores, modais podem ser desconfortáveis em telas menores. Por isso, seria interessante a implementação de <a href="https://vwo.com/ab-testing/"> testes A/B </a> para validar qual estilo de tela usuários preferem. Uma boa opção de implementação para isso é o <a href="https://www.npmjs.com/package/@marvelapp/react-ab-test"> React A/B test, da Marvel App</a>.</li>
<li> Por enquanto, só é possível pesquisar por quadrinhos através de seus títulos. Seria interessante poder pesquisar por personagem e criador também. </li>
</ul>
