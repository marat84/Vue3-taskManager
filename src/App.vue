<template>
  <Header title="Task Manager" @btn-click="taskToggle" :toggleTask="toggleTask"></Header>
  <router-view :toggleTask2="toggleTask"></router-view>
  <Footer></Footer>
</template>

<script>
import Header from './components/header';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      toggleTask: false,
    }
  },
  methods: {
    taskToggle() {
      this.toggleTask = !this.toggleTask;
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.btn {
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn--black {
  background-color: #000;
}

.btn:hover {
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.5);
}

.btn:active {
  box-shadow: inset 0 2px 6px 0 rgba(0, 0, 0, 0.5);
}
</style>
