import{j as g,m as S}from"./MainLayout.0824f71e.js";import{T as I}from"./TopHeaderSection.db497e75.js";import{a as r,j as e,u as M,b as l}from"./app.e0868774.js";import{B as A}from"./Breadcrumbs.cb625ac2.js";import{T as E}from"./Table.361516fa.js";import{C as P}from"./CustomModal.2fe4e5bb.js";import{C as f}from"./CustomTextInput.f2c70347.js";import{C as T}from"./CustomSelectbox.85340afe.js";import{u as j}from"./useAddEdit.8607b5de.js";import"./useTypedPage.b1bffe46.js";const w=({open:i,setOpen:o,values:t,handleChange:m,onSubmit:s,is_editing:d,errors:a,submitting:u})=>r(P,{open:i,setOpen:o,children:[e("h4",{className:"text-lg mb-2",children:d?"Edit Coverage Level":"Add Coverage level"}),e("hr",{}),r("form",{onSubmit:s,children:[e(f,{id:"name",name:"name",label:"Name",setValue:m,value:t==null?void 0:t.name,error:a==null?void 0:a.name}),e(f,{id:"number_of_months",name:"number_of_months",label:"Number of Months",setValue:m,value:t==null?void 0:t.number_of_months,error:a==null?void 0:a.number_of_months}),e(T,{id:"status",name:"status",label:"Status",data:[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}],setValue:m,value:t==null?void 0:t.status,error:a.status}),e("button",{className:"bg-blue-500 text-white px-5 py-2 rounded mt-3",disabled:u,children:u?"Submiting...":"Submit"})]})]}),R=({insurance_type_id:i,coverage_levels:o})=>{var h;const t=M(),{open:m,setOpen:s,values:d,setValues:a,is_editing:u,setIsEditing:c,setItemId:b,submitting:p,errors:x,handleChange:C,onSubmit:N}=j(`/administrations/insurance-types/${i}/coverage-periods`);d.insurance_type_id=i;const _=[{id:"name",label:"Name"},{id:"number_of_months",label:"Number Of Months"},{id:"status",label:"Status"},{id:"action",label:""}];return r(g,{title:"Insurance Setups | Coverage Periods",children:[e(A,{title:r("div",{className:"flex flex-row gap-1 items-center",children:[e(l,{className:"text-blue-500",href:t("administrations.index"),children:"Administrations"})," ",">",e(l,{className:"text-blue-500",href:t("insurance-types.index"),children:"Insurance Management"})," ",">",e(l,{className:"text-blue-500",href:`/administrations/insurance-types/setups/${i}`,children:"Insurance Setups"})," ",">",e("h4",{children:"Coverage Periods"})]})}),e(I,{title:"Coverage Periods",onBtnClick:()=>{s(!0),a({}),b(""),c(!1)}}),e("div",{className:"mt-3",children:e(E,{headers:_,rows:(h=o==null?void 0:o.data)==null?void 0:h.map(n=>({name:n.name,number_of_months:r("span",{children:[n.number_of_months," Months"]}),status:n.status,action:e("div",{className:"flex flex-row items-center gap-3",children:e("button",{onClick:()=>{s(!0),b(n.id),a({name:n.name,number_of_months:n.number_of_months,status:n.status}),s(!0),c(!0)},className:"border p-1 rounded",children:e(S,{className:"text-green-500 text-xl"})})})}))})}),e(w,{open:m,setOpen:s,values:d,handleChange:C,onSubmit:N,is_editing:u,errors:x,submitting:p})]})};export{R as default};
