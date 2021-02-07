<template>
    <div class="book-introduction">
         <div class="top-area" >
              <van-icon name="arrow-up" /> 上滑查看更多介绍
         </div>
         <div v-html="introduction.content" id="introduction-content"></div>
    </div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue'


export default {
  props:{
      introduction:{
         type:String
      }
  },
  name:'book-introduction',
  setup({introduction}){
       let state=false, availHeight=window.screen.availHeight,currY=0;
      const getDomTop=()=>{
            const {top,height,y}= document.querySelector('.top-area').getBoundingClientRect();
            console.log(y)
          //   console.log((availHeight-(top+height+51)) );

          //   if(!state &&(availHeight-(top+height+50)<=10))
          //   {
          //       const offsetTop=document.querySelector('.top-area').offsetTop;
          //        window.scrollTo({ 
          //           top: offsetTop, 
          //           behavior: "smooth" 
          //        });
          //      console.log(document.querySelector('.top-area').getBoundingClientRect());
          //       state=true

          //   }
          //   else if(state &&(top<=50)){
          //         const offsetTop=document.querySelector('.top-area').offsetTop;
          //        window.scrollTo({ 
          //           top: offsetTop-(availHeight-height-50), 
          //           behavior: "smooth" 
          //        });
               
          //   }
           
      }
      onMounted(()=>{
           window.addEventListener("on", getDomTop);
      })
      onUnmounted(()=>{
           document.removeEventListener('scroll',getDomTop);
      })
    
     return{
         introduction
     }
  },
  components: {
    
  }
}
</script>

<style lang='less'>
   .book-introduction{
        margin-bottom: 40px;
       .top-area{
            width: 100%;
            line-height: 40px;
            text-align: center;
            border-bottom: 1px solid #ebedf0;
       }
        padding: 10px;
         img{
              max-width: 100%;
             
         }
   }
</style>
