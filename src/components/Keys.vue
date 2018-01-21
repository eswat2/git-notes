<template>
<div>
  <transition-group enter-active-class="animated fadeIn"
                    leave-active-class="animated fadeOut">
    <span class="label label-primary my-key"
          :key="indx"
          @click.prevent="keyClick"
          v-for="(tag, indx) in keys">{{tag}}</span>
  </transition-group>
</div>
</template>

<script>
export default {
  props: [ 'keys' ],
  methods: {
    keyClick() {
      // onClick={()=> actions.updateUser(tag)}
    }
  }
}
</script>

<style scoped>
.my-key {
  margin-right: 2px;
  margin-top: 2px;
  display: inline-block;
  padding: 5px;
  padding-right: 6px;
  padding-left: 6px;
  cursor: pointer;
}
</style>
