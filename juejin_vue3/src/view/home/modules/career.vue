
<template>
    <content-template ></content-template>
</template>
<script>

import ContentTemplate from'@components/home/ContentTemplate'
export default {
   name: 'career',
  label:'代码人生',
  components: {
     [ContentTemplate.name]:ContentTemplate
  }
}
</script>