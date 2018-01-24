import Vue from 'vue'
//
// NOTE:  moved kounter into eventBus to minimize the events thrown...
//
//
const eventBus = new Vue({
  data: {
    what: 'the EventBus for this app...',
    kounter: 0
  }
})

export default eventBus
