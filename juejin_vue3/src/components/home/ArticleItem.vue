<template>
     <div class='top'>
         <van-image round lay-load :src='avatar_large' :width='iconWidth' :height='iconWidth'></van-image>
         <span class="center">{{user_name}}</span>
         <span class="tags">{{tagStr}}</span>
     </div>
     <div class="content">
          <div class="left">
              <strong class="title">{{title}}</strong>
              <p class='brief_content'>
                  {{brief_content}}
              </p>
          </div>
          <div class="right" v-if="cover_image">
                <van-image round lay-load :src='cover_image' :width='coverWidth' :height='coverWidth'></van-image>
          </div>
     </div>
     <div class="bottom">
          <van-icon name="good-job-o"> <span class='num'> {{digg_count}}</span> </van-icon>
          <van-icon name="comment-o"><span class='num'>{{comment_count}}</span></van-icon>
     </div>
     <van-divider style="margin:0"/>
</template>
 
<script>
import {Image,Divider} from 'vant'
import {rem} from '@utils/index'
export default {
  name: 'article-item',
  props:{
       item:{
           type:Object,
           require:true,
       }
  },

  setup(props){
    
     const {item}=props;
    const {title,cover_image,brief_content,digg_count,comment_count,user_name,avatar_large,tagStr}=item;
     return {
          title,
          user_name,
          avatar_large,
          tagStr,
          brief_content,
          cover_image,
          iconWidth:rem(25),
          coverWidth:rem(100),
          digg_count,
          comment_count
          
     }
  },
  components: {
     [Image.name]:Image,
     [Divider.name]:Divider
    
  }
}
</script>

<style lang='less' scope>
   .top{
     .fc();
      padding: 5px 10px;
       .center{
            .fill();
       }
       .tags{
           color:#999999
       }
   }
   .content{
        padding: 5px 10px;
        .fc();
        .left{
            .fill();
            .title{
                 color:#2e3135;
                 font-size: 16px;
            }
            .brief_content{
                .over-text(3);
            }
        }
        .right{
             
        }
   }
   .bottom{
      line-height: 30px;
      padding: 5px 10px;
      .num{
         margin-right:  20px; 
         margin-left:5px;
      }
   }
</style>
