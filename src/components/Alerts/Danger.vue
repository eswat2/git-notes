<template>
<div class="alert alert-danger my-danger"
     role="alert"><strong>{{ salute }}:</strong> {{ message }}</div>
</template>

<script>
export default {
  props: [ 'salute', 'message' ]
}
</script>

<style>
.my-danger {
  text-align: left
}
</style>
