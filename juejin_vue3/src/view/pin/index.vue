<template>
    <!-- <van-tabs v-model="state.active" @change='onChange'>
         <van-tab :name='topic_id' :title="title" :key='topic_id' v-for='({title,topic_id}) in state.list'>{{title}}</van-tab>
    </van-tabs> -->
    <pin-tabs @change='onChange'></pin-tabs>
    <content-template :topic_id='topic_id'></content-template>
</template>

<script>
import pinTabs from '@components/pin/pinTabs'
import contentTemplate from '@components/pin/contentTemplate'
import {ref} from 'vue'
export default {
  name: 'pin',
  setup(){
      const topic_id=ref('6819970850532360206');
      const onChange=(id)=>{
           topic_id.value=id;
      }
      return {
           topic_id,
           onChange
      }
  },
  components: {
    [pinTabs.name]:pinTabs,
    [contentTemplate.name]:contentTemplate
 

  }
}
</script>

<style>

</style>
