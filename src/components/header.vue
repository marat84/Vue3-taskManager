<template>
  <header>
    <h1>{{ title }}</h1>
    <div>
      <Button
          v-show="homePage"
          :text="toggleTask ? 'Закрыть форму' : 'Добавить таску'"
          :color="toggleTask ? 'red' : 'green'"
          @click="$emit('btn-click')">
      </Button>
    </div>
  </header>
</template>

<script>
import Button from './button';

export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: 'Шапка сайта',
    },
    toggleTask: Boolean
  },
  components: {
    Button
  },
  computed: {
    homePage() {
      return this.$route.path === '/';
    }
  }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}
</style>
