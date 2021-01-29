
const require_module=require.context('./',false,/.vue$/);
export const modules=[];
require_module.keys().forEach(file_name => {
    const {name,label}=require_module(file_name).default;
    let module={};
    module.component =`toImport(@view/home${file_name.slice(1)})`
   
   module.name =name
   module.title=label
   module.path=`/home/${name}`
   modules.push(module)

});

console.log(JSON.stringify(modules))