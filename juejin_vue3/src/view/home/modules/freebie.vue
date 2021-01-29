
<template>
    <content-template ></content-template>
</template>
<script>

import ContentTemplate from'@components/home/ContentTemplate'
export default {
  name: 'freebie',
  label:'开发工具',
  components: {
     [ContentTemplate.name]:ContentTemplate
  }
}
</script>
