<template>
    <content-template></content-template>
</template>

<script>

import contentTemplate from '@components/books/contentTemplate'
export default {
  name: 'books',
  setup(){
   
  },
  components: {
    [contentTemplate.name]:contentTemplate
  }
}
</script>

<style>

</style>
