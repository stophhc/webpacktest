import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  count: 0
// {{$store.state.count}}
}
export default new Vuex.Store({
  state
})
