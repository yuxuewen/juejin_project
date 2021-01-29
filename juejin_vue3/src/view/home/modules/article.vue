
<template>
    <content-template ></content-template>
</template>
<script>

import ContentTemplate from'@components/home/ContentTemplate'
export default {
  name: 'article',
  label:'阅读',
  components: {
     [ContentTemplate.name]:ContentTemplate
  }
}
</script>

<style>

</style>
