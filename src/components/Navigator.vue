<template>
<div class="my-tags">
  <span class="label label-info my-tag"
        key="indx"
        @click.prevent="clickTag(tag)"
        v-for="(tag, indx) in tags">{{ tag }}</span>
</div>
</template>

<script>
import eventBus from '../utils/eventBus'

export default {
  data() {
    return {
      tags: [ 'eswat2' ]
    }
  },
  methods: {
    clickTag( tag ) {
      // onClick={() => actions.updateUser(tag)}
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
