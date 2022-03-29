import Vue from 'vue'
import Counter from './Counter.vue'
import store from './store'

var vm = new Vue({
  el: '#app',
  store,
  data:{
    a:1
  },
  // watch:{
  //   // store:{
  //   //   handler:function(val,oldVal){
  //   //     console.log("!!!!!!!");
  //   //   },
  //   //   deep: true
  //   // }
 
  //   a:function(ov,nv){
  //     console.log("change");
  //     console.log(`${ov}=>${nv}`);
  //   }
  
  // },
  render: h => h(Counter)
})

vm.a = 19;