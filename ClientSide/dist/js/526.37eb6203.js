"use strict";(self["webpackChunkrouter_q"]=self["webpackChunkrouter_q"]||[]).push([[526],{7632:function(e,s,a){a.r(s),a.d(s,{default:function(){return H}});var t=a(3396),o=a(7139),l=a(9242),n=a.p+"img/play.95c7461a.jpg";const i={class:"play-form__container"},r={action:"#",class:"play-form"},u=(0,t._)("header",{class:"header"},[(0,t._)("img",{src:n,alt:"",class:"header__img"}),(0,t._)("div",{class:"btn btn-warning flying-btn",title:"Go to Home","data-bs-toggle":"modal",href:"#portfolioModalQuit"},[(0,t._)("i",{class:"fa-solid fa-arrow-left"})])],-1),d={class:"play-form__body"},c={for:"id"},m={class:"choice"},p=["name","value","onUpdate:modelValue"],_={class:"choice"},h=["name","value","onUpdate:modelValue"],w={class:"choice"},f=["name","value","onUpdate:modelValue"],v={class:"choice"},b=["name","value","onUpdate:modelValue"],g={class:"form-group"},y={class:"portfolio-modal modal fade",id:"portfolioModalQuit",tabindex:"-1",role:"dialog","aria-hidden":"true"},k={class:"modal-dialog"},q={class:"modal-content"},U=(0,t._)("div",{class:"close-modal","data-bs-dismiss":"modal"},[(0,t._)("i",{class:"fas fa-xmark me-1"})],-1),A={class:"container"},$={class:"row justify-content-center"},V={class:"col-lg-8"},z={class:"modal-body"},L=(0,t._)("h4",null,"Do you really want to Quit?",-1),G=(0,t._)("button",{class:"btn btn-success","data-bs-dismiss":"modal",type:"button"}," Yes ",-1),C=(0,t._)("button",{class:"btn btn-danger mx-1","data-bs-dismiss":"modal",type:"button"}," Cancel ",-1);function D(e,s,a,n,D,x){const Q=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)("div",i,[(0,t._)("form",r,[u,(0,t.Uk)(" "+(0,o.zw)(D.answerList)+" ",1),(0,t._)("div",d,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(x.questions,((e,s)=>((0,t.wg)(),(0,t.iD)("div",{class:"form-group my-4",key:`question-${e.title}`},[(0,t._)("label",c,[(0,t._)("h5",null,(0,o.zw)(s+1)+": "+(0,o.zw)(e.question),1),(0,t._)("div",m,[(0,t.wy)((0,t._)("input",{type:"radio",class:"form-group",name:`question-${s}`,value:e.ch1,"onUpdate:modelValue":s=>e.userAnswer=s},null,8,p),[[l.G2,e.userAnswer]]),(0,t.Uk)(" "+(0,o.zw)(e.ch1),1)]),(0,t._)("div",_,[(0,t.wy)((0,t._)("input",{type:"radio",class:"form-group",name:`question-${s}`,value:e.ch2,"onUpdate:modelValue":s=>e.userAnswer=s},null,8,h),[[l.G2,e.userAnswer]]),(0,t.Uk)(" "+(0,o.zw)(e.ch2),1)]),(0,t._)("div",w,[(0,t.wy)((0,t._)("input",{type:"radio",class:"form-group",name:`question-${s}`,value:e.ch3,"onUpdate:modelValue":s=>e.userAnswer=s},null,8,f),[[l.G2,e.userAnswer]]),(0,t.Uk)(" "+(0,o.zw)(e.ch3),1)]),(0,t._)("div",v,[(0,t.wy)((0,t._)("input",{type:"radio",class:"form-group",name:`question-${s}`,value:e.ch4,"onUpdate:modelValue":s=>e.userAnswer=s},null,8,b),[[l.G2,e.userAnswer]]),(0,t.Uk)(" "+(0,o.zw)(e.ch4),1)])])])))),128)),(0,t._)("div",g,[(0,t._)("button",{type:"button",class:"btn btn-success",onClick:s[0]||(s[0]=(...e)=>x.printLogs&&x.printLogs(...e))},"Submit")])])]),(0,t._)("div",y,[(0,t._)("div",k,[(0,t._)("div",q,[U,(0,t._)("div",A,[(0,t._)("div",$,[(0,t._)("div",V,[(0,t._)("div",z,[L,(0,t.Wm)(Q,{to:"/"},{default:(0,t.w5)((()=>[G])),_:1}),C])])])])])])])])}var x={name:"Play-view",data(){return{checked:[],answerList:[]}},watch:{checked(){this.answerList.push(this.checked)}},computed:{questions(){const e=this.$store.state.questions,s=e.filter((e=>e.title===parseInt(this.$route.params.tag,10)));return s.map((e=>({...e,userAnswer:""})))}},methods:{printLogs(){console.log(this.questions),this.$store.dispatch("saveReports",this.questions),setTimeout((()=>{this.$router.push({name:"reports"})}),2e3)}}},Q=a(89);const j=(0,Q.Z)(x,[["render",D]]);var H=j}}]);
//# sourceMappingURL=526.37eb6203.js.map