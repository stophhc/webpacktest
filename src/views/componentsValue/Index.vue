<template>
  <div class="list12">
    <h2>prop父传子</h2>
    <prop-app v-bind:propSeed="propFather"></prop-app>

    <h2>emit子传父</h2>
    <emit-app @emitClick="updateClick($event)" v-bind:EmitSeed="EmitpropFather"></emit-app>

    <h2>sync</h2>
    <!--<sync-app v-bind:SyncpFather.sync="SyncpFather"></sync-app>-->
  </div>
</template>

<script>
import Prop from '@/views/componentsValue/Prop'
import Emit from '@/views/componentsValue/Emit'
import Sync from '@/views/componentsValue/Sync'
export default {
  name: 'Index',
  components: {
    propApp: Prop,
    EmitApp: Emit,
    SyncApp: Sync
  },
  data () {
    return {
      propFather: 'this prop text',
      EmitpropFather: 'this emit text',
      SyncpFather: 'this sync text'
    }
  },
  methods: {
    updateClick (name) {
      this.EmitpropFather = name
    }
  }
}
</script>

<style scoped>
.list12 {margin: 0 auto;width: 1000px;}
  h2{margin: 50px 0 10px 0;font-size: 16px;}
</style>
