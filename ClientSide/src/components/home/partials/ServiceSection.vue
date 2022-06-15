<template>
  <section class="page-section" id="services">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">Categories</h2>
        <h3 class="section-subheading text-muted">
          Choose one according to your mood
        </h3>
      </div>
      <div class="row text-center">
        <div class="row row-cols-1 row-cols-md-3 g-1">
          <div class="col" v-for="service in services" :key="service.title">
            <div class="shadow p-3 mb-5 bg-body rounded">
              <a href="quiz.html">
                <div class="card h-100">
                  <img :src="service.image" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{{ service.title }}</h5>
                    <p class="card-text" v-html="service.description">
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import educational from '@/assets/img/categories/nedu.jpg';
import fun from '@/assets/img/categories/fun.webp';
import quickGames from '@/assets/img/categories/qgames.png';

export default {
  name: 'service-section',
  data() {
    return {
      services: [
        {
          title: 'Edcational',
          description: 'want to increase your knowledge..? <br /> here are some educational quizes for you',
          image: educational,
        },
        {
          title: 'Fun',
          description: 'want to chill and relax..? <br /> here are some quick fun games for you',
          image: fun,
        },
        {
          title: 'Quick Games',
          description: 'Not interested in simple quizes..? <br /> here are some quick fun games for you',
          image: quickGames,
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
