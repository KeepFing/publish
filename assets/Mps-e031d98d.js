import{a as D}from"./apiMapper-1d85f994.js";import{i as E,c as G,f as H,s as J}from"./utils-62381d48.js";import{_ as R,h as z,r as F,o as B,k as i,a as M,c as $,l as e,w as s,b as c,f as L,F as X,e as W,s as T,g as Z,u as Q,t as Y,v as ee,E as h,p as te,d as le}from"./index-acda5581.js";import"./constant-8fe2541b.js";const oe={class:""},se={class:"sys-form-actions"},ae={__name:"kform",props:["k"],emits:["confirm","onClose"],setup(C,{emit:k}){const d=C,_=(b,r,v)=>{r===""?v(new Error("值不能为空")):E(r)?r<=0?v(new Error("值必须大于0")):v():v(new Error("值必须输入数字"))},u=z({code:"",initialFrequency:"",kValue:""}),w={code:[{required:!0,message:"设备编号不能为空",trigger:"blur"}],initialFrequency:[{required:!0,message:"初始频率不能为空",trigger:"blur"},{validator:_,trigger:"blur"}],kValue:[{required:!0,message:"k值不能为空",trigger:"blur"},{validator:_,trigger:"blur"}]},N=F();B(()=>{d.k&&l()});const l=()=>{const b=d.k.split(",");u.code=b[0],u.initialFrequency=b[1],u.kValue=b[2]},p=()=>{N.value.validate(b=>{b&&k("confirm",u)})},x=()=>{k("onClose")};return(b,r)=>{const v=i("el-input"),S=i("el-form-item"),y=i("el-form"),U=i("el-button");return M(),$("main",oe,[e(y,{model:u,rules:w,"label-width":"80px",ref_key:"kFormRef",ref:N},{default:s(()=>[e(S,{label:"设备编号",prop:"code"},{default:s(()=>[e(v,{modelValue:u.code,"onUpdate:modelValue":r[0]||(r[0]=I=>u.code=I)},null,8,["modelValue"])]),_:1}),e(S,{label:"初始频率",prop:"initialFrequency"},{default:s(()=>[e(v,{type:"number",modelValue:u.initialFrequency,"onUpdate:modelValue":r[1]||(r[1]=I=>u.initialFrequency=I)},null,8,["modelValue"])]),_:1}),e(S,{label:"k值",prop:"kValue"},{default:s(()=>[e(v,{type:"number",modelValue:u.kValue,"onUpdate:modelValue":r[2]||(r[2]=I=>u.kValue=I)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),c("div",se,[e(U,{type:"primary",onClick:p},{default:s(()=>[L("确认")]),_:1}),e(U,{type:"info",onClick:x},{default:s(()=>[L("取消")]),_:1})])])}}},ne=R(ae,[["__scopeId","data-v-dfe88f4d"]]);const re={class:""},ie={class:"sys-form-actions"},ue={__name:"MpsForm",props:["mpsData","projectId"],emits:["saveMps","onClose"],setup(C,{emit:k}){const d=C,_=(n,t,o)=>{t===""?o(new Error("u0控制值不能为空")):E(t)?o():o(new Error("u0控制值必须输入数字"))},u=(n,t,o)=>{t===""?o(new Error("u0控制值不能为空")):E(t)?t>=0?o(new Error("负向u0控制值必须小于0")):o():o(new Error("负向u0控制值必须输入数字"))},w=(n,t,o)=>{t===""?o(new Error("u0控制值不能为空")):E(t)?o():o(new Error("v0控制值必须输入数字"))},N=(n,t,o)=>{t===""?o(new Error("里程不能为空")):E(t)?o():o(new Error("里程必须输入数字"))},l=z({mpsName:"",categoryId:"",isAutoMps:!1,isZero:!1,stopMark:!1,monitorBy:"",u0:0,v0:0,mu0:0,course:0,prefix:"",serialNumber:1,subMark:"-",typeCode:"",k:""}),p=F([]),x=F(),b={mpsName:[{required:!0,message:"测点名称不能为空",trigger:"blur"}],categoryId:[{required:!0,message:"请选择测点类型",trigger:"change"}],prefix:[{required:!0,message:"测点名称不能为空",trigger:"blur"}],serialNumber:[{required:!0,message:"测点序号不能为空",trigger:"blur"}],u0:[{required:!0,message:"u0控制值不能为空",trigger:"blur"},{validator:_,trigger:"blur"}],mu0:[{required:!0,message:"负向u0控制值不能为空",trigger:"blur"},{validator:u,trigger:"blur"}],v0:[{required:!0,message:"v0控制值不能为空",trigger:"blur"},{validator:w,trigger:"blur"}],course:[{required:!0,message:"里程不能为空",trigger:"blur"},{validator:N,trigger:"blur"}]},r=F(!1);B(()=>{d.mpsData&&v()});const v=()=>{for(const n in l)l[n]=d.mpsData[n];l.id=d.mpsData.id};(async()=>{const n={key:"CDLX"},{result:t}=await D.dictModule.getDictListByKey(n);p.value=t})();const y=n=>{const o=p.value.find(g=>g.id===n).itemValue.split("/")[2];l.prefix=o,l.typeCode=o,U(),l.mpsName=l.prefix+"-"+l.serialNumber},U=async()=>{const n={projectId:d.projectId,prefix:l.prefix},{result:t}=await D.mpsModule.getMpsSerialNum(n);t&&t.length>0?l.serialNumber=G(t,"max"):l.serialNumber=1,l.mpsName=l.prefix+"-"+l.serialNumber},I=()=>{l.mpsName=l.prefix+"-"+l.serialNumber},P=n=>{l.k=`${n.code},${n.initialFrequency},${n.kValue}`,r.value=!1},m=()=>{x.value.validate(n=>{n&&(l.courseStr=H(l.course,"DK"),k("saveMps",l))})},f=()=>{k("onClose")};return(n,t)=>{const o=i("el-input"),g=i("el-form-item"),q=i("el-option"),j=i("el-select"),A=i("el-form"),V=i("el-button"),K=i("el-dialog");return M(),$("main",re,[e(A,{inline:!0,model:l,"label-width":"150px",rules:b,ref_key:"mpsFormRef",ref:x},{default:s(()=>[e(g,{label:"测点名称",prop:"mpsName"},{default:s(()=>[e(o,{modelValue:l.mpsName,"onUpdate:modelValue":t[0]||(t[0]=a=>l.mpsName=a),disabled:""},null,8,["modelValue"])]),_:1}),e(g,{label:"测点类型",prop:"categoryId"},{default:s(()=>[e(j,{modelValue:l.categoryId,"onUpdate:modelValue":t[1]||(t[1]=a=>l.categoryId=a),onChange:y,clearable:""},{default:s(()=>[(M(!0),$(X,null,W(p.value,a=>(M(),T(q,{key:a.id,label:a.itemText,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(g,{label:"测点前缀",prop:"prefix"},{default:s(()=>[e(o,{modelValue:l.prefix,"onUpdate:modelValue":t[2]||(t[2]=a=>l.prefix=a),onBlur:U},null,8,["modelValue"])]),_:1}),e(g,{label:"排序号",onInput:I,prop:"serialNumber"},{default:s(()=>[e(o,{modelValue:l.serialNumber,"onUpdate:modelValue":t[3]||(t[3]=a=>l.serialNumber=a)},null,8,["modelValue"])]),_:1}),e(g,{label:"监测人"},{default:s(()=>[e(o,{modelValue:l.monitorBy,"onUpdate:modelValue":t[4]||(t[4]=a=>l.monitorBy=a)},null,8,["modelValue"])]),_:1}),e(g,{label:"U0",prop:"u0"},{default:s(()=>[e(o,{modelValue:l.u0,"onUpdate:modelValue":t[5]||(t[5]=a=>l.u0=a)},null,8,["modelValue"])]),_:1}),e(g,{label:"负向U0",prop:"mu0"},{default:s(()=>[e(o,{modelValue:l.mu0,"onUpdate:modelValue":t[6]||(t[6]=a=>l.mu0=a)},null,8,["modelValue"])]),_:1}),e(g,{label:"V0",prop:"v0"},{default:s(()=>[e(o,{modelValue:l.v0,"onUpdate:modelValue":t[7]||(t[7]=a=>l.v0=a)},null,8,["modelValue"])]),_:1}),e(g,{label:"测点里程",prop:"course"},{default:s(()=>[e(o,{modelValue:l.course,"onUpdate:modelValue":t[8]||(t[8]=a=>l.course=a)},null,8,["modelValue"])]),_:1}),e(g,{label:"K值"},{default:s(()=>[e(o,{size:"small",modelValue:l.k,"onUpdate:modelValue":t[10]||(t[10]=a=>l.k=a),disabled:!0},{append:s(()=>[c("span",{style:{cursor:"pointer"},onClick:t[9]||(t[9]=a=>r.value=!0)},"...")]),_:1},8,["modelValue"])]),_:1}),e(g,{label:"计算标识"},{default:s(()=>[e(j,{modelValue:l.subMark,"onUpdate:modelValue":t[11]||(t[11]=a=>l.subMark=a)},{default:s(()=>[e(q,{label:"本次减上次",value:"-"}),e(q,{label:"上次减本次",value:"+"})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"]),c("div",ie,[e(V,{type:"primary",onClick:m},{default:s(()=>[L("确认")]),_:1}),e(V,{type:"info",onClick:f},{default:s(()=>[L("取消")]),_:1})]),e(K,{width:"380",title:"填写K值",modelValue:r.value,"onUpdate:modelValue":t[13]||(t[13]=a=>r.value=a),"append-to-body":""},{default:s(()=>[r.value?(M(),T(ne,{key:0,k:l.k,onConfirm:P,onOnClose:t[12]||(t[12]=a=>r.value=!1)},null,8,["k"])):Z("",!0)]),_:1},8,["modelValue"])])}}},de=R(ue,[["__scopeId","data-v-2e546fd6"]]);const pe={class:""},me={__name:"MpsFilter",emits:["search"],setup(C,{emit:k}){const d=z({categoryId:"",mpsName:""}),_=F([]);B(()=>{}),(async()=>{const l={key:"CDLX"},{result:p}=await D.dictModule.getDictListByKey(l);_.value=p})();const w=()=>{k("search",d)},N=()=>{d.categoryId="",d.mpsName="",w()};return(l,p)=>{const x=i("el-option"),b=i("el-select"),r=i("el-form-item"),v=i("el-input"),S=i("el-form");return M(),$("main",pe,[e(S,{inline:!0,model:d,class:"demo-form-inline"},{default:s(()=>[e(r,{label:"测点类型"},{default:s(()=>[e(b,{modelValue:d.categoryId,"onUpdate:modelValue":p[0]||(p[0]=y=>d.categoryId=y)},{default:s(()=>[e(x,{label:"全部",value:""}),(M(!0),$(X,null,W(_.value,y=>(M(),T(x,{clearable:"",key:y.id,label:y.itemText,value:y.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(r,{label:"测点名称"},{default:s(()=>[e(v,{modelValue:d.mpsName,"onUpdate:modelValue":p[1]||(p[1]=y=>d.mpsName=y)},null,8,["modelValue"])]),_:1}),e(r,null,{default:s(()=>[c("div",{class:"action-button",onClick:w},"搜索")]),_:1}),e(r,null,{default:s(()=>[c("div",{class:"action-button reset",onClick:N},"重置")]),_:1})]),_:1},8,["model"])])}}},ce=R(me,[["__scopeId","data-v-dc3f4022"]]);const _e=C=>(te("data-v-3ff0176d"),C=C(),le(),C),fe={class:"sys-page-table-main"},ge={class:"sys-table-action"},ve={class:"action-left"},be={class:"colunm-item-action"},ye=["onClick"],Ve={class:"colunm-item-action"},Me=["onClick"],Ce=_e(()=>c("div",{class:"action-button btn-danger"},"删除",-1)),ke={class:"table-pagination"},O="1710830042302517248",Ne={__name:"MpsTable",setup(C){const k=Q(),d=F([]),_=F(!1),u=z({pageNum:1,pageSize:10,total:0});let w={},N=null,l=[];B(()=>{});const p=async()=>{const m={pageNum:u.pageNum,pageSize:u.pageSize,projectId:O,...w},{result:f}=await D.mpsModule.getMpsList(m);d.value=f.list,u.total=f.total};p();const x=m=>{w=m,u.pageNum=1,p()},b=()=>{N=null,_.value=!0},r=m=>{J("mpsInfo",m),k.push({path:"mps_info"})},v=m=>{l=m},S=async()=>{if(l.length===0)return h.warning("请先选择需要操作的测点"),!1;const m=l.map(t=>t.id),{success:f,message:n}=await D.mpsModule.deleteMps({ids:m});f?(h.success("删除成功"),p()):h.error(n)},y=async m=>{const f={projectId:O,...m},{success:n,message:t}=await D.mpsModule.saveMps(f);n?(h.success("添加成功"),p(),_.value=!1):h.error(t)},U=m=>{N=m,_.value=!0},I=async m=>{const f={ids:[m.id]},{success:n,message:t}=await D.mpsModule.deleteMps(f);n?(h.success("删除成功"),p()):h.error(t)},P=m=>{u.pageNum=m,p()};return(m,f)=>{const n=i("el-divider"),t=i("el-empty"),o=i("el-table-column"),g=i("el-popconfirm"),q=i("el-table"),j=i("el-pagination"),A=i("el-dialog");return M(),$("main",fe,[c("div",ge,[c("div",ve,[e(ce,{onSearch:x})]),c("div",{class:"action-right"},[c("div",{class:"action-button",onClick:p},"刷新"),c("div",{class:"action-button danger",onClick:S},"批量删除"),c("div",{class:"action-button",onClick:b},"添加测点")])]),e(n,{"content-position":"left"},{default:s(()=>[L("数据列表")]),_:1}),e(q,{data:d.value,border:"","header-cell-style":{background:"rgba(24, 144, 255, .15)",color:"#333333",borderColor:"#D9D9D9",fontWeight:400},onSelectionChange:v},{empty:s(()=>[e(t,{"image-size":100,description:"暂无数据"})]),default:s(()=>[e(o,{type:"selection",width:"55",align:"center"}),e(o,{prop:"mpsName",label:"测点名称",align:"center"},{default:s(V=>[c("div",be,[c("div",{class:"action-button",onClick:K=>r(V.row)},Y(V.row.mpsName),9,ye)])]),_:1}),e(o,{prop:"category",label:"测点类型",align:"center",width:"120"}),e(o,{prop:"courseStr",label:"测点里程",align:"center"}),e(o,{prop:"monitorBy",label:"监测人",align:"center"}),e(o,{prop:"tkCode",label:"测点编码",align:"center",width:"300"}),e(o,{prop:"u0",label:"累计控制值",align:"center"}),e(o,{prop:"v0",label:"速率控制值",align:"center"}),e(o,{prop:"direction",label:"监测方向",align:"center"}),e(o,{prop:"Status",label:"操作",width:"150",align:"center"},{default:s(V=>[c("div",Ve,[c("div",{class:"action-button",onClick:K=>U(V.row)},"编辑",8,Me),e(g,{title:"确认删除?",onConfirm:K=>I(V.row)},{reference:s(()=>[Ce]),_:2},1032,["onConfirm"])])]),_:1})]),_:1},8,["data","header-cell-style"]),c("div",ke,[e(j,{background:"",layout:"prev, pager, next",total:u.total,onCurrentChange:P,"hide-on-single-page":""},null,8,["total"])]),e(A,{modelValue:_.value,"onUpdate:modelValue":f[1]||(f[1]=V=>_.value=V),title:"编辑测点",width:"60%",draggable:""},{default:s(()=>[_.value?(M(),T(de,{key:0,mpsData:ee(N),projectId:O,onSaveMps:y,onOnClose:f[0]||(f[0]=V=>_.value=!1)},null,8,["mpsData"])):Z("",!0)]),_:1},8,["modelValue"])])}}},we=R(Ne,[["__scopeId","data-v-3ff0176d"]]),xe={class:""},De={__name:"Mps",setup(C){return B(()=>{}),(k,d)=>(M(),$("main",xe,[e(we)]))}};export{De as default};
