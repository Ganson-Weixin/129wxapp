(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/jinzhangxinxi/add-or-update"],{"0f08":function(e,n,t){"use strict";t.r(n);var i=t("6170"),r=t("15c5");for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);t("5fe3");var u,o=t("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"13e93615",null,!1,i["a"],u);n["default"]=s.exports},"15c5":function(e,n,t){"use strict";t.r(n);var i=t("6e39"),r=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(n,e,(function(){return i[e]}))}(a);n["default"]=r.a},"5fe3":function(e,n,t){"use strict";var i=t("de20"),r=t.n(i);r.a},6170:function(e,n,t){"use strict";var i={"w-picker":function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"205a"))}},r=function(){var e=this,n=e.$createElement;e._self._c},a=[];t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return i}))},"6e39":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,i,r,a,u){try{var o=e[a](u),s=o.value}catch(c){return void t(c)}o.done?n(s):Promise.resolve(s).then(i,r)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(i,r){var u=e.apply(n,t);function o(e){a(u,i,r,o,s,"next",e)}function s(e){a(u,i,r,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("205a"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{ruleForm:{bianhao:"",gonghao:"",qishouxingming:"",jine:"",beizhu:"",jinzhangshijian:"",userid:""},user:{},ro:{bianhao:!1,gonghao:!1,qishouxingming:!1,jine:!1,beizhu:!1,jinzhangshijian:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var n=u(i.default.mark((function n(t){var r,a,u,o;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return this.ruleForm.jinzhangshijian=this.$utils.getCurDateTime(),r=e.getStorageSync("nowTable"),n.next=4,this.$api.session(r);case 4:if(a=n.sent,this.user=a.data,this.ruleForm.userid=e.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!t.id){n.next=14;break}return this.ruleForm.id=t.id,n.next=12,this.$api.info("jinzhangxinxi",this.ruleForm.id);case 12:a=n.sent,this.ruleForm=a.data;case 14:if(!t.cross){n.next=51;break}u=e.getStorageSync("crossObj"),n.t0=i.default.keys(u);case 17:if((n.t1=n.t0()).done){n.next=49;break}if(o=n.t1.value,"bianhao"!=o){n.next=23;break}return this.ruleForm.bianhao=u[o],this.ro.bianhao=!0,n.abrupt("continue",17);case 23:if("gonghao"!=o){n.next=27;break}return this.ruleForm.gonghao=u[o],this.ro.gonghao=!0,n.abrupt("continue",17);case 27:if("qishouxingming"!=o){n.next=31;break}return this.ruleForm.qishouxingming=u[o],this.ro.qishouxingming=!0,n.abrupt("continue",17);case 31:if("jine"!=o){n.next=35;break}return this.ruleForm.jine=u[o],this.ro.jine=!0,n.abrupt("continue",17);case 35:if("beizhu"!=o){n.next=39;break}return this.ruleForm.beizhu=u[o],this.ro.beizhu=!0,n.abrupt("continue",17);case 39:if("jinzhangshijian"!=o){n.next=43;break}return this.ruleForm.jinzhangshijian=u[o],this.ro.jinzhangshijian=!0,n.abrupt("continue",17);case 43:if("userid"!=o){n.next=47;break}return this.ruleForm.userid=u[o],this.ro.userid=!0,n.abrupt("continue",17);case 47:n.next=17;break;case 49:this.ruleForm.jine=0,this.ro.jine=!1;case 51:this.styleChange();case 52:case"end":return n.stop()}}),n,this)})));function t(e){return n.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},jinzhangshijianConfirm:function(e){console.log(e),this.ruleForm.jinzhangshijian=e.result,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=u(i.default.mark((function n(){var t,r;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t=e.getStorageSync("crossObj"),r=e.getStorageSync("crossTable"),t.jine=parseFloat(t.jine)+parseFloat(this.ruleForm.jine),n.next=5,this.$api.update("".concat(r),t);case 5:if(this.ruleForm.jine){n.next=8;break}return this.$utils.msg("金额不能为空"),n.abrupt("return");case 8:if(!this.ruleForm.jine||this.$validate.isIntNumer(this.ruleForm.jine)){n.next=11;break}return this.$utils.msg("金额应输入整数"),n.abrupt("return");case 11:if(!this.ruleForm.id){n.next=16;break}return n.next=14,this.$api.update("jinzhangxinxi",this.ruleForm);case 14:n.next=18;break;case 16:return n.next=18,this.$api.add("jinzhangxinxi",this.ruleForm);case 18:this.$utils.msgBack("提交成功");case 19:case"end":return n.stop()}}),n,this)})));function t(){return n.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),i=n.getMonth()+1,r=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(t,"-").concat(i,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,t("543d")["default"])},a0e4:function(e,n,t){"use strict";(function(e){t("7027"),t("921b");i(t("66fd"));var n=i(t("0f08"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},de20:function(e,n,t){}},[["a0e4","common/runtime","common/vendor"]]]);