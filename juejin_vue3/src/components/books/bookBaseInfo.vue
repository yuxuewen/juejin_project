<template>
    <div class='book-base-info' >
        <van-image :src='cover_img' class='cover-img'/>
        <div class="content">
              <p class="common-title">{{title}}</p>
              <p class="summary">
                  {{summary}}
              </p>
              <div class="user-area">
                  <van-image round lay-load :src='avatar_large' :width='iconWidth' :height='iconWidth'></van-image>

                  <p class='tag-text'>
                     &nbsp{{user_name}}
                 </p>
              </div>
        </div>
     
    </div>
    <div class='bottom-area'>
        <van-icon name="certificate" />
        <span class="tag-text">{{buy_count}}人已购买</span>
    </div>
</template>

<script>
import {rem} from '@utils/index'
export default {
  name:'book-base-info',
  props:{
      //{discountProice,is_buy,title,cover_img,summary,buy_count,section_count,discount_rate,discountProice,booklet_id,user_name,job_title,leval,avatar_large,company}
      item:{
           type:Object,
           required:true
      }
  },
  setup(props){
      const {item} =props
      return{
           ...item,
           iconWidth:rem(25)
      }
   
  },
  components: {
    
  }
}
</script>

<style lang='less' scoped>
    .book-base-info{
         .fc();
         padding: 10px;
         align-items: flex-start;
         .cover-img{
             width: 70px;
             height: 90px;

         }
         .content{
              width:0;
              flex-grow:1;
              padding-left: 10px;
              display: block;
              .summary{
                  .over-text();
                  font-size: 12px;
                  margin: 5px 0px;
              }
              .user-area{
                  display: flex;
                  align-items: center;
              }
         }
         .right{
              min-width: 80px;
              padding-left: 10px;
              .btn-price{
                  height: 30px;
                line-height: 30px;
                border-radius: 15px;
                background-color: #f0f7ff;
                font-size: 14px;
                font-weight: 500;
                text-align: center;
                color: #07f;
                position: relative;
                 
              } 
         }
    }
    .bottom-area{
         
         height: 36px;
         border-top: 1px solid #ebedf0;
         border-bottom: 1px solid #ebedf0;
         padding: 0 10px;
         display: flex;
         align-items: center;
         .van-icon{
              font-size: 20px;
              margin-right: 5px
         };
         
    }
</style>
