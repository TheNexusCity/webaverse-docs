(self.webpackChunk=self.webpackChunk||[]).push([[5729],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,d=f["".concat(s,".").concat(m)]||f[m]||c[m]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4751:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,metadata:()=>s,toc:()=>u,default:()=>c});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],l={id:"graves-notes-unsorted",title:"Grave's Notes - Unsorted"},s={unversionedId:"engineering/miscellaneous/graves-notes-unsorted",id:"engineering/miscellaneous/graves-notes-unsorted",isDocsHomePage:!1,title:"Web Audio Reverb Generation",description:"Supporting Material",source:"@site/../docs/engineering/miscellaneous/graves-notes-unsorted.md",sourceDirName:"engineering/miscellaneous",slug:"/engineering/miscellaneous/graves-notes-unsorted",permalink:"/docs/engineering/miscellaneous/graves-notes-unsorted",version:"current",frontMatter:{id:"graves-notes-unsorted",title:"Grave's Notes - Unsorted"},sidebar:"docs",previous:{title:"Ethereum Bot - Quick Start Guide",permalink:"/docs/engineering/bot/ethereum-bot-quickstart"},next:{title:"IPFS Backend - Quick Start Guide",permalink:"/docs/engineering/ipfs/ipfs-backend-quickstart"}},u=[{value:"Supporting Material",id:"supporting-material",children:[]},{value:"Reverb Tail Generation",id:"reverb-tail-generation",children:[{value:"Generating the tail",id:"generating-the-tail",children:[]}]},{value:"Implementation",id:"implementation",children:[]},{value:"L-system Theory",id:"l-system-theory",children:[]}],p={toc:u};function c(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"supporting-material"},"Supporting Material"),(0,a.kt)("p",null,"Article explaining convolution reverbs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://blog.gskinner.com/archives/2019/02/reverb-web-audio-api.html"},"https://blog.gskinner.com/archives/2019/02/reverb-web-audio-api.html")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/mwmwmw/SimpleSound"},"https://github.com/mwmwmw/SimpleSound")," - supporting code"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://codepen.io/mwmwmw/pen/JxMdrM"},"https://codepen.io/mwmwmw/pen/JxMdrM")," - Advanced example"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://codepen.io/mwmwmw/pen/bzadEy"},"https://codepen.io/mwmwmw/pen/bzadEy")," - Simple example")),(0,a.kt)("h2",{id:"reverb-tail-generation"},"Reverb Tail Generation"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/CppIFEp.png",alt:null})),(0,a.kt)("p",null,"Use an easing function to create the falloff"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"function easeInQuart(x: number): number {\nreturn x * x * x * x;\n}\n")),(0,a.kt)("p",null,"This should probably use the inverse square law, but is fine enough for getting setup."),(0,a.kt)("h3",{id:"generating-the-tail"},"Generating the tail"),(0,a.kt)("p",null,"lbuffer and rbuffer are parts of a buffer that will be set on the convolution nodes buffer. "),(0,a.kt)("p",null,"audioLength is the lenght of the reverb in seconds"),(0,a.kt)("p",null,"so the buffer size is the number of seconds * the sampling rate."),(0,a.kt)("p",null,"buffer size = 3 seconds * 48000hz = 144000 samples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const bufferSize = audioLength * audioContext.sampleRate\nfor(let i = 0; i < buffersize; i++) {\n    const ratio = (bufferSize - i) / bufferSize; // will be 1 at the start of the loop and 0 at the end\n    const fadeAmount = easeInQuart(ratio);\n    lBuffer[i] = (1-(2*Math.random())) * fadeAmount;\n    rBuffer[i] = (1-(2*Math.random())) * fadeAmount;\n  }\n\n")),(0,a.kt)("p",null,"The basic idea of this is to get the ratio of progress through the loop, and then use that value to apply the easing function to the generated noise so that the volume of the noise follows the easing curve (see the first diagram)"),(0,a.kt)("h2",{id:"implementation"},"Implementation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const {offset, duration} = audioSpec;\n  const audioContext = Avatar.getAudioContext();\n  const bufferSize = audioLength * audioContext.sampleRate;\n  let lBuffer = new Float32Array(bufferSize);\n  let rBuffer = new Float32Array(bufferSize);\n  for(let i = 0; i < bufferSize; i++) {\n    const ratio = (bufferSize - i) / bufferSize; // will be 1 at the start of the loop and 0 at the end\n    const fadeAmount = easeInQuart(ratio);\n    lBuffer[i] = (1-(2*Math.random())) * fadeAmount;\n    rBuffer[i] = (1-(2*Math.random())) * fadeAmount;\n  }\n  let buffer = audioContext.createBuffer(2, bufferSize, audioContext.sampleRate);\n  buffer.copyToChannel(lBuffer,0);\n  buffer.copyToChannel(rBuffer,1);\n\n  let convolver = audioContext.createConvolver();\n  convolver.buffer = buffer;\n  const audioBufferSourceNode = audioContext.createBufferSource();\n  audioBufferSourceNode.buffer = soundFileAudioBuffer;\n  audioBufferSourceNode.connect(convolver);\n  convolver.connect(audioContext.destination);\n  audioBufferSourceNode.start(0, offset, duration);\n  return audioBufferSourceNode;\n  \n")),(0,a.kt)("h1",{id:"systemsalgorithms"},"Systems/Algorithms"),(0,a.kt)("h2",{id:"l-system-theory"},"L-system Theory"),(0,a.kt)("p",null,"L-systems are used to effiently store and generate fractals like plants and crystal structures. This will be an effective way to generate plants for the game world. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://algorithmicbotany.org/papers/abop/abop.pdf"},"The book on L-systems")),(0,a.kt)("li",{parentName:"ul"},"Extremely succinct and informative video by Danial Shiffman ",(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=f6ra024-ASY"},"https://www.youtube.com/watch?v=f6ra024-ASY")),(0,a.kt)("li",{parentName:"ul"},"Example code of a simple L system (D.Shiffman)",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("a",{parentName:"li",href:"https://github.com/nature-of-code/noc-examples-processing/blob/master/chp08_fractals/NOC_8_08_SimpleLSystem/NOC_8_08_SimpleLSystem.pde"},"https://github.com/nature-of-code/noc-examples-processing/blob/master/chp08_fractals/NOC_8_08_SimpleLSystem/NOC_8_08_SimpleLSystem.pde")),(0,a.kt)("li",{parentName:"ul"},"More complex version (D.Shiffman)\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nature-of-code/noc-examples-processing/tree/master/chp08_fractals/NOC_8_09_LSystem"},"https://github.com/nature-of-code/noc-examples-processing/tree/master/chp08_fractals/NOC_8_09_LSystem"))))}c.isMDXComponent=!0}}]);