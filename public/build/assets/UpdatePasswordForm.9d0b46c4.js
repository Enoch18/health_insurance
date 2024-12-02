import{u as i,W as w,r as m,a as o,F as f,j as r}from"./app.e0868774.js";import{c as g}from"./index.893e1e4b.js";import{A as h}from"./ActionMessage.7f3134cc.js";import{F as _}from"./FormSection.dba22913.js";import{I as e}from"./InputError.81db5022.js";import{I as t}from"./InputLabel.c6a6f87e.js";import{P as N}from"./PrimaryButton.9a08ee29.js";import{T as n}from"./TextInput.4e7ee89b.js";import"./SectionTitle.f99b008d.js";function R(){const l=i(),s=w({current_password:"",password:"",password_confirmation:""}),c=m.exports.useRef(null),d=m.exports.useRef(null);function u(){s.put(l("user-password.update"),{errorBag:"updatePassword",preserveScroll:!0,onSuccess:()=>s.reset(),onError:()=>{var a,p;s.errors.password&&(s.reset("password","password_confirmation"),(a=c.current)==null||a.focus()),s.errors.current_password&&(s.reset("current_password"),(p=d.current)==null||p.focus())}})}return o(_,{onSubmit:u,title:"Update Password",description:"Ensure your account is using a long, random password to stay secure.",renderActions:()=>o(f,{children:[r(h,{on:s.recentlySuccessful,className:"mr-3",children:"Saved."}),r(N,{className:g({"opacity-25":s.processing}),disabled:s.processing,children:"Save"})]}),children:[o("div",{className:"col-span-6 sm:col-span-4",children:[r(t,{htmlFor:"current_password",children:"Current Password"}),r(n,{id:"current_password",type:"password",className:"mt-1 block w-full",ref:d,value:s.data.current_password,onChange:a=>s.setData("current_password",a.currentTarget.value),autoComplete:"current-password"}),r(e,{message:s.errors.current_password,className:"mt-2"})]}),o("div",{className:"col-span-6 sm:col-span-4",children:[r(t,{htmlFor:"password",children:"New Password"}),r(n,{id:"password",type:"password",className:"mt-1 block w-full",value:s.data.password,onChange:a=>s.setData("password",a.currentTarget.value),autoComplete:"new-password",ref:c}),r(e,{message:s.errors.password,className:"mt-2"})]}),o("div",{className:"col-span-6 sm:col-span-4",children:[r(t,{htmlFor:"password_confirmation",children:"Confirm Password"}),r(n,{id:"password_confirmation",type:"password",className:"mt-1 block w-full",value:s.data.password_confirmation,onChange:a=>s.setData("password_confirmation",a.currentTarget.value),autoComplete:"new-password"}),r(e,{message:s.errors.password_confirmation,className:"mt-2"})]})]})}export{R as default};
