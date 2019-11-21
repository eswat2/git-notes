<template>
  <div class="alert alert-success my-success" role="alert">
    <strong>{{salute}}:</strong>
    {{message}}
  </div>
</template>

<script>
export default {
  props: ["salute", "message"]
}
</script>

<style scoped>
.my-success {
  text-align: left;
}
</style>
