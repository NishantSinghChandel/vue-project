<template>
  <div class="layout">
    <div>Header</div>
    <slot></slot>
    <div class="footer">
      Footer
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layout{
  /*background:grey;*/
}
</style>
