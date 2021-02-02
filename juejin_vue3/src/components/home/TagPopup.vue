
<template>
    <div class='tag-top'  v-show='!showOverlay' >
         <div class="left">
               <van-swipe>
                     <van-swipe-item :key="tag_id" v-for="({tag_id,tag_name}) in tagList" style='width:auto;margin:5px' >
                             <div :class="{'tag':true,'active':tag_id===curTagId}" @click='chooseTag(tag_id)'>{{tag_name}}</div>
                     </van-swipe-item>
                       <template #indicator></template>
               </van-swipe>
              
         </div>
         <van-icon name="arrow-down" class="right" @click='changeShow' />
    </div>
     <div class="van-divider" style='margin-bottom:0' id="van-divider"></div>
     <van-overlay v-model:show='showOverlay' :custom-style="{top:`${overlayTop}px`}" :z-index='1000'>
         <van-divider  style="margin:0px"/>
          <div class='tag-top'  style="background-color: #fff;">
            <div   class="left">
                     <div :class="{'tag':true,'active':tag_id===curTagId}"  @click='chooseTag(tag_id)' :key="tag_id" v-for="({tag_id,tag_name}) in tagList">{{tag_name}}</div>
                    
            </div>
             <van-icon name="arrow-up" class="right" @click='changeShow' />
          </div>
     </van-overlay>
</template>

<script>

import { Overlay,Divider,Tag,Swipe, SwipeItem } from 'vant';
import {ref,nextTick,watch,onMounted,onUnmounted } from 'vue';
import API from '@api/index'
export default {
  name: 'tag-popup',
  props:{
      cate_id:String
  },
  emits: ['callback'],
  setup(props,context){
      const show=ref(false),showOverlay=ref(false),overlayTop=ref(0),dividerRef=ref(null),tagList=ref([]),curTagId=ref('');
      const changeShow=()=>{
              showOverlay.value=!showOverlay.value;
      }
      const getDomTop=()=>{
           const {top}=document.querySelector('.tag-top') && document.querySelector('.tag-top').getBoundingClientRect();
            overlayTop.value=top;
      }
      nextTick(()=>{
           getDomTop();
      })
      const getRecommendTagList=async (cate_id)=>{
        if(!cate_id) tagList.value=[];
        try{
              const {err_no,message,data}= await API.getRecommendTagList({'cate_id':cate_id})
              if(err_no!==0) return;
               tagList.value=data;
               console.log(tagList)

        }catch(e){

        }
      };

      const chooseTag=(id)=>{
             curTagId.value=id;
             context.emit('callback',id)
      }
      watch(props,()=>{
          getRecommendTagList(props.cate_id);
      })
      getRecommendTagList(props.cate_id);
      onMounted(()=>{
           window.addEventListener("scroll", getDomTop);
      })
      onUnmounted(()=>{
           document.removeEventListener('scroll',getDomTop);
      })
      return{
          dividerRef,
          show,
          showOverlay,
          overlayTop,
          changeShow,
          tagList,
          curTagId,
          chooseTag,
      }
  },
  components: {
    [Overlay.name]:Overlay,
    [Divider.name]:Divider,
    [Tag.name]:Tag,
    [Swipe.name]:Swipe,
    [SwipeItem.name]:SwipeItem,
  }
}
</script>

<style lang='less' scope>
      .tag-top{
         .fc();
           align-items: flex-start;
          .left{
              width:0;
              flex-grow: 1;
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              .tag{
                  margin: 5px;
              }
          }
          .right{
              width:auto;
              padding:  5px;
          }
      }
      .tag{
          .fc();
          background: #f4f5f5;
          color:#909090;
          height: 24px;
           border-radius: 12px;
           line-height: 24px;
           padding: 0 10px;
        
      }
        .active{
               background: @theme-color;
               color: #f4f5f5;
              
          }

</style>
