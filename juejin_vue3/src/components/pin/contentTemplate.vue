<template>
    <list v-model:params="params" v-model:searchMethod='searchMethod'>
         <template v-slot='data'>
               <!-- <van-cell v-for="item in data.scope" :key="item" title="item" /> -->
                <pin-item  v-for="item in data.scope"  :item='handleResult(item)' :key="item.msg_id"  ></pin-item>
         </template>
    </list>
</template>

<script>

import pinItem from './pinItem.vue'
import List  from '@components/List/index'
import {reactive,watch}  from 'vue'
import API from '@api/index'
export default {
  name: 'content-template',
  props:{
    topic_id:{
        type:String
    },
  },
  setup(props,context){
           let params={};
           let searchMethod=null;
           let {topic_id}=props;
           const getTopicList=async(params)=>{
                  const res=await API.getTopicList(params);
                  return res;
           }

           const handleParams=(topic_id)=>{
                 params=reactive( {
                    cursor:'0',
                    sort_type:200,
                    id_type:4,
                    topic_id:props.topic_id ,
                    limit:20
                  }
                )
               if(topic_id){
                    // params.cate_id=cate_id;
                    searchMethod=getTopicList;
               }
               else{
               
                     searchMethod=getTopicList;
               }

           }
           /**
            * 处理返回值
            */
        const handleResult=(item)=>{
            const {msg_id,msg_Info,author_user_info}=item;
            const {content,pic_list,digg_count,comment_count}=msg_Info ;
            const {job_title,user_name,avatar_large,level}=author_user_info;
             return {content,pic_list,digg_count,comment_count,job_title,user_name,avatar_large,level,msg_id};
           
         }
         watch(props,()=>{
            params.topic_id=props.topic_id;
         })
           handleParams(topic_id);
      return {
         searchMethod,
         params,
         handleResult
      }
  },
  components: {
      [List.name]:List,
      [pinItem.name]:pinItem,
  }
}
</script>

<style>

</style>
