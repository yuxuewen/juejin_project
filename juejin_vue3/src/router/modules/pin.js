

export const pin={
    path:'/pin/:top_id',
    title:'沸点',
    name:'pin',
    icon:'browsing-history-o',
    component:()=>import('@view/pin/index.vue'),
    meta:{
          tabs:true,
          params:{top_id:'6824710203301167112'},
          index:1
    }
}