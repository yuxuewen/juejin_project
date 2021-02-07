<template>
     <div class='top'>
            <van-image round lay-load :src='avatar_large' :width='iconWidth' :height='iconWidth'></van-image>
            <div class='center'>
                <p><strong>{{user_name}}</strong></p>
                <p class="tag-text">{{job_title}}</p>
            </div>
     </div>
     <div class="content">
          <p class="brief_content">{{content}}</p>
          <van-row :gutter='10'>
               <van-col :span="8" v-for="item of pic_list" :key='item' >
                   <check-image :src='item'></check-image>
               </van-col>
          </van-row>
     </div>
     <van-divider style="margin:10"/>
      <van-row class='bottom'>
        
               <van-col :span="8">
              <van-icon name="good-job-o"> <span class='num'> {{digg_count}}</span> </van-icon>

               </van-col>
               <van-col :span="8">
                    <van-icon name="comment-o"><span class='num'>{{comment_count}}</span></van-icon>
               </van-col>
               <van-col :span="8">
                  <van-icon name="share-o" >分享</van-icon>
               </van-col>
      </van-row>
     <van-divider class='item-divider'/>
</template>
 
<script>
import {rem} from '@utils/index'
import checkImage from '@components/image/checkImage'
export default {
  name: 'pin-item',
  props:{
       item:{
           type:Object,
           require:true,
       }
  },

  setup(props){
     const {item}=props;
     const {content,pic_list,digg_count,comment_count,job_title,user_name,avatar_large,level}=item;
     const spanPicture=pic_list.length>3?8:(pic_list.length===1?16:12);
     return {
          spanPicture,
          content,
          pic_list,
          job_title,
          user_name,
          avatar_large,
          iconWidth:rem(35),
          coverWidth:rem(100),
          digg_count,
          comment_count
     }
    
  },
  components: {
     [checkImage.name]:checkImage,
    
  }
}
</script>

<style lang='less' scope>
   .top{
     .fc();
      padding: 5px 10px;
       .center{
             strong{
                font-size: 14px;
                line-height: 20px;
                
             }
            .fill();
       }
   }
   .content{
        padding: 5px 10px;
         .brief_content{
                .over-text(3);
         }
       
   }
   .bottom{
      line-height: 30px;
      padding: 5px 10px;
      text-align: center;
      .num{
         margin-right:  20px; 
         margin-left:5px;
      }
   }
</style>
