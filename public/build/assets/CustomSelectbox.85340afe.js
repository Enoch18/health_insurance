import{a as e,j as t}from"./app.e0868774.js";const x=({id:l,label:o,name:n,value:m,setValue:d,error:s,required:r,data:p,disabled:a,hideLabel:g})=>e("div",{className:"col-span-2 sm:col-span-1 mt-3",children:[g!==!0&&t("label",{htmlFor:l,className:"block text-sm font-medium text-gray-900 dark:text-white",children:o}),e("select",{onChange:d,value:m,name:n,id:l,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",required:r!=null?r:!1,disabled:a!=null?a:!1,children:[e("option",{value:"",children:["-- Select ",o," --"]}),p.map((c,h)=>t("option",{value:c.value,children:c.label},h))]}),s&&t("span",{className:"text-red-500",children:s})]});export{x as C};
