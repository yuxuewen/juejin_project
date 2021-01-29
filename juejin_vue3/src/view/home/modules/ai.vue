

<template>
    <content-template ></content-template>
</template>

<script>

import ContentTemplate from'@components/home/ContentTemplate'
export default {
  name: 'ai',
  label:'人工智能',
  components: {
     [ContentTemplate.name]:ContentTemplate
  }
}
</script>

<style>

</style>

