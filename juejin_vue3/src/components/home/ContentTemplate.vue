<template>
    <tag-popup v-model:cate_id="cate_id" @callback='handleChoose' v-if="cate_id"></tag-popup>
    <list v-model:params="params" v-model:searchMethod='searchMethod'>
         <template v-slot='data'>
                <article-item  v-for="item in data.scope"  :item='handleResult(item)' :key="item.article_id"  ></article-item>
         </template>
    </list>
</template>

<script>

import { useTagPopUp,ArticleItem} from '@components/home/index.js'
import List  from '@components/List/index'
import {reactive}  from 'vue'
 const {TagPopup,getCateId,getByrecommendTagId,getRecommendAllfeed}=useTagPopUp();
export default {
  name: 'content-template',
  label:'前端',
  setup(){
           const cate_id=getCateId();
           let params={};
           let searchMethod=null;
           const handleParams=(cate_id)=>{
                 params=reactive( {
                    cursor:'0',
                    sort_type:200,
                    cate_id:cate_id,
                    id_type:2,
                    tag_id:'',
                    limit:20
                  }
                )
               if(cate_id){
                    params.cate_id=cate_id;
                    searchMethod=getByrecommendTagId;
               }
               else{
                    params.client_type=2608;// 推荐没有 cata_id 但是接口需要这个参数
                     searchMethod=getRecommendAllfeed;
               }

           }
           const handleChoose=async (id)=>{
               params.tag_id=id;
           }
           /**
            * 处理返回值
            */
        const handleResult=(item)=>{
            // if(cate_id){
            //     const {title='',cover_image,brief_content,view_count,digg_count,comment_count,author_id}=item.article_info;
            //     let tagStr=(item.tags ||[]).map(({tag_name})=>tag_name).join('/');
            //     const {user_name,avatar_large}=item.author_user_info;
            //     const res= {title,cover_image,brief_content,view_count,digg_count,comment_count,user_name,avatar_large,tagStr,author_id};
            //     return res;

            // }
            // else{
            
            // }
                 let data;
                 if(cate_id){
                     data=item;
                 }
                 else if(item.item_type!==14){
                   
                        data=item.item_info;
                 }
                 else{
                     
                   const {title,author_name:user_name,author_id,brief:brief_content,avatar:avatar_large,picture:cover_image,comment_count,digg_count}=item.item_info;
                   const res= {title,cover_image,brief_content,view_count,digg_count,comment_count,user_name,avatar_large,tagStr,author_id};
                   return res;
                 }
                const {title='',cover_image,brief_content,view_count,digg_count,comment_count,author_id}=data.article_info
                let tagStr=(data.tags ||[]).map(({tag_name})=>tag_name).join('/');
                const {user_name,avatar_large}=data.author_user_info;
                const res= {title,cover_image,brief_content,view_count,digg_count,comment_count,user_name,avatar_large,tagStr,author_id};
                return res;
           
         }

           handleParams(cate_id);
      return {
         cate_id,
         handleChoose,
         searchMethod,
         params,
         handleResult
      }
  },
  components: {
      TagPopup,
      [List.name]:List,
      [ArticleItem.name]:ArticleItem,
  }
}
</script>

<style>

</style>
