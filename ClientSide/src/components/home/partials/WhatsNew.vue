<template>
  <section class="page-section" id="about">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">What's New</h2>
        <h3 class="section-subheading text-muted">Recently Added :</h3>
      </div>

      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <a href="quiz.html">
              <img
                src="@/assets/img/portfolio/anime.jpg"
                class="d-block mx-auto full-mg" alt="..."
                />
            </a>
          </div>
          <div class="carousel-item">
            <a href="quiz.html">
              <img
                src="@/assets/img/portfolio/Sports.jpg"
                class="d-block mx-auto full-mg"
                alt="..."
              />
            </a>
          </div>
          <div class="carousel-item">
            <a href="quiz.html">
              <img
                src="@/assets/img/portfolio/food.jpg"
                class="d-block mx-auto full-mg"
                alt="..."
              />
            </a>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'whats-new',
};
</script>
<style lang="scss"></style>
