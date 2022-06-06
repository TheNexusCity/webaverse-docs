(self.webpackChunk=self.webpackChunk||[]).push([[9762],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>p,kt:()=>h});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),h=i,u=d["".concat(c,".").concat(h)]||d[h]||m[h]||a;return t?r.createElement(u,o(o({ref:n},p),{},{components:t})):r.createElement(u,o({ref:n},p))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6629:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>s,metadata:()=>c,toc:()=>l,default:()=>m});var r=t(2122),i=t(9756),a=(t(7294),t(3905)),o=["components"],s={id:"vehicle-system",title:"Vehicle System"},c={unversionedId:"engineering/app/systems/vehicle-system",id:"engineering/app/systems/vehicle-system",isDocsHomePage:!1,title:"Vehicle System",description:"Importing a Vehicle",source:"@site/../docs/engineering/app/systems/vehicle-system.md",sourceDirName:"engineering/app/systems",slug:"/engineering/app/systems/vehicle-system",permalink:"/docs/engineering/app/systems/vehicle-system",version:"current",frontMatter:{id:"vehicle-system",title:"Vehicle System"},sidebar:"docs",previous:{title:"Screenshot System",permalink:"/docs/engineering/app/systems/screenshot-system"},next:{title:"Animation Baker",permalink:"/docs/engineering/app/animation-baker"}},l=[{value:"Importing a Vehicle",id:"importing-a-vehicle",children:[]},{value:"Interacting with Vehicles",id:"interacting-with-vehicles",children:[]},{value:"Defining a Vehicle",id:"defining-a-vehicle",children:[]}],p={toc:l};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"importing-a-vehicle"},"Importing a Vehicle"),(0,a.kt)("p",null,"Adding a vehicle to our scene is really easy. All you have to do is put a description in a ",(0,a.kt)("inlineCode",{parentName:"p"},".scn")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "position": [\n        -26,\n        0,\n        -2\n    ],\n    "quaternion": [\n        0,\n        0.707,\n        0,\n        0.707\n    ],\n    "start_url": "https://webaverse.github.io/hovercraft/",\n    "dynamic": true\n}\n')),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Hovercraft repo")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The Hovercraft is implemented in a separate project here: ","[Hovercraft Repo]"," (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/webaverse/hovercraft"},"https://github.com/webaverse/hovercraft"),")  "))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"interacting-with-vehicles"},"Interacting with Vehicles"),(0,a.kt)("p",null,"A player can take control of the vehicle by holding down ",(0,a.kt)("inlineCode",{parentName:"p"},"E")," when near it."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"defining-a-vehicle"},"Defining a Vehicle"),(0,a.kt)("p",null,"A vehicle ",(0,a.kt)("inlineCode",{parentName:"p"},".metaversefile")," has many options:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{   \n    "name": "hovercraft",\n    "start_url": "hovercraft.glb",\n    "components": [\n        {\n            "key": "sit",\n            "value": {\n                "subtype": "saddle",\n                "sitOffset": [0,0.6,0],\n                "walkAnimation": ["wing_2_low|Take 001|BaseLayer", "wing_2_low001|Take 001|BaseLayer", "object001|Take 001|BaseLayer"],\n                "walkAnimationHoldTime": 1,\n                "walkAnimationSpeedFactor": 0.1,\n                "speed": 0.02,\n                "damping": 0.99\n            }\n        },\n        {\n            "key": "effect2",\n            "value": {\n                "effects": [\n                    {\n                        "type": "fire",\n                        "position": [-0.8,0.5,0.1],\n                        "quaternion": [0,0,0,0]\n                    },\n                    {\n                        "type": "fire",\n                        "position": [0.8,0.5,0.1],\n                        "quaternion": [0,0,0,0]\n                    }\n                ]\n            }\n        }\n    ]\n}\n')),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The entry point is ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," as usual."))),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);