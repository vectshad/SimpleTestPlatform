(function(e){function t(t){for(var s,i,o=t[0],c=t[1],u=t[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);l&&l(t);while(p.length)p.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],s=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(s=!1)}s&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var s={},a={app:0},r=[];function i(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=s,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"column"},[e._v(" "+e._s(e.title)+" ")]),n("div",{staticClass:"column"},[n("a",{staticClass:"round",on:{click:function(t){return e.changePage("prev")}}},[e._v(" ‹")]),e._v(" "+e._s(e.page)+" "),n("a",{staticClass:"round",on:{click:function(t){return e.changePage("next")}}},[e._v(" › ")])])]),n("div",[n("Question",{attrs:{id:e.answerID,questionDesc:e.questionText,question:e.quest,answers:e.answerList,answer:e.allAnswer[e.answerID]},on:{answer:e.onAnswerClick}})],1),n("div",[n("Review",{attrs:{selectedAnswers:e.allAnswer}})],1)])},r=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"question-box"},[e._v(" "+e._s(e.questionDesc)+" ")]),n("div",{staticClass:"question-answer"},[n("div",{staticClass:"question"},[n("p",[e._v(" "+e._s(e.question)+" ")])]),n("div",{staticClass:"answer"},[n("form",[n("label",{staticClass:"container"},[e._v(e._s(e.answers[0])+" "),n("input",{staticClass:"button",attrs:{type:"radio",name:"radio",value:"A"},on:{click:function(t){return e.onChecked(t)}}}),n("span",{staticClass:"checkmark"},[e._v("A")])]),n("label",{staticClass:"container"},[e._v(" "+e._s(e.answers[1])+" "),n("input",{staticClass:"button",attrs:{type:"radio",name:"radio",value:"B"},on:{click:function(t){return e.onChecked(t)}}}),n("span",{staticClass:"checkmark"},[e._v("B")])]),n("label",{staticClass:"container"},[e._v(" "+e._s(e.answers[2])+" "),n("input",{staticClass:"button",attrs:{type:"radio",name:"radio",value:"C"},on:{click:function(t){return e.onChecked(t)}}}),n("span",{staticClass:"checkmark"},[e._v("C")])]),n("label",{staticClass:"container"},[e._v(" "+e._s(e.answers[3])+" "),n("input",{staticClass:"button",attrs:{type:"radio",name:"radio",value:"D"},on:{click:function(t){return e.onChecked(t)}}}),n("span",{staticClass:"checkmark"},[e._v("D")])])])])])])},o=[],c=(n("a9e3"),n("86b0"),{name:"Question",props:{id:Number,questionDesc:String,question:String,answers:Array,answer:String},watch:{answers:function(){this.previousMark()}},data:function(){return{selectedAnswer:""}},methods:{onChecked:function(e){var t=e.target;t.value===this.selectedAnswer&&""!==this.selectedAnswer?(t.checked=!1,this.selectedAnswer=""):this.selectedAnswer=t.value,this.$emit("answer",this.selectedAnswer)},previousMark:function(){this.emptyMark();var e=this.answer;console.log(e);for(var t=0;t<4;t++)document.getElementsByClassName("button")[t].value===e&&(this.selectedAnswer=e,document.getElementsByClassName("button")[t].checked=!0)},emptyMark:function(){for(var e=0;e<4;e++)document.getElementsByClassName("button")[e].checked=!1;this.selectedAnswer=""}}}),u=c,l=n("2877"),d=Object(l["a"])(u,i,o,!1,null,null,null),p=d.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"question-box"},[n("ol",e._l(e.answers,(function(t){return n("li",{key:t},[e._v(" "+e._s(t)+" ")])})),0)])},h=[],v={name:"Review",prop:{selectedAnswers:{type:Array,default:function(){return[]}}},data:function(){return{answers:[]}},mounted:function(){this.createEmpyList()},methods:{createEmpyList:function(){for(var e=0;e<20;e++)this.answers[e]=""}}},w=v,m=(n("c5d3"),Object(l["a"])(w,f,h,!1,null,"22495fc8",null)),g=m.exports,b=n("bc3a"),_=n.n(b),C=(n("7e7d"),{name:"App",components:{Question:p,Review:g},data:function(){return{answerID:1,questionText:"",quest:"",answerList:[],page:1,maxPage:1,title:"TPS - Penalaran Umum",allAnswer:[]}},watch:{page:function(){this.onLoad()}},mounted:function(){this.onLoad()},methods:{onLoad:function(){var e=this;_.a.get("http://localhost:3000/questions").then((function(t){200==t.status&&(e.answerID=t.data[e.page-1].id,e.maxPage=t.data.length,e.questionText=t.data[e.page-1].questionDescription,e.quest=t.data[e.page-1].question,e.answerList=t.data[e.page-1].answers)})).catch((function(e){console.log(e)}))},changePage:function(e){"next"===e&&this.page<this.maxPage?this.page=this.page+1:"prev"===e&&this.page>1&&(this.page=this.page-1)},onAnswerClick:function(e){this.allAnswer[this.page]=e,console.log(this.allAnswer)}}}),k=C,y=Object(l["a"])(k,a,r,!1,null,null,null),A=y.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(A)}}).$mount("#app")},"7e7d":function(e,t,n){},"7f16":function(e,t,n){},"86b0":function(e,t,n){},c5d3:function(e,t,n){"use strict";var s=n("7f16"),a=n.n(s);a.a}});
//# sourceMappingURL=app.498adeb3.js.map