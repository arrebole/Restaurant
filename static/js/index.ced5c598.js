(function(e){function t(t){for(var r,i,l=t[0],s=t[1],u=t[2],m=0,d=[];m<l.length;m++)i=l[m],o[i]&&d.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);c&&c(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var s=n[l];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={index:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("28d2")},"28d2":function(e,t,n){"use strict";n.r(t);n("7f7f"),n("cadf"),n("551c"),n("097d");var r=n("5c96"),o=n.n(r),a=(n("e05f"),n("0fae"),n("f5df"),n("2b0e")),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},l=[],s=n("2877"),u={},c=Object(s["a"])(u,i,l,!1,null,null,null);c.options.__file="App.vue";var m=c.exports,d=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{attrs:{id:"admin"}},[n("el-aside",{attrs:{width:"200px",id:"admin-aside"}},[n("el-menu",{attrs:{"default-openeds":["1"]}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-menu"}),e._v("导航\n        ")]),n("el-menu-item-group",[n("template",{slot:"title"},[e._v("订单处理")]),n("el-menu-item",{attrs:{index:"1-1"}},[e._v("未处理")]),n("el-menu-item",{attrs:{index:"1-2"}},[e._v("已处理")])],2)],2)],1)],1),n("el-container",[n("el-header",{staticClass:"admin-header"},[n("h3",{staticClass:"amin-title"},[e._v("订单管理页面")])]),n("el-main",{staticClass:"admin-main"})],1)],1)},p=[],v={},h=Object(s["a"])(v,f,p,!1,null,null,null);h.options.__file="admin.vue";var _=h.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"login"}},[n("header",{staticClass:"login-header"}),n("article",{staticClass:"login-content"},[n("section",[n("h3",{staticClass:"login-title"},[e._v("登录后台管理系统")]),n("el-form",{staticClass:"ruleForm",attrs:{model:e.ruleForm,"status-icon":"","label-width":"100px"}},[n("el-form-item",{attrs:{label:"用户名"}},[n("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.ruleForm.UserName,callback:function(t){e.$set(e.ruleForm,"UserName",t)},expression:"ruleForm.UserName"}},[n("i",{staticClass:"el-icon-share el-input__icon",attrs:{slot:"suffix"},slot:"suffix"})])],1),n("el-form-item",{attrs:{label:"密码"}},[n("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.ruleForm.PassWord,callback:function(t){e.$set(e.ruleForm,"PassWord",t)},expression:"ruleForm.PassWord"}},[n("i",{staticClass:"el-icon-edit el-input__icon",attrs:{slot:"suffix"},slot:"suffix"})])],1),n("el-form-item",[n("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:function(t){e.submitForm()}}},[e._v("提交")]),n("el-button",{on:{click:function(t){e.resetForm()}}},[e._v("重置")])],1)],1)],1)])])},g=[],x={data:function(){return{ruleForm:{UserName:"",PassWord:""},loading:!1}},methods:{submitForm:function(){var e=this;this.loading=!0,setTimeout(function(){e.loading=!1,"admin"==e.ruleForm.UserName&&"admin123"==e.ruleForm.PassWord?(e.$notify({title:"成功",message:"登录成功",type:"success"}),e.$store.commit("onAdmin"),e.$router.push({name:"admin"})):e.$notify.error({title:"错误",message:"密码或账户错误"})},300)},resetForm:function(){this.ruleForm.UserName="",this.ruleForm.PassWord=""}}},y=x,F=Object(s["a"])(y,b,g,!1,null,null,null);F.options.__file="login.vue";var w=F.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-link",{attrs:{to:"/admin"}},[e._v("管理")])],1)},j=[],P={},$=Object(s["a"])(P,O,j,!1,null,null,null);$.options.__file="order.vue";var C=$.exports;a["default"].use(d["a"]);var k=new d["a"]({mode:"history",base:"/",routes:[{path:"/",name:"index",component:C},{path:"/admin",name:"admin",component:_},{path:"/login",name:"login",component:w},{path:"*",redirect:"/"}]}),N=n("2f62");a["default"].use(N["a"]);var S=new N["a"].Store({state:{admin:!1},mutations:{onAdmin:function(e){e.admin=!0}},actions:{}});n("2c30");a["default"].config.productionTip=!1,a["default"].use(o.a),k.beforeEach(function(e,t,n){"admin"!=e.name||S.state.admin||n({name:"login"}),"login"==e.name&&S.state.admin&&n({name:"admin"}),n()}),new a["default"]({router:k,store:S,render:function(e){return e(m)}}).$mount("#app")},"2c30":function(e,t,n){}});
//# sourceMappingURL=index.ced5c598.js.map