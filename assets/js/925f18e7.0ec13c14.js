"use strict";(self.webpackChunkobraplaydocs=self.webpackChunkobraplaydocs||[]).push([[6235],{3905:function(e,a,o){o.d(a,{Zo:function(){return p},kt:function(){return m}});var n=o(7294);function t(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function r(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?r(Object(o),!0).forEach((function(a){t(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function i(e,a){if(null==e)return{};var o,n,t=function(e,a){if(null==e)return{};var o,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],a.indexOf(o)>=0||(t[o]=e[o]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var d=n.createContext({}),s=function(e){var a=n.useContext(d),o=a;return e&&(o="function"==typeof e?e(a):l(l({},a),e)),o},p=function(e){var a=s(e.components);return n.createElement(d.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var o=e.components,t=e.mdxType,r=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(o),m=t,b=c["".concat(d,".").concat(m)]||c[m]||u[m]||r;return o?n.createElement(b,l(l({ref:a},p),{},{components:o})):n.createElement(b,l({ref:a},p))}));function m(e,a){var o=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=o.length,l=new Array(r);l[0]=c;var i={};for(var d in a)hasOwnProperty.call(a,d)&&(i[d]=a[d]);i.originalType=e,i.mdxType="string"==typeof e?e:t,l[1]=i;for(var s=2;s<r;s++)l[s]=o[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},9257:function(e,a,o){o.r(a),o.d(a,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return b}});var n=o(7462),t=o(3366),r=(o(7294),o(3905)),l=o(7306),i=o(203),d=["components"],s={title:"Deploy Frontend"},p=void 0,u={unversionedId:"Deploy/deploy-frontend",id:"Deploy/deploy-frontend",title:"Deploy Frontend",description:"Statuswhitecheckmark:",source:"@site/docs/Deploy/deploy-frontend.mdx",sourceDirName:"Deploy",slug:"/Deploy/deploy-frontend",permalink:"/docs/Deploy/deploy-frontend",editUrl:"https://github.com/ObraPlay/obraplaydocs/docs/Deploy/deploy-frontend.mdx",tags:[],version:"current",lastUpdatedBy:"Elielson77",lastUpdatedAt:1652982483,formattedLastUpdatedAt:"5/19/2022",frontMatter:{title:"Deploy Frontend"},sidebar:"tutorialSidebar",previous:{title:"Deploy Backend",permalink:"/docs/Deploy/deploy-backend"},next:{title:"Conceitos Gerais",permalink:"/docs/Deploy/general-concepts"}},c=[],m={toc:c};function b(e){var a=e.components,o=(0,t.Z)(e,d);return(0,r.kt)("wrapper",(0,n.Z)({},m,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Status: Finalizado")," \u2705"),(0,r.kt)("p",null,"O processo de deploy \xe9 feito quando temos que atualizar a aplica\xe7\xe3o no servidor com as mudan\xe7as feitas pelos desenvolvedores.\nEsse processo \xe9 bem parecido tanto para o frontend quanto para o backend, por\xe9m existem algumas diferen\xe7as sutis. Para os dois casos\nser\xe1 necess\xe1rio ter o ",(0,r.kt)("a",{parentName:"p",href:"/docs/Onboarding/dev-env#elastic-beanstalk-cli-ed-cli"},"Elastic Beanstalk CLI")," instalado."),(0,r.kt)("p",null,"Siga os passos abaixo para fazer deploy do frontend:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Acesse o CMD indo na barra de pesquisa do Windows e digitando ",(0,r.kt)("inlineCode",{parentName:"li"},"Prompt de comando")),(0,r.kt)("li",{parentName:"ol"},"Pelo CMD, acesse a pasta do projeto utilizando o comando ",(0,r.kt)("inlineCode",{parentName:"li"},"cd")),(0,r.kt)("li",{parentName:"ol"},"Rode o comando ",(0,r.kt)("inlineCode",{parentName:"li"},"yarn build")),(0,r.kt)("li",{parentName:"ol"},"Rode o comando ",(0,r.kt)("inlineCode",{parentName:"li"},"eb"),", com esse comando ir\xe1 executar uma aplica\xe7\xe3o CLI do Elastic Beanstalk em uma janela DOS"),(0,r.kt)("li",{parentName:"ol"},"Nessa nova janela, rode o comando ",(0,r.kt)("inlineCode",{parentName:"li"},"eb init")),(0,r.kt)("li",{parentName:"ol"},"Selecione a regi\xe3o que o servido da aplica\xe7\xe3o est\xe1 rodando (geralmente ser\xe1 a de S\xe3o Paulo de c\xf3digo 11)"),(0,r.kt)("li",{parentName:"ol"},"Depois ir\xe1 aparecer uma lista de todos os ambientes, selecione qual que deseja fazer o deploy"),(0,r.kt)("li",{parentName:"ol"},"Caso pergunte se deseja usar o CodeCommit para efetuar o deploy, coloque que n\xe3o"),(0,r.kt)("li",{parentName:"ol"},"Caso pergunte se deseja usar SSH, coloque que n\xe3o"),(0,r.kt)("li",{parentName:"ol"},"Insira as credenciais")),(0,r.kt)(l.ZP,{mdxType:"DayToDay"}),(0,r.kt)(i.ZP,{mdxType:"CommandList"}))}b.isMDXComponent=!0},7306:function(e,a,o){o.d(a,{ZP:function(){return d}});var n=o(7462),t=o(3366),r=(o(7294),o(3905)),l=["components"],i={toc:[{value:"Rotina de deploys",id:"rotina-de-deploys",children:[{value:"Ambiente dev",id:"ambiente-dev",children:[],level:3},{value:"Ambiente staging",id:"ambiente-staging",children:[],level:3},{value:"Produ\xe7\xe3o",id:"produ\xe7\xe3o",children:[],level:3}],level:2}]};function d(e){var a=e.components,o=(0,t.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},i,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"rotina-de-deploys"},"Rotina de deploys"),(0,r.kt)("p",null,"Temos a divis\xe3o do c\xf3digo entre o front end e o back end. Cada um deles tem o seu pr\xf3prio ambiente de ",(0,r.kt)("inlineCode",{parentName:"p"},"dev"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"staging")," e ",(0,r.kt)("inlineCode",{parentName:"p"},"produ\xe7\xe3o"),".\nTanto para os ambientes de Front quando Back, s\xe3o introduzidas algumas regras de deploys.\nUsamos um conceito chamado de ",(0,r.kt)("inlineCode",{parentName:"p"},"promo\xe7\xe3o"),". Cada ambiente ter\xe1 uma frequ\xeancia de atualiza\xe7\xe3o, ou seja, ser\xe1 promovido para o pr\xf3ximo est\xe1gio. Nada mais \xe9 que a replica\xe7\xe3o do c\xf3digo\nque est\xe1 nesse no ambiente A para o B."),(0,r.kt)("p",null,"Respons\xe1veis pelos deploys:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Eduardo: Front end de dev"),(0,r.kt)("li",{parentName:"ul"},"Matheus: Front end de staging e produ\xe7\xe3o e tamb\xe9m o Back end de dev, staging e produ\xe7\xe3o")),(0,r.kt)("h3",{id:"ambiente-dev"},"Ambiente dev"),(0,r.kt)("p",null,"A atualiza\xe7\xe3o do ambiente dev (n\xe3o se confunda com o ambiente local) ser\xe1 feita diariamente pelo menos uma vez ao final do espediente.\nSer\xe1 pego o ultimo commit da branch ",(0,r.kt)("inlineCode",{parentName:"p"},"develop")," e ser\xe1 dado deploy no ambiente de dev."),(0,r.kt)("h3",{id:"ambiente-staging"},"Ambiente staging"),(0,r.kt)("p",null,"O deploy de staging ocorrer\xe1 todo final de ",(0,r.kt)("inlineCode",{parentName:"p"},"ter\xe7a-feira")," a fim de que o pessoal de todas as \xe1reas possam testar e julgar se o que est\xe1 sendo produzido est\xe1 no caminho certo.\nAqui \xe9 um est\xe1gio antes de ir para produ\xe7\xe3o. O ideal \xe9 que nesse ambiente as features estejam o mais perto do conceito de pronto. Caso esteja\nfaltando algo, pontue o que est\xe1 pronto e o que est\xe1 faltando para a ci\xeancia de todos."),(0,r.kt)("h3",{id:"produ\xe7\xe3o"},"Produ\xe7\xe3o"),(0,r.kt)("p",null,"Todo final de Sprint o ambiente de produ\xe7\xe3o \xe9 atualizado com os resultados daquela itera\xe7\xe3o."))}d.isMDXComponent=!0},203:function(e,a,o){o.d(a,{ZP:function(){return d}});var n=o(7462),t=o(3366),r=(o(7294),o(3905)),l=["components"],i={toc:[{value:"Comandos importantes",id:"comandos-importantes",children:[{value:"eb use",id:"eb-use",children:[],level:3},{value:"eb ssh",id:"eb-ssh",children:[],level:3},{value:"eb list",id:"eb-list",children:[],level:3},{value:"eb health",id:"eb-health",children:[],level:3},{value:"eb deploy",id:"eb-deploy",children:[],level:3},{value:"eb init",id:"eb-init",children:[],level:3},{value:"eb logs",id:"eb-logs",children:[],level:3}],level:2}]};function d(e){var a=e.components,o=(0,t.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},i,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"comandos-importantes"},"Comandos importantes"),(0,r.kt)("p",null,"Tem alguns comandos que s\xe3o usado com frequ\xeancia no EB CLI. Na ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb3-cmd-commands.html"},"documenta\xe7\xe3o"),"\nda AWS, voc\xea pode ver detalhadamente todos os comandos.\nAbaixo est\xe3o listados os comandos mais usados e uma breve descri\xe7\xe3o sobre sua funcionalidade."),(0,r.kt)("h3",{id:"eb-use"},"eb use"),(0,r.kt)("p",null,"Usado para apontar qual inst\xe2ncia de servidor que os comandos est\xe3o se referindo."),(0,r.kt)("p",null,"Sintaxe:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"eb use environment-name\n")),(0,r.kt)("h3",{id:"eb-ssh"},"eb ssh"),(0,r.kt)("p",null,"Usado para acessar o terminal de um ambiente."),(0,r.kt)("p",null,"Sintaxe:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"eb ssh environment-name\n")),(0,r.kt)("h3",{id:"eb-list"},"eb list"),(0,r.kt)("p",null,"Lista os ambientes da aplica\xe7\xe3o. Caso use a flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--all")," ser\xe1 listado todos os ambientes de todas as aplica\xe7\xf5es."),(0,r.kt)("p",null,"Sintaxe:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"eb list\n")),(0,r.kt)("h3",{id:"eb-health"},"eb health"),(0,r.kt)("p",null,"Mostra a sa\xfade do ambiente. Pode-se utilizar a flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--refresh")," para atualizar as informa\xe7\xf5es a cada periodo de tempo."),(0,r.kt)("p",null,"Sintaxe:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"eb health environment-name\n")),(0,r.kt)("h3",{id:"eb-deploy"},"eb deploy"),(0,r.kt)("p",null,"Utilizado para efetuar o processo de deploy."),(0,r.kt)("p",null,"Sintaxe:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"eb deploy environment-name\n")),(0,r.kt)("h3",{id:"eb-init"},"eb init"),(0,r.kt)("p",null,"Inicia uma nova inst\xe2ncia de servidor."),(0,r.kt)("h3",{id:"eb-logs"},"eb logs"),(0,r.kt)("p",null,"Mostra os ultimos logs do ambiente."),(0,r.kt)("p",null,"Sintaxe:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"eb logs environment-name\n")))}d.isMDXComponent=!0}}]);