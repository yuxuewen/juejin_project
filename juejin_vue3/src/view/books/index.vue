<template>
        <van-tabs v-model:active="active" @change="onChange">
            <van-tab :title="title" v-for='({name,title}) in tabsData' :key="name" :name="name"></van-tab>
         </van-tabs> 
          <my-router-view/>
</template>

<script>

import { Tab, Tabs } from 'vant';
import {books} from '@router/modules/books'
import routerView from '@components/routerView/index'
import {ref} from 'vue'
import {useRouter,useRoute} from 'vue-router'

export default {
  name: 'books',
  setup(){
     const active=ref(null),router=useRouter(),route=useRoute();
     const onChange=(name)=>{
         active.value=name;
         router.push({name:name})
     }
     active.value=route.name;
     return {
       tabsData:books.children,
       active,
       onChange
     }
  },
  components: {
    
     [Tab.name]:Tab,
     [Tabs.name]:Tabs,
     [routerView.name]:routerView
  }
}
</script>

<style>

</style>
