<template>
  <div class="start">
    <h1>Att göra idag</h1>
    <TodoList 
    v-bind:todos="todos"
    />
    <router-link to="/addtodo" tag="button">Lägg till</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from '../components/TodoList.vue';


export default {
  name: 'Start',
  components: {
    TodoList,
  },
  data() {
    return {
      todos: [{
        title: 'Todo A',
        project: 'Project A',
        description: "Lorem ipsum",
        done: false,
      }, {
        title: 'Todo B',
        project: 'Project B',
        description: "Lorem ipsum",
        done: true,
      },
      {
        title: 'Todo C',
        project: 'Project C',
        description: "Lorem ipsum",
        done: true,
      },
    ]}
  },
}
</script>
