<template>
    <div class="play-form">
        <router-link to="/">
        <div
          class="btn btn-warning flying-btn"
          title="Go to Home"
        >
          <i class="fa-solid fa-home"></i>
        </div>
        </router-link>
        <div class="play-form__body">
            <table class="table">
            <thead>
                <tr>
                    <th>Fields</th>
                    <th>Values</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Total questions</td>
                    <td>{{results.total_questions}}</td>
                </tr>
                <tr>
                    <td>Correct Answers</td>
                    <td>{{results.correctAnswers}}</td>
                </tr>
                <tr>
                    <td>Percentage</td>
                    <td>{{results.percentage}}%</td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
</template>
<script>
export default {
  name: 'result-page',
  computed: {
    results() {
      return this.$store.state.report;
    },
  },
};
</script>
<style lang="scss">
.play-form {
  width: 60%;
  margin: 0 auto;
  background: #fff;
  position: relative;
  padding: 1rem;
  &__container {
    background: #eeeeee;
  }
  &__body {
    text-align: left;
    margin-top: 5rem;
  }
}
.flying-btn {
  position: absolute;
  top: 1rem;
  left: 1rem;
}
</style>
