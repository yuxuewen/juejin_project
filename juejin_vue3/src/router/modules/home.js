
export const children=[
   
    {
        "component":()=>import('@view/home/modules/recommended.vue'),
        "name":"recommended",
        "title":"推荐",
        "path":"/home/recommended",
        "cate_id":''
    },
    {
        "component":()=>import('@view/home/modules/backend.vue'),
        "name":"backend",
        "title":"后端",
        "path":"/home/backend",
        "cate_id":"6809637769959178254"
    },
    {
        "component":()=>import('@view/home/modules/frontend.vue'),
        "name":"frontend",
        "title":"前端",
        "path":"/home/frontend",
        "cate_id":"6809637767543259144"
    },
    {
        "component":()=>import('@view/home/modules/android.vue'),
        "name":"android",
        "title":"Android",
        "path":"/home/android",
        "cate_id":"6809635626879549454"
    },
    {
        "component":()=>import('@view/home/modules/ios.vue'),
        "name":"ios",
        "title":"IOS",
        "path":"/home/ios",
        "cate_id":"6809635626661445640"
    },
    {
        "component":()=>import('@view/home/modules/ai.vue'),
        "name":"ai",
        "title":"人工智能",
        "path":"/home/ai",
        "cate_id":"6809637773935378440"
    },
    {
        "component":()=>import('@view/home/modules/freebie.vue'),
        "name":"freebie",
        "title":"开发工具",
        "path":"/home/freebie",
        "cate_id":"6809637771511070734"
    },
    {
        "component":()=>import('@view/home/modules/career.vue'),
        "name":"career",
        "title":"代码人生",
        "path":"/home/career",
        "cate_id":"6809637776263217160"
    },
    {
        "component":()=>import('@view/home/modules/article.vue'),
        "name":"article",
        "title":"阅读",
        "path":"/home/article",
        "cate_id":'6809637772874219534'
    },
  
]

children.forEach((item,index)=>{
     item.meta={
        parent:'home',
        index:index,
        cate_id:item.cate_id // 标识
      }
      delete item.cate_id;
})

export const home={
    path:'/home',
    title:'首页',
    name:'home',
    icon:'wap-home-o',
    component:()=>import('@view/home/index.vue'),
    children:children,
    meta:{
          tabs:true,
          index:0
    }
}
