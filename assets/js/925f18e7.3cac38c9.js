"use strict";(self.webpackChunkobraplaydocs=self.webpackChunkobraplaydocs||[]).push([[6235],{3905:function(e,a,n){n.d(a,{Zo:function(){return p},kt:function(){return m}});var t=n(7294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),d=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},p=function(e){var a=d(e.components);return t.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,b=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?t.createElement(b,l(l({ref:a},p),{},{components:n})):t.createElement(b,l({ref:a},p))}));function m(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9257:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var t=n(7462),o=n(3366),r=(n(7294),n(3905)),l=n(203),i=["components"],s={title:"Deploy Frontend"},d=void 0,p={unversionedId:"Deploy/deploy-frontend",id:"Deploy/deploy-frontend",title:"Deploy Frontend",description:"O processo de deploy \xe9 feito quando temos que atualizar a aplica\xe7\xe3o no servidor com as mudan\xe7as feitas pelos desenvolvedores.",source:"@site/docs/Deploy/deploy-frontend.mdx",sourceDirName:"Deploy",slug:"/Deploy/deploy-frontend",permalink:"/docs/Deploy/deploy-frontend",editUrl:"https://github.com/ObraPlay/obraplaydocs/docs/Deploy/deploy-frontend.mdx",tags:[],version:"current",lastUpdatedBy:"Bruno Miglioretto",lastUpdatedAt:1647548631,formattedLastUpdatedAt:"3/17/2022",frontMatter:{title:"Deploy Frontend"},sidebar:"tutorialSidebar",previous:{title:"Deploy Backend",permalink:"/docs/Deploy/deploy-backend"},next:{title:"Conceitos Gerais",permalink:"/docs/Deploy/general-concepts"}},c=[],u={toc:c};function m(e){var a=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"O processo de deploy \xe9 feito quando temos que atualizar a aplica\xe7\xe3o no servidor com as mudan\xe7as feitas pelos desenvolvedores.\nEsse processo \xe9 bem parecido tanto para o frontend quanto para o backend, por\xe9m existem algumas diferen\xe7as sutis. Para os dois casos\nser\xe1 necess\xe1rio ter o ",(0,r.kt)("a",{parentName:"p",href:"/docs/Onboarding/dev-env#elastic-beanstalk-cli-ed-cli"},"Elastic Beanstalk CLI")," instalado."),(0,r.kt)("p",null,"Siga os passos abaixo para fazer deploy do frontend:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Acesse o CMD indo na barra de pesquisa do Windows e digitando ",(0,r.kt)("inlineCode",{parentName:"li"},"Prompt de comando")),(0,r.kt)("li",{parentName:"ol"},"Pelo CMD, acesse a pasta do projeto utilizando o comando ",(0,r.kt)("inlineCode",{parentName:"li"},"cd")),(0,r.kt)("li",{parentName:"ol"},"Rode o comando ",(0,r.kt)("inlineCode",{parentName:"li"},"yarn build")),(0,r.kt)("li",{parentName:"ol"},"Rode o comando ",(0,r.kt)("inlineCode",{parentName:"li"},"eb"),", com esse comando ir\xe1 executar uma aplica\xe7\xe3o CLI do Elastic Beanstalk em uma janela DOS"),(0,r.kt)("li",{parentName:"ol"},"Nessa nova janela, rode o comando ",(0,r.kt)("inlineCode",{parentName:"li"},"eb init")),(0,r.kt)("li",{parentName:"ol"},"Selecione a regi\xe3o que o servido da aplica\xe7\xe3o est\xe1 rodando (geralmente ser\xe1 a de S\xe3o Paulo de c\xf3digo 11)"),(0,r.kt)("li",{parentName:"ol"},"Depois ir\xe1 aparecer uma lista de todos os ambientes, selecione qual que deseja fazer o deploy"),(0,r.kt)("li",{parentName:"ol"},"Caso pergunte se deseja usar o CodeCommit para efetuar o deploy, coloque que n\xe3o"),(0,r.kt)("li",{parentName:"ol"},"Caso pergunte se deseja usar SSH, coloque que n\xe3o"),(0,r.kt)("li",{parentName:"ol"},"Insira as credenciais")),(0,r.kt)(l.ZP,{mdxType:"CommandList"}))}m.isMDXComponent=!0},203:function(e,a,n){n.d(a,{ZP:function(){return s}});var t=n(7462),o=n(3366),r=(n(7294),n(3905)),l=["components"],i={toc:[{value:"Comandos importantes",id:"comandos-importantes",children:[{value:"eb use",id:"eb-use",children:[],level:3},{value:"eb ssh",id:"eb-ssh",children:[],level:3},{value:"eb list",id:"eb-list",children:[],level:3},{value:"eb health",id:"eb-health",children:[],level:3},{value:"eb deploy",id:"eb-deploy",children:[],level:3},{value:"eb init",id:"eb-init",children:[],level:3},{value:"eb logs",id:"eb-logs",children:[],level:3}],level:2}]};function s(e){var a=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,t.Z)({},i,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"comandos-importantes"},"Comandos importantes"),(0,r.kt)("p",null,"Tem alguns comandos que s\xe3o usado com frequ\xeancia no EB CLI. Na ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb3-cmd-commands.html"},"documenta\xe7\xe3o"),"\nda AWS, voc\xea pode ver detalhadamente todos os comandos.\nAbaixo est\xe3o listados os comandos mais usados e uma breve descri\xe7\xe3o sobre sua funcionalidade."),(0,r.kt)("h3",{id:"eb-use"},"eb use"),(0,r.kt)("p",null,"Usado para apontar qual inst\xe2ncia de servidor que os comandos est\xe3o se referindo."),(0,r.kt)("p",null,"Sintaxe:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"eb use environment-name\n")),(0,r.kt)("h3",{id:"eb-ssh"},"eb ssh"),(0,r.kt)("p",null,"Usado para acessar o terminal de um ambiente."),(0,r.kt)("p",null,"Sintaxe:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"eb ssh environment-name\n")),(0,r.kt)("h3",{id:"eb-list"},"eb list"),(0,r.kt)("p",null,"Lista os ambientes da aplica\xe7\xe3o. Caso use a flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--all")," ser\xe1 listado todos os ambientes de todas as aplica\xe7\xf5es."),(0,r.kt)("p",null,"Sintaxe:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"eb list\n")),(0,r.kt)("h3",{id:"eb-health"},"eb health"),(0,r.kt)("p",null,"Mostra a sa\xfade do ambiente. Pode-se utilizar a flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--refresh")," para atualizar as informa\xe7\xf5es a cada periodo de tempo."),(0,r.kt)("p",null,"Sintaxe:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"eb health environment-name\n")),(0,r.kt)("h3",{id:"eb-deploy"},"eb deploy"),(0,r.kt)("p",null,"Utilizado para efetuar o processo de deploy."),(0,r.kt)("p",null,"Sintaxe:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"eb deploy environment-name\n")),(0,r.kt)("h3",{id:"eb-init"},"eb init"),(0,r.kt)("p",null,"Inicia uma nova inst\xe2ncia de servidor."),(0,r.kt)("h3",{id:"eb-logs"},"eb logs"),(0,r.kt)("p",null,"Mostra os ultimos logs do ambiente."),(0,r.kt)("p",null,"Sintaxe:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"eb logs environment-name\n")))}s.isMDXComponent=!0}}]);