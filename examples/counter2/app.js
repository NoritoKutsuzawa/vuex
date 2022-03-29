import Vue from 'vue'
import Counter2 from './Counter2.vue'
import store from '../counter/store'

new Vue({
  el: '#app',
  store,
  render: h => h(Counter2)
})
