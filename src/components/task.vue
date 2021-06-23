<template>
  <h3>{{ task.title }}</h3>
  <input type="checkbox" v-model="task.completed" @change="$emit('checkbox-task', task.id)">
  <button @click="$emit('delete-task')" class="btn btn--red">&times</button>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object
  },
  emits: ['delete-task', 'checkbox-task']
}
</script>

<style scoped>
button {
  background-color: red;
  font-size: 20px;
  padding: 5px 8px;
  line-height: 1;
}

.completed h3 {
  text-decoration: line-through;
}
</style>
