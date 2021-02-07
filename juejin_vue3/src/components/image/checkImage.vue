<template>
     <van-image  v-bind="$props" @click="toCheckBigImage"></van-image>   
     <van-overlay :show="show" @click="show = false" z-index="1000">
             <van-image  :src='src' class='block-center'></van-image>
     </van-overlay>
</template>

<script>
import {Overlay} from 'vant'
import {ref} from 'vue'
export default {
  name: 'check-image',
  props:{
      ...Image.props,
  },
  setup(props){
     const {src}=props;
     console.log(src)
     const show=ref(show);
     const toCheckBigImage=()=>{
            show.value=true;
     };
     return{
         toCheckBigImage,
         show,
         src
     }
  },
  components: {
    [Overlay.name]:Overlay
  }
}
</script>

<style>

</style>
