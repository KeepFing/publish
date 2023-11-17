import{a as w}from"./apiMapper-401f4c3b.js";import{P as B}from"./constant-8fe2541b.js";import{_ as I,h as H,r as R,o as x,k as p,a as h,c as N,l as e,w as n,b as i,f as F,F as O,e as j,E as C,t as A,s as L,v as S,g as E,p as G,d as W}from"./index-6804c35b.js";const J={class:""},K={class:"sys-form-actions"},Q={__name:"UserForm",props:["userData"],emits:["saveUser","onClose"],setup(v,{emit:b}){const r=v,U=(_,l,c)=>{l===""?c(new Error("电话号码不能为空")):B.test(l)?c():c(new Error("请输入正确的手机号"))},o=H({userName:"",realName:"",phone:"",password:"",company:"",source:"",projectIds:[]}),u=R(),f={userName:[{required:!0,message:"账号不能为空",trigger:"blur"}],realName:[{required:!0,message:"用户姓名不能为空",trigger:"blur"}],phone:[{required:!0,message:"电话号码不能为空",trigger:"blur"},{validator:U,trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}],company:[{required:!0,message:"所属公司不能为空",trigger:"blur"}]};x(()=>{r.userData&&t()});const t=()=>{for(const _ in o)o[_]=r.userData[_];o.projectIds=[],o.id=r.userData.id},m=()=>{u.value.validate(_=>{_&&b("saveUser",o)})},y=()=>{b("onClose")};return(_,l)=>{const c=p("el-input"),V=p("el-form-item"),d=p("el-form"),a=p("el-button");return h(),N("main",J,[e(d,{inline:!0,model:o,"label-width":"150px",rules:f,ref_key:"userFormRef",ref:u},{default:n(()=>[e(V,{label:"账号",prop:"userName"},{default:n(()=>[e(c,{modelValue:o.userName,"onUpdate:modelValue":l[0]||(l[0]=s=>o.userName=s)},null,8,["modelValue"])]),_:1}),e(V,{label:"姓名",prop:"realName"},{default:n(()=>[e(c,{modelValue:o.realName,"onUpdate:modelValue":l[1]||(l[1]=s=>o.realName=s)},null,8,["modelValue"])]),_:1}),e(V,{label:"电话号码",prop:"phone"},{default:n(()=>[e(c,{modelValue:o.phone,"onUpdate:modelValue":l[2]||(l[2]=s=>o.phone=s)},null,8,["modelValue"])]),_:1}),e(V,{label:"密码",prop:"password"},{default:n(()=>[e(c,{modelValue:o.password,"onUpdate:modelValue":l[3]||(l[3]=s=>o.password=s)},null,8,["modelValue"])]),_:1}),e(V,{label:"所属公司",prop:"company"},{default:n(()=>[e(c,{modelValue:o.company,"onUpdate:modelValue":l[4]||(l[4]=s=>o.company=s)},null,8,["modelValue"])]),_:1}),e(V,{label:"用户来源"},{default:n(()=>[e(c,{modelValue:o.source,"onUpdate:modelValue":l[5]||(l[5]=s=>o.source=s)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),i("div",K,[e(a,{type:"primary",onClick:m},{default:n(()=>[F("确认")]),_:1}),e(a,{type:"info",onClick:y},{default:n(()=>[F("取消")]),_:1})])])}}},X=I(Q,[["__scopeId","data-v-12459af2"]]);const Y={class:"set-role-form-main"},Z={__name:"SetRoleForm",props:["userHasRole","user"],setup(v){const b=v,r=R([]);x(()=>{}),(async()=>{const{result:u}=await w.roleModule.getRoleList(),f=b.userHasRole.map(t=>t.id);u.map(t=>t.checked=f.includes(t.id)),r.value=u,console.log(r.value)})();const o=async(u,f)=>{const t={userId:b.user.id,roleId:f.id,isAdd:u};console.log(t);const{success:m,message:y}=await w.roleModule.saveUserRole(t);m?C.success("设置成功"):(C.error(y),r.value.map(_=>{_.id===f.id&&(_.checked=!u)}))};return(u,f)=>{const t=p("el-checkbox");return h(),N("main",Y,[(h(!0),N(O,null,j(r.value,m=>(h(),N("div",{key:m.id},[e(t,{modelValue:m.checked,"onUpdate:modelValue":y=>m.checked=y,label:m.roleName,size:"large",onChange:y=>o(y,m)},null,8,["modelValue","onUpdate:modelValue","label","onChange"])]))),128))])}}},ee=I(Z,[["__scopeId","data-v-64214a93"]]);const q=v=>(G("data-v-1e897f40"),v=v(),W(),v),oe={class:"sys-page-table-main"},ae=q(()=>i("div",{class:"action-left"},null,-1)),se={class:"colunm-item-action"},te=["onClick"],le=["onClick"],ne=q(()=>i("div",{class:"action-button btn-danger"},"删除",-1)),re={class:"table-pagination"},ue={__name:"UserTable",setup(v){const b=R([{}]),r=R(!1),U=H({pageNum:1,pageSize:10,total:0}),o=R(!1);let u=null,f=[];x(()=>{});const t=async()=>{const d={pageNum:U.pageNum,pageSize:U.pageSize},{result:a}=await w.userModule.getUserListPage(d);b.value=a.list,U.total=a.total};t();const m=d=>{u=d,o.value=!0},y=async d=>{const a={ids:[d.id]},{code:s,message:D}=await w.userModule.deleteUser(a);s===200?(C.success("删除成功"),t()):C.error(D)},_=()=>{u=null,o.value=!0},l=async d=>{const{code:a,message:s}=await w.userModule.saveUser(d);a===200?(C.success("保存成功"),t(),o.value=!1):C.error(s)},c=async d=>{u=d;const a={userId:d.id},{result:s}=await w.userModule.getUserHasRoleList(a);f=s,r.value=!0},V=d=>{U.pageNum=d,t()};return(d,a)=>{const s=p("el-divider"),D=p("el-empty"),k=p("el-table-column"),z=p("el-popconfirm"),P=p("el-table"),T=p("el-pagination"),$=p("el-dialog");return h(),N("main",oe,[i("div",{class:"sys-table-action"},[ae,i("div",{class:"action-right"},[i("div",{class:"action-button",onClick:t},"刷新"),i("div",{class:"action-button",onClick:_},"添加用户")])]),e(s,{"content-position":"left"},{default:n(()=>[F("数据列表")]),_:1}),e(P,{data:b.value,border:"","header-cell-style":{background:"rgba(24, 144, 255, .15)",color:"#333333",borderColor:"#D9D9D9",fontWeight:400}},{empty:n(()=>[e(D,{"image-size":100,description:"暂无数据"})]),default:n(()=>[e(k,{prop:"userName",label:"账号",align:"center"}),e(k,{prop:"realName",label:"姓名",align:"center"}),e(k,{prop:"phone",label:"电话号码",align:"center"}),e(k,{prop:"company",label:"所属单位",align:"center"}),e(k,{prop:"status",label:"状态",align:"center"},{default:n(g=>[i("span",null,A(g.row.status?"正常":"异常"),1)]),_:1}),e(k,{prop:"createTime",label:"创建时间",align:"center"}),e(k,{prop:"Status",label:"操作",width:"150",align:"center"},{default:n(g=>[i("div",se,[i("div",{class:"action-button",onClick:M=>m(g.row)},"编辑",8,te),i("div",{class:"action-button",onClick:M=>c(g.row)},"设置角色",8,le),e(z,{title:"确认删除?",onConfirm:M=>y(g.row)},{reference:n(()=>[ne]),_:2},1032,["onConfirm"])])]),_:1})]),_:1},8,["data","header-cell-style"]),i("div",re,[e(T,{background:"",layout:"prev, pager, next",total:U.total,onCurrentChange:V,"hide-on-single-page":""},null,8,["total"])]),e($,{modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=g=>o.value=g),title:"编辑用户",width:"30%",draggable:""},{default:n(()=>[o.value?(h(),L(X,{key:0,userData:S(u),onSaveUser:l,onOnClose:a[0]||(a[0]=g=>o.value=!1)},null,8,["userData"])):E("",!0)]),_:1},8,["modelValue"]),e($,{modelValue:r.value,"onUpdate:modelValue":a[3]||(a[3]=g=>r.value=g),title:"设置角色",width:"30%",draggable:""},{default:n(()=>[r.value?(h(),L(ee,{key:0,userHasRole:S(f),user:S(u),onOnClose:a[2]||(a[2]=g=>r.value=!1)},null,8,["userHasRole","user"])):E("",!0)]),_:1},8,["modelValue"])])}}},de=I(ue,[["__scopeId","data-v-1e897f40"]]),ce={class:""},_e={__name:"User",setup(v){return x(()=>{}),(b,r)=>(h(),N("main",ce,[e(de)]))}};export{_e as default};
