<template>
  <div class="todo-container">

  <Todo />

  <p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
    <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
 
    <div v-for="(todo, index) in todos" :key="index">
    <div>Titel: {{todo.title}}</div>
    <div>Project: {{todo.project}}</div>
    <div>Beskrivning: {{todo.description}}</div>
     <div class='ui' v-show="todo.done">
        Completed
      </div>
      <div class='ui' v-show="!todo.done">
        Not complete
      </div>
    </div>

   
  </div>
</template>


<script>
import Todo from './Todo.vue'

export default {
   props: ['todos'],
   components: {
      Todo
},
// computed: {
//     todos(){
//         return this.$store.state.todos;
//     }
//   }
};
</script>

<style scoped>
ul {
  list-style-type: none;
}

</style>
