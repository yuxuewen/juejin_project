<template>
  <div >
      <router-view />
  </div>

</template>

<script>
import {onMounted} from 'vue'

export default {
  name: 'App',
  
  setup(){
    
    onMounted(() => {
     
    })
  },
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 12px;
}
p{
  padding: 0;
  margin: 0;
  font-size: 14px;
}
</style>
