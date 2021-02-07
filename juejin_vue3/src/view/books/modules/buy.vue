<template>
    <van-empty description="暂未购买" />
</template>

<script>
import {Empty, empty} from'vant'

export default {
  name: 'book-buy',
  setup(){
   
  },
  components: {
    [empty.name]:Empty
  }
}
</script>

<style>

</style>
