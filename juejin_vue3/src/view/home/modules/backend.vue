<template>
    <content-template ></content-template>
</template>

<script>

import ContentTemplate from'@components/home/ContentTemplate'
export default {
  name: 'backend',
  label:'后端',
  components: {
     [ContentTemplate.name]:ContentTemplate
  }
}
</script>

<style>

</style>
