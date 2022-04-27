"use strict";(self.webpackChunkobraplaydocs=self.webpackChunkobraplaydocs||[]).push([[8780],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||r;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1525:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],s={},c="React",l={unversionedId:"Frontend/Bibliotecas/react",id:"Frontend/Bibliotecas/react",title:"React",description:"O React \xe9 uma biblioteca JavaScript voltada para constru\xe7\xe3o de UI (User Interface), possibilitando que a cria\xe7\xe3o dessas telas seja feita de forma simples e f\xe1cil.",source:"@site/docs/Frontend/Bibliotecas/react.md",sourceDirName:"Frontend/Bibliotecas",slug:"/Frontend/Bibliotecas/react",permalink:"/docs/Frontend/Bibliotecas/react",editUrl:"https://github.com/ObraPlay/obraplaydocs/docs/Frontend/Bibliotecas/react.md",tags:[],version:"current",lastUpdatedBy:"Raul Garcia",lastUpdatedAt:1651084210,formattedLastUpdatedAt:"4/27/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Next.js",permalink:"/docs/Frontend/Bibliotecas/nextjs"},next:{title:"ESLint",permalink:"/docs/Frontend/Ferramentas/eslint"}},u=[{value:"Documenta\xe7\xe3o Oficial",id:"documenta\xe7\xe3o-oficial",children:[],level:2},{value:"Sintaxe",id:"sintaxe",children:[],level:2},{value:"Componentes",id:"componentes",children:[],level:2},{value:"Props",id:"props",children:[],level:2},{value:"Hooks",id:"hooks",children:[{value:"Exemplos de hooks",id:"exemplos-de-hooks",children:[{value:"- useEffect()",id:"--useeffect",children:[],level:4},{value:"- useState()",id:"--usestate",children:[],level:4},{value:"- useContext()",id:"--usecontext",children:[],level:4}],level:3}],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"react"},"React"),(0,r.kt)("p",null,"O React \xe9 uma biblioteca JavaScript voltada para constru\xe7\xe3o de UI (User Interface), possibilitando que a cria\xe7\xe3o dessas telas seja feita de forma simples e f\xe1cil.  "),(0,r.kt)("p",null,"O React tem a capacidade de renderizar a altera\xe7\xe3o ou os componentes afetados sem influenciar o outro, o que significa que, em vez de renderizar a p\xe1gina inteira novamente, ele renderiza apenas a parte da mudan\xe7a.  "),(0,r.kt)("p",null,"Outra caracter\xedsca do React, \xe9 que ele trabalha com componentes, que permite a divis\xe3o da UI em elementos independentes e reutiliz\xe1veis. "),(0,r.kt)("h2",{id:"documenta\xe7\xe3o-oficial"},"Documenta\xe7\xe3o Oficial"),(0,r.kt)("p",null,"Para mais detalhes, consulte a ",(0,r.kt)("a",{parentName:"p",href:"https://pt-br.reactjs.org/docs/getting-started.html"},"Documenta\xe7\xe3o Oficial do React."),"  "),(0,r.kt)("h2",{id:"sintaxe"},"Sintaxe"),(0,r.kt)("p",null,"O React utiliza uma sintaxe chamada HTML-in-JavaScript, o JSX. \xc9 meio que uma incorpora\xe7\xe3o de HTML dentro do c\xf3digo JavaScript. Aqui vai um exemplo:  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"const element = <h1>Hello, world!</h1>;\n")),(0,r.kt)("p",null,"Geralmene em prejetos front-end escreveriamos HTML, CSS e Javascript em arquivos diferentes, o JSX permite com que HTML e o Javascript sejam escritos incorporados, em um unico arquivo."),(0,r.kt)("p",null,"O projeto ObraPlay \xe9 escrito em Typescript, nesse caso a sintaxe usada no React \xe9 a TSX, que tamb\xe9m \xe9 a incorpora\xe7\xe3o do HTML no Typescript."),(0,r.kt)("h2",{id:"componentes"},"Componentes"),(0,r.kt)("p",null,"Os componentes React s\xe3o elementos da UI dividos, independetes e que podem ser reutiliz\xe1veis. Basicamente \xe9 como pegar uma tela e quebrar ela em partes pequenas, esses s\xe3o os componentes React.  "),(0,r.kt)("p",null,"Vale a pena dar uma olhada na documenta\xe7\xe3o sobre ",(0,r.kt)("a",{parentName:"p",href:"https://pt-br.reactjs.org/docs/components-and-props.html"},"Componentes React.")),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("p",null,"Props \xe9 uma abrevia\xe7\xe3o de Properties (Propriedades), s\xe3o informa\xe7\xf5es que podem ser passadas para um componente, essas informa\xe7\xf5es podem ser strings, numeros ou at\xe9 mesmo fun\xe7\xf5es. E esse valor pode ser passado para o componente que recebe essa prop."),(0,r.kt)("h2",{id:"hooks"},"Hooks"),(0,r.kt)("p",null,"Os hooks s\xe3o fun\xe7\xf5es do JavaScript implementadas no React, eles permitem com uma forma alternativa para escrever componentes baseados em classe.\nEles ajudam a tornar o c\xf3digo mais leg\xedvel e objetivo. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"C\xf3digo antes:  ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"import React from 'react';\n\nclass Counter extends React.Component {\n  constructor() {\n    this.state = { count: 0 };\n    this.incrementCount = this.incrementCount.bind(this);\n  }\n  incrementCount() {\n    this.setState({ count: this.state.count + 1 });\n  }\n \n  componentDidMount() { document.title = `Voc\xea clicou ${this.state.count} vezes`; }\n  componentDidUpdate() { document.title = `Voc\xea clicou ${this.state.count} vezes`; }\n\n  render() {\n    return (\n      <div>\n        <p>Voc\xea clicou {this.state.count} vezes</p>\n        <button onClick={this.incrementCount}>Clique Aqui</button>\n      </div>\n    );\n  }\n}\n\nexport default Counter;\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Depois do Hooks: ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"  import React, { Component, useState } from 'react';\nimport useDocumentTitle from '@rehooks/document-title';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  const incrementCount = () => setCount(count + 1);\n  useDocumentTitle(`You clicked ${count} times`);\n\n  return (\n    <div>\n      <p>Voc\xea clicou {count} vezes</p>\n      <button onClick={incrementCount}>Clique Aqui</button>\n    </div>\n  )\n}\n\nexport default Counter;\n")),(0,r.kt)("h3",{id:"exemplos-de-hooks"},"Exemplos de hooks"),(0,r.kt)("h4",{id:"--useeffect"},"- useEffect()"),(0,r.kt)("h4",{id:"--usestate"},"- useState()"),(0,r.kt)("h4",{id:"--usecontext"},"- useContext()"))}d.isMDXComponent=!0}}]);