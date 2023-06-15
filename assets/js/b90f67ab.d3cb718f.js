"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4039],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4333:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={title:"Getting Started",id:"getting-started",description:"Setup the project on your local machine",sidebar_label:"Getting Started",keywords:["astro","install","local","node","approach"]},o=void 0,i={unversionedId:"projects/tnp-website/getting-started",id:"projects/tnp-website/getting-started",title:"Getting Started",description:"Setup the project on your local machine",source:"@site/docs/projects/tnp-website/getting-started.md",sourceDirName:"projects/tnp-website",slug:"/projects/tnp-website/getting-started",permalink:"/docs/projects/tnp-website/getting-started",draft:!1,editUrl:"https://github.com/tcet-opensource/documentation/edit/main/docs/projects/tnp-website/getting-started.md",tags:[],version:"current",lastUpdatedBy:"Himanshu Agarwal",lastUpdatedAt:1686811529,formattedLastUpdatedAt:"Jun 15, 2023",frontMatter:{title:"Getting Started",id:"getting-started",description:"Setup the project on your local machine",sidebar_label:"Getting Started",keywords:["astro","install","local","node","approach"]},sidebar:"docs",previous:{title:"Directory Structure",permalink:"/docs/projects/tnp-website/directory-structure"},next:{title:"Tech Stacks",permalink:"/docs/projects/tnp-website/frontend/tech-stacks"}},s={},p=[{value:"Steps to run the site on your local system:",id:"steps-to-run-the-site-on-your-local-system",level:3},{value:"Install Git in your computer",id:"install-git-in-your-computer",level:3},{value:"Clone the repo",id:"clone-the-repo",level:3},{value:"Install NodeJS",id:"install-nodejs",level:3},{value:"Open the folder in VS Code",id:"open-the-folder-in-vs-code",level:3},{value:"Install Important Packages/Dependencies",id:"install-important-packagesdependencies",level:3},{value:"Commands used to run locally",id:"commands-used-to-run-locally",level:3},{value:"Steps to run after a Pull / Merge:",id:"steps-to-run-after-a-pull--merge",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The TCET Training and Placment page is built using AstroJS, an all-in-one web framework designed for speed.")),(0,r.kt)("h3",{id:"steps-to-run-the-site-on-your-local-system"},"Steps to run the site on your local system:"),(0,r.kt)("p",null,"These are the steps you need to follow to get this site on your local system."),(0,r.kt)("h3",{id:"install-git-in-your-computer"},"Install Git in your computer"),(0,r.kt)("p",null,"Follow these steps to install git in your computer."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("a",{parentName:"li",href:"https://git-scm.com/downloads"},"https://git-scm.com/downloads"),"."),(0,r.kt)("li",{parentName:"ol"},"Click on Windows. Download should start."),(0,r.kt)("li",{parentName:"ol"},"Go to downloads and install the package.")),(0,r.kt)("h3",{id:"clone-the-repo"},"Clone the repo"),(0,r.kt)("p",null,"Open Git Bash in any folder and paste the following command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/tcet-opensource/tnp-website\n")),(0,r.kt)("h3",{id:"install-nodejs"},"Install NodeJS"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download"},"https://nodejs.org/en/download")),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("b",null,"Current"),"."),(0,r.kt)("li",{parentName:"ol"},"Download the 64-bit .msi version. Follow the steps and install NodeJS.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"It is important to have NodeJS in your system")),(0,r.kt)("h3",{id:"open-the-folder-in-vs-code"},"Open the folder in VS Code"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/?dv=win32user"},"VS Code")," if not installed. "),(0,r.kt)("li",{parentName:"ol"},"Open Windows Terminal in the folder you have cloned the repo, as done in ",(0,r.kt)("a",{parentName:"li",href:"#clone-the-repo"},"step 2"),".")),(0,r.kt)("h3",{id:"install-important-packagesdependencies"},"Install Important Packages/Dependencies"),(0,r.kt)("p",null,"Install yarn globally "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g yarn\n")),(0,r.kt)("p",null,"You can make changes to your respective files and changes will be shown once you have saved the file."),(0,r.kt)("h3",{id:"commands-used-to-run-locally"},"Commands used to run locally"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"To run the commands, make sure that you have installed yarn globally first."),(0,r.kt)("li",{parentName:"ol"},"All commands are run from the root of the project, from a terminal")),(0,r.kt)("p",null,"Here are a set of commands used to run locally:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Command")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Action")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"yarn")),(0,r.kt)("td",{parentName:"tr",align:null},"Installs dependencies")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"yarn dev")),(0,r.kt)("td",{parentName:"tr",align:null},"Starts local dev server at ",(0,r.kt)("inlineCode",{parentName:"td"},"localhost:3000"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"yarn build")),(0,r.kt)("td",{parentName:"tr",align:null},"Build your production site to ",(0,r.kt)("inlineCode",{parentName:"td"},"./dist/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"yarn preview")),(0,r.kt)("td",{parentName:"tr",align:null},"Preview your build locally, before deploying")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"yarn astro ...")),(0,r.kt)("td",{parentName:"tr",align:null},"Run CLI commands like ",(0,r.kt)("inlineCode",{parentName:"td"},"astro add"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"astro check"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"yarn astro --help")),(0,r.kt)("td",{parentName:"tr",align:null},"Get help using the Astro CLI")))),(0,r.kt)("h3",{id:"steps-to-run-after-a-pull--merge"},"Steps to run after a Pull / Merge:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"To install all dependencies")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"To run local dev environment")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn dev\n")))}u.isMDXComponent=!0}}]);