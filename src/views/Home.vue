<template>
  <AddTask v-show="toggleTask2" @add-task="addTask"></AddTask>
  <Tasks :tasks="task" @delete-task="deleteTask" @complete-task="completeTask" @toggle-task="checkboxTask"></Tasks>
</template>

<script>
import Tasks from '../components/tasks';
import AddTask from '../components/addTask';

export default {
  name: 'App',
  components: {
    Tasks,
    AddTask,
  },
  props: {
    toggleTask2: Boolean,
  },
  data() {
    return {
      task: [],
    }
  },
  async created() {
    this.task = await this.$http.get('/api/tasks')
        .then((req) => req.data);
  },
  methods: {
    async addTask(e) {
      await this.$http.post('api/tasks', e).then((res) => {
        this.task = [...this.task, res.data];
      });
    },
    async deleteTask(id) {
      if (confirm("Are you sure?")) {
        await this.$http.delete(`api/tasks/${id}`)
            .then((res) => {
              if (res.status === 200) {
                this.task = this.task.filter((task) => task.id !== id);
              } else {
                alert('Message not deleted');
              }
            })
      }
    },
    async completeTask(id) {
      const getTaskToCompleted = await this.$http.get(`api/tasks/${id}`).then((res) => res.data);

      const updTask = {...getTaskToCompleted, completed: !getTaskToCompleted.completed};

      await this.$http.put(`api/tasks/${id}`, updTask)
          .then((res) => {
            if (res.status === 200) {
              this.task = this.task.map((task) => {
                return (task.id === id) ? {...task, completed: res.data.completed} : task;
              })
            } else {
              alert("Change status goes wrong!");
            }
          })
    },
    checkboxTask(id) {
      this.completeTask(id);
    }
  }
}
</script>
