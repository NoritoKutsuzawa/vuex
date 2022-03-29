import Vue from 'vue'
import Counter from './Counter.vue'
import Counter2 from './Counter2.vue'
import store from './store'

new Vue({
  el: '#app',
  store,
  render: h => h(Counter)
})
