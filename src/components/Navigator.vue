<template>
<div class="my-tags">
  <span class="label label-info my-tag"
        key="indx"
        @click.prevent="clickTag"
        v-for="(tag, indx) in tags">{{ tag }}</span>
</div>
</template>

<script>
export default {
  data() {
    return {
      tags: [ 'eswat2' ]
    }
  },
  methods: {
    clickTag() {
      // onClick={() => actions.updateUser(tag)}
    }
  }
}
</script>

<style>
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
