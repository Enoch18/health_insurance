import{T as o}from"./TextInput.4e7ee89b.js";import{a as r,j as e}from"./app.e0868774.js";const n=({tabs:a,defaultValue:s})=>r("div",{className:"flex flex-row mt-2",children:[e("div",{className:"w-[300px]",children:e(o,{className:"w-[100%] h-10",placeholder:"Search..."})}),e("div",{className:"flex flex-row flex-1 justify-end",children:r("select",{className:"text-black w-[200px] rounded text-center h-10",defaultValue:s!=null?s:"",children:[e("option",{value:"",children:"--Filter By--"}),a.map((l,c)=>e("option",{value:l.value,children:l.label},c))]})})]});export{n as C};
