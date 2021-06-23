<template>
  <div
      :key="task.id"
      v-for="task in tasks"
      :class="[task.completed ? 'completed': '', 'task']"
      @dblclick="$emit('complete-task', task.id)">
    <Task
        @delete-task="$emit('delete-task', task.id);"
        :task="task"
        @checkbox-task="$emit('toggle-task', task.id)">
    </Task>
  </div>
</template>

<script>
import Task from './task'

export default {
  name: "Tasks",
  props: {
    tasks: Array,
  },
  components: {
    Task
  },
  emits: ['delete-task', 'complete-task', 'toggle-task']
}
</script>

<style scoped>
.task {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #eee;
  padding: 20px;
  margin-bottom: 20px;
  text-align: left;
}

.task.completed {
  border-left: 6px solid green;
}
</style>
