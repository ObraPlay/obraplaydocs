"use strict";(self.webpackChunkobraplaydocs=self.webpackChunkobraplaydocs||[]).push([[3573],{3905:function(e,a,n){n.d(a,{Zo:function(){return s},kt:function(){return m}});var t=n(7294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),d=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},s=function(e){var a=d(e.components);return t.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,k=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?t.createElement(k,r(r({ref:a},s),{},{components:n})):t.createElement(k,r({ref:a},s))}));function m(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,r[1]=p;for(var d=2;d<i;d++)r[d]=n[d];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7162:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return s},default:function(){return c}});var t=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],p={},l="Pipelines",d={unversionedId:"Deploy/pipelines",id:"Deploy/pipelines",title:"Pipelines",description:"Status: Finalizado",source:"@site/docs/Deploy/pipelines.md",sourceDirName:"Deploy",slug:"/Deploy/pipelines",permalink:"/docs/Deploy/pipelines",editUrl:"https://github.com/ObraPlay/obraplaydocs/docs/Deploy/pipelines.md",tags:[],version:"current",lastUpdatedBy:"Elielson77",lastUpdatedAt:1652813201,formattedLastUpdatedAt:"5/17/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Conceitos Gerais",permalink:"/docs/Deploy/general-concepts"},next:{title:"Typescript",permalink:"/docs/Frontend/typescript"}},s=[{value:"Pipelines de frontend",id:"pipelines-de-frontend",children:[{value:"obraplaydevelop",id:"obraplaydevelop",children:[],level:3},{value:"obraplaystaging",id:"obraplaystaging",children:[],level:3},{value:"obraplayproduction",id:"obraplayproduction",children:[],level:3}],level:2},{value:"Pipeline de backend",id:"pipeline-de-backend",children:[{value:"obraplayapi",id:"obraplayapi",children:[],level:3}],level:2}],u={toc:s};function c(e){var a=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pipelines"},"Pipelines"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Status: Finalizado")),(0,i.kt)("p",null,"Toda pipeline possui 3 etapas, s\xe3o elas: Source, Build e Deploy."),(0,i.kt)("p",null,"Na etapa ",(0,i.kt)("inlineCode",{parentName:"p"},"Source")," \xe9 feito o download do c\xf3digo fonte de acordo com a branch que foi atualizada, seja ela, a branch ",(0,i.kt)("inlineCode",{parentName:"p"},"develop")," (para ambiente dev), ",(0,i.kt)("inlineCode",{parentName:"p"},"staging")," (para ambiente staging) ou ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," (para ambiente de produ\xe7\xe3o)."),(0,i.kt)("p",null,"Na etapa ",(0,i.kt)("inlineCode",{parentName:"p"},"Build")," \xe9 feito o build do projeto atrav\xe9s do ",(0,i.kt)("inlineCode",{parentName:"p"},"CodeBuild"),". A build do projeto \xe9 detalhada no seguinte arquivo ",(0,i.kt)("inlineCode",{parentName:"p"},"buildspec.yml"),".\nNormalmente na etapa de build s\xe3o realizadas as seguintes tarefas."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Instala\xe7\xe3o das depend\xeancias"),(0,i.kt)("li",{parentName:"ol"},"Executar os linters do projeto"),(0,i.kt)("li",{parentName:"ol"},"Rodar os testes do projeto"),(0,i.kt)("li",{parentName:"ol"},"Build do c\xf3digo fonte (caso seja realizado)"),(0,i.kt)("li",{parentName:"ol"},"Gera-se os artefatos para o Amazon S3 (com todo os arquivos necess\xe1rios para rodar o software)")),(0,i.kt)("p",null,"Na etapa ",(0,i.kt)("inlineCode",{parentName:"p"},"Deploy")," \xe9 feito o deploy da aplica\xe7\xe3o no ",(0,i.kt)("inlineCode",{parentName:"p"},"AWS ElasticBeanstalk")," no ambiente correspondente."),(0,i.kt)("h2",{id:"pipelines-de-frontend"},"Pipelines de frontend"),(0,i.kt)("h3",{id:"obraplaydevelop"},"obraplaydevelop"),(0,i.kt)("p",null,"Essa pipeline \xe9 executada toda vez que h\xe1 um novo commit na branch ",(0,i.kt)("inlineCode",{parentName:"p"},"develop"),". Normalmente, \xe9 disparada ao se aceitar um Pull Request (PR)."),(0,i.kt)("h3",{id:"obraplaystaging"},"obraplaystaging"),(0,i.kt)("p",null,"Essa pipeline \xe9 executada toda vez que h\xe1 um novo commit na branch ",(0,i.kt)("inlineCode",{parentName:"p"},"staging"),". Quando a branch ",(0,i.kt)("inlineCode",{parentName:"p"},"develop")," tiver que ser promovida para ",(0,i.kt)("inlineCode",{parentName:"p"},"staging"),", deve-se fazer ",(0,i.kt)("inlineCode",{parentName:"p"},"checkout")," para branch ",(0,i.kt)("inlineCode",{parentName:"p"},"staging")," e rebase da ",(0,i.kt)("inlineCode",{parentName:"p"},"develop"),". Com a staging no mesmo commit da ",(0,i.kt)("inlineCode",{parentName:"p"},"develop"),", realiza-se o ",(0,i.kt)("inlineCode",{parentName:"p"},"git push"),"."),(0,i.kt)("p",null,"Com esse ",(0,i.kt)("inlineCode",{parentName:"p"},"git push"),", a pipeline ",(0,i.kt)("inlineCode",{parentName:"p"},"obraplaystaging")," \xe9 acionada e realiza o deploy no ambiente ",(0,i.kt)("inlineCode",{parentName:"p"},"staging")," automaticamente."),(0,i.kt)("h3",{id:"obraplayproduction"},"obraplayproduction"),(0,i.kt)("p",null,"Essa pipeline \xe9 executada toda vez que h\xe1 um novo commit na branch ",(0,i.kt)("inlineCode",{parentName:"p"},"main"),". Quando a branch ",(0,i.kt)("inlineCode",{parentName:"p"},"staging")," tiver quee ser promovida para ",(0,i.kt)("inlineCode",{parentName:"p"},"main"),", deve-se fazer ",(0,i.kt)("inlineCode",{parentName:"p"},"checkout")," para branch ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," e rebase da ",(0,i.kt)("inlineCode",{parentName:"p"},"staging")," (que j\xe1 passou por deploy). Realiza-se o ",(0,i.kt)("inlineCode",{parentName:"p"},"git push")," da ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," que estar\xe1 no mesmo commit da ",(0,i.kt)("inlineCode",{parentName:"p"},"staging"),"."),(0,i.kt)("p",null,"Com esse ",(0,i.kt)("inlineCode",{parentName:"p"},"git push"),", a pipeline ",(0,i.kt)("inlineCode",{parentName:"p"},"obraplayproduction")," \xe9 acionada e realiza o deploy no ambiente ",(0,i.kt)("inlineCode",{parentName:"p"},"production")," automaticamente."),(0,i.kt)("p",null,"ATEN\xc7\xc3O: Ao realizar deploy no ambiente de produ\xe7\xe3o \xe9 necess\xe1rio criar uma nova TAG no GIT a fim de acompanhar as vers\xf5es que est\xe3o em produ\xe7\xe3o para os usu\xe1rios finais. Fazendo push da TAG para o ",(0,i.kt)("inlineCode",{parentName:"p"},"CodeCommit"),"."),(0,i.kt)("h2",{id:"pipeline-de-backend"},"Pipeline de backend"),(0,i.kt)("h3",{id:"obraplayapi"},"obraplayapi"),(0,i.kt)("p",null,"Esse pipeline realiza o deploy do backend que \xe9 muito mais simplificado pois n\xe3o necessita de compila\xe7\xe3o/transpila\xe7\xe3o de c\xf3digo visto que o python \xe9 uma linguagem interpretada."),(0,i.kt)("p",null,"Essa pipeline \xe9 executada toda vez que h\xe1 um novo commit na branch ",(0,i.kt)("inlineCode",{parentName:"p"},"develop")," (via PR)."),(0,i.kt)("p",null,"Para promo\xe7\xe3o dos ambientes, deve-se usar a aba ",(0,i.kt)("inlineCode",{parentName:"p"},"application versions")," no ",(0,i.kt)("inlineCode",{parentName:"p"},"AWS ElasticBeanstalk")," diferentemente do front-end, visto que h\xe1 build separadas para cada ambiente."))}c.isMDXComponent=!0}}]);