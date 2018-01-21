<template>
<div class="col-sm-12">
  <form>
    <div class="form-group col-sm-12">
      <div class="input-group">
        <div class="input-group-addon"><i class="fa fa-search" /></div>
        <input type="text"
               class="form-control"
               placeholder="Username..."
               ref="input"
               v-model.trim="user">
        <span class="input-group-btn">
          <button
            class="btn btn-primary"
            :disabled="user === ''"
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
import eventBus from '../utils/eventBus'

export default {
  props: [ 'username' ],
  data() {
    return {
      user: ''
    }
  },
  methods: {
    doSubmit() {
      if ( this.user !== '' ) {
        console.log( '-- doSubmit: ', this.user )
        eventBus.$emit( 'search-for', this.user )
      }
    }
  },
  watch: {
    username( name ) {
      console.log( '-- watch: ', name, name.length )
      // NOTE:  we do this to force the update in the input field...
      this.$refs.input.value = name
      this.user = name
    }
  }
}
</script>

<style scoped>
.my-github {
  padding-left: 5px
}
</style>
