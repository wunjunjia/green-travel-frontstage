(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e0da57a"],{"05fb":function(t,e,n){t.exports=n.p+"static/img/avatar.452d9522.jpg"},"13d5":function(t,e,n){"use strict";var r=n("23e7"),i=n("d58f").left,a=n("a640"),s=n("ae40"),c=a("reduce"),o=s("reduce",{1:0});r({target:"Array",proto:!0,forced:!c||!o},{reduce:function(t){return i(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"159b":function(t,e,n){var r=n("da84"),i=n("fdbc"),a=n("17c2"),s=n("9112");for(var c in i){var o=r[c],l=o&&o.prototype;if(l&&l.forEach!==a)try{s(l,"forEach",a)}catch(f){l.forEach=a}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,i=n("a640"),a=n("ae40"),s=i("forEach"),c=a("forEach");t.exports=s&&c?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"401c":function(t,e,n){},4160:function(t,e,n){"use strict";var r=n("23e7"),i=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"4de4":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").filter,a=n("1dde"),s=n("ae40"),c=a("filter"),o=s("filter");r({target:"Array",proto:!0,forced:!c||!o},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"53fd":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"signIn-container"},[n("sign-in-header",{attrs:{day:t.day}}),n("p",{staticClass:"tip"},[t._v("领取的奖励已自动发放至您的账户上")]),n("div",{staticClass:"content-container"},[n("div",{staticClass:"header"},[n("p",{staticClass:"primary"},[t._v(" 每日连续签到 月领 "),n("span",{staticClass:"integral"},[n("span",[t._v(t._s(t.totalIntegral))]),n("span",{staticClass:"icon"},[t._v("+")])]),t._v(" 碳积分 ")]),n("p",{staticClass:"secondary"},[t._v("配合优惠卷，去积分商城兑换心仪的商品吧")])]),n("scroll-view",{ref:"scroll",attrs:{click:!0,dataSource:t.list}},[n("div",{staticClass:"main"},[n("sign-in-list",{attrs:{list:t.list},on:{scrollToElement:t.scrollToElement,signIn:t.signIn}}),n("p",{staticClass:"end"},[t._v("若连续签到中断，再来领取时只能从头再来哦～")])],1)])],1),t.loading?n("div",{staticClass:"loading"},[n("van-loading",{attrs:{type:"spinner",color:"#1989fa"}})],1):t._e()],1)},i=[],a=(n("a4d3"),n("4de4"),n("4160"),n("d81d"),n("13d5"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("159b"),n("ade3")),s=n("bc3a"),c=n.n(s),o=n("2f62");function l(t){return t%4===0&&t%100!==0}function f(t){var e=t.getMonth()+1;if(e%2===0){if(2===e){var n=t.getFullYear(),r=l(n);return r?28:29}return 30}return 31}var d=n("b4e2"),u=[100,.3,1,.5,.6,1,2.5,1.5,1.3,2,1.5,1.6,2,3.5,2.5,2.3,3,2.5,3.6,3,4.5,3.5,3.3,4,3.5,4.6,4,5.5,4.5,4.3,5],p=n("2788"),h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"signIn-header"},[r("div",{staticClass:"avatar"},[r("van-image",{attrs:{round:"",src:n("05fb")}})],1),r("div",{staticClass:"content"},[r("div",{staticClass:"left"},[r("p",{staticClass:"title"},[t._v("碳积分")]),r("p",{staticClass:"value"},[t._v(t._s(t.user.integral))])]),r("div",{staticClass:"right"},[r("p",{staticClass:"title"},[t._v("连续签到（天）")]),r("p",{staticClass:"value"},[t._v(t._s(0===t.day?0:(""+t.day).padStart(2,"0")))])])]),r("router-link",{attrs:{to:"/"}},[r("span",{staticClass:"arrow"})])],1)},v=[];n("a9e3");function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var b={name:"SignInHeader",props:{day:{type:Number,required:!0}},computed:y({},Object(o["c"])("user",{user:function(t){return t}}))},O=b,m=(n("fd8f"),n("2877")),j=Object(m["a"])(O,h,v,!1,null,"664ee47e",null),w=j.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"list"},t._l(t.list,(function(e,r){return n("li",{key:e.day,ref:"item",refInFor:!0,staticClass:"item",class:e.type},[n("div",{staticClass:"left"},[t._v("第"+t._s(e.day+1)+"天")]),n("div",{staticClass:"right"},[n("div",{staticClass:"logo"}),n("div",{staticClass:"integral"},[n("i",{staticClass:"icon icon-tubiao311 iconfont"}),n("span",[t._v(t._s(e.integral.toFixed(2)))])]),n("div",{staticClass:"button",on:{click:function(e){return t.signIn(r)}}},[t._v(" "+t._s("finished"===e.type?"已领取":"签到领取")+" ")])])])})),0)},_=[],I=(n("c740"),{name:"SignInList",props:{list:{type:Array,default:function(){return[]}}},data:function(){return{loading:!1}},watch:{list:function(){var t=this;this.$nextTick((function(){var e=t.list.findIndex((function(t){return"wait"===t.type}));t.$emit("scrollToElement",t.$refs.item[-1===e?t.list.length-1:e-1])}))}},methods:{signIn:function(t){this.loading||(this.loading=!0,this.$emit("signIn",t))}}}),E=I,P=(n("c448"),Object(m["a"])(E,C,_,!1,null,"0e07ef6c",null)),k=P.exports;function D(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?D(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var S="active",$="finished",A="wait",T={name:"SignIn",data:function(){return{list:[],id:-1,days:[],date:new Date,day:0,loading:!1}},components:{SignInHeader:w,ScrollView:d["a"],SignInList:k},computed:x({totalIntegral:function(){var t=u.reduce((function(t,e){return(parseInt(100*t,10)+parseInt(100*e,10))/100}),0);return parseInt(t,10)}},Object(o["c"])("user",{user:function(t){return t}})),methods:x({scrollToElement:function(t){this.$refs.scroll.scrollToElement(t)},signIn:function(t){var e=this,n=this.list[t],r=n.type,i=n.integral;r===S&&(this.days.push(this.date.getDate()),c.a.post("/api/signIn/update",{id:this.id,days:this.days,integral:i}).then((function(n){var r=n.data.code;if(0===r)return e.list[t].type=$,e.day+=1,e[p["b"]]({operator:"+",integral:i}),void e.$notify({type:"success",message:"签到成功"});e.$notify("签到失败！")})))},init:function(){var t=f(this.date),e=this.date.getDate(),n=this.days[this.days.length-1];n===e&&(this.day+=1);for(var r=this.days.length-(n===e?2:1),i=1;r>=0;r-=1,i+=1){if(this.days[r]!==e-i)break;this.list.unshift({day:this.days[r],type:$}),this.day+=1}var a=0===this.list.length?e:this.list[0].day;this.list=this.list.map((function(t){return x({},t,{day:t.day-a,integral:u[t.day-a]})})),this.list.push({day:e-a,integral:u[e-a],type:e===n?$:S});for(var s=t-e<=6?t-e:6,c=0;c<s;c+=1)this.list.push({day:e-a+c+1,integral:u[e-a+c+1],type:A})}},Object(o["b"])("user",[p["b"]])),mounted:function(){var t=this;this.loading=!0,c.a.get("/api/signIn/data",{params:{year:this.date.getFullYear(),month:this.date.getMonth()+1}}).then((function(e){var n=e.data,r=n.code,i=n.data,a=i.id,s=i.days;0===r?(t.id=a,t.days=s,t.init()):t.$notify("请求数据失败！")})).finally((function(){t.loading=!1}))}},F=T,H=(n("b0f0"),Object(m["a"])(F,r,i,!1,null,"67e08176",null));e["default"]=H.exports},b0f0:function(t,e,n){"use strict";var r=n("defc"),i=n.n(r);i.a},b64b:function(t,e,n){var r=n("23e7"),i=n("7b0b"),a=n("df75"),s=n("d039"),c=s((function(){a(1)}));r({target:"Object",stat:!0,forced:c},{keys:function(t){return a(i(t))}})},c448:function(t,e,n){"use strict";var r=n("401c"),i=n.n(r);i.a},c740:function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").findIndex,a=n("44d2"),s=n("ae40"),c="findIndex",o=!0,l=s(c);c in[]&&Array(1)[c]((function(){o=!1})),r({target:"Array",proto:!0,forced:o||!l},{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a(c)},d58f:function(t,e,n){var r=n("1c0b"),i=n("7b0b"),a=n("44ad"),s=n("50c4"),c=function(t){return function(e,n,c,o){r(n);var l=i(e),f=a(l),d=s(l.length),u=t?d-1:0,p=t?-1:1;if(c<2)while(1){if(u in f){o=f[u],u+=p;break}if(u+=p,t?u<0:d<=u)throw TypeError("Reduce of empty array with no initial value")}for(;t?u>=0:d>u;u+=p)u in f&&(o=n(o,f[u],u,l));return o}};t.exports={left:c(!1),right:c(!0)}},d81d:function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").map,a=n("1dde"),s=n("ae40"),c=a("map"),o=s("map");r({target:"Array",proto:!0,forced:!c||!o},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},d999:function(t,e,n){},dbb4:function(t,e,n){var r=n("23e7"),i=n("83ab"),a=n("56ef"),s=n("fc6a"),c=n("06cf"),o=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,n,r=s(t),i=c.f,l=a(r),f={},d=0;while(l.length>d)n=i(r,e=l[d++]),void 0!==n&&o(f,e,n);return f}})},defc:function(t,e,n){},e439:function(t,e,n){var r=n("23e7"),i=n("d039"),a=n("fc6a"),s=n("06cf").f,c=n("83ab"),o=i((function(){s(1)})),l=!c||o;r({target:"Object",stat:!0,forced:l,sham:!c},{getOwnPropertyDescriptor:function(t,e){return s(a(t),e)}})},fd8f:function(t,e,n){"use strict";var r=n("d999"),i=n.n(r);i.a}}]);