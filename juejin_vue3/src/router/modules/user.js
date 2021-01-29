
export const user={
    path:'/user',
    title:'我',
    name:'user',
    icon:'manager',
    component:()=>import('@view/user/index.vue'),
    meta:{
          tabs:true,
          index:3
    }
}