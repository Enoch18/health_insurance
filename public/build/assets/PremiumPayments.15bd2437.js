import{j as h}from"./MainLayout.0960af3c.js";import{T as P}from"./TopHeaderSection.cedea162.js";import{C as f}from"./CustomTabs.e2952d29.js";import{T as g}from"./Table.132832a0.js";import{u as C}from"./useAddEdit.89d8a839.js";import{C as x}from"./CustomModal.6a000720.js";import{C as A}from"./CustomTextInput.24d51a03.js";import{a as i,j as a,F as T}from"./app.099c68d2.js";import"./useTypedPage.d8b311d4.js";import"./TextInput.3b3d916b.js";import"./index.893e1e4b.js";const V=({premium_payments:s})=>{var l;const{open:m,setOpen:d,values:t,setValues:u,is_editing:p,setIsEditing:c,setItemId:b,submitting:o,errors:n,handleChange:_,onSubmit:y}=C("/financials/premium-payments");return i(h,{title:"Policy Holders",children:[a(P,{title:"Premium Payments",hideAddBtn:!0}),a(f,{tabs:[{label:"All"},{label:"Pending"},{label:"Paid"},{label:"Overdue"},{label:"Failed"}]}),a(g,{headers:[{id:"transaction_number",label:"Transaction #"},{id:"policy_number",label:"Policy Number"},{id:"policy_holder",label:"Policy Holder"},{id:"payment_date",label:"Payment Date"},{id:"description",label:"Description"},{id:"currency",label:"Currency"},{id:"amount_due",label:"Amount Due"},{id:"amount_paid",label:"Amount Paid"},{id:"due_date",label:"Due Date"},{id:"payment_date",label:"Payment Date"},{id:"payment_status",label:"Payment Status"},{id:"action",label:""}],rows:(l=s.data)==null?void 0:l.map(e=>{var r;return{transaction_number:e.transaction_reference,policy_number:e.policy_holder.policy_number,policy_holder:`${e.policy_holder.first_name} ${e.policy_holder.last_name}`,payment_date:(r=e.payment_date)!=null?r:"N/A",description:e.description,currency:e.currency,amount_due:e.amount_due,amount_paid:e.amount_paid,due_date:e.due_date,payment_status:e.payment_status,action:a(T,{children:e.amount_due>0&&a("button",{onClick:()=>{d(!0),b(e.id),c(!0),u({amount_paid:e.amount_due})},className:"bg-green-500 text-white rounded p-1",children:"Process"})})}}),paperClassName:"mt-3"}),i(x,{open:m,setOpen:d,children:[a("h4",{className:"text-lg mb-2",children:p?"Edit Benefit Package":"Add Benefit Package"}),a("hr",{}),i("form",{onSubmit:y,children:[a(A,{id:"amount_paid",name:"amount_paid",label:"Pay",setValue:_,value:t==null?void 0:t.amount_paid,error:n==null?void 0:n.amount_paid}),a("button",{className:"bg-blue-500 text-white px-5 py-2 rounded mt-3",disabled:o,children:o?"Submiting...":"Submit"})]})]})]})};export{V as default};
