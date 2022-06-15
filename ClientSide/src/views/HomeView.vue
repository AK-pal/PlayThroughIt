<template>
  <home-component/>
</template>

<script>
// @ is an alias to /src
import HomeComponent from '@/components/home/home.components.vue';

export default {
  name: 'HomeView',
  components: {
    HomeComponent,
  },
};
</script>
