(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{fa03:function(a,t,e){"use strict";e.r(t);var i=function(){var a=this,t=a._self._c;return t("q-page",{staticClass:"flex flex-center"},[t("div",{staticClass:"q-pa-md",staticStyle:{"max-width":"500px"}},[t("q-form",{staticClass:"q-gutter-md",on:{submit:a.onSubmit,reset:a.onReset}},[t("q-input",{attrs:{filled:"",label:"Nome *",hint:"Nome e Sobrenome","lazy-rules":"",rules:[a=>a&&a.length>0||"Please type something"]},model:{value:a.name,callback:function(t){a.name=t},expression:"name"}}),t("q-input",{attrs:{filled:"",type:"number",label:"Idade *","lazy-rules":"",rules:[a=>null!==a&&""!==a||"Por favor, digite sua idade.",a=>a>0&&a<100||"Please type a real age"]},model:{value:a.age,callback:function(t){a.age=t},expression:"age"}}),t("q-select",{attrs:{filled:"",options:a.renda_options,label:"Renda Mensal"},model:{value:a.renda,callback:function(t){a.renda=t},expression:"renda"}}),t("q-select",{attrs:{filled:"",multiple:"",clearable:"",options:a.adicionais_options,label:"Adicionais"},model:{value:a.adicionais,callback:function(t){a.adicionais=t},expression:"adicionais"}}),t("q-select",{attrs:{filled:"",clearable:"",options:a.intuito_options,label:"Intuito"},model:{value:a.intuito,callback:function(t){a.intuito=t},expression:"intuito"}}),t("q-select",{attrs:{filled:"",clearable:"",options:a.estadoCivil_options,label:"Estado Civil"},model:{value:a.estadoCivil,callback:function(t){a.estadoCivil=t},expression:"estadoCivil"}}),a._v("\n\n      Possui Filhos :\n      "),t("q-toggle",{attrs:{"false-value":"NAO","true-value":"SIM",label:` ${a.filhos}`},model:{value:a.filhos,callback:function(t){a.filhos=t},expression:"filhos"}}),t("q-toggle",{attrs:{label:"Eu aceito os termos e condições."},model:{value:a.accept,callback:function(t){a.accept=t},expression:"accept"}}),t("div",[t("q-btn",{attrs:{label:"Match!",disabled:!a.accept,color:"primary"},on:{click:function(t){return a.match()}}})],1)],1)],1)])},s=[],o=(e("14d9"),{data(){return{name:null,age:null,accept:!1,renda_options:["R$ 1000 a R$ 5000","R$ 5000 a R$ 10000","R$ 10000 a R$ 15000","Mais de R$ 15000"],adicionais_options:["Ar Condicionado","Direção Hidráulica","Vidros Elétricos"],intuito_options:["Lazer","Trabalho","Esporte"],estadoCivil_options:["Solteiro","Casado","Divorciado","Viúvo"],adicionais:null,renda:null,intuito:null,estadoCivil:null,filhos:"NAO"}},methods:{match(){"R$ 1000 a R$ 5000"==this.renda&&"SIM"==this.filhos&&"Trabalho"==this.intuito&&this.$router.push({name:"recommendation",params:{car:"kasedan"}}),"R$ 1000 a R$ 5000"==this.renda&&"SIM"==this.filhos&&"Lazer"==this.intuito&&this.$router.push({name:"recommendation",params:{car:"escort"}}),"R$ 1000 a R$ 5000"==this.renda&&"NAO"==this.filhos&&"Trabalho"==this.intuito&&this.$router.push({name:"recommendation",params:{car:"kahatch"}}),"R$ 1000 a R$ 5000"==this.renda&&"NAO"==this.filhos&&"Lazer"==this.intuito&&this.$router.push({name:"recommendation",params:{car:"corcel"}}),"R$ 5000 a R$ 10000"==this.renda&&"SIM"==this.filhos&&"Trabalho"==this.intuito&&this.$router.push({name:"recommendation",params:{car:"kasedan"}}),"R$ 5000 a R$ 10000"==this.renda&&"SIM"==this.filhos&&"Lazer"==this.intuito&&this.$router.push({name:"recommendation",params:{car:"ecosport"}}),"R$ 5000 a R$ 10000"==this.renda&&"NAO"==this.filhos&&"Trabalho"==this.intuito&&this.$router.push({name:"recommendation",params:{car:"fiesta"}}),"R$ 5000 a R$ 10000"==this.renda&&"NAO"==this.filhos&&"Lazer"==this.intuito&&this.$router.push({name:"recommendation",params:{car:"ecosport"}}),"R$ 10000 a R$ 15000"==this.renda&&"SIM"==this.filhos&&"Trabalho"==this.intuito&&this.$router.push({name:"recommendation",params:{car:"focus"}}),"R$ 10000 a R$ 15000"==this.renda&&"SIM"==this.filhos&&"Lazer"==this.intuito&&this.$router.push({name:"recommendation",params:{car:"bronco"}}),"R$ 10000 a R$ 15000"==this.renda&&"NAO"==this.filhos&&"Trabalho"==this.intuito&&this.$router.push({name:"recommendation",params:{car:"fusion"}}),"R$ 10000 a R$ 15000"==this.renda&&"NAO"==this.filhos&&"Lazer"==this.intuito&&this.$router.push({name:"recommendation",params:{car:"corcel"}}),"R$ 10000 a R$ 15000"==this.renda&&"Esporte"==this.intuito&&this.$router.push({name:"recommendation",params:{car:"edge"}}),"Mais de R$ 15000"==this.renda&&"SIM"==this.filhos&&"Trabalho"==this.intuito&&this.$router.push({name:"recommendation",params:{car:"transit"}}),"Mais de R$ 15000"==this.renda&&"SIM"==this.filhos&&"Lazer"==this.intuito&&this.$router.push({name:"recommendation",params:{car:"territory"}}),"Mais de R$ 15000"==this.renda&&"NAO"==this.filhos&&"Trabalho"==this.intuito&&this.$router.push({name:"recommendation",params:{car:"ranger"}}),"Mais de R$ 15000"==this.renda&&"NAO"==this.filhos&&"Lazer"==this.intuito&&this.$router.push({name:"recommendation",params:{car:"territory"}}),"Mais de R$ 15000"==this.renda&&"Esporte"==this.intuito?this.$router.push({name:"recommendation",params:{car:"mustang"}}):this.$router.push({name:"recommendation",params:{car:"fusion"}})},onSubmit(){!0!==this.accept?this.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:"You need to accept the license and terms first"}):this.$q.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"Submitted"})},onReset(){this.name=null,this.age=null,this.accept=!1}}}),n=o,r=e("2877"),l=e("9989"),h=e("0378"),c=e("27f9"),u=e("ddd8"),d=e("9564"),m=e("9c40"),p=e("eebe"),$=e.n(p),f=Object(r["a"])(n,i,s,!1,null,null,null);t["default"]=f.exports;$()(f,"components",{QPage:l["a"],QForm:h["a"],QInput:c["a"],QSelect:u["a"],QToggle:d["a"],QBtn:m["a"]})}}]);