
export const books={
      path:'/books',
      title:'小册',
      name:'books',
      icon:'graphic',
      component:()=>import('@view/books/index.vue'),
      children:[
            {
                  path:'/books/all',
                  title:'全部',
                  name:'books-all',
                  component:()=>import('@view/books/modules/all.vue'),
                  meta:{
                        index:201,
                        parent:"books" 
                  }
                  
            },
            {
                  path:'/books/buy',
                  title:'已购',
                  name:'books-buy',
                  component:()=>import('@view/books/modules/buy.vue'),
                  meta:{
                        index:202,
                        parent:"books"
                  }
                  
            }
      ],
      meta:{
            tabs:true,
            index:200
      }
}