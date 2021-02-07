<template>
    <list v-model:params="params" v-model:searchMethod='searchMethod'>
         <template v-slot='data'>
               <!-- <van-cell v-for="item in data.scope" :key="item" title="item" /> -->
                <book-item  v-for="item in data.scope"  :item='handleResult(item)' :key="item.msg_id"  ></book-item>
         </template>
    </list>
</template>

<script>

import bookItem from './bookItem.vue'
import List  from '@components/List/index'
import {reactive,watch}  from 'vue'
import API from '@api/index'
export default {
  name: 'content-template',
  props:{
    category_id:{
        type:String
    },
  },
  setup(props){
           let params={};
           let searchMethod=null;
           let {category_id}=props;
           const getBooksList=async(params)=>{
                  const res=await API.getBooksList(params);
                  return res;
           }

           const handleParams=(category_id)=>{
                 params=reactive( {
                    cursor:'0',
                    category_id:props.category_id ||'0' ,
                    limit:20
                  }
                )
               if(category_id){
                    // params.cate_id=cate_id;
                    searchMethod=getBooksList;
               }
               else{
               
                     searchMethod=getBooksList;
               }

           }
           /**
            * 处理返回值
            */
        const handleResult=(item)=>{
            const {booklet_id,base_info,user_info,is_buy,event_discount}=item;
            const{title,cover_img,price,summary,buy_count,section_count}=base_info;
            const {user_name,job_title,leval,avatar_large,company}=user_info;
            const {discount_rate}=event_discount ||{};
            return {price,is_buy,title,cover_img,summary,buy_count,section_count,discount_rate,booklet_id,user_name,job_title,leval,avatar_large,company};
           
         }
         watch(props,()=>{
            params.category_id=props.category_id;
         })
           handleParams(category_id);
      return {
         searchMethod,
         params,
         handleResult
      }
  },
  components: {
      [List.name]:List,
      [bookItem.name]:bookItem,
  }
}
</script>

<style>

</style>
