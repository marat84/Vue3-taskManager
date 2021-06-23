<template>
  <form @submit.prevent="addTask">
    <label for="taskText">
      Название таски
      <input type="text" name="task-text" id="taskText" v-model="name">
    </label>
    <label for="taskCompleted">
      Таска завершена?
      <input type="checkbox" name="task-completed" id="taskCompleted" v-model="completed">
    </label>
    <button type="submit" class="btn btn--black" :disabled="!name.trim()">
      Сохранить таску
    </button>
  </form>
</template>

<script>
  export default {
    name: "AddTask",
    data() {
      return {
        name: "",
        completed: false,
      }
    },
    methods: {
      addTask() {
        let newTask = {
          // id: Math.floor(Math.random() * 100000),
          title: this.name,
          completed: this.completed
        };

        this.$emit('add-task', newTask);

        this.name = "";
        this.completed = false;
      }
    }
  }
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 20px 0;
  margin-bottom: 30px;
  border: 1px solid #eee;
}

button {
  align-self: center;
  margin-bottom: 20px;
}

button:disabled {
  background-color: grey;
  cursor: no-drop;
  box-shadow: none;
  opacity: 0.6;
}

label {
  margin-bottom: 20px;
}
</style>
