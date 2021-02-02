<template>
<van-pull-refresh v-model="state.isRefresh" @refresh="onRefresh">
 <van-list
    :loading="state.loading"
    :error="state.error"
    error-text="请求失败，点击重新加载"
    @load="onLoad"
    :offset="50"
    >
        <slot  :scope='state.list'></slot>
       <!-- <van-cell v-for="item in state.list" :key="item" :title="item.article_id" /> -->
 </van-list>
</van-pull-refresh>
</template>
<script>
import { reactive ,toRaw,watch } from 'vue';
import {List,PullRefresh } from 'vant'
export default {
  name:'list',
  props:{
       searchMethod:{
           type:Function
       },
       params:{
           type:Object,
       }
  },
  setup(props,context) {

    const state = reactive({
      list: [],
      error: false,
      loading: false,
      isRefresh:false
    }) ;
    let cursor='0';//查询参数之一（分页时用）
    const {params,searchMethod}=props;
    const searchData=async (params)=>{
         params.cursor=cursor;
         if(cursor==='0') state.list=[]
        try{
            state.loading=true;
            const {err_no,message,data,cursor:nextCursor}=await searchMethod(params);
            state.loading=false;
            if(err_no===0)
            {
                state.list=[...state.list,...data];
                cursor=nextCursor;
            }
            else{
                 state.error=false;
                 state.loading=false;
            }
                state.isRefresh=false;
        
            
        }catch(e){
            state.error=false;
            state.isRefresh=false;
        }
      
    }
    const onLoad = async () => {
        const res=await searchData(toRaw(params))
    };
    // 刷新

    const onRefresh=async()=>{
           cursor='0';//将查询分页参数重置
           const res=await searchData(toRaw(params));
    }
    // 如果父组件传递值发生改变刷新
    watch(params,()=>{
         onRefresh();
    })

    return {
      state,
      onLoad,
      onRefresh
      
    };
  },
  components:{
      [List.name]:List,
      [PullRefresh.name]:PullRefresh,
  }
};
</script>