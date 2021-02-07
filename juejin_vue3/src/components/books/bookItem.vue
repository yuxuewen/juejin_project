<template>
    <div class='book-item' @click='toCheckDetial()'>
        <van-image :src='cover_img' class='cover-img'/>
        <div class="content">
              <p class="common-title">{{title}}</p>
              <p>{{user_name}}</p>
              <p class="tag-text">
                  <span>{{section_count}}小节</span> &nbsp.&nbsp
                  <span>{{buy_count}}已购买</span>
                   
              </p>
        </div>
        <div class="right">
              <div class="btn-price">
                     {{discountPrice}}
              </div>
        </div>
    </div>
    <van-divider class="item-divider"/>
</template>

<script>
import { computed } from 'vue';
import {useRouter} from 'vue-router'
export default {
  props:{
      //{discountProice,is_buy,title,cover_img,summary,buy_count,section_count,discount_rate,discountProice,booklet_id,user_name,job_title,leval,avatar_large,company}
      item:{
           type:Object,
           required:true
      }
  },
  name: 'book-item',
  setup(props){
      const {item} =props,router=useRouter();
      const discountPrice=computed(()=>{
    
             const res=(item.price*(item.discount_rate ||10))/10;
             return `${res<item.price?'惠':''} ￥ ${(res/100).toFixed(2)}`
      })
      const toCheckDetial=()=>{
          router.push({name:'book-detial',params:{id:item.booklet_id},query:{title:item.title}})
      }
      return{
           ...item,
           discountPrice,
           toCheckDetial,
      }
   
  },
  components: {
    
  }
}
</script>

<style lang='less' scoped>
    .book-item{
         .fc();
         padding: 10px;
         height: 120px;
         .cover-img{
             width: 60px;
             height: 80px;

         }
         .content{
              width:0;
              flex-grow:1;
              padding-left: 10px;
              display: block;
              line-height: 30px;
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
</style>
