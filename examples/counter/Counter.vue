<template>
  <div id="app">
    Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.///{{$store.state.countStatus.count}}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
    <div>
      <counter2 />
    </div>
  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Counter2 from '../counter2/Counter2.vue'


export default {
  components: { Counter2 },
  computed: mapGetters([
    'evenOrOdd',
    'onCountChanged',
    'onStateChanged',
    'onNestedStatusChanged',
    'onNestedCountChanged',
  ]),
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ]),
  watch:{
    onCountChanged(value,oldValue){
      console.log(`changed:count:${oldValue}=>${value}`);
    },
    onStateChanged:{
      handler(value,oldValue){
        console.log("changed:state:",oldValue.count,"=>",value.count);
      },
      deep:true
    },
    onNestedStatusChanged:{
      handler(value,oldValue){
        console.log("changed:nested-status:",oldValue.count,"=>",value.count);
      },
      deep:true
    },
    onNestedCountChanged(value,oldValue){
      console.log(`changed:nested-count:${oldValue}=>${value}`);
    },
  },

}
</script>
