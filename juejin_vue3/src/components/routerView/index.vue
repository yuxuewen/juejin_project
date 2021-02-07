<template>
     <transition :name="transitionRoute">
          <keep-alive>
                 <router-view
                 />
          </keep-alive>
     </transition>
</template>

<script>
import {onBeforeRouteUpdate} from 'vue-router'
import {ref} from 'vue'
export default {
  name: 'my-router-view',
  setup(){
     const transitionRoute=ref('van-slide-left')
     onBeforeRouteUpdate(async(to,from)=>{
            
              const {index:toIndex}=to.meta ||{};
              const {index:fromIndex}=from.meta ||{};
             if(toIndex >fromIndex){
                   transitionRoute.value='van-slide-left'
             }
             else{
                  transitionRoute.value='van-slide-right'
             }
      })
    return {
         transitionRoute,
      
    }
   
  },
  components: {
    
  }
}
</script>

<style>

</style>
