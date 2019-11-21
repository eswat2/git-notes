<template>
  <form>
    <div class="input-group">
      <div class="input-group-addon">
        <i class="fa fa-chevron-right"></i>
      </div>
      <input type="text" class="form-control" placeholder="Note..." v-model.trim="note" />
      <span class="input-group-btn">
        <button class="btn btn-warning" :disabled="note === ''" @click.prevent="doSubmit">
          Add
          <i class="fa fa-sticky-note app-sticky"></i>
        </button>
      </span>
    </div>
  </form>
</template>

<script>
import eventBus from "../../utils/eventBus"

export default {
  props: ["user"],
  data() {
    return {
      note: ""
    }
  },
  methods: {
    doSubmit() {
      if (this.note !== "") {
        eventBus.$emit("add-new-note", {
          user: this.user,
          note: this.note
        })
        this.note = ""
      }
    }
  }
}
</script>

<style scoped>
.app-sticky {
  padding-left: 5px;
}
</style>
