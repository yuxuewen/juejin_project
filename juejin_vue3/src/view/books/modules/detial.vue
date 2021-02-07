<template>
    <van-sticky>
      <van-nav-bar :title="title"  left-arrow >
        <template #right>
            <van-icon name="search" size="18" />
        </template>
    </van-nav-bar>
    </van-sticky>
    
    <book-base-info :item='state.baseInfo' v-if="state.baseInfo.cover_img"></book-base-info>
    <book-sections :sections='state.sections'></book-sections>
    <book-introduction :introduction='state.introduction' v-if="state.introduction.content"></book-introduction>
    <!-- <div v-html="state.introduction.content"></div> -->
    <div class="bottom-area">
         <van-button plain type="primary" class='btn-read'>试读</van-button>
         <van-button  type="primary" class="btn-buy">购买</van-button>
    </div>
</template>

<script>

import {useRoute,useRouter}from 'vue-router'
import BookBaseInfo from '@components/books/bookBaseInfo'
import BookSections from '@components/books/bookSections'
import BookIntroduction from '@components/books/bookIntroduction'
import { NavBar,Sticky } from 'vant';
import API from '@api/index'
import { reactive } from 'vue';
export default {

  setup(){
     const state=reactive({
          baseInfo:{},
          sections:[],
          introduction:{}
     })
     const route=useRoute(),router=useRouter();
     const {id}=route.params;
     const {title}=route.query;
     const back=()=>router.back(-1);
     const getBookDetial=async (id)=>{
         const {err_no,data} =await API.getBookDetial({booklet_id:id});
         if(err_no!==0) return;
          const {booklet,introduction,sections}=data;
          const {base_info,user_info}=booklet;
          const{title,cover_img,buy_count,summary}=base_info;
          const {user_name,job_title,leval,avatar_large}=user_info;
          state.baseInfo={title,cover_img,summary,user_name,job_title,leval,avatar_large,buy_count};
          sections.forEach(element => {
              state.sections.push(element)
          });
          state.introduction=introduction;
     }
    getBookDetial(id)
     return{
         title,
         state,
         back
     }

  },
  components: {
    [BookSections.name]:BookSections,
    [NavBar.name]:NavBar,
    [Sticky.name]:Sticky,
    [BookBaseInfo.name]:BookBaseInfo,
    [BookIntroduction.name]:BookIntroduction,
  }
}
</script>

<style lang='less' scoped>
    .bottom-area{
         display: flex;
         width: 100%;
         height: 50px;
         padding: 5px;
         justify-content: space-between;
         position: fixed;
         bottom: 0px;
         box-sizing: border-box;
         z-index: 10;
         background: white;
         .btn-read{
           width: 33%;
           margin-right: 10px;
         }
         .btn-buy{
           width: 0;
           flex-grow: 1;
         }
    }
</style>
