<template>
<van-sticky>
    <van-tabs v-model="state.active" @change='onChange'>
         <van-tab :name='topic_id' :title="title" :key='topic_id' v-for='({title,topic_id}) in state.list'></van-tab>
    </van-tabs>
</van-sticky>
    <van-divider style="margin:10px"/>
</template>

<script>

import API from '@api/index'
import { Tab, Tabs,Toast,Sticky  } from 'vant';
import {useRoute,useRouter} from 'vue-router'
import {reactive} from 'vue'
export default {
  name: 'pin-tabs',
  emits:['change'],
  setup(props,context){
      const state=reactive({
           active:'',
           list:[]
      })
      const router=useRouter(),route=useRoute();
      const  getRecommendTagTopicList=async ()=>{
        let params={
            cursor:'0',
            id_type:11,
            limit:7,
            sort_type:0
        }
        
        const {err_no,data,message}=await API.getRecommendTagTopicList(params);
        if(err_no!==0) Toast.fail(message);
        state.list=data;
        if(!state.active && data.length>0) state.active=data[0].topic_id;
        
    
      }
      const onChange=(topic_id)=>{
            router.push(`/pin/${topic_id}`);
            context.emit('change',topic_id);
            
      }
      getRecommendTagTopicList();
        return {
            state,
            onChange
        }
  },
  components: {
    [Tab.name]:Tab,
    [Tabs.name]:Tabs,
    [Sticky.name]:Sticky

  }
}
</script>

<style>

</style>
