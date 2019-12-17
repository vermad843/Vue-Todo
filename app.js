const app = new Vue({
    el : '#app',
    data : {
      title : 'Hello World' ,
      newTodo : '' ,
      todos : []
    },
    methods : {
       addTodo() {
         this.todos.push({
           title : this.newTodo,
           done : false  
         });
         this.newTodo = ''
       }
    }
});