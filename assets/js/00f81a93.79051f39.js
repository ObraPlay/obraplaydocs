"use strict";(self.webpackChunkobraplaydocs=self.webpackChunkobraplaydocs||[]).push([[343],{3905:function(e,t,i){i.d(t,{Zo:function(){return d},kt:function(){return p}});var o=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var u=o.createContext({}),c=function(e){var t=o.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},d=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(i),p=n,R=m["".concat(u,".").concat(p)]||m[p]||l[p]||r;return i?o.createElement(R,a(a({ref:t},d),{},{components:i})):o.createElement(R,a({ref:t},d))}));function p(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,a=new Array(r);a[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<r;c++)a[c]=i[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,i)}m.displayName="MDXCreateElement"},6178:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var o=i(7462),n=i(3366),r=(i(7294),i(3905)),a=["components"],s={},u="Husky",c={unversionedId:"Frontend/Ferramentas/husky",id:"Frontend/Ferramentas/husky",title:"Husky",description:"Statuswhitecheckmark:",source:"@site/docs/Frontend/Ferramentas/husky.md",sourceDirName:"Frontend/Ferramentas",slug:"/Frontend/Ferramentas/husky",permalink:"/docs/Frontend/Ferramentas/husky",editUrl:"https://github.com/ObraPlay/obraplaydocs/docs/Frontend/Ferramentas/husky.md",tags:[],version:"current",lastUpdatedBy:"Elielson77",lastUpdatedAt:1652982483,formattedLastUpdatedAt:"5/19/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ESLint",permalink:"/docs/Frontend/Ferramentas/eslint"},next:{title:"Prettier",permalink:"/docs/Frontend/Ferramentas/prettier"}},d=[{value:"Documenta\xe7\xe3o",id:"documenta\xe7\xe3o",children:[],level:2},{value:"Instala\xe7\xe3o do Husky",id:"instala\xe7\xe3o-do-husky",children:[],level:2},{value:"Configurando",id:"configurando",children:[],level:2},{value:"Git Hooks",id:"git-hooks",children:[],level:2}],l={toc:d};function m(e){var t=e.components,s=(0,n.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"husky"},"Husky"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Status: Finalizado")," \u2705 "),(0,r.kt)("p",null,"O Husky \xe9 uma ferramenta que possibilita configurar hooks para executar certas coisas que queremos. Git Hooks s\xe3o scripts que podem ser executados antes ou depois de certo comando importante do git, como Commit ou Push."),(0,r.kt)("h2",{id:"documenta\xe7\xe3o"},"Documenta\xe7\xe3o"),(0,r.kt)("p",null,"Clique aqui para acessar a ",(0,r.kt)("a",{parentName:"p",href:"https://typicode.github.io/husky/#/"},"documenta\xe7\xe3o do Husky"),"."),(0,r.kt)("h2",{id:"instala\xe7\xe3o-do-husky"},"Instala\xe7\xe3o do Husky"),(0,r.kt)("p",null,"Para instalar o Husky em seu projeto como depend\xeancia de desenvolvimento, digite o comando no prompt:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add husky -D\n")),(0,r.kt)("p",null,"Ou utilizando o npm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install husky -D\n")),(0,r.kt)("h2",{id:"configurando"},"Configurando"),(0,r.kt)("p",null,"Para instalar o Husky no seu projeto, digite o comando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn husky install\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"url",src:i(6549).Z,title:"url",width:"204",height:"36"})),(0,r.kt)("p",null,"Repare que a pasta ",(0,r.kt)("inlineCode",{parentName:"p"},"husky")," foi criada na estrutura de pastas do seu projeto."),(0,r.kt)("p",null,"Agora, podemos configurar um Git Hook com algum script que a gente quer que execute. Como exemplo, eu vou executar uma mensagem no terminal antes de um commit ser realizado."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," npx husky add .husky/pre-commit \"echo 'Esse script vai ser executado antes do commit'\"\n")),(0,r.kt)("p",null,"Vamos executar esse comando no terminal."),(0,r.kt)("p",null,"Agora repare que dentro da pasta ",(0,r.kt)("inlineCode",{parentName:"p"},"husky")," foi criado a pasta de configura\xe7\xf5es de scripts que ser\xe3o exibidos no Git Hook pre-commit."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"url",src:i(7232).Z,title:"url",width:"203",height:"71"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"url",src:i(7797).Z,title:"url",width:"567",height:"138"})),(0,r.kt)("p",null,"Agora para ver se est\xe1 funcionando, vamos dar um commit no nosso projeto."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"url",src:i(2566).Z,title:"url",width:"715",height:"132"})),(0,r.kt)("p",null,"Repare que logo antes de realizar o commit, a mensagem que configuramos para ser exibida aparece. J\xe1 sabemos que est\xe1 funcionando, ent\xe3o podemos configurar de acordo com processos que queremos que sejam feitos automaticamente antes de alguns processos."),(0,r.kt)("h2",{id:"git-hooks"},"Git Hooks"),(0,r.kt)("p",null,"No exemplo anterior utilizamos o Hook ",(0,r.kt)("inlineCode",{parentName:"p"},"pre-commit"),", que configura algo para antes de ser executado um commit. Por\xe9m existem v\xe1rios outros hooks oficiais do git, d\xea uma olhada clicando ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks"},"aqui.")))}m.isMDXComponent=!0},2566:function(e,t,i){t.Z=i.p+"assets/images/husky-commit-0e58aedcb9a778bfe2153d53ae624e00.png"},6549:function(e,t){t.Z="data:image/png;base64,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"},7232:function(e,t){t.Z="data:image/png;base64,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"},7797:function(e,t){t.Z="data:image/png;base64,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"}}]);