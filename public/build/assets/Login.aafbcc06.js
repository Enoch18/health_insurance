import{u,W as f,a as s,j as e,Y as g,b as m}from"./app.e0868774.js";import{c as p}from"./index.893e1e4b.js";import{A as h}from"./AuthenticationCard.96722256.js";import{C as x}from"./Checkbox.06149589.js";import{I as n}from"./InputLabel.c6a6f87e.js";import{P as y}from"./PrimaryButton.9a08ee29.js";import{T as i}from"./TextInput.4e7ee89b.js";import{I as d}from"./InputError.81db5022.js";function I({canResetPassword:l,status:o}){const t=u(),r=f({email:"",password:"",remember:""});function c(a){a.preventDefault(),r.post(t("login"),{onFinish:()=>r.reset("password")})}return s(h,{children:[e(g,{title:"login"}),o&&e("div",{className:"mb-4 font-medium text-sm text-green-600 dark:text-green-400",children:o}),s("form",{onSubmit:c,children:[s("div",{children:[e(n,{htmlFor:"email",children:"Email"}),e(i,{id:"email",type:"email",className:"mt-1 block w-full",value:r.data.email,onChange:a=>r.setData("email",a.currentTarget.value),required:!0,autoFocus:!0}),e(d,{className:"mt-2",message:r.errors.email})]}),s("div",{className:"mt-4",children:[e(n,{htmlFor:"password",children:"Password"}),e(i,{id:"password",type:"password",className:"mt-1 block w-full",value:r.data.password,onChange:a=>r.setData("password",a.currentTarget.value),required:!0,autoComplete:"current-password"}),e(d,{className:"mt-2",message:r.errors.password})]}),e("div",{className:"mt-4",children:s("label",{className:"flex items-center",children:[e(x,{name:"remember",checked:r.data.remember==="on",onChange:a=>r.setData("remember",a.currentTarget.checked?"on":"")}),e("span",{className:"ml-2 text-sm text-gray-600 dark:text-gray-400",children:"Remember me"})]})}),s("div",{className:"flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0 mt-4",children:[l&&e("div",{children:e(m,{href:t("password.request"),className:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",children:"Forgot your password?"})}),s("div",{className:"flex items-center justify-end",children:[e(m,{href:t("register"),className:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",children:"Need an account?"}),e(y,{className:p("ml-4",{"opacity-25":r.processing}),disabled:r.processing,children:"Log in"})]})]})]})]})}export{I as default};
