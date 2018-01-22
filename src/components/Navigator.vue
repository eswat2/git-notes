<template>
<div class="my-tags">
  <transition-group enter-active-class="animated fadeIn"
                    leave-active-class="animated fadeOut"
                    mode="out-in">
    <span class="label label-info my-tag"
          :key="indx"
          @click.prevent="tagClick(tag)"
          v-for="(tag, indx) in tags">{{ tag }}</span>
  </transition-group>
</div>
</template>

<script>
import eventBus from '../utils/eventBus'

export default {
  props: [ 'tags' ],
  methods: {
    tagClick( tag ) {
      eventBus.$emit( 'search-for', tag )
    }
  }
}
</script>

<style scoped>
.my-tags {
  text-align: left;
}

.my-tag {
  margin-right: 2px;
  margin-top: 2px;
  display: inline-block;
  padding: 5px;
  padding-right: 6px;
  padding-left: 6px;
  cursor: pointer;
}
</style>
