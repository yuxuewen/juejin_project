
export const rem=(value)=>{
    var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    console.log(oWidth)
    return `${(value/oWidth*10).toFixed(2)}rem`
}