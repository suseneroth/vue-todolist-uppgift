import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    addTodo(state, todoAdded){
      state.todos.push(todoAdded)
    },

    removeTodo(state, todoAdded){
      state.todos = state.todos.filter(todo => todo !== todoAdded)
    }
  },
})
