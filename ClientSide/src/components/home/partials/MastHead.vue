<template>
  <!-- Masthead-->
  <div>
    <header class="masthead">
      <div class="container">
        <div class="masthead-subheading">.</div>
      </div>
    </header>
    <button type="button" class="btn btn-primary btn-xl text-uppercase my-2" @click="randomQuiz">
      Start a Random
    </button>
  </div>
</template>
<script>
export default {
  name: 'mast-head',
  methods: {
    randomQuiz() {
      const quizes = this.$store.state.titles;
      const randomQuiz = Math.ceil(Math.random() * quizes.length);
      this.$router.push({ name: 'quiz', params: { tag: randomQuiz } });
    },
  },
};
</script>
<style lang="">
</style>
