<template>
  <div id="app">
    Clicked: {{ $store.state.count }} times, count is
     <!-- {{ evenOrOdd }}. -->
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  created() {
   console.log("created"); 
  },
  mounted() {
       console.log("mounted"); 

//     this.$store.watch(
//       (state , getter)=>{},
//     (newVal,oldVal)=>{
//              console.log("watch1"); 
// console.log(newVal,oldVal);
//     }
//     );
  },

  // computed: mapGetters([
  //   'evenOrOdd',
  //   'watchSample',
  // ]),
  computed:{
    watchSample:function() {
      return this.$store.getters["store/watchSample"];
    }
  },

  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ]),
  watch:{
    watchSample(){
      console.log("watch2!!");

    }
  }

}
</script>