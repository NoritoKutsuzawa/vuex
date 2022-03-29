import Vue from 'vue'
import Counter from './Counter.vue'
import store from './store'

new Vue({
  el: '#app',
  store,
  data:{
    a:1
  },
  render: h => h(Counter)
});