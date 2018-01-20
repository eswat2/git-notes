<template>
<div class="col-sm-12">
  <form>
    <div class="form-group col-sm-12">
      <div class="input-group">
        <div class="input-group-addon"><i class="fa fa-search" /></div>
        <input type="text"
               class="form-control"
               placeholder="Username..."
               v-model.lazy="user">
        <span class="input-group-btn">
          <button
            class="btn btn-primary"
            type="submit"
            @click.prevent="doSubmit">
            Search Github <i class="fa fa-github fa-lg my-github"></i>
          </button>
        </span>
      </div>
    </div>
  </form>
</div>
</template>

<script>
import appStore from '../utils/store'

export default {
  data() {
    return {
      user: ''
    }
  },
  methods: {
    doSubmit() {
      appStore.username = this.user
    }
  }
}
</script>

<style scoped>
.my-github {
  padding-left: 5px
}
</style>
