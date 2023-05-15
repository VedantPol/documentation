"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5987],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(n),m=a,b=c["".concat(d,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(b,o(o({ref:t},p),{},{components:n})):r.createElement(b,o({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7194:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={title:"Links in Sidebar",id:"adding-links",sidebar_label:"Links",description:"A detailed overview of adding links in Sidebar of TCET Open Source Website",keywords:["tcet","open-source","software"]},o=void 0,s={unversionedId:"projects/docs-site/sidebar/adding-links",id:"projects/docs-site/sidebar/adding-links",title:"Links in Sidebar",description:"A detailed overview of adding links in Sidebar of TCET Open Source Website",source:"@site/docs/projects/docs-site/sidebar/adding-links.md",sourceDirName:"projects/docs-site/sidebar",slug:"/projects/docs-site/sidebar/adding-links",permalink:"/docs/projects/docs-site/sidebar/adding-links",draft:!1,editUrl:"https://github.com/tcet-opensource/documentation/edit/main/docs/projects/docs-site/sidebar/adding-links.md",tags:[],version:"current",lastUpdatedBy:"Himanshu Agarwal",lastUpdatedAt:1682162494,formattedLastUpdatedAt:"Apr 22, 2023",frontMatter:{title:"Links in Sidebar",id:"adding-links",sidebar_label:"Links",description:"A detailed overview of adding links in Sidebar of TCET Open Source Website",keywords:["tcet","open-source","software"]},sidebar:"docs",previous:{title:"Category",permalink:"/docs/projects/docs-site/sidebar/adding-categories"},next:{title:"Items",permalink:"/docs/projects/docs-site/sidebar/adding-items"}},d={},l=[{value:"Adding links in our sidebars:",id:"adding-links-in-our-sidebars",level:3}],p={toc:l},c="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"adding-links-in-our-sidebars"},"Adding links in our sidebars:"),(0,a.kt)("p",null,"To add links to our categories in the sidebar for our project documentation, we followed these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Opening the ",(0,a.kt)("inlineCode",{parentName:"p"},"sidebars.js")," file where our sidebar configuration is defined.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Next, we headed towards the category where we wanted to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"link"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Under the ",(0,a.kt)("inlineCode",{parentName:"p"},"category")," label, we added a ",(0,a.kt)("inlineCode",{parentName:"p"},"link")," property with an object containing the following keys:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type"),": This should be set to 'doc' if you want to link to another documentation page. If you want to link to an external URL, set this to 'link'."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"title"),": This should be the title that is to be displayed on the page."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"description"),": A short descrption about the project page."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"keywords"),": This will be helpful in identifying key words and provide better results on Search Function.")),(0,a.kt)("br",null),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="sidebars.js" {8-14} showLineNumbers',title:'"sidebars.js"',"{8-14}":!0,showLineNumbers:!0},"const sidebars = \n{\n    docs: \n    [\n        {\n            type: 'category',\n            label: 'Projects',\n            link:\n            {\n                type: 'generated-index',\n                title: 'Project Docs',\n                description: 'Official Documentation of all TCET Open Source projects',\n                keywords: ['documentation, open-source'],\n            },\n        },\n    ],\n    // Other sidebar properties\n}\nmodule.exports = sidebars;\n")),(0,a.kt)("p",{parentName:"li"},"We updated the keys values within the object according to our requirements.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After completing the above steps, we then moved further with defining the default page for our sidebar and also to set the nature of our sidebar in terms of ",(0,a.kt)("strong",{parentName:"p"},"Collapsibility"),"."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="sidebars.js" {5,16} showLineNumbers',title:'"sidebars.js"',"{5,16}":!0,showLineNumbers:!0},"const sidebars = \n{\n    docs: \n    [\n        'about-tcetopensource',\n        {\n            type: 'category',\n            label: 'Projects',\n            link:\n            {\n                type: 'generated-index',\n                title: 'Project Docs',\n                description: 'Official Documentation of all TCET Open Source projects',\n                keywords: ['documentation, open-source'],\n            },\n            collapsed: false,\n        },\n    ],\n    // Other sidebar properties\n}\nmodule.exports = sidebars;\n")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We inserted the default page link at the start of our 'docs' array because we wanted that whenever someone clicks on the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Docs"))," item in our ",(0,a.kt)("a",{parentName:"p",href:"/docs/projects/docs-site/navbar/adding-items"},(0,a.kt)("strong",{parentName:"a"},"Navbar")),", they should see the ",(0,a.kt)("a",{parentName:"p",href:"/docs/projects/docs-site/about-docs"},(0,a.kt)("strong",{parentName:"a"},"About Us"))," page of ",(0,a.kt)("a",{parentName:"p",href:"https://opensource.tcetmumbai.in/"},(0,a.kt)("strong",{parentName:"a"},"TCET Open Source")),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We updated the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"collapsed")," property to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," as we dont wanted our main category to hide everytime someone redirects to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Docs")," section."))),(0,a.kt)("table",{parentName:"li"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"collapsed: true"),(0,a.kt)("th",{parentName:"tr",align:"center"},"collapsed: false"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("img",{alt:"collapsed: true",src:n(4035).Z,width:"364",height:"299"})),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("img",{alt:"collapsed: false",src:n(2982).Z,width:"350",height:"293"}))))),(0,a.kt)("p",{parentName:"li"},"You can clearly see the difference between the two properties when their values are updated respectively."))),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Now that we briefed you about how we added links in the sidebars of our ",(0,a.kt)("a",{parentName:"em",href:"https://opensource.tcetmumbai.in/"},(0,a.kt)("strong",{parentName:"a"},"TCET Open Source")),", the next step is to add some ",(0,a.kt)("a",{parentName:"em",href:"adding-items"},(0,a.kt)("strong",{parentName:"a"},"items to our categories"))," in the sidebar. This will allow us to organize our documentation and make it easier for users to navigate through the different sections of our website.")))}u.isMDXComponent=!0},2982:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/collapsed-false-b58b860cdee10a715bcbbe0fe9a7fa0c.png"},4035:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/collapsed-true-1bf9279fafcdb6b1833261b395c27ae3.png"}}]);