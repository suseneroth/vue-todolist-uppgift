<template>
  <div>
      <h3>{{ todo }}</h3>
      <h3>{{ description }}</h3>
      <h3>{{ time }}</h3>

  </div>
</template>

<script>
export default {
    props: ['title', 'description', 'time'],

    methods:{
        // removeTodo(){
        //     this.$store.commit('removeTodo', this.todo)
        // }
    }

}
</script>

<style scoped>

</style>