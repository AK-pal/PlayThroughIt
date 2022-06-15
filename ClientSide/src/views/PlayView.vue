<template>
  <div class="play-form__container">
    <form action="#" class="play-form">
      <header class="header">
        <img src="@/assets/play.jpg" alt="" class="header__img" />
        <div
          class="btn btn-warning flying-btn"
          title="Go to Home"
          data-bs-toggle="modal"
          href="#portfolioModalQuit"
        >
          <i class="fa-solid fa-arrow-left"></i>
        </div>
      </header>
      {{ answerList }}
      <div class="play-form__body">
        <div
          class="form-group my-4"
          v-for="(question, index) in questions"
          :key="`question-${question.title}`"
        >
          <label for="id">
            <h5>{{ index + 1 }}: {{ question.question }}</h5>
            <div class="choice">
              <input
                type="radio"
                class="form-group"
                :name="`question-${index}`"
                :value="question.ch1"
                v-model="question.userAnswer"
              />
              {{ question.ch1 }}
            </div>
            <div class="choice">
              <input
                type="radio"
                class="form-group"
                :name="`question-${index}`"
                :value="question.ch2"
                v-model="question.userAnswer"
              />
              {{ question.ch2 }}
            </div>
            <div class="choice">
              <input
                type="radio"
                class="form-group"
                :name="`question-${index}`"
                :value="question.ch3"
                v-model="question.userAnswer"
              />
              {{ question.ch3 }}
            </div>
            <div class="choice">
              <input
                type="radio"
                class="form-group"
                :name="`question-${index}`"
                :value="question.ch4"
                v-model="question.userAnswer"
              />
              {{ question.ch4 }}
            </div>
          </label>
        </div>
        <div class="form-group">
            <button type="button" class="btn btn-success" @click="printLogs" >Submit</button>
        </div>
      </div>
    </form>
    <div
      class="portfolio-modal modal fade"
      id="portfolioModalQuit"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-bs-dismiss="modal">
            <i class="fas fa-xmark me-1"></i>
          </div>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <div class="modal-body">
                  <!-- Project details-->
                  <h4>Do you really want to Quit?</h4>
                  <router-link :to="`/`">
                    <button
                      class="btn btn-success"
                      data-bs-dismiss="modal"
                      type="button"
                    >
                      Yes
                    </button>
                  </router-link>
                  <button
                    class="btn btn-danger mx-1"
                    data-bs-dismiss="modal"
                    type="button"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Play-view',
  data() {
    return {
      checked: [],
      answerList: [],
    };
  },
  watch: {
    checked() {
      this.answerList.push(this.checked);
    },
  },
  computed: {
    questions() {
      const quesed = this.$store.state.questions;
      const filtered = quesed.filter(
        (que) => que.title === parseInt(this.$route.params.tag, 10),
      );
      return filtered.map((q) => ({ ...q, userAnswer: '' }));
    },
  },
  methods: {
    printLogs() {
      console.log(this.questions);
      this.$store.dispatch('saveReports', this.questions);
      setTimeout(() => {
        this.$router.push({ name: 'reports' });
      }, 2000);
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
