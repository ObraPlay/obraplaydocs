"use strict";(self.webpackChunkobraplaydocs=self.webpackChunkobraplaydocs||[]).push([[8104],{3905:function(e,o,t){t.d(o,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function a(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function n(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?n(Object(t),!0).forEach((function(o){a(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,r,a=function(e,o){if(null==e)return{};var t,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],o.indexOf(t)>=0||(a[t]=e[t]);return a}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var o=r.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):s(s({},o),e)),t},d=function(e){var o=c(e.components);return r.createElement(l.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},u=r.forwardRef((function(e,o){var t=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||n;return t?r.createElement(f,s(s({ref:o},d),{},{components:t})):r.createElement(f,s({ref:o},d))}));function m(e,o){var t=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var n=t.length,s=new Array(n);s[0]=u;var i={};for(var l in o)hasOwnProperty.call(o,l)&&(i[l]=o[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<n;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},822:function(e,o,t){t.r(o),t.d(o,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var r=t(7462),a=t(3366),n=(t(7294),t(3905)),s=["components"],i={},l="PostgreSQL",c={unversionedId:"backend/postgres",id:"backend/postgres",title:"PostgreSQL",description:"PostgreSQL\u2122 \xe9 um sistema de gest\xe3o de bases de dados relacionais orientadas para objectos (ORDBMS) baseado no POSTGRES, Vers\xe3o 4.2\u2122. Foi desenvolvido na Universidade da Calif\xf3rnia, no Departamento de Inform\xe1tica de Berkeley. POSTGRES \xe9 a origem de muitos conceitos que s\xf3 ser\xe3o disponibilizados em sistemas de gest\xe3o de bases de dados comerciais muito mais tarde.",source:"@site/docs/backend/postgres.md",sourceDirName:"backend",slug:"/backend/postgres",permalink:"/obraplaydocs/docs/backend/postgres",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/backend/postgres.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"django",permalink:"/obraplaydocs/docs/backend/django"},next:{title:"python",permalink:"/obraplaydocs/docs/backend/python"}},d=[{value:"Executando o servidor como localhost (127.0.0.1)",id:"executando-o-servidor-como-localhost-127001",children:[],level:2},{value:"Tutorial PostgreSQL",id:"tutorial-postgresql",children:[],level:2},{value:"Para mais informa\xe7\xf5es, ver a documenta\xe7\xe3o",id:"para-mais-informa\xe7\xf5es-ver-a-documenta\xe7\xe3o",children:[],level:2}],p={toc:d};function u(e){var o=e.components,t=(0,a.Z)(e,s);return(0,n.kt)("wrapper",(0,r.Z)({},p,t,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"postgresql"},"PostgreSQL"),(0,n.kt)("p",null,"PostgreSQL\u2122 \xe9 um sistema de gest\xe3o de bases de dados relacionais orientadas para objectos (ORDBMS) baseado no POSTGRES, Vers\xe3o 4.2\u2122. Foi desenvolvido na Universidade da Calif\xf3rnia, no Departamento de Inform\xe1tica de Berkeley. POSTGRES \xe9 a origem de muitos conceitos que s\xf3 ser\xe3o disponibilizados em sistemas de gest\xe3o de bases de dados comerciais muito mais tarde."),(0,n.kt)("p",null,"PostgreSQL\u2122 \xe9 um descendente livre do c\xf3digo original de Berkeley. Suporta grande parte da norma SQL, ao mesmo tempo que oferece muitas caracter\xedsticas modernas:"),(0,n.kt)("p",null,"consultas complexas;"),(0,n.kt)("p",null,"chaves estrangeiras;"),(0,n.kt)("p",null,"gatilhos;"),(0,n.kt)("p",null,"vistas edit\xe1veis;"),(0,n.kt)("p",null,"integridade transaccional;"),(0,n.kt)("p",null,"Controlo de Concorr\xeancia MultiVersion (MVCC)."),(0,n.kt)("p",null,"Al\xe9m disso, PostgreSQL\u2122 pode ser alargado pelo utilizador de m\xfaltiplas formas, por exemplo, acrescentando :"),(0,n.kt)("p",null,"novos tipos de dados;"),(0,n.kt)("p",null,"novas fun\xe7\xf5es;"),(0,n.kt)("p",null,"novos operadores;"),(0,n.kt)("p",null,"novas fun\xe7\xf5es de agrega\xe7\xe3o;"),(0,n.kt)("p",null,"novos m\xe9todos de indexa\xe7\xe3o;"),(0,n.kt)("p",null,"novas l\xednguas processuais."),(0,n.kt)("p",null,"E gra\xe7as \xe0 sua licen\xe7a liberal, PostgreSQL\u2122 pode ser utilizado, modificado e distribu\xeddo livremente para qualquer fim, seja privado, comercial ou acad\xe9mico."),(0,n.kt)("h1",{id:"instala\xe7\xe3o"},"Instala\xe7\xe3o"),(0,n.kt)("p",null,"Para instalar, basta ir a ",(0,n.kt)("a",{parentName:"p",href:"https://www.postgresql.org/download/"},"o link para download")," e escolher a vers\xe3o correcta\npara o seu sistema operativo. Tenha cuidado com a instala\xe7\xe3o porque por vezes o instalador pode pedir para instalar outras coisas."),(0,n.kt)("h2",{id:"executando-o-servidor-como-localhost-127001"},"Executando o servidor como localhost (127.0.0.1)"),(0,n.kt)("p",null,"Uma vez instalado, pode ir divertir-se com o postgreSQL. Basta utilizar o ",(0,n.kt)("inlineCode",{parentName:"p"},"pgAdmin 4"),'. Na verdade, n\xe3o \xe9 necess\xe1rio\nprocure no seu sistema por um programa chamado "Postgres". Pode utilizar a interface gr\xe1fica ``pgAdmin```,\nou utilizar directamente na "linha de comando" com "psql".'),(0,n.kt)("h2",{id:"tutorial-postgresql"},"Tutorial PostgreSQL"),(0,n.kt)("p",null,"Se quiser aprender a utilizar o software e achar que \xe9 uma boa ideia ter os seus conhecimentos.\nAviso: \xe9 especialmente importante que o administrador do s\xedtio tenha bons conhecimentos para gerir a base de dados."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.postgresql.fr/10/tutorial.html"},"Tutorial postgres")),(0,n.kt)("h2",{id:"para-mais-informa\xe7\xf5es-ver-a-documenta\xe7\xe3o"},"Para mais informa\xe7\xf5es, ver a documenta\xe7\xe3o"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/"},"Documenta\xe7\xe3o (Ingl\xeas)")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.postgresql.fr/"},"Documenta\xe7\xe3o actual (franc\xeas)")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.postgresql.fr/10"},"PostgreSQL 10 Documenta\xe7\xe3o (franc\xeas)")))}u.isMDXComponent=!0}}]);