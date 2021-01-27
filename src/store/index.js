import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   
  },
  mutations: {
    addTodo(state, todo){
      state.todos.push(todo)
    },

    // removeTodo(state){
    //   state.todos = state.todos.filter(todo => todo !== todo)
    // }
  },
  actions: {
  },
  modules: {
  }
})
