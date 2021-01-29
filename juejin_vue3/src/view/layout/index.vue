<template>
     <my-router-view></my-router-view>
     <van-tabbar v-model="active" @change='onChange'>
           <van-tabbar-item  :name='name' :icon="icon" :key="name" v-for='({name,icon,title}) in tabsData'>{{title}}</van-tabbar-item>
     </van-tabbar>
</template>

<script>

import { Tabbar, TabbarItem } from 'vant';
import {tabsRouter} from '@router/index'
import { useRouter,useRoute } from 'vue-router'
import {ref,onMounted,watch} from 'vue'
import RouterView from '@components/routerView/index'
export default {
  name: 'layout',
  setup(){
      const route=useRoute(),
            active=ref(getCurr(route)),
            router=useRouter(),
            tabsData=Object.freeze(tabsRouter);

      // tabs 切换
      const onChange = (activeName) => {
          router.push({name:activeName})
      };

       function getCurr(route){
            if(route.meta && route.meta.parent){
                return route.meta.parent; 
            }
            return route.name;
      }
      watch(route,()=>{
          active.value=getCurr(route);
      })
      // 加载完毕
      onMounted(()=>{
      })
      return{
          active,
          tabsData,
          onChange,
          getCurr,
      }
  },
  components: {
    [Tabbar.name]:Tabbar,
    [TabbarItem.name]:TabbarItem,
    [RouterView.name]:RouterView,
  }
}
</script>

<style>

</style>
