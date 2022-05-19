"use strict";(self.webpackChunkobraplaydocs=self.webpackChunkobraplaydocs||[]).push([[4079],{3905:function(e,o,t){t.d(o,{Zo:function(){return d},kt:function(){return u}});var a=t(7294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function n(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?n(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,a,r=function(e,o){if(null==e)return{};var t,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var o=a.useContext(p),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},d=function(e){var o=s(e.components);return a.createElement(p.Provider,{value:o},e.children)},c={inlineCode:"code",wrapper:function(e){var o=e.children;return a.createElement(a.Fragment,{},o)}},m=a.forwardRef((function(e,o){var t=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(t),u=r,f=m["".concat(p,".").concat(u)]||m[u]||c[u]||n;return t?a.createElement(f,i(i({ref:o},d),{},{components:t})):a.createElement(f,i({ref:o},d))}));function u(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var n=t.length,i=new Array(n);i[0]=m;var l={};for(var p in o)hasOwnProperty.call(o,p)&&(l[p]=o[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<n;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6587:function(e,o,t){t.r(o),t.d(o,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return m}});var a=t(7462),r=t(3366),n=(t(7294),t(3905)),i=["components"],l={},p="Gitflow Workflow",s={unversionedId:"onboarding/gitflow-workflow",id:"onboarding/gitflow-workflow",title:"Gitflow Workflow",description:"Statuswhitecheckmark:",source:"@site/docs/onboarding/gitflow-workflow.md",sourceDirName:"onboarding",slug:"/onboarding/gitflow-workflow",permalink:"/docs/onboarding/gitflow-workflow",editUrl:"https://github.com/ObraPlay/obraplaydocs/docs/onboarding/gitflow-workflow.md",tags:[],version:"current",lastUpdatedBy:"Elielson77",lastUpdatedAt:1652982483,formattedLastUpdatedAt:"5/19/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ambiente de desenvolvimento",permalink:"/docs/onboarding/dev-env"},next:{title:"Materias de programa\xe7\xe3o",permalink:"/docs/onboarding/materiais"}},d=[{value:"Branch <code>develop</code>",id:"branch-develop",children:[],level:2},{value:"Merge de todo o trabalho dos desenvolvedores",id:"merge-de-todo-o-trabalho-dos-desenvolvedores",children:[],level:2}],c={toc:d};function m(e){var o=e.components,t=(0,r.Z)(e,i);return(0,n.kt)("wrapper",(0,a.Z)({},c,t,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"gitflow-workflow"},"Gitflow Workflow"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Status: Finalizado")," \u2705"),(0,n.kt)("h2",{id:"branch-develop"},"Branch ",(0,n.kt)("inlineCode",{parentName:"h2"},"develop")),(0,n.kt)("p",null,"No projeto da aplica\xe7\xe3o, o branch em que o desenvolvimento ser\xe1 feito \xe9 a branch ",(0,n.kt)("strong",{parentName:"p"},"develop"),"."),(0,n.kt)("p",null,"Quando voc\xea quiser modificar o c\xf3digo da aplica\xe7\xe3o, voc\xea precisa :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Criar uma branch ",(0,n.kt)("strong",{parentName:"p"},"nova")," (com um nome expl\xedcito, se poss\xedvel, relacionado com as mudan\xe7as que ser\xe3o feitas ali).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Uma vez feitas as mudan\xe7as neste novo branch, o ",(0,n.kt)("inlineCode",{parentName:"p"},"commit")," deve ser formado com um t\xedtulo expl\xedcito e uma breve descri\xe7\xe3o do trabalho realizado na branch.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Depois \xe9 feito um pedido de ",(0,n.kt)("strong",{parentName:"p"},"pull request"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Uma vez que todos os desenvolvedores tenham assegurado que n\xe3o haja conflito entre o novo c\xf3digo e o c\xf3digo existente, podemos ",(0,n.kt)("strong",{parentName:"p"},"fundir")," a nova branch na branch ",(0,n.kt)("strong",{parentName:"p"},"dev"),"."))),(0,n.kt)("p",null,"*","*","*","\xc9 fortemente recomendado n\xe3o modificar diretamente a branch dev, caso contr\xe1rio podem ser introduzidos erros no c\xf3digo, cuja origem n\xe3o pode ser conhecida a priori."),(0,n.kt)("h2",{id:"merge-de-todo-o-trabalho-dos-desenvolvedores"},"Merge de todo o trabalho dos desenvolvedores"),(0,n.kt)("p",null,"O merge de todo o c\xf3digo \xe9 feito no ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html"},(0,n.kt)("inlineCode",{parentName:"a"},"Codecommit"))," nos projetos chamados ",(0,n.kt)("inlineCode",{parentName:"p"},"obra-play")," e ",(0,n.kt)("inlineCode",{parentName:"p"},"obraplayapi"),".\nCodecommit \xe9 uma ferramenta muito \xfatil para compartilhar o trabalho de diferentes desenvolvedores.\nPara come\xe7ar a trabalhar com Codecommit e entender como funciona, consulte os v\xe1rios ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/codecommit/index.html"},"Guias Codecommit")," dispon\xedveis online, veja v\xeddeos sobre ",(0,n.kt)("inlineCode",{parentName:"p"},"gitflow workflow"),", o qual ser\xe1 usado aqui e consulte as ",(0,n.kt)("a",{parentName:"p",href:"https://devhints.io/"},"cheatsheets dispon\xedveis")," (basta pesquisar por ",(0,n.kt)("inlineCode",{parentName:"p"},"git"),")."),(0,n.kt)("p",null,"E finalmente, e talvez o mais importante \xe9 mencionar que usamos o GitFlow WorkFlow.\nIsso quer dizer que, sempre iremos ter as seguintes branchs ativas :"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"main"),": usada somente para tags e deploys")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"production"),": usada para staging e testes de deploys")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"develop"),": usada para desenvolvimento global (com a modifica\xe7\xe3o de todos os devs)")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"dev/{user}/feature-to-be-created"),": usada para criar uma nova feature ou fun\xe7\xe3o ao reposit\xf3rio.\nAten\xe7\xe3o: em ",(0,n.kt)("inlineCode",{parentName:"p"},"user"),", colocar seu nome de usu\xe1rio (",(0,n.kt)("inlineCode",{parentName:"p"},"username"),").")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"hotfix"),": Branch para lidar com um bug ou algo que n\xe3o funciona como previsto na release.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"release/{version}"),": Branch para release na qual n\xe3o ser\xe1 adicionado mais funcionalidades, somente corre\xe7\xe3o de bugs entre outros. (com a vers\xe3o que ser\xe1 proposta)"))),(0,n.kt)("p",null,"Voc\xea pode ",(0,n.kt)("inlineCode",{parentName:"p"},"atualizar o projeto")," simplesmente clicando neste bot\xe3o, o que deve ser feito antes de dar push em branch local (atualiza\xe7\xe3o com rebase da branch ",(0,n.kt)("inlineCode",{parentName:"p"},"develop"),") ou criar novo pull request para evitar ",(0,n.kt)("inlineCode",{parentName:"p"},"merge conflict"),":"),(0,n.kt)("p",null,"Para mais informa\xe7\xf5es, por favor, olhar esses arquivos externos:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow"},"Como funciona o workflow"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=oweffeS8TRc"},"Video - Git Flow")))))}m.isMDXComponent=!0}}]);