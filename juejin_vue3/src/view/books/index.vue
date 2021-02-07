<template>
    <van-sticky>
           <van-tabs v-model:active="active" @change="onChange">
             <van-tab :title="title" v-for='({name,title}) in tabsData' :key="name" :name="name"></van-tab>
         </van-tabs> 
    </van-sticky>
    
    <scroll-components @h-scroll='handleScroll'>
         <my-router-view />
    </scroll-components>
</template>

<script>

import { Tab, Tabs,Sticky } from 'vant';
import {books} from '@router/modules/books'
import routerView from '@components/routerView/index'
import scrollComponents from '@components/scrollComponents/index'
import {ref} from 'vue'
import {useRouter,useRoute} from 'vue-router'

export default {
  name: 'books',
  setup(){
     const active=ref(null),router=useRouter(),route=useRoute();
     const onChange=(name)=>{
         router.push({name:name})
     }
     active.value=route.name;
     const handleScroll=(direction)=>{
          let curIndex=0;
          books.children.forEach(({name},index) => {
               if(name===active.value)
               {
                  curIndex=index;
                  return;
               }
          });
   
          if(direction==='right')
          {
            //  router.push({name:books.children[curIndex+1].name})
             active.value=books.children[curIndex+1].name;
             onChange(books.children[curIndex+1].name)
          }
         if(direction==='left')
          {
            onChange(books.children[curIndex-1].name)
           active.value=books.children[curIndex-1].name;
          }
     }
     return {
       tabsData:books.children,
       active,
       onChange,
       handleScroll
     }
  },
  components: {
     [Tab.name]:Tab,
     [Tabs.name]:Tabs,
     [Sticky.name]:Sticky,
     [scrollComponents.name]:scrollComponents,
     [routerView.name]:routerView
  }
}
</script>

<style>

</style>
