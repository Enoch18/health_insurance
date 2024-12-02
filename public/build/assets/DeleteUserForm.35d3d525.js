import{u as f,r as c,W as y,a as r,j as o}from"./app.e0868774.js";import{c as w}from"./index.893e1e4b.js";import{A as h}from"./Modal.f1da7eca.js";import{D as i}from"./DangerButton.c4d8624f.js";import{D as n}from"./DialogModal.5ccb8335.js";import{T as D}from"./TextInput.4e7ee89b.js";import{I as g}from"./InputError.81db5022.js";import{S as x}from"./SecondaryButton.ce6c8672.js";import"./SectionTitle.f99b008d.js";function j(){const u=f(),[d,a]=c.exports.useState(!1),e=y({password:""}),l=c.exports.useRef(null);function m(){a(!0),setTimeout(()=>{var t;return(t=l.current)==null?void 0:t.focus()},250)}function p(){e.delete(u("current-user.destroy"),{preserveScroll:!0,onSuccess:()=>s(),onError:()=>{var t;return(t=l.current)==null?void 0:t.focus()},onFinish:()=>e.reset()})}function s(){a(!1),e.reset()}return r(h,{title:"Delete Account",description:"Permanently delete your account.",children:[o("div",{className:"max-w-xl text-sm text-gray-600 dark:text-gray-400",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."}),o("div",{className:"mt-5",children:o(i,{onClick:m,children:"Delete Account"})}),r(n,{isOpen:d,onClose:s,children:[r(n.Content,{title:"Delete Account",children:["Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account.",r("div",{className:"mt-4",children:[o(D,{type:"password",className:"mt-1 block w-3/4",placeholder:"Password",value:e.data.password,onChange:t=>e.setData("password",t.currentTarget.value)}),o(g,{message:e.errors.password,className:"mt-2"})]})]}),r(n.Footer,{children:[o(x,{onClick:s,children:"Cancel"}),o(i,{onClick:p,className:w("ml-2",{"opacity-25":e.processing}),disabled:e.processing,children:"Delete Account"})]})]})]})}export{j as default};
