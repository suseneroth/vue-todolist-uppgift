<template>
  <div class="todo-container">

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


export default {
   props: ['todos'],
};
</script>

<style scoped>
ul {
  list-style-type: none;
}

</style>
