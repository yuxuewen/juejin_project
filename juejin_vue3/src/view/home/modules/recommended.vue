
<template>
    <content-template ></content-template>
</template>
<script>

import ContentTemplate from'@components/home/ContentTemplate'
export default {
  name: 'recommended',
  label:'推荐',
  components: {
     [ContentTemplate.name]:ContentTemplate
  }
}
</script>