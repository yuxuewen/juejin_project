
<template>
    <content-template ></content-template>
</template>
<script>

import ContentTemplate from'@components/home/ContentTemplate'
export default {
  name: 'frontend',
  label:'前端',
  components: {
     [ContentTemplate.name]:ContentTemplate
  }
}
</script>