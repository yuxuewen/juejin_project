
<template>
    <content-template ></content-template>
</template>

<script>

import ContentTemplate from'@components/home/ContentTemplate'
export default {
  name: 'android',
  label:'Android',
  components: {
     [ContentTemplate.name]:ContentTemplate
  }
}
</script>

<style>

</style>
