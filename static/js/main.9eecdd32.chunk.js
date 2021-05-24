(this.webpackJsonpmd2practice=this.webpackJsonpmd2practice||[]).push([[0],{492:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"getAssessmentInfos",(function(){return E})),n.d(r,"extractAssessmentInfos",(function(){return k}));var a,c,i=n(0),l=n.n(i),s=n(117),o=n.n(s),u=(n(64),n(8)),d=n(2),h=n(25),f=n(26);!function(e){e.IDLE="IDLE",e.CORRECT="CORRECT",e.WRONG="WRONG"}(a||(a={})),function(e){e[e.SINGLE=0]="SINGLE",e[e.MULTIPLE=1]="MULTIPLE"}(c||(c={}));var m,g=function(){function e(t,n,r,a,i){Object(h.a)(this,e),this.challengeType=void 0,this.index=void 0,this.question=void 0,this.choices=void 0,this.answers=void 0,this.explanation=void 0,this.challengeType=a.length>1?c.MULTIPLE:c.SINGLE,this.index=t,this.question=n,this.choices=r,this.answers=a,this.explanation=i}return Object(f.a)(e,[{key:"getChallengeType",value:function(){return this.challengeType}},{key:"getIndex",value:function(){return this.index}},{key:"getQuestion",value:function(){return this.question}},{key:"setQuestion",value:function(e){this.question=e}},{key:"getChoices",value:function(){return this.choices}},{key:"setChoices",value:function(e){this.choices=e}},{key:"getAnswers",value:function(){return this.answers}},{key:"getExplanation",value:function(){return this.explanation}},{key:"setExplanation",value:function(e){this.explanation=e}},{key:"arrayEquals",value:function(e,t){var n=e.sort(),r=t.sort();return n.length===r.length&&n.every((function(e,t){return e===r[t]}))}}]),e}(),p=n(16),b=function(){function e(t){Object(h.a)(this,e),this.challenges=void 0,this.challenges=this.sanitizeChallenges(t)}return Object(f.a)(e,[{key:"getChallenges",value:function(){return this.challenges}},{key:"setChallenge",value:function(e){var t=e.getIndex();this.challenges.set(t,e)}},{key:"sanitizeChallenges",value:function(e){var t=Object(p.b)();return e.forEach((function(e){""!==e.getQuestion()&&e.getIndex()>0&&e.getAnswers().length>0&&e.getChoices().length>0&&(t=t.set(e.getIndex(),e))})),t}}]),e}(),j=function(){function e(t){Object(h.a)(this,e),this.content=void 0,this.challengeRawPartition=void 0,this.content=t,this.challengeRawPartition=this.partitionContent(t)}return Object(f.a)(e,[{key:"getContent",value:function(){return this.content}},{key:"getChallengeRawPartition",value:function(){if(void 0===this.challengeRawPartition)throw ReferenceError("Fail to get challenge raw partition.");return this.challengeRawPartition}},{key:"partitionContent",value:function(e){var t=e.match(/#{3,5}\s{0,1}Q{0,1}\.{0,1}\s{0,1}\d+(.|\n)*/g);if(null===t)throw new ReferenceError("Fail to partition content.");var n=(e=t[0]).split(/#{3,5}\s{0,1}/g);return n=n.filter((function(e){return e.split("\n").length>4})).map(x)}},{key:"extractQuestionIndex",value:function(e){var t,n=null===(t=(this.extractQuestion(e).match(/Q\d+/g)||[void 0])[0])||void 0===t?void 0:t.replace("Q","");return void 0===n?-1:parseInt(n)}},{key:"extractQuestion",value:function(e){var t,n=e.split("\n");return n.some((function(e,r){return!!e.match(/-\s{0,1}\[[x{0,1}|\s]\]/i)&&(t=n.slice(0,r).join("\n"),!0)})),void 0===t&&(t=""),x(t)}},{key:"extractAnswers",value:function(e){var t=e.match(/-\s{0,1}\[[x{0,1}|\s]\]/g),n=null===t||void 0===t?void 0:t.map((function(e){return!!e.match(/\[x\]/i)}));return(null===n||void 0===n?void 0:n.map((function(e,t){return e?t:-1})).filter((function(e){return-1!==e})))||[]}},{key:"extractChoices",value:function(e){var t=this.extractQuestion(e),n=x(e.replace(t,"")).trim().split(/-\s{0,1}\[[x{0,1}|\s]\]/gi).filter((function(e){return e})).map((function(e){return e.replace(/<{2,3}-{0,3}\s{0,1}CORRECT.*/gi,"")})).map((function(e){return e.replace(/<{2,3}-{0,3}\s{0,1}WRONG.*/gi,"")}));n=n.map(x);var r=this.extractExplanation(e),a=n[n.length-1].replace(r||"","");return n[n.length-1]=a,n}},{key:"extractExplanation",value:function(e){var t=this.extractQuestion(e),n=x(e.replace(t,"")).trim().split(/-\s{0,1}\[[x{0,1}|\s]\]/gi).filter((function(e){return e})),r=n[n.length-1].match(/\n{2,}.*$/g),a=r?r[0]:"";return""===a&&n.some((function(e){var t=e.match(/<{2,3}-{0,3}\s{0,1}CORRECT.*/i);return!!t&&(a=t[0].replace(/<{2,3}-{0,3}\s{0,1}CORRECT/i,""),!0)})),""!==a?x(a):void 0}},{key:"getQuestionCount",value:function(){var e;return(null===(e=this.challengeRawPartition)||void 0===e?void 0:e.length)||0}},{key:"getChallenge",value:function(e){var t=this.extractQuestionIndex(e),n=this.extractQuestion(e).replace(/Q\d+.\s{0,1}/g,""),r=this.extractAnswers(e),a=this.extractChoices(e),c=this.extractExplanation(e);return new g(t,n,a,r,c)}},{key:"getQuiz",value:function(){var e=this;if(void 0===this.challengeRawPartition)throw ReferenceError("Fail to get question.");var t=Object(p.b)();return this.challengeRawPartition.forEach((function(n){var r=e.getChallenge(n);t=t.set(r.getIndex(),r)})),new b(t)}}]),e}(),x=function(e){return e.trim().replace(/^\n+|\n+$/g,"")},v=n(60),O=n.n(v),y=n(118),w=n(119),C=n.n(w),E=function(){var e=Object(y.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",C.a.get("https://raw.githubusercontent.com/Ebazhanov/linkedin-skill-assessments-quizzes/master/README.md").then((function(e){var t=e.data;return k(t)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(e){var t=e.match(/\| \[Adobe(.|\n)*\|/g);if(null===t)throw ReferenceError("Fail to fetch list of assessment.");return t[0].split("\n").map((function(e){var t,n=(e.match(/\[(.{1,40})\]/g)||["no-title"])[0],r=(e.match(/[a-zA-Z\-()/%1-9.]+.md/g)||[null])[0],a=parseInt((e.match(/=>(.*)questions/i)||["0","0"])[1]);return{title:n,url:r="https://raw.githubusercontent.com/Ebazhanov/linkedin-skill-assessments-quizzes/master/"+(r=(null===(t=r)||void 0===t?void 0:t.replace(/^\(/g,""))||null),questionCount:a}})).filter((function(e){return"no-title"!==e.title}))},N=n(30),L=n(1),I=function(e){var t=e.assessmentInfo.title.replace(/\[|\]/g,""),n=e.assessmentInfo.url;return Object(L.jsx)(N.b,{to:"/practice/".concat(btoa(n)),children:Object(L.jsx)("div",{className:"p-2 m-1 bg-secondary-500 dark:bg-gray-800 font-bold text-gray-100 rounded-sm shadow text-sm flex justify-between",children:Object(L.jsx)("span",{children:t})})})},R=function(e){var t,n=Object(i.useState)(),a=Object(u.a)(n,2),c=a[0],l=a[1],s=Object(i.useState)(),o=Object(u.a)(s,2),d=o[0],h=o[1];Object(i.useEffect)((function(){r.getAssessmentInfos().then((function(e){l(e)}))}),[]);return Object(L.jsxs)("div",{className:"flex flex-col justify-center ".concat(e.className),children:[Object(L.jsx)("div",{id:"searchbar-for-linkedin",className:"w-full h-10 pl-3 pr-2 bg-gray-50 dark:bg-gray-800 border-2 rounded-full flex justify-between items-center relative",children:Object(L.jsx)("input",{type:"search",name:"filter-assessment",id:"filter-assessment",autoComplete:"off",placeholder:"Filter LinkedIn Assessment",className:"bg-gray-50 dark:bg-gray-800 w-full outline-none focus:outline-none active:outline-none",onChange:function(e){return function(e){h(e.target.value)}(e)}})}),Object(L.jsx)("div",{id:"linkedin-assessment-lists",className:"mt-4",children:null===(t=null===c||void 0===c?void 0:c.filter((function(e){return e.title.toLowerCase().includes(d||"")})))||void 0===t?void 0:t.map((function(e,t){return Object(L.jsx)(I,{assessmentInfo:e},t)}))})]})},P="light",T=l.a.createContext({theme:P,setTheme:function(e){return console.log("setTheme function is null. ".concat(e))}}),S=function(e){var t=e.children,n=l.a.useState(function(){if("undefined"!==typeof window&&window.localStorage){var e=window.localStorage.getItem("color-theme");if("string"===typeof e)return e;if(window.matchMedia("(prefers-color-scheme: dark)").matches)return"dark"}return P}()),r=Object(u.a)(n,2),a=r[0],c=r[1],i=function(e){var t=window.document.documentElement,n="dark"===e;t.classList.remove(n?"light":"dark"),t.classList.add(e),localStorage.setItem("color-theme",e)};return a&&i(a),l.a.useEffect((function(){i(a)}),[a]),Object(L.jsx)(T.Provider,{value:{theme:a,setTheme:c},children:t})},M=function(){var e=Object(d.e)(),t=Object(i.useContext)(T),n=t.theme,r=t.setTheme;return Object(L.jsxs)("div",{className:"z-50 flex justify-between md:px-10 bg-gray-100 dark:bg-gray-900",children:[Object(L.jsxs)("button",{className:"m-2 p-2 text-lg uppercase font-bold focus:outline-none",onClick:function(){return e.push("/")},children:[Object(L.jsx)("span",{className:"text-primary-500",children:"MD2"}),"Practice"]}),Object(L.jsx)("div",{className:"m-2 my-4",children:Object(L.jsx)("button",{className:"p-2 text-md bold border-4 rounded-lg capitalize border-gray-700 dark:border-gray-100 focus:outline-none",onClick:function(){r("dark"===n?"light":"dark")},children:"".concat("dark"===n?"light":"dark"," Theme")})})]})},z=n.p+"static/media/questionnaire.da1f0384.svg";function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function F(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function A(e,t){var n=e.title,r=e.titleId,a=F(e,["title","titleId"]);return i.createElement("svg",Q({xmlns:"http://www.w3.org/2000/svg",height:"511pt",viewBox:"-53 1 511 511.99906",width:"511pt",ref:t,"aria-labelledby":r},a),n?i.createElement("title",{id:r},n):null,m||(m=i.createElement("g",{id:"surface1"},i.createElement("path",{d:"M 276.410156 3.957031 C 274.0625 1.484375 270.84375 0 267.507812 0 L 67.777344 0 C 30.921875 0 0.5 30.300781 0.5 67.152344 L 0.5 444.84375 C 0.5 481.699219 30.921875 512 67.777344 512 L 338.863281 512 C 375.71875 512 406.140625 481.699219 406.140625 444.84375 L 406.140625 144.941406 C 406.140625 141.726562 404.65625 138.636719 402.554688 136.285156 Z M 279.996094 43.65625 L 364.464844 132.328125 L 309.554688 132.328125 C 293.230469 132.328125 279.996094 119.21875 279.996094 102.894531 Z M 338.863281 487.265625 L 67.777344 487.265625 C 44.652344 487.265625 25.234375 468.097656 25.234375 444.84375 L 25.234375 67.152344 C 25.234375 44.027344 44.527344 24.734375 67.777344 24.734375 L 255.261719 24.734375 L 255.261719 102.894531 C 255.261719 132.945312 279.503906 157.0625 309.554688 157.0625 L 381.40625 157.0625 L 381.40625 444.84375 C 381.40625 468.097656 362.113281 487.265625 338.863281 487.265625 Z M 338.863281 487.265625 "}),i.createElement("path",{d:"M 305.101562 401.933594 L 101.539062 401.933594 C 94.738281 401.933594 89.171875 407.496094 89.171875 414.300781 C 89.171875 421.101562 94.738281 426.667969 101.539062 426.667969 L 305.226562 426.667969 C 312.027344 426.667969 317.59375 421.101562 317.59375 414.300781 C 317.59375 407.496094 312.027344 401.933594 305.101562 401.933594 Z M 305.101562 401.933594 "}),i.createElement("path",{d:"M 140 268.863281 L 190.953125 214.074219 L 190.953125 349.125 C 190.953125 355.925781 196.519531 361.492188 203.320312 361.492188 C 210.125 361.492188 215.6875 355.925781 215.6875 349.125 L 215.6875 214.074219 L 266.640625 268.863281 C 269.113281 271.457031 272.332031 272.820312 275.667969 272.820312 C 278.636719 272.820312 281.730469 271.707031 284.078125 269.480469 C 289.027344 264.78125 289.398438 256.988281 284.699219 252.042969 L 212.226562 174.253906 C 209.875 171.78125 206.660156 170.296875 203.199219 170.296875 C 199.734375 170.296875 196.519531 171.78125 194.171875 174.253906 L 121.699219 252.042969 C 117 256.988281 117.371094 264.902344 122.316406 269.480469 C 127.511719 274.179688 135.300781 273.808594 140 268.863281 Z M 140 268.863281 "}))))}var U=i.forwardRef(A),q=(n.p,function(e){return Object(L.jsxs)("span",{className:"flex justify-center ml-2 w-1/3 p-1 text-gray-100 bg-secondary-500 shadow rounded-full border-2 border-gray-300 dark:border-gray-100",children:[Object(L.jsxs)("label",{htmlFor:"file-upload",className:"flex justify-center cursor-pointer items-center w-full",children:[Object(L.jsx)("p",{className:"font-semibold text-xs hidden lg:block mr-1",children:"Upload File"}),Object(L.jsx)(U,{className:"fill-current text-gray-100",width:"24px",height:"24px"})]}),Object(L.jsx)("input",{className:"hidden",id:"file-upload",type:"file",name:"file-upload",onChange:e.handleFileUpload})]})}),D=function(){var e=Object(d.e)(),t=Object(i.useState)(""),n=Object(u.a)(t,2),r=n[0],a=n[1],c=function(){r?e.push({pathname:"/practice/".concat(btoa(r)),state:{content:"",inputType:"URL"}}):alert("Key in URL")};return Object(L.jsxs)("div",{children:[Object(L.jsx)(M,{}),Object(L.jsx)("section",{className:"mt-10",children:Object(L.jsxs)("div",{className:"flex justify-around px-10",children:[Object(L.jsxs)("div",{className:"flex flex-col w-1/2 justify-center justify-items-center text-center",children:[Object(L.jsx)("span",{className:"text-md md:text-4xl lg:text-8xlmd:text-lg font-bold",children:"Simple Practice Test Engine"}),Object(L.jsx)("span",{className:"text-xs md:text-2xl lg:text-6xlmd:text-lg fond-semibold text-gray-400",children:"Convert MD File to Q&A for Practice"})]}),Object(L.jsx)("div",{className:"flex justify-center justify-items-center text-center",children:Object(L.jsx)("img",{className:"w-full h-full",src:z,alt:"questionnaire-logo"})})]})}),Object(L.jsx)("section",{className:"md:w-2/3 md:m-auto",children:Object(L.jsxs)("div",{className:"flex flex-col mx-10 my-20 justify-center justify-items-center",children:[Object(L.jsxs)("div",{className:"flex",children:[Object(L.jsxs)("div",{className:"w-full h-10 pl-3 pr-2 bg-gray-50 dark:bg-gray-800 border-2 rounded-full flex justify-between items-center relative",children:[Object(L.jsx)("input",{onChange:function(e){return a(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&c()},value:r,type:"search",name:"md-url",autoComplete:"off",id:"md-url-submit",placeholder:"URL or MD File Upload",className:"bg-gray-50 dark:bg-gray-800 w-full outline-none focus:outline-none active:outline-none"}),Object(L.jsx)("button",{onClick:c,type:"submit","aria-label":"url-button",className:"ml-1 outline-none focus:outline-none active:outline-none",children:Object(L.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(L.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"})})})]}),Object(L.jsx)(q,{handleFileUpload:function(t){if(t.target.files){var n=t.target.files[0];a("File Selected: ".concat(n.name)),n.text().then((function(t){e.push({pathname:"/practice",state:{content:t,inputType:"FILE"}})}))}}})]}),Object(L.jsx)("div",{className:"text-lg uppercase text-center my-2 pb-2 border-b-2 border-primary-700",children:"OR"}),Object(L.jsxs)("div",{className:"mt-4 font-bold flex justify-center",children:[Object(L.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"animate-bounce mr-2 h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:Object(L.jsx)("path",{fillRule:"evenodd",d:"M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z",clipRule:"evenodd"})}),Object(L.jsx)("span",{className:"text-xs md:text-sm",children:"LinkedIn Assessment Practice"}),Object(L.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"animate-bounce ml-2 h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:Object(L.jsx)("path",{fillRule:"evenodd",d:"M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z",clipRule:"evenodd"})})]}),Object(L.jsx)(R,{className:"mt-4"})]})})]})},G=n(27),B=n(63),W=i.createContext(void 0),Z=i.createContext(void 0);var V,K,$,H,J,X,_,Y,ee,te,ne,re,ae,ce,ie,le,se=function(e,t){switch(t.type){case"submitAnswer":var n=null,r=e.session,c=t.challengeIdx,i=e.practice,l=null===i||void 0===i?void 0:i.getChallenges().get(c);if(void 0===l)throw new Error("Practice object is null or undefined");return n=function(e,t){var n,r={},a=Object(B.a)(e);try{for(a.s();!(n=a.n()).done;){var c=n.value;r[c+typeof c]=1}}catch(d){a.e(d)}finally{a.f()}var i,l=Object(B.a)(t);try{for(l.s();!(i=l.n()).done;){var s=i.value,o=s+typeof s;if(!r[o])return!1;r[o]=2}}catch(d){l.e(d)}finally{l.f()}for(var u in r)if(1===r[u])return!1;return!0}(l.getAnswers(),t.selected)?r.set(c,{status:a.CORRECT,selected:t.selected}):r.set(c,{status:a.WRONG,selected:t.selected}),Object(G.a)(Object(G.a)({},e),{},{session:n});default:throw new Error("Unhandled action type")}},oe=function(e){var t=e.children,n=e.practice,r=Object(p.a)();n.getChallenges().forEach((function(e,t){return r=r.set(t,{status:a.IDLE,selected:[]})}));var c=i.useReducer(se,{practice:n,session:r}),l=Object(u.a)(c,2),s=l[0],o=l[1];return Object(L.jsx)(W.Provider,{value:s,children:Object(L.jsx)(Z.Provider,{value:o,children:t})})},ue=function(){var e=i.useContext(W);if(void 0===e)throw new Error("usePracticeState must be used within a PracticeProvider");return e},de=n(121),he=n(122),fe=n.n(he),me=n(496),ge=n(495),pe={code:function(e){var t=e.inline,n=e.className,r=e.children,a=Object(de.a)(e,["inline","className","children"]),c=/language-(\w+)/.exec(n||"");return!t&&c?Object(L.jsx)(me.a,Object(G.a)({className:"".concat(n," pointer-events-auto"),style:ge.a,language:c[1],PreTag:"div",children:String(r).replace(/\n$/,"")},a)):Object(L.jsx)("code",Object(G.a)({className:"".concat(n),children:r},a))}},be=function(e){return Object(L.jsx)(fe.a,{components:pe,children:e.content})},je=l.a.memo(be),xe=function(e){var t,n=e.challenge,r=n.getIndex(),l=n.getChallengeType(),s=ue(),o=function(){var e=i.useContext(Z);if(void 0===e)throw new Error("usePracticeDispatch must be used within a PracticeProvider");return e}(),d=Object(p.a)();n.getChoices().forEach((function(e,t){return d.set(t,!1)}));var h=Object(i.useState)(Object(p.a)(d)),f=Object(u.a)(h,2),m=f[0],g=f[1],b=null===(t=s.session.get(r))||void 0===t?void 0:t.status,j=function(e){var t=parseInt(e.target.value);if(b===a.IDLE)switch(l){case c.SINGLE:g(m.set(t,!0));break;case c.MULTIPLE:g((function(e){return e.set(t,!e.get(t))}))}},x=function(e){switch(l){case c.SINGLE:case c.MULTIPLE:return m.get(e)||!1}},v=function(e){return b===a.IDLE?"":n.getAnswers().includes(e)?"bg-gradient-to-r from-green-500 pointer-events-none":b===a.WRONG&&m.get(e)?"bg-gradient-to-r from-red-500 pointer-events-none":"pointer-events-none"};return Object(L.jsxs)("div",{className:"block p-2 text-xs mx-10 my-4 md:text-base border rounded-lg shadow dark:bg-gray-800",children:[Object(L.jsx)("div",{className:"border-primary-400 border-b-2 p-2 pb-4 overflow-x-auto",children:Object(L.jsx)(je,{content:"Q".concat(n.getIndex(),". ").concat(n.getQuestion())})}),Object(L.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=[];switch(l){case c.SINGLE:case c.MULTIPLE:t=m.filter((function(e){return e})).keySeq().toArray(),o({type:"submitAnswer",challengeIdx:r,selected:t})}},children:[Object(L.jsx)("div",{className:"flex-col my-5",role:"group",children:n.getChoices().map((function(e,t){return Object(L.jsx)(ve,{className:"flex p-2 rounded-l-full ".concat(v(t)),choice:e,inputType:l===c.SINGLE?"radio":"checkbox",inputChecked:x(t),inputValue:t,handleOnValueChanged:j},t)}))}),Object(L.jsx)("button",{className:"block p-2 font-bold uppercase transition duration-200 ease-in-out ".concat(b===a.IDLE?"bg-primary-400":b===a.CORRECT?"bg-green-400 pointer-events-none":b===a.WRONG?"bg-red-400 pointer-events-none":void 0," text-gray-100 rounded-lg m-1 transform xl:hover:-translate-y-1 xl:hover:scale-110 xl:hover:bg-primary-600 focus:outline-none"),type:"submit",children:"CHECK"})]})]})},ve=l.a.memo((function(e){return Object(L.jsx)("div",{className:e.className,children:Object(L.jsxs)("label",{className:"flex w-full items-center overflow-x-auto",children:[Object(L.jsx)("input",{type:e.inputType,name:"choices",value:e.inputValue,checked:e.inputChecked,onChange:e.handleOnValueChanged}),Object(L.jsx)("span",{className:"w-full mx-2",children:Object(L.jsx)(je,{content:e.choice})})]})})})),Oe=l.a.memo(xe);function ye(){return(ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function we(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Ce(e,t){var n=e.title,r=e.titleId,a=we(e,["title","titleId"]);return i.createElement("svg",ye({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512.005 512.005",style:{enableBackground:"new 0 0 512.005 512.005"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},a),n?i.createElement("title",{id:r},n):null,V||(V=i.createElement("g",null,i.createElement("g",null,i.createElement("path",{d:"M466.22,205.787L263.553,3.12c-4.16-4.16-10.923-4.16-15.083,0L45.804,205.787c-21.803,21.803-21.803,57.28,0,79.083 s57.28,21.803,79.083,0l77.781-77.781v251.584c0,29.397,23.936,53.333,53.333,53.333s53.333-23.936,53.333-53.333V207.088 l77.781,77.781c21.803,21.803,57.28,21.803,79.083,0C488.001,263.088,488.001,227.589,466.22,205.787z"})))),K||(K=i.createElement("g",null)),$||($=i.createElement("g",null)),H||(H=i.createElement("g",null)),J||(J=i.createElement("g",null)),X||(X=i.createElement("g",null)),_||(_=i.createElement("g",null)),Y||(Y=i.createElement("g",null)),ee||(ee=i.createElement("g",null)),te||(te=i.createElement("g",null)),ne||(ne=i.createElement("g",null)),re||(re=i.createElement("g",null)),ae||(ae=i.createElement("g",null)),ce||(ce=i.createElement("g",null)),ie||(ie=i.createElement("g",null)),le||(le=i.createElement("g",null)))}var Ee=i.forwardRef(Ce),ke=(n.p,function(){var e=ue().practice;return Object(L.jsxs)("div",{className:"dark:text-gray-100",children:[Object(L.jsx)(M,{}),Object(L.jsx)("div",{className:"flex-col justify-items-center pt-2 select-none",children:e?e.getChallenges().valueSeq().map((function(e){return Object(L.jsx)(Oe,{challenge:e},e.getIndex())})):null}),Object(L.jsx)("button",{onClick:function(){return window.scrollTo({top:0,left:0,behavior:"smooth"})},className:"bg-secondary-500 p-2 w-12 shadow rounded-full fixed bottom-5 right-5 focus:outline-none",children:Object(L.jsx)(Ee,{className:"fill-current text-white"})})]})}),Ne=l.a.memo(ke),Le=function(){var e=Object(d.e)(),t=Object(d.f)(),n=Object(d.g)().encodedUrl,r=Object(i.useState)(),a=Object(u.a)(r,2),c=a[0],l=a[1],s=function(e){try{var t=new j(e).getQuiz();if(0===t.getChallenges().size)throw Error("No Challenge Detected.");l(t)}catch(n){throw Error("Content is not in expected format.")}};return Object(i.useEffect)((function(){if(t.state&&"FILE"===t.state.inputType)s(t.state.content);else if(n){var r=atob(n);fetch(r).then((function(e){return e.text()})).then((function(e){var t=r.split("/").slice(0,-1).join("/");e=e.replace(/^!.*\((?!http)/gm,"![imagepath](".concat(t,"/")).replace("?raw=true",""),s(e)})).catch((function(){alert("fail to load practice."),e.push("/")}))}else e.push("/")}),[n,e,t]),Object(L.jsx)(L.Fragment,{children:c?Object(L.jsx)(oe,{practice:c,children:Object(L.jsx)(Ne,{})}):null})};var Ie=function(){return Object(L.jsx)(S,{children:Object(L.jsxs)(N.a,{basename:"/",children:[Object(L.jsx)(d.a,{exact:!0,path:"/",component:D}),Object(L.jsx)(d.a,{exact:!0,path:"/practice",component:Le}),Object(L.jsx)(d.a,{path:"/practice/:encodedUrl",component:Le})]})})},Re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,497)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};o.a.render(Object(L.jsx)(l.a.StrictMode,{children:Object(L.jsx)(Ie,{})}),document.getElementById("root")),Re()},64:function(e,t,n){}},[[492,1,2]]]);
//# sourceMappingURL=main.9eecdd32.chunk.js.map