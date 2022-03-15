"use strict";(self.webpackChunkobraplaydocs=self.webpackChunkobraplaydocs||[]).push([[359],{3905:function(e,a,r){r.d(a,{Zo:function(){return d},kt:function(){return m}});var t=r(7294);function o(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function i(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function n(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?i(Object(r),!0).forEach((function(a){o(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,t,o=function(e,a){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||(o[r]=e[r]);return o}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=t.createContext({}),l=function(e){var a=t.useContext(p),r=a;return e&&(r="function"==typeof e?e(a):n(n({},a),e)),r},d=function(e){var a=l(e.components);return t.createElement(p.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(r),m=o,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return r?t.createElement(g,n(n({ref:a},d),{},{components:r})):t.createElement(g,n({ref:a},d))}));function m(e,a){var r=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var i=r.length,n=new Array(i);n[0]=c;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,n[1]=s;for(var l=2;l<i;l++)n[l]=r[l];return t.createElement.apply(null,n)}return t.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8959:function(e,a,r){r.r(a),r.d(a,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return d},default:function(){return c}});var t=r(7462),o=r(3366),i=(r(7294),r(3905)),n=["components"],s={},p="Conceitos principais da API",l={unversionedId:"Backend/API/concepts",id:"Backend/API/concepts",title:"Conceitos principais da API",description:"A API feita para o Obraplay utiliza Django REST Framework",source:"@site/docs/Backend/API/concepts.md",sourceDirName:"Backend/API",slug:"/Backend/API/concepts",permalink:"/docs/Backend/API/concepts",editUrl:"https://github.com/ObraPlay/obraplaydocs/docs/Backend/API/concepts.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SQL: ``Linguagem de Consulta Estruturada`` ou ``Linguagem de Consulta Estruturada``.",permalink:"/docs/Backend/sql"},next:{title:"Deploy",permalink:"/docs/Frontend/deploy"}},d=[{value:"Autentica\xe7\xe3o",id:"autentica\xe7\xe3o",children:[{value:"Token",id:"token",children:[],level:3},{value:"Sess\xe3o",id:"sess\xe3o",children:[],level:3}],level:2},{value:"Autoriza\xe7\xf5es/Permiss\xf5es",id:"autoriza\xe7\xf5espermiss\xf5es",children:[],level:2},{value:"Serializers",id:"serializers",children:[],level:2},{value:"Models",id:"models",children:[],level:2},{value:"Parsers",id:"parsers",children:[],level:2},{value:"Pagination",id:"pagination",children:[{value:"PageNumberPagination",id:"pagenumberpagination",children:[],level:3},{value:"LimitOffsetPagination",id:"limitoffsetpagination",children:[],level:3}],level:2},{value:"Filters",id:"filters",children:[{value:"Aplicados por usu\xe1rio",id:"aplicados-por-usu\xe1rio",children:[],level:3},{value:"Aplicados por URL",id:"aplicados-por-url",children:[],level:3},{value:"Aplicados por query string",id:"aplicados-por-query-string",children:[],level:3}],level:2},{value:"Sorting",id:"sorting",children:[],level:2},{value:"Mais informa\xe7\xf5es",id:"mais-informa\xe7\xf5es",children:[],level:2}],u={toc:d};function c(e){var a=e.components,r=(0,o.Z)(e,n);return(0,i.kt)("wrapper",(0,t.Z)({},u,r,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"conceitos-principais-da-api"},"Conceitos principais da API"),(0,i.kt)("p",null,"A API feita para o Obraplay utiliza ",(0,i.kt)("a",{parentName:"p",href:"https://django-rest-framework.org"},"Django REST Framework")),(0,i.kt)("h2",{id:"autentica\xe7\xe3o"},"Autentica\xe7\xe3o"),(0,i.kt)("p",null,"O sistema possui dois tipos de autentica\xe7\xe3o, por token e por sess\xe3o.  Temos v\xe1rios pacotes, como por exemplo o Djoser."),(0,i.kt)("h3",{id:"token"},"Token"),(0,i.kt)("p",null,'A autentica\xe7\xe3o por token ser\xe1 feita utilizando o m\xe9todo POST na rota \'api/auth-token/\'\npassando os par\xe2metros "username" e "password" no header da requisi\xe7\xe3o.\nNesse m\xe9todo a autentica\xe7\xe3o n\xe3o tem tempo determinado para espira\xe7\xe3o.',(0,i.kt)("br",{parentName:"p"}),"\n","Exemplo de JSON retornado pela API:  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{"token":"99e3d92e9ece03d39970041e72fada49edbc17a6"}\n')),(0,i.kt)("p",null,"Para saber mais: ",(0,i.kt)("a",{parentName:"p",href:"https://www.django-rest-framework.org/api-guide/authentication/#tokenauthentication"},"https://www.django-rest-framework.org/api-guide/authentication/#tokenauthentication")),(0,i.kt)("h3",{id:"sess\xe3o"},"Sess\xe3o"),(0,i.kt)("p",null,"J\xe1 autentica\xe7\xe3o por sess\xe3o tem um tempo definido para espira\xe7\xe3o.",(0,i.kt)("br",{parentName:"p"}),"\n","Para fazer o login por esse m\xe9todo \xe9 utilizado a p\xe1gina '/accounts/login' e acessando pela p\xe1gina com usu\xe1rio e senha."),(0,i.kt)("p",null,"Para saber mais: ",(0,i.kt)("a",{parentName:"p",href:"https://www.django-rest-framework.org/api-guide/authentication/#sessionauthentication"},"https://www.django-rest-framework.org/api-guide/authentication/#sessionauthentication")),(0,i.kt)("h2",{id:"autoriza\xe7\xf5espermiss\xf5es"},"Autoriza\xe7\xf5es/Permiss\xf5es"),(0,i.kt)("p",null,"O sistema tem 3 tipos de perfis de usu\xe1rio. "),(0,i.kt)("h2",{id:"serializers"},"Serializers"),(0,i.kt)("p",null,"Os serializers s\xe3o uma camada para convers\xe3o. Ele traduz os dados de objetos complexos para\num formato mais amig\xe1vel para o cliente, como JSON e XML, mas tamb\xe9m converte vice-versa.",(0,i.kt)("br",{parentName:"p"}),"\n","Os arquivos de serializer est\xe3o na pasta api de cada APP Django. Nele s\xe3o inseridos regras como:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Quais campos aquela rota ir\xe1 aceitar"),(0,i.kt)("li",{parentName:"ul"},"Caso seja uma requisi\xe7\xe3o GET, qual a profundidade de dados do JSON")),(0,i.kt)("p",null,"Para saber mais: ",(0,i.kt)("a",{parentName:"p",href:"https://www.django-rest-framework.org/api-guide/serializers/#modelserializer"},"https://www.django-rest-framework.org/api-guide/serializers/#modelserializer")),(0,i.kt)("h2",{id:"models"},"Models"),(0,i.kt)("p",null,"Modelos s\xe3o representa\xe7\xf5es de dados que s\xe3o usados por v\xe1rios lugares do sistema. Um dos utilit\xe1rios\nque mais usa os models \xe9 o utilit\xe1rio migrate onde cria/atualiza as tabelas no banco de dados.\nEsses models s\xe3o definidos no arquivo models.py de cada APP Django. "),(0,i.kt)("p",null,"Para saber mais: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.djangoproject.com/en/4.0/topics/db/models/"},"https://docs.djangoproject.com/en/4.0/topics/db/models/")),(0,i.kt)("h2",{id:"parsers"},"Parsers"),(0,i.kt)("p",null,"Parsers s\xe3o usados para definir para qual tipo de dado Python o conte\xfado da requisi\xe7\xe3o\nser\xe1 representado dependendo do valor da propriedade HTTP ",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Type"),".",(0,i.kt)("br",{parentName:"p"}),"\n","Na API do Obra Play n\xe3o ser\xe1 utilizado XML."),(0,i.kt)("h2",{id:"pagination"},"Pagination"),(0,i.kt)("p",null,"As pagina\xe7\xf5es s\xe3o um mecanismo para selecionar apenas uma sequ\xeancia de itens de uma lista. Exitem alguns tipos de pagina\xe7\xf5es,\nentre elas: PageNumberPagination, LimitOffsetPagination, CursorPagination e Custom pagination styles"),(0,i.kt)("h3",{id:"pagenumberpagination"},"PageNumberPagination"),(0,i.kt)("p",null,"Esse tipo de pagina\xe7\xe3o permite que seja mandado o n\xfamero da p\xe1gina que deseja visualizar. Para requisitar uma p\xe1gina em espec\xedfico,\nbasta passar pela QueryString o par\xe2metro 'page' com o n\xfamero da p\xe1gina.\nNa resposta da requisi\xe7\xe3o conter\xe1 o total de registros, a lista de registros da p\xe1gina requisitada e as URLs para a p\xe1gina anterior e a posterior.  "),(0,i.kt)("p",null,"Exemplo de requisi\xe7\xe3o: ",(0,i.kt)("inlineCode",{parentName:"p"},"https://obraplay.com/api/quotations/?page=3"),"."),(0,i.kt)("p",null,"Exemplo de retorno:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "count": 1023,\n    "next": "https://obraplay.com/api/quotations/?page=3",\n    "previous": "https://obraplay.com/api/quotations/?page=5",\n    "results": [\n       \u2026\n    ]\n}\n')),(0,i.kt)("p",null,"Para saber mais: ",(0,i.kt)("a",{parentName:"p",href:"https://www.django-rest-framework.org/api-guide/pagination/#pagenumberpagination"},"https://www.django-rest-framework.org/api-guide/pagination/#pagenumberpagination")),(0,i.kt)("h3",{id:"limitoffsetpagination"},"LimitOffsetPagination"),(0,i.kt)("p",null,"O LimitOffsetPagination trabalha com quantidade de registros que ser\xe3o retornados e a partir de qual registro ser\xe1 pego essa quantidade de registros.\nNessa configura\xe7\xe3o ser\xe3o passados os par\xe2metros 'limit' para a quantidade de registros e 'offset' para o in\xedcio dos registros."),(0,i.kt)("p",null,"Exemplo de requisi\xe7\xe3o: ",(0,i.kt)("inlineCode",{parentName:"p"},"https://obraplay.com/api/quotations/?limit=100&offset=400"),"."),(0,i.kt)("p",null,"Exemplo de retorno:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "count": 1023,\n    "next": "https://obraplay.com/api/quotations/?limit=100&offset=500",\n    "previous": "https://obraplay.com/api/quotations/?limit=100&offset=300",\n    "results": [\n       \u2026\n    ]\n}\n')),(0,i.kt)("p",null,"Para saber mais: ",(0,i.kt)("a",{parentName:"p",href:"https://www.django-rest-framework.org/api-guide/pagination/#limitoffsetpagination"},"https://www.django-rest-framework.org/api-guide/pagination/#limitoffsetpagination")),(0,i.kt)("h2",{id:"filters"},"Filters"),(0,i.kt)("p",null,"Os principais tipos de filtros usados s\xe3o os aplicados por usu\xe1rio, por URL e os por par\xe2metros de query string."),(0,i.kt)("p",null,"Para saber mais: ",(0,i.kt)("a",{parentName:"p",href:"https://www.django-rest-framework.org/api-guide/filtering/"},"https://www.django-rest-framework.org/api-guide/filtering/")),(0,i.kt)("h3",{id:"aplicados-por-usu\xe1rio"},"Aplicados por usu\xe1rio"),(0,i.kt)("p",null,"Esses filtros s\xe3o aplicados a fim de retornar apenas os registros que s\xe3o relacionados ao usu\xe1rio logado. N\xe3o \xe9 um filtro par\xe2metrizavel. "),(0,i.kt)("h3",{id:"aplicados-por-url"},"Aplicados por URL"),(0,i.kt)("p",null,"Os aplicados por URL filtram o conjunto de registros por parte da URL.",(0,i.kt)("br",{parentName:"p"}),"\n","Por exemplo na URL ",(0,i.kt)("inlineCode",{parentName:"p"},"http://exemplo.com/api/items/coca-cola/"),", ser\xe1 filtrado pelo item coca-cola.   "),(0,i.kt)("h3",{id:"aplicados-por-query-string"},"Aplicados por query string"),(0,i.kt)("p",null,"Esse tipo de filtro \xe9 o mais utilizado. \xc9 passado a coluna que deseja filtrar e por qual valor.",(0,i.kt)("br",{parentName:"p"}),"\n","Por exemplo na URL ",(0,i.kt)("inlineCode",{parentName:"p"},"http://exemplo.com/api/items/item=coca-cola&type=2"),",\nser\xe1 filtrado pelo item coca-cola do tipo 2."),(0,i.kt)("h2",{id:"sorting"},"Sorting"),(0,i.kt)("p",null,"As requisi\xe7\xf5es por listas podem ser feitas informando por qual coluna deve ser ordenado. Para isso \xe9 necess\xe1rio adicionar a vari\xe1vel 'ordering' informando por qual\npropriedade deve ser ordenado.  "),(0,i.kt)("p",null,"Exemplo: ",(0,i.kt)("inlineCode",{parentName:"p"},"http://obraplay.com/api/users?ordering=username"),"  "),(0,i.kt)("p",null,"Caso deseje que a ordena\xe7\xe3o seja em ordem decresente, insira '-' no come\xe7o do nome da propriedade:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"http://obraplay.com/api/users?ordering=-username")),(0,i.kt)("p",null,"Para multiplas ordena\xe7\xf5es, insira as colunas separando-as por virgula:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"http://obraplay.com/api/users?ordering=firstname,lastname")),(0,i.kt)("p",null,"Para saber mais: ",(0,i.kt)("a",{parentName:"p",href:"https://www.django-rest-framework.org/api-guide/filtering/#orderingfilter"},"https://www.django-rest-framework.org/api-guide/filtering/#orderingfilter")),(0,i.kt)("h2",{id:"mais-informa\xe7\xf5es"},"Mais informa\xe7\xf5es"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.django-rest-framework.org/"},"https://www.django-rest-framework.org/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.djangoproject.com/en/4.0/"},"https://docs.djangoproject.com/en/4.0/"))))}c.isMDXComponent=!0}}]);