<template>
<div class="progress my-bar"
     style={}>
  <div role="progressbar"
       class="progress-bar"
       :class="klass"
       :style="style"></div>
</div>
</template>

<script>
import eventBus from "../../utils/eventBus";

export default {
  data() {
    return {
      bus: {},
      kounter: 0,
      ktype: "info"
    };
  },
  computed: {
    klass() {
      return "progress-bar-" + this.ktype;
    },
    style() {
      return {
        width: this.kounter + "%"
      };
    }
  },
  methods: {
    updateKtype(data) {
      this.ktype = data;
    }
  },
  watch: {
    "bus.kounter": {
      handler(data) {
        this.kounter = data;
      },
      deep: true
    }
  },
  created() {
    const vm = this;
    setTimeout(() => {
      vm.kounter = 100;
    }, 1000);

    this.bus = eventBus;

    eventBus.$on("store.ktype", this.updateKtype);
    eventBus.$emit("get:ktype");
  }
};
</script>

<style scoped>
.my-bar {
  height: 2px;
  border-radius: 0px;
}
</style>
