<template>
  <div class="container">
  <form @submit.prevent="createTodo">
      <div class="row">
          <div class="col-25">
            <label class="title-text">Att göra</label>
          </div>
          <div class="col-75">
            <input v-model="todo" type="text" placeholder="Lägg till uppgift">
         </div>
      </div>
      <div class="row">
          <div class="col-25">
            <label class="title-text">Beskrivning</label>
          </div>
          <div class="col-75">
           <textarea v-model="desc" placeholder="Beskrivning" rows="4" cols="20"></textarea>
         </div>
      </div>
        
    
        <!-- <h3>{{movieName}}</h3> -->
        <button v-on:click="removeTodo" @click="resetInput">Ta bort</button><button v-on:click="addTodo">Lägg till</button>

    </form>
  </div>
  </template>

<script>
export default {
    data(){
        return{
            todo: "",
            desc: "",
            time: ""
           
        };
    },
    methods:{
        formSubmit(){
            console.log("form submitted")
        },
        addTodo(){
            this.$store.commit('addTodo', this.todo)
        },
        removeTodo(){
            this.$store.commit('removeTodo', this.todo)
        },
        createTodo(){
          let newTodo = {
            title: this.todo,
            desc: this.desc,
          }

          console.log(newTodo)
        },
        resetInput(){
          this.todo = "";
          this.desc = "";
        },
        redirect() {
              this.$router.push({ path : '/start' });
        }
    },
};
</script>

<style scoped>

.container {
    background-color: #e3e3e3;
    border-radius: 5px;
    padding: 20px;
    width: 70%;
    margin: 0 auto;
}

.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.title-text {
    color: rgb(167, 121, 167);
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
  text-align: left;
}

input[type=text] {
    width: 50%;
    padding: 12px 20px;
    margin: 0px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

textarea{
  margin-bottom: 20px;
}

.range-bar {
    margin-top: 10px;
    margin-left: -70px;
}

.genre {
    width: 125px;
    margin-left: -80px;
   
    
}

button {
    width: 100px;
    padding: 4px;
    border: none;
    border-radius: 5px;
    background-color: rgb(167, 121, 167);
    margin-right: 5px;
    margin-left: 5px;
}

button:hover {
    background-color: pink;
}

@media screen and (max-width: 600px) {
  .col-25, .col-75, input[type=submit] {
    width: 100%;
    margin-top: 0;
  }

  .range-bar {
    margin-top: 10px;
    margin-left: 0px;
}
}

</style>