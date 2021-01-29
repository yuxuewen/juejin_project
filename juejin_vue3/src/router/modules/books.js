
export const books={
      path:'/books',
      title:'小册',
      name:'books',
      icon:'graphic',
      component:()=>import('@view/books/index.vue'),
      meta:{
            tabs:true,
            index:200
      }
}