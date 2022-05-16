"use strict";(self.webpackChunkobraplaydocs=self.webpackChunkobraplaydocs||[]).push([[5890],{3905:function(e,o,a){a.d(o,{Zo:function(){return p},kt:function(){return m}});var t=a(7294);function n(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function r(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?r(Object(a),!0).forEach((function(o){n(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function l(e,o){if(null==e)return{};var a,t,n=function(e,o){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],o.indexOf(a)>=0||(n[a]=e[a]);return n}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=t.createContext({}),c=function(e){var o=t.useContext(s),a=o;return e&&(a="function"==typeof e?e(o):i(i({},o),e)),a},p=function(e){var o=c(e.components);return t.createElement(s.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},d=t.forwardRef((function(e,o){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return a?t.createElement(f,i(i({ref:o},p),{},{components:a})):t.createElement(f,i({ref:o},p))}));function m(e,o){var a=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in o)hasOwnProperty.call(o,s)&&(l[s]=o[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2004:function(e,o,a){a.r(o),a.d(o,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var t=a(7462),n=a(3366),r=(a(7294),a(3905)),i=["components"],l={},s="Axios",c={unversionedId:"Frontend/Bibliotecas/axios",id:"Frontend/Bibliotecas/axios",title:"Axios",description:"O Axios \xe9 um biblioteca de cliente HTTP baseado em Promises para fazer requisi\xe7\xf5es, ele pode ser utilizado tanto no navegador quanto no Node.js ou em qualquer outro servi\xe7o de API, ele permite a integra\xe7\xe3o do nosso projeto em React para qualquer servi\xe7o de API dispon\xedvel.",source:"@site/docs/Frontend/Bibliotecas/axios.md",sourceDirName:"Frontend/Bibliotecas",slug:"/Frontend/Bibliotecas/axios",permalink:"/docs/Frontend/Bibliotecas/axios",editUrl:"https://github.com/ObraPlay/obraplaydocs/docs/Frontend/Bibliotecas/axios.md",tags:[],version:"current",lastUpdatedBy:"Elielson77",lastUpdatedAt:1651157760,formattedLastUpdatedAt:"4/28/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Prettier",permalink:"/docs/Frontend/Ferramentas/prettier"},next:{title:"Mui",permalink:"/docs/Frontend/Bibliotecas/mui"}},p=[{value:"Documenta\xe7\xe3o Oficial",id:"documenta\xe7\xe3o-oficial",children:[],level:2},{value:"Instala\xe7\xe3o no Axios no projeto",id:"instala\xe7\xe3o-no-axios-no-projeto",children:[],level:2},{value:"Solicita\xe7\xf5es com Axios",id:"solicita\xe7\xf5es-com-axios",children:[{value:"GET",id:"get",children:[],level:3},{value:"POST",id:"post",children:[],level:3},{value:"PUT",id:"put",children:[],level:3},{value:"DELETE",id:"delete",children:[],level:3}],level:2}],u={toc:p};function d(e){var o=e.components,a=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,t.Z)({},u,a,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"axios"},"Axios"),(0,r.kt)("p",null,"O Axios \xe9 um biblioteca de cliente HTTP baseado em Promises para fazer requisi\xe7\xf5es, ele pode ser utilizado tanto no navegador quanto no Node.js ou em qualquer outro servi\xe7o de API, ele permite a integra\xe7\xe3o do nosso projeto em React para qualquer servi\xe7o de API dispon\xedvel."),(0,r.kt)("h2",{id:"documenta\xe7\xe3o-oficial"},"Documenta\xe7\xe3o Oficial"),(0,r.kt)("p",null,"Consulte a ",(0,r.kt)("a",{parentName:"p",href:"https://axios-http.com/ptbr/docs/intro"},"Documeta\xe7\xe3o Oficial do Axios."),".  "),(0,r.kt)("h2",{id:"instala\xe7\xe3o-no-axios-no-projeto"},"Instala\xe7\xe3o no Axios no projeto"),(0,r.kt)("p",null,"Para fazer a instala\xe7\xe3o do axios, voc\xea deve ter um projeto React criado. Depois, \xe9 s\xf3 usar o comando abaixo:  "),(0,r.kt)("p",null,"Com npm:  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install axios \n")),(0,r.kt)("p",null,"Com yarn:  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn install axios\n")),(0,r.kt)("h2",{id:"solicita\xe7\xf5es-com-axios"},"Solicita\xe7\xf5es com Axios"),(0,r.kt)("p",null,"Para utilizar o Axios em seu projeto, primeiro deve importar ele:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'import axios from "axios";\n')),(0,r.kt)("p",null,"Essas s\xe3o algumas das requisi\xe7\xf5es que podemos fazer em nossa api com o axios:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get"),(0,r.kt)("li",{parentName:"ul"},"Post"),(0,r.kt)("li",{parentName:"ul"},"Put"),(0,r.kt)("li",{parentName:"ul"},"Delete")),(0,r.kt)("h3",{id:"get"},"GET"),(0,r.kt)("p",null,"\xc9 utilizado para obter dados da nossa API, veja o exemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'const url = "https://exemploapi.com";\n\nfunction getUser( ){\n  axios.get( url )\n  .then( ( ) => alert( "Requisi\xe7\xe3o feita com sucesso!!" ) )\n  .catch( error => console.log( error ) )\n}\n\ngetUser()\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"axios.get")," recebe como parametro  parametro o endere\xe7o da api. O ",(0,r.kt)("inlineCode",{parentName:"p"},".then")," \xe9 executado caso a requisi\xe7\xe3o seja feita com sucesso, caso n\xe3o, ",(0,r.kt)("inlineCode",{parentName:"p"},".catch")," \xe9 executado mostrando o erro no console."),(0,r.kt)("h3",{id:"post"},"POST"),(0,r.kt)("p",null,"\xc9 usado para criar dados e envia-los para a api."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'const url = "https://exemploapi.com";\n\nconst newUser = {\n        name: "Fulano",\n        age: 28\n      };\n\nfunction postUser( ){\n  axios.post( url, newUser )\n  .then( ( ) => alert( "Dado cadastrado com sucesso!!" ) )\n  .catch( error => console.log( error ) )\n}\n\npostUser()\n')),(0,r.kt)("p",null,"O ",(0,r.kt)("inlineCode",{parentName:"p"},"axios.post")," recebe como primero parametro a url da api, e o que vai ser cadastrado nela como segundo parametro. Novamente ",(0,r.kt)("inlineCode",{parentName:"p"},".then")," \xe9 executado caso o post seja feita com sucesso, caso contr\xe1rio, ",(0,r.kt)("inlineCode",{parentName:"p"},".catch")," \xe9 executado mostrando o erro no console."),(0,r.kt)("h3",{id:"put"},"PUT"),(0,r.kt)("p",null,"\xc9 utilizada para atualizar um determinado dado na api."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'const url = "https://exemploapi.com";\n\nconst userUpdated = {\n        name: "Novo Fulano",\n        age: 43\n      };\n\nfunction updateUser( ){\n  axios.put( `${url}/12`, userUpdated )\n  .then( ( ) => alert( "Dado atualizado com sucesso!!" ) )\n  .catch( error => console.log( error ) )\n}\n\nupdateUser()\n')),(0,r.kt)("p",null,"O ",(0,r.kt)("inlineCode",{parentName:"p"},".put")," recebe como parametro a url da api com o ID do dado a ser modificado ",(0,r.kt)("inlineCode",{parentName:"p"},"'${url}/12'"),", e o segundo parametro \xe9 o dado que vai ser inserido na api para atualizar."),(0,r.kt)("h3",{id:"delete"},"DELETE"),(0,r.kt)("p",null,"\xc9 utilizado para deletar alguma informa\xe7\xe3o da api. Como parametro, a url deve indicar o id da informa\xe7\xe3o a ser deletada.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'const url = "https://exemploapi.com";\n\nfunction deleteUser( ){\n  axios.put( `${url}/12` )\n  .then( ( ) => alert( "Usu\xe1rio deletado!" ) )\n  .catch( error => console.log( error ) )\n}\n\ndeleteUser()\n')),(0,r.kt)("p",null,"O id \xe9 passado na url utilizando tampletes strings.  "),(0,r.kt)("p",null,"Deve se levar em conta que \xe9 um exemplo de c\xf3digo, a forma como o Id \xe9 passado na url varia de cada api, por via das d\xfavidas, leia a documnta\xe7\xe3o da api que voc\xea vai consumir."))}d.isMDXComponent=!0}}]);