

export const pin={
    path:'/pin',
    title:'沸点',
    name:'pin',
    icon:'browsing-history-o',
    component:()=>import('@view/pin/index.vue'),
    meta:{
          tabs:true,
          index:1
    }
}