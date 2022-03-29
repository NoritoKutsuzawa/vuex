<template>
  <div id="app">
    Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.
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
  // mounted() {
  //   this.store.watch(
  //      (state, getters) => {},
  //     (newValue, oldValue) => {
  //       console.log("!!!!!!!!!!!!!!!");
  //       console.log('changed! %s => %s', oldValue, newValue);
  //     }
  //   );
    
  // },
  components: { Counter2 },
  computed: mapGetters([
    'evenOrOdd',
    'sampleList'
  ]),
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ]),
  watch:{
    sampleList(value,oldValue){
      console.log(`changed:${oldValue}=>${value}`);
    }
  }
}
</script>
