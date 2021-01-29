<template>
    <van-search
      v-model="searchValue"
      show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
      >
        <template #action>
            <div @click="onSearch">搜索</div>
        </template>
     </van-search>
     <van-sticky>
         <van-tabs v-model:active="active" @change="onChange">
            <van-tab :title="title" v-for='({name,title}) in tabsData' :key="name" :name="name"></van-tab>
         </van-tabs> 
     </van-sticky>
    
    
     <my-router-view/>
</template>

<script>
import {ref,watch,onMounted } from 'vue'
import { Search,Sticky } from 'vant';
import { Tab, Tabs,Popup } from 'vant';
import {children} from '@router/modules/home'
import { useRouter,useRoute } from 'vue-router'
import TagPopup from '@components/home/TagPopup'
import routerView from '@components/routerView/index'
export default {
  name: 'books',
  setup(){
     const searchValue=ref(''),
          router=useRouter(),
          route=useRoute(),
          active=ref(route.name);

     const onSearch=(value)=>{
           
     }
     const onChange=(name)=>{
           router.push({name:name})
     }
     /**
      * 路由变化 active值变更
      */
     watch(route,()=>{
        active.value=route.name;
      
     })
     return{
         searchValue,
         tabsData:children,
         onSearch,
         onChange,
         active
     }
  },
  components: {
     [Search.name]:Search,
     [Tab.name]:Tab,
     [Tabs.name]:Tabs,
     [Popup.name]:Popup,
     [TagPopup.name]:TagPopup,
     [routerView.name]:routerView,
     [Sticky.name]:Sticky,
     
  }
}
</script>

<style>

</style>
