<template>
  <!-- Popular section-->
  <section class="page-section bg-light" id="portfolio">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">Popular</h2>
        <h3 class="section-subheading text-muted">
          most users are interested in :
        </h3>
      </div>
      <div class="row">
        <div
          class="col-lg-4 col-sm-6 mb-4"
          v-for="service in titles"
          :key="service.t_name"
        >
          <!-- Portfolio item -->
          <div class="portfolio-item">
            <a
              class="portfolio-link"
              data-bs-toggle="modal"
              :href="`#portfolioModal${service.t_id}`"
            >
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <div class="img__container">
                <img
                  class="img-fluid"
                  :src="`${base_url + service.t_img}`"
                  alt="..."
                />
              </div>
            </a>
            <div class="portfolio-caption">
              <div class="portfolio-caption-heading">
                {{ service.t_name }}
              </div>
              <div class="portfolio-caption-subheading text-muted">
                {{ service.t_desc }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Portfolio item 1 modal popup-->
    <div
      class="portfolio-modal modal fade"
      v-for="service in titles"
      :key="`model-${service.t_id}`"
      :id="`portfolioModal${service.t_id}`"
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
                  <h2 class="text-uppercase">{{ service.t_name }}</h2>
                  <p class="item-intro text-muted">
                    {{ service.t_desc }}
                  </p>
                  <img
                    class="img-fluid d-block mx-auto"
                    :src="`${base_url + service.t_img}`"
                    width="200"
                    alt="..."
                  />
                  <p>
                    Thanks for selecting the {{ service.t_name }} quiz, we hope
                    it will entertain you much
                  </p>
                  <ul class="list-inline">
                    <li>
                      <strong class="text-capitalize"
                        >{{ service.t_name }} Quiz</strong
                      >
                    </li>
                    <li>
                      <strong>Category:</strong>
                      Educational
                    </li>
                  </ul>
                  <router-link :to="`/play/${service.t_id}`">
                    <button
                      class="btn btn-primary btn-xl text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                    >
                      Take The Quiz
                    </button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'popular-section',
  data() {
    return {
      services: [],
      base_url: process.env.VUE_APP_BASE_URI,
    };
  },
  computed: {
    titles() {
      // eslint-disable-next-line
      return this.$store.state.titles;
    },
  },
};
</script>
<style lang=""></style>
