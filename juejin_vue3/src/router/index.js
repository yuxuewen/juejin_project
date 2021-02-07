/**
 * 路由
 */
import { createRouter, createWebHashHistory,useRouter } from 'vue-router'
 import {home} from './modules/home'
 import {pin} from './modules/pin'
 import {books,booksDetial} from './modules/books'
 import {user} from './modules/user'

 export const tabsRouter=[
      home,pin,books,user
 ]
export const router=new createRouter({
     history:createWebHashHistory(),
     routes:[
         {
              path:'/',
              redirect:'/home',
              component:()=>import('@view/layout/index'),
              children:tabsRouter
         },
         booksDetial,
         
     //     {
     //          path:'*',
     //          component:()=>import('@view/404')
     //     }
     ]
})

export  const routePush=function (params){
     const router = useRouter();
     return router

}