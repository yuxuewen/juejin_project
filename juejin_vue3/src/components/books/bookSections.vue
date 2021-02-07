<template>
   <div class="book-selections">
        <h3>小册内容</h3>
        <div v-for='({id,title,read_count,read_time},index) in sections' :key='id' class='selection-item'>
           <span :class="{'active-index':true}">{{index+1}}</span> 
           <div class="ceneter-area">
                <p>  <strong>{{title}}</strong></p>
                <span class='tag-text'>
                 时长：{{formatReadtime(read_time)}}   {{read_count}} 次学习
                </span>
            </div>
            <div>
                 
            </div>
        </div>
   </div>
   
</template>

<script>


export default {
  name:'book-sections',
  props:{
    sections:{
        type:Array,
    }
  },
  setup({sections=[]}){
     const formatReadtime=(readtime=0)=>{
          //readtime 分钟
          const day=Math.floor(readtime/(60*24));// 天
          const hours=Math.floor((readtime%(60*24))/60) //小时
          const minutes=readtime-day*60*24-hours*60;
          return  (day?`${day}天`:'')+ (hours?`${hours}小时`:'')+(minutes?`${minutes}分钟`:'');
     }

     return{
       sections,
       formatReadtime
     }
  },
  components: {
    
  }
}
</script>

<style lang='less' scoped>
   .book-selections{
       padding: 0 10px;
       .selection-item{
              border-bottom: 1px solid #ebedf0;
              height: 46px;
              width: 100%;
              .fc();
              .ceneter-area{
                flex-grow: 1;
                width: 0;
                text-align: left;
                padding-left: 10px;
              }
              .active-index{
                   
                   width: 30px;
                   height: 30px;
                   background: @theme-color;
                   border-radius: 50%;
                   text-align: center;
                   line-height: 30px;
                   color: #ebedf0;
              }
       }
   }
</style>
