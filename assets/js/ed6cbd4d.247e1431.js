"use strict";(self.webpackChunkobraplaydocs=self.webpackChunkobraplaydocs||[]).push([[7129],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(f,i(i({ref:t},s),{},{components:n})):o.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},707:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],c={},l="CICD",u={unversionedId:"onboarding/cicd",id:"onboarding/cicd",title:"CICD",description:"Status: Finalizado",source:"@site/docs/onboarding/cicd.md",sourceDirName:"onboarding",slug:"/onboarding/cicd",permalink:"/docs/onboarding/cicd",editUrl:"https://github.com/ObraPlay/obraplaydocs/docs/onboarding/cicd.md",tags:[],version:"current",lastUpdatedBy:"Elielson77",lastUpdatedAt:1652813201,formattedLastUpdatedAt:"5/17/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Manifesto \xc1gil",permalink:"/docs/onboarding/agile-manifesto"},next:{title:"Estilo de c\xf3digo (code style)",permalink:"/docs/onboarding/code-style"}},s=[{value:"Integra\xe7\xe3o cont\xednua",id:"integra\xe7\xe3o-cont\xednua",children:[],level:2},{value:"Entrega cont\xednua",id:"entrega-cont\xednua",children:[],level:2},{value:"Mais informa\xe7\xf5es",id:"mais-informa\xe7\xf5es",children:[],level:2}],d={toc:s};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cicd"},"CICD"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Status: Finalizado")),(0,a.kt)("h2",{id:"integra\xe7\xe3o-cont\xednua"},"Integra\xe7\xe3o cont\xednua"),(0,a.kt)("p",null,"A integra\xe7\xe3o cont\xednua \xe9 muito importante pois permite que n\xf3s desenvolvedores automatizemos a padroniza\xe7\xe3o do projeto tanto em n\xedvel de estilo do c\xf3digo quanto nos testes unit\xe1rios ou de integra\xe7\xe3o da aplica\xe7\xe3o.\nBasicamente, a integra\xe7\xe3o continua funcionando da seguinte forma: a cada commit vamos acionar um gatilho que ir\xe1 rodar um job de estilo de c\xf3digo para checar erros. Desde que o estilo do c\xf3digo seja validado no servidor codecommit, vamos iniciar outro job que ir\xe1 checar se os testes unit\xe1rios ou de integra\xe7\xe3o v\xe3o passar."),(0,a.kt)("h2",{id:"entrega-cont\xednua"},"Entrega cont\xednua"),(0,a.kt)("p",null,"A Entrega cont\xednua \xe9 um pr\xf3ximo passo da integra\xe7\xe3o cont\xednua pois permite que fa\xe7amos deploys automatizados. desde que a nossa pipeline de integra\xe7\xe3o cont\xednua passe, vamos rodar uma pipeline de entrega cont\xednua para dar deploy dos servidores de desenvolvimento."),(0,a.kt)("h2",{id:"mais-informa\xe7\xf5es"},"Mais informa\xe7\xf5es"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/ci/"},"Conceitos de CICD no Gitlab")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.heroku.com/continuous-integration"},"Conceitos de Continuous Integration no Heroku")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/whitepapers/latest/cicd_for_5g_networks_on_aws/cicd-on-aws.html"},"CICD na AWS")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=AZtTd3pFVTY&ab_channel=C%C3%B3digoFonteTV"},"Pipeline (CICD) no dicion\xe1rio do programador (video)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=NwzJCSPSPZs&ab_channel=BlockExplorer"},"AWS CodePipeline Tutorial (video)"))))}p.isMDXComponent=!0}}]);