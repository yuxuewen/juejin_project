import TagPopup from '@components/home/TagPopup'
import  articleItem from '@components/home/ArticleItem'
import {useRoute} from 'vue-router'
import API from '@api/index'
export {rem} from '@utils/index'
export const ArticleItem=articleItem;
 
export const getByrecommendTagId=async(params)=>{
   
   const res= await API[params.tag_id?'getRecommendCatFeedByTag':'getRecommendCatFeed'](params);
   return res;
}

export const getRecommendAllfeed=async(params)=>{
   const res= await API.getRecommendAllfeed(params);
   return res;
}
export const useTagPopUp=()=>{
     const res= {
        TagPopup,
        useRoute,
        getCateId:function(){ 
             const route=useRoute();
             const cate_id=route.meta.cate_id;
             return cate_id
            
         },
         getByrecommendTagId,
         getRecommendAllfeed
         
      }
     return res;
     
}
