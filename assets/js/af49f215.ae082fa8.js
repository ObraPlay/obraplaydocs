"use strict";(self.webpackChunkobraplaydocs=self.webpackChunkobraplaydocs||[]).push([[8709],{3905:function(t,e,n){n.d(e,{Zo:function(){return A},kt:function(){return m}});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=a.createContext({}),s=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},A=function(t){var e=s(t.components);return a.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,u=t.parentName,A=l(t,["components","mdxType","originalType","parentName"]),c=s(n),m=o,d=c["".concat(u,".").concat(m)]||c[m]||p[m]||r;return n?a.createElement(d,i(i({ref:e},A),{},{components:n})):a.createElement(d,i({ref:e},A))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6015:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return A},default:function(){return c}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={},u="Mui",s={unversionedId:"Frontend/Bibliotecas/mui",id:"Frontend/Bibliotecas/mui",title:"Mui",description:"O Material-UI (MUI), \xe9 uma das mais populares bibliotecas de componentes do React. Ela torna poss\xedvel utilizar os padr\xf5es do Material Design do Google em nossas aplica\xe7\xf5es React.",source:"@site/docs/Frontend/Bibliotecas/mui.md",sourceDirName:"Frontend/Bibliotecas",slug:"/Frontend/Bibliotecas/mui",permalink:"/docs/Frontend/Bibliotecas/mui",editUrl:"https://github.com/ObraPlay/obraplaydocs/docs/Frontend/Bibliotecas/mui.md",tags:[],version:"current",lastUpdatedBy:"Elielson77",lastUpdatedAt:1651775529,formattedLastUpdatedAt:"5/5/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Axios",permalink:"/docs/Frontend/Bibliotecas/axios"},next:{title:"Next.js",permalink:"/docs/Frontend/Bibliotecas/nextjs"}},A=[{value:"Documenta\xe7\xe3o Oficial",id:"documenta\xe7\xe3o-oficial",children:[],level:2},{value:"Instala\xe7\xe3o do MUI",id:"instala\xe7\xe3o-do-mui",children:[],level:2},{value:"Importar componentes do MUI no projeto",id:"importar-componentes-do-mui-no-projeto",children:[],level:2},{value:"Elementos do MUI",id:"elementos-do-mui",children:[{value:"Button",id:"button",children:[],level:3},{value:"Material Icons",id:"material-icons",children:[],level:3}],level:2}],p={toc:A};function c(t){var e=t.components,l=(0,o.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mui"},"Mui"),(0,r.kt)("p",null,"O Material-UI (MUI), \xe9 uma das mais populares bibliotecas de componentes do React. Ela torna poss\xedvel utilizar os padr\xf5es do ",(0,r.kt)("a",{parentName:"p",href:"https://material.io/design/introduction"},"Material Design")," do Google em nossas aplica\xe7\xf5es React."),(0,r.kt)("h2",{id:"documenta\xe7\xe3o-oficial"},"Documenta\xe7\xe3o Oficial"),(0,r.kt)("p",null,"Para mais detalhes, consulte a ",(0,r.kt)("a",{parentName:"p",href:"https://mui.com/pt/material-ui/getting-started/installation/"},"documenta\xe7\xe3o oficial do MUI"),"."),(0,r.kt)("h2",{id:"instala\xe7\xe3o-do-mui"},"Instala\xe7\xe3o do MUI"),(0,r.kt)("p",null,"O MUI est\xe1 disponivel para instala\xe7\xe3o como um ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@mui/material"},"pacote npm"),".\nPara fazer a instala\xe7\xe3o, execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"// usando npm\nnpm install @mui/material @emotion/react @emotion/styled\n\n// usando yarn\nyarn add @mui/material @emotion/react @emotion/styled\n")),(0,r.kt)("h2",{id:"importar-componentes-do-mui-no-projeto"},"Importar componentes do MUI no projeto"),(0,r.kt)("p",null,"Para fazer isso \xe9 bem simples. A\xed vai o que precisa para fazer a importa\xe7\xe3o de um Button, como exemplo."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport Button from '@mui/material/Button';\n\nfunction App() {\n  return (\n    <Button variant=\"contained\" color=\"primary\">\n      Hello World\n    </Button>\n  );\n}\n\nReactDOM.render(<App />, document.querySelector('#app'));\n")),(0,r.kt)("h2",{id:"elementos-do-mui"},"Elementos do MUI"),(0,r.kt)("p",null,"O MUI possui diversos componentes pr\xe9-estilizados que podemos usar em nossos projetos para deixa-los mais agrad\xe1veis e r\xe1pidos. Aqui v\xe3o exemplos de como importar alguns deles:"),(0,r.kt)("h3",{id:"button"},"Button"),(0,r.kt)("p",null,"Os bot\xf5es t\xeam 3 estilos b\xe1sicos: Texto, Contido e Delineado."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'import * as React from \'react\';\nimport Stack from \'@mui/material/Stack\';\nimport Button from \'@mui/material/Button\';\n\nexport default function BasicButtons() {\n  return (\n    <Stack spacing={2} direction="row">\n      <Button variant="text">Text</Button>\n      <Button variant="contained">Contained</Button>\n      <Button variant="outlined">Outlined</Button>\n    </Stack>\n  );\n}\n')),(0,r.kt)("p",null,"Podemos personalizar atributos desses elementos, como:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Manipular cliques:  ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Button\n  onClick={() => {\n    alert('clicado');\n  }}\n>\n  Clique aqui\n</Button>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cor:  ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},' <Button cor="secondary"> Secondary </Button> \n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tamanho:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'<Button size="small">Pequeno</Button>\n<Button size="medium">M\xe9dio</Button>  \n<Button size="large">Grande</Button>\n')),(0,r.kt)("h3",{id:"material-icons"},"Material Icons"),(0,r.kt)("p",null,"Para utilizar Material Icons do MUI, primeiro deve-se instalar o pacote no diret\xf3rio do projeto usando:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"// usando npm\nnpm install @mui/icons-material\n\n// usando yarn\nyarn add @mui/icons-material\n")),(0,r.kt)("p",null,"Escolha um Icon na aba ",(0,r.kt)("a",{parentName:"p",href:"https://mui.com/pt/material-ui/material-icons/"},"Material Icons")," digitando o tipo na caixa de pesquisa:  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"url",src:n(3201).Z,title:"url",width:"781",height:"276"}),"  "),(0,r.kt)("p",null,"Clique sobre o Icon escolhido.  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"url",src:n(1015).Z,title:"url",width:"231",height:"175"}),"  "),(0,r.kt)("p",null,"Copie a sua importa\xe7\xe3o e cole no projeto.  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"url",src:n(6877).Z,title:"url",width:"383",height:"152"}),"  "),(0,r.kt)("p",null,"Existem v\xe1rias outras possibilidades que est\xe3o dispon\xedveis na ",(0,r.kt)("a",{parentName:"p",href:"https://mui.com/pt/material-ui/react-button/"},"documenta\xe7\xe3o oficial do MUI"),".  "),(0,r.kt)("p",null,"Existem diversos outros componentes MUI que usamos no Obra Play, como ",(0,r.kt)("a",{parentName:"p",href:"https://mui.com/pt/material-ui/icons/"},"Icons"),", ",(0,r.kt)("a",{parentName:"p",href:"https://mui.com/pt/material-ui/react-accordion/"},"Accordion")," e v\xe1rios outros que vale a pena dar uma olhada. Eles est\xe3o dispon\xedveis na aba ",(0,r.kt)("a",{parentName:"p",href:"https://mui.com/pt/material-ui/react-autocomplete/"},"Components")," da documenta\xe7\xe3o oficial."))}c.isMDXComponent=!0},6877:function(t,e){e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAX8AAACYCAYAAAAMcunpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABMPSURBVHhe7d0JeFTlvcfxfwIESAIIYV9kEUQRkU0Q8EpR2VzRqqUq4oN4a2sVkStgq/SK3hYXegWt6FXUiqitirQuCApcLYLghghiFVlaBEQpAmFLWDq/N/OOkyGZhC0xeb+f55lnZt5z5syZc2Z+73v+5wRSKmVm7bdkkk8FAJRBqdH7ghH8AFAuFRz+Cn2CHwDKrQPDn9AHgHIvf80/IfjTq1a2BvWyrHpGuqWmpkRbAQBl3ffhX0Dwt27RhNAHgHIotbD6vkb8BD8AlE+FXu2jUg8AoHwqNPwZ9QNA+ZX8On8AQLlE+ANAgAh/AAgQ4Q8AASL8ASBAhD8ABKiQ8C/gr74AAOVGAeFP8ANAeZcQ/gQ/AIQgLvwJfgAIBSd8ASBA0fBn1A8AIWHkDwABioT/gaN+jgMAoHxj5A8AATog/Bn1A0D5ly/8CX4ACANlHwAIUCz8843695fsMcCll15qU6dOtXnz5tmCBQvc/YsvvmiDBg2KzpHn2muvtbfffttmz55t/fv3j7YCAA5WqY/8b7/9dhs2bJi1aNHCKlSo4Np037BhQ7vuuutszJgxrg0AcOSUavhfdtll1qtXLxf2a9assZtuusm6devmRvgff/yxpaSk2JlnnmlXXXVV9BUAgCPBhX9plXwU/FWrVrXNmzfbpEmTbOHCha596dKl9vTTT9t3331nlStXtlNPPdW1AwCOjFIb+bdv396VdmTlypX21ltvucee6v5LliyxFStW2Pbt26OtBWvbtq2NHz/e5syZ484ZvPPOOzZt2rQDzhmI2jRN82jeuXPn2qOPPmodO3aMzpGnX79+rgPy5yE038SJE917AUBZl1pal3c2aNDAMjMz3eN169a5+0SjR492Ya37wnTu3NnGjh1r3bt3typVqtjOnTsjBy/73fKHDh3qzht4eqy2+vXru/k2bdpkaWlpLtB//etfx4L9oosushEjRthxxx3nnmtefwQyatQoa968uWsHgLKq1E/4Hq4BAwa4MN+xY4c9/PDD7hyBQv7LL790wX7++ee78why2mmnubYvvvjCLrjgAjvvvPPc6D43N9fq1KljPXr0sGOPPdYGDhzoOiYtQ8vSMp966inLycmxZs2acaURgDIvf/iX8CWeh+vEE0+0Nm3auBPDCmoFtOicwfTp092IvUaNGu7oQBTeUrt2bRf86enp7lzDGWec4W6PPPKIdenSxXUE6hBUitKyRMtev369VaxY0b0vAJRlZXrkr9JORkaGe7x69Wp37+l5dna2u5KoWrVqrm3GjBm2detWq1Wrlg0fPtxmzZplL730kt16661Wt25dN0/NmjVdwFeqVMmGDBni6v266W8LmjZtGpsHAMqy78O/hEf9qrerVCP+xG+icePG2ZQpU9z9kaCgVxnn5ZdftrVr19q+fftcyUglIJWM/BGC7Nmzx11+qhPOiTe9FgDKslIb+S9atCgWojqB6uvy3umnn27t2rWzli1bxkb3iVSG8VcC6Sggnmrzqtvv3bvXtm3b5kb2vXv3tlatWtmzzz7r/qpYV/Q899xzrsRTr14969mzpysVqVNQKUlXBOmEc+It2QloACgLSrXso3LK7t27XRlFf9jlL7fUVTdXXnmlHXPMMW76e++959oTLV++3NX6dXWPav/+j8HUmVx44YXubwi2bNli77//vjuRe8MNN9gdd9xhN998s6v368hDy9i1a5cLe5V7Fi9e7I5KVC7q06eP6yBE899yyy32xBNPHHBZKACUNSkVM2rl1XsSyj6d27WOPjq69M879O3b14WtQlzlFtXbRSPwmTNnuks5RR2ERt4aqd93332uhq8jhpEjR7ryjV6vIPc1e82nEs+9997rXq9/KkLvpaBX8OuIICsry827ceNGV15ShzR48GDXkSjwtQ7qgPwyddL4+eeftwcffNAtEwDKogqpaVX/O/o4n4b1akcfHV36h9oU0o0aNXLlHYWsSjUbNmxwl2E+8MAD0TnNOnXqZKeccooL5Pnz58fq78uWLXNX8OgqHY32Fe56vf6xOF3N4+nqHS2/SZMmVr16dXciWO+l0f+ECRPs3XffdfPpn5bQXx3rXITm0zX+smrVKvcHYVovACjLSn3kDwAoeXk1/4TgBwCUb2X6On8AwKEh/AEgQIQ/AASI8AeAABH+ABAgwh8AAkT4A0CACH8ACFAqf+AFAOFh5A8AASL8ASBAhD8ABIjwB4AAEf4AECDCHwACRPgDQIAIfwAIEOEPAAEi/AEgQIQ/AASI8AeAABH+ABAgwh8AApRSMb1mgf+mc41WPaKPAADlTdLw37T5u+gzAEB5QtkHAAJE+ANAgAh/AAgQ4Q8AASL8ASBAhD8ABIjwB4AAEf4AECDCHwACRPgDQIAIfwAIEOEPAAEi/AEgQIQ/AASI8AeAABH+ABAgwh8AAkT4A0CACH8ACBDhDwABIvwBIECEPwAEqNTC/7SfDbGrpz9njTt1iLYAZUvj5vts4gvZNmLcjmhL8bTrsscee32bXfHLXdEWFIZtdfQEP/K/eNIE1xEdjEEX97Wtn860/Wv+5m7L3pzi2h+7Z1Ss7c1n7ndtR0viOpTEeyajTlyd+X++8bJd89o0a3vRBdEpJauwsPBB/cy8re5WUmHS79Icu29qtnv/8u6H8Fnj97O+B/o+FOa3j2/P9z3QY//9iP+OxLcfbEd/qPQ++hxHc1uWWvi/+8jj9uSAgbb2g4+iLWWDQvcPd91sixYvt5Sm/+FuJ509yE0bOvJu93z2Ox+450fTlGkzrXqbvjb5T6/YVxu+sbN+OszOvvym6NSSd9KF59r6JUvt/3qfb5PPudiWvvTX6JTSpx/QyHt32JoVqXb56dVt3M3pdnqfXBdWh2PtqlS78ZJMGz86PdpyoDP659pHCyq6eb0liyra0H7VbOqDVaItKMzBbiu/T7SPd2SnRFsPpH2fVnm/vfVqmnuugO/z4xx7akIV9x3Rzb+n7vX8g3kV3fPyIqVies390cf51GjVwzZt/i767Mip2exY63/XbyyzXl3L2b7d3rzz7lgHoFG41G7Zwr5ettzNm5O93Wbcdoc16tDeju9zllWplnnAa+OXKWsWLLSZY+5yj/uOvc2qVK/u5knLyLDsrze65bXue7a1u+QiN4+XuD4F0ei+X8+udtXwu2zO/A+jrfn5EXh8GJ/ZvaM99b+3WaP6ddxzdRB+uu9QqmXkhUj8tLEjrrFRP7/C0ipVsm3bd9j1t/3eBb9X2PokLlOdhDqnZOuh9a5apbJ1btfavd+nX6yOdWxF0b5bt/hj16l72ua9x9xq27/51hp1bO/aEvdN025d3WO/XzKysuyM4b90bVVr1bQNnyxzr41/XTIK+pvu2mFvTk+z15///od9Use99qshGe65aGS1YW2qa5dmx++1zz+p4F6v0LjnlnRr23mPnT0gx+6/Ld2Fih/1Key1zHMH5nUeCoWCOgAFTPzrRcvodHreaPTV59LyhZrvpGrXzxvtxS83/nXfbkh166dl6j3UwWRW3+9ep3WfOKaqC83E5a3+vEK+bVAQLe+cn+RYpbT9kVtemB5/8t7Yumq0rG0l/r3+9U1qvvfx4tc/fnvFr7/aO3TbEwniyO8+Yf2TbauC1kOv8TTiHzpyV+T3USVfu6fXL/uwQmyZer5pY0rSjjx+/3t6nxvH7rT0zLwYjV/P+M+cm2v27ENVYt9Jbeef/mKXRX5mBa5/Qd9ZuXzAmTbhN9fb+0v+bv0H/yraemhKfOS/efU/7Jkrr7HXRo9xwZ5I4b781det9vEt7bMZs1ybAkFqNm1iK//2jhtdapTZZejVrr3XqBG2aeUq1/78tddbVovm+Uo5CiGFuqbv2pbtgl8hpeffrlhpS154yT0uzpFIs8YN7LMv/1Fo8BfmgbHD3et0ZKBR+gnHHeuCWwZf0j/fkUR8pzDksnNjRxR/fmWO/W7Uz1yAJ6Ppmk/z+2VqGZJsPeTkE1q4edWZ1M2q6TqfZBTgKvWow1Znqse+E5eKaWlWOdL5avtqn2vfqESk/aPH2l+apv2n/ShpmRnu+eY1/7QajRq670NGnbzOqigKlP+6IjP2I5NWJ+21t2dUcj9wHbrrcHrLv1KtfuO8sFJwzvlrmjU/Ya/NfSXya4yoVSf54bZ+4EWNBk/qtMfW/zM1Fvyi4NDrFMSJfnH7ztjRiW7xwdm0ZSTIB2W6ds2jeb1Gzffawv+v6KZtXJdqvS/OC5ye5+ZY9taU2PKKCn6vRta+yOeq5EJJoazP6LeVluGXp2018Lrd7vNptK1R87o1kY4gup5+/RV0CvjC1r9Ow3322p/S3LTliyvE1j/ZtipoPYpLga19/kk0bNVJ6ihg2QeF78uC6HXqYPT+Wo/4I0pN02f2RxKDe1WPfSf1/upgx4/K+3x6vZaj13j6fhV3fx2qUiv7FEbhnrtzp/vhr30/fxBv2/C1/X3mm+7xVx8tsYqV06xp967uXs9FnYuCQ6HhqaPwoT7t58PyjU4PVoO6eR3RwVAYV4ms4/wPPnHP1XEogNWRyOq16+2sHp1i5w68nqe1dyN0jdRV07/mJ+dFpyT3o24dbHdOrj0z/Y1oS56i1kPUCenIQqWkrQV0zok0Gk/sRLWNvT05Ofb5rNnusfaBOn7da/+4gI/sL/H7M7N+5Kgu8r7L/vKqa/ffh0OV98M2y6qX9wN/YXLlyEg1xXbGlW4VnHr+1aoKsUA4XPqBK7DfmPZ9J5SMD6SC5lfwKjB9J6KQ0mfxYfFNJPB9+UKjV2/T16muYyiodqyA+uPcA+vbouUtimyTnEieqtOMp9Gvf40f1RZFnWDDpvvsnil5tXg/mve03X0wKvB9p5HMoayHp85F29OPtNXRZ1QrsACSlB8g+O+Mlrf521T3XdO+ytmdYlcN25Vv28rJkX2to5zRv8/7DAez/s9Mn2N1Ovz4sEf98oML/+LKrFvbjSpL2vqNmw6pA0jGj+wXfLjUhXx8J6DSix+969a468UHfdQRMv8DrRrJE43Cq2bst21bUtwhtco+R0tiwJQGBapGnBpV/8/j2fk6AT/Nj57jSyqFUYdxYvu9sdGsShzFpaMH/166Hc6o9nDWo6BOWWWr3JwUF9pHkj860XdNIR/fCehoJn576Mgp/gixJJTZ8G/Y/hQ3clwzf6Ht2Z1jjTq0c+0qKTRo19a2fLXOPS+O+KOEomjU3LJZo3ylkqIorHdF1rF7p5Pdc5VzurQ/0Y3446kTuHPik250rlH6W+8uLlbpJdEXq9Zanaxj7PIBvaMteYq7HiVB+0dlH5XkROdztB+zN2x0z48U/bBV+tBov13XPdbrvFx3r1G2Hy0noxGhOhAFjl5XHArYBk32HVQZQespvuQRT52UAssHt2r8GlUWNywU9CoxSFHlrKLkRlZPpR2tS9cfHbg9/PaKp+3Qss1eF7xHSlHrURiNuvV9iO+UtR3VUbvvxkGso99nWqboO1K34T53xBVPnUB86UxHCjVr532nDpZq/t989KJ99NrD0ZZDV+Lh7y8JPGfcWHeCVveXPz05FgLJVKtfzy599A+uriz+BOCix550ga92LU9lnuKWdlSSaNy5o3ttcf7uYMz4yXb3pKkuOP0lln6krhOmeq4Sjm567DuJcQ897YJWbSrjqLzi6/B6vV/W7TdebXMXfOiCWuWXv7yR1+an+5PJen9d6qlSkEpDs5+dEJum190/+c/51rE461GStH90/sXvT53rmXv3+OjUI0tBv2JZBTfS1ZUjui/OSEuhqcN4HZ5fcs1uW/XZ97VnX3ZQCUO3+JGdau0KZ1/KiOfPO+hkpQ73VXpRCGhddHJSI1pN182fYNSoXIHlyyb6PA/dWdVNSya+NKLPcLhHIvHbQ0cSiUdO8dPj11/tKz6tEGvXLbEUUpDCtlWy9VB46xJPTfOlFX/Eo5vq8ImlLFGpSecbClrHwva19pmOqnSVkNpU4lH9Xuvn18MvS/vVH21oH8ybVcnN76f7bVWUdRs22bbsHda4QR3XERyOEr/a51DpuvE25/e3N8b+LlYnBopDP6ysuvuP+gk0UcAkXm2EHwYFdkFX0JQ1M/74W6tfp5Z1OOe6aMuhKfGRP1DS/AlEP8oq6o9/DodGg4lXG+GHoSSuoDmafMmndYsmNnzspGjroSszI38AwJHDyB8AAkT4A0CACH8ACBDhDwABIvwBIECEPwAEiPAHgAAR/gAQIMIfAAJE+ANAgAh/AAgQ4Q8AASL8ASBAhD8ABIjwB4AAEf4AECDCHwACRPgDQIAIfwAIUNL/wxcAUD4VGv6d27WOPgIAlDeUfQAgQIQ/AASI8AeAABH+ABAgwh8AAkT4A0CACH8ACBDhDwABIvwBIECEPwAEiPAHgAAR/gAQIMIfAAJE+ANAgAh/AAgQ4Q8AASL8ASBAhD8ABIjwB4AAEf4AECDCHwACRPgDQIAIfwAIEOEPAAEi/AEgQIQ/AASI8AeAABH+ABAgwh8AgmP2b9C5vopRux1uAAAAAElFTkSuQmCC"},3201:function(t,e,n){e.Z=n.p+"assets/images/material-icon-pesquisa-4255502d3cb0302bce7ef87051bb08c7.png"},1015:function(t,e){e.Z="data:image/png;base64,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"}}]);