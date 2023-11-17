import{a as x}from"./apiMapper-401f4c3b.js";import{_ as T,r as h,h as z,o as D,k as d,a as w,c as S,l as o,w as i,b as r,f as $,s as L,v as K,g as U,E as V,p as H,d as P}from"./index-6804c35b.js";const q={class:""},O={class:"sys-form-actions"},W={__name:"RoleForm",props:["roleData"],emits:["saveRole","onClose"],setup(v,{emit:b}){const u=v,s=h(),l=z({roleName:"",roleCode:"",description:""}),_={roleName:[{required:!0,message:"角色名称不能为空",trigger:"blur"}],roleCode:[{required:!0,message:"角色编码不能为空",trigger:"blur"}]};D(()=>{u.roleData&&p()});const p=()=>{for(const k in l)l[k]=u.roleData[k];l.id=u.roleData.id},M=()=>{s.value.validate(k=>{k&&b("saveRole",l)})},y=()=>{b("onClose")};return(k,m)=>{const f=d("el-input"),C=d("el-form-item"),I=d("el-form"),a=d("el-button");return w(),S("main",q,[o(I,{inline:!0,rules:_,model:l,"label-width":"150px",ref_key:"roleFormRef",ref:s},{default:i(()=>[o(C,{label:"角色名称",prop:"roleName"},{default:i(()=>[o(f,{modelValue:l.roleName,"onUpdate:modelValue":m[0]||(m[0]=e=>l.roleName=e)},null,8,["modelValue"])]),_:1}),o(C,{label:"角色编码",prop:"roleCode"},{default:i(()=>[o(f,{modelValue:l.roleCode,"onUpdate:modelValue":m[1]||(m[1]=e=>l.roleCode=e)},null,8,["modelValue"])]),_:1}),o(C,{label:"备注信息"},{default:i(()=>[o(f,{modelValue:l.description,"onUpdate:modelValue":m[2]||(m[2]=e=>l.description=e)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),r("div",O,[o(a,{type:"primary",onClick:M},{default:i(()=>[$("确认")]),_:1}),o(a,{type:"info",onClick:y},{default:i(()=>[$("取消")]),_:1})])])}}},j=T(W,[["__scopeId","data-v-e99b9614"]]),G={class:""},J={class:"tree-box"},Q={style:{width:"100%","margin-top":"30px"}},X={style:{width:"200px",margin:"0px auto"}},Y={__name:"RoleMenuForm",props:["role"],emits:["saveBind"],setup(v,{emit:b}){const u=v,s=h([]),l=h([]),_={children:"child",label:"name"},p=h(),M=h(!0),y=h(!1);D(()=>{}),(async()=>{const n={isAuth:!1,isResourceMenu:"",menuId:"",parentId:"",roleHasAuth:!1,roleId:"",type:0},{result:t}=await x.menuModule.getMenuList(n);s.value=t,m()})();const m=async()=>{const n=f(s.value,[]),t={isAuth:!1,isResourceMenu:"",menuId:"",parentId:"",roleHasAuth:!0,roleId:u.role.id,type:0},{result:c}=await x.menuModule.getMenuList(t),R=f(c,[]);l.value=R,y.value=n.length===R.length};function f(n,t){for(const c of n)t.push(c.id),c.child&&c.child.length>0&&f(c.child,t);return t}const C=()=>{let n=p.value.getHalfCheckedKeys(),t=p.value.getCheckedKeys();return[...n,...t]},I=()=>{l.value=[],y.value&&a(s.value),p.value.setCheckedKeys(l.value)},a=n=>{n.forEach(t=>{l.value.push(t.id),t.child&&t.child.length!==0&&a(t.child)})},e=()=>{b("saveBind",C())};return(n,t)=>{const c=d("el-checkbox"),R=d("el-tree"),B=d("el-button");return w(),S("main",G,[r("div",J,[o(c,{modelValue:y.value,"onUpdate:modelValue":t[0]||(t[0]=N=>y.value=N),label:"一键全选",onChange:I},null,8,["modelValue"]),o(R,{ref_key:"menu_tree",ref:p,data:s.value,"show-checkbox":!0,"node-key":"id","default-expand-all":"","default-checked-keys":l.value,props:_,getCheckedNodes:C,"check-strictly":M.value},null,8,["data","default-checked-keys","check-strictly"])]),r("div",Q,[r("div",X,[o(B,{style:{width:"200px"},type:"primary",onClick:t[1]||(t[1]=N=>e())},{default:i(()=>[$("确认绑定")]),_:1})])])])}}};const E=v=>(H("data-v-2799beed"),v=v(),P(),v),Z={class:"sys-page-table-main"},ee=E(()=>r("div",{class:"action-left"},null,-1)),te={class:"colunm-item-action"},oe=["onClick"],le=["onClick"],ae=E(()=>r("div",{class:"action-button btn-danger"},"删除",-1)),ne={class:"table-pagination"},se={__name:"RoleTable",setup(v){const b=h([]),u=z({pageNum:1,pageSize:10,total:0}),s=h(!1);let l=null;const _=h(!1);D(()=>{});const p=async()=>{const a={pageNum:u.pageNum,pageSize:u.pageSize},{result:e}=await x.roleModule.getRoleListPage(a);b.value=e.list,u.total=e.total};p();const M=()=>{l=null,s.value=!0},y=a=>{l=a,s.value=!0},k=async a=>{const{code:e,message:n}=await x.roleModule.saveRole(a);e===200?(V.success("保存成功"),p(),s.value=!1):V.error(n)},m=async a=>{const e={ids:[a.id]},{code:n,message:t}=await x.roleModule.deleteRole(e);n===200?(V.success("删除成功"),p()):V.error(t)},f=a=>{l=a,_.value=!0},C=a=>{u.pageNum=a,p()},I=async a=>{const e={roleId:l.id,menuIds:a},{code:n,message:t}=await x.roleModule.saveRoleMenu(e);n===200?(V.success("保存成功"),_.value=!1):V.error(t)};return(a,e)=>{const n=d("el-divider"),t=d("el-empty"),c=d("el-table-column"),R=d("el-popconfirm"),B=d("el-table"),N=d("el-pagination"),A=d("el-dialog");return w(),S("main",Z,[r("div",{class:"sys-table-action"},[ee,r("div",{class:"action-right"},[r("div",{class:"action-button",onClick:p},"刷新"),r("div",{class:"action-button",onClick:M},"添加角色")])]),o(n,{"content-position":"left"},{default:i(()=>[$("数据列表")]),_:1}),o(B,{data:b.value,border:"","header-cell-style":{background:"rgba(24, 144, 255, .15)",color:"#333333",borderColor:"#D9D9D9",fontWeight:400}},{empty:i(()=>[o(t,{"image-size":100,description:"暂无数据"})]),default:i(()=>[o(c,{prop:"roleName",label:"角色名称",align:"center"}),o(c,{prop:"roleCode",label:"角色编码",align:"center"}),o(c,{prop:"description",label:"描述信息",align:"center"}),o(c,{prop:"createTime",label:"创建时间",align:"center"}),o(c,{prop:"Status",label:"操作",width:"150",align:"center"},{default:i(g=>[r("div",te,[r("div",{class:"action-button",onClick:F=>y(g.row)},"编辑",8,oe),r("div",{class:"action-button",onClick:F=>f(g.row)},"授权",8,le),o(R,{title:"确认删除?",onConfirm:F=>m(g.row)},{reference:i(()=>[ae]),_:2},1032,["onConfirm"])])]),_:1})]),_:1},8,["data","header-cell-style"]),r("div",ne,[o(N,{background:"",layout:"prev, pager, next",total:u.total,onCurrentChange:C,"hide-on-single-page":""},null,8,["total"])]),o(A,{modelValue:s.value,"onUpdate:modelValue":e[1]||(e[1]=g=>s.value=g),title:"编辑角色",width:"30%",draggable:""},{default:i(()=>[s.value?(w(),L(j,{key:0,roleData:K(l),onSaveRole:k,onOnClose:e[0]||(e[0]=g=>s.value=!1)},null,8,["roleData"])):U("",!0)]),_:1},8,["modelValue"]),o(A,{modelValue:_.value,"onUpdate:modelValue":e[3]||(e[3]=g=>_.value=g),title:"角色授权",width:"30%",draggable:""},{default:i(()=>[_.value?(w(),L(Y,{key:0,role:K(l),onSaveBind:I,onOnClose:e[2]||(e[2]=g=>_.value=!1)},null,8,["role"])):U("",!0)]),_:1},8,["modelValue"])])}}},ce=T(se,[["__scopeId","data-v-2799beed"]]),re={class:""},ue={__name:"Role",setup(v){return D(()=>{}),(b,u)=>(w(),S("main",re,[o(ce)]))}};export{ue as default};
