<template>
  <section class="page-section bg-light" id="team">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
        <h3 class="section-subheading text-muted">
          The strength of the team is each individual member. The strength of
          each member is the team.
        </h3>
      </div>
      <div class="row">
        <div class="col-lg-3" v-for="member in team" :key="member.name">
          <div class="team-member">
            <img
              class="mx-auto rounded-circle"
              :src="member.image"
              alt="..."
            />
            <h4>{{member.name}}</h4>
            <p class="text-muted">{{ member.role }}</p>
            <a
              class="btn btn-dark btn-social mx-2"
              href="link.html"
              aria-label="Parveen Anand Twitter Profile"
              ><i :class="`${icons.github}`"></i
            ></a>
            <a
              class="btn btn-dark btn-social mx-2"
              href="link.html"
              aria-label="Parveen Anand Facebook Profile"
              ><i :class="`${icons.facebook}`"></i
            ></a>
            <a
              class="btn btn-dark btn-social mx-2"
              href="link.html"
              aria-label="Parveen Anand LinkedIn Profile"
              ><i :class="`${icons.linkedin  }`"></i
            ></a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 mx-auto text-center">
          <p class="large text-muted">
            Find a group of people who challenge and inspire you, spend a lot of
            time with them, and it will change your life.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Asheesh from '@/assets/img/team/ashish.jpg';
import Ankur from '@/assets/img/team/me.jpg';
import Rajul from '@/assets/img/team/ramjul.jpg';
import Sudhanshu from '@/assets/img/team/buaji.jpg';

export default {
  name: 'teams-section',
  data() {
    return {
      icons: {
        github: 'fab fa-github',
        facebook: 'fab fa-facebook',
        linkedin: 'fab fa-linkedin',
      },
      team: [
        {
          name: 'Asheesh Kumar',
          role: 'Team Lead',
          image: Asheesh,
          portfolio: {
            github: '',
            facebook: '',
            linkedin: '',
          },
        },
        {
          name: 'Rajul Raj Sharma',
          role: 'UI/UX and R3D',
          image: Rajul,
          portfolio: {
            github: '',
            facebook: '',
            linkedin: '',
          },
        },
        {
          name: 'Sudhanshu Pandey',
          role: 'Frontend Lead',
          image: Sudhanshu,
          portfolio: {
            github: '',
            facebook: '',
            linkedin: '',
          },
        },
        {
          name: 'Ankur Pal',
          role: 'Tech Lead and Backend',
          image: Ankur,
          portfolio: {
            github: '',
            facebook: '',
            linkedin: '',
          },
        },
      ],
    };
  },
};
</script>
<style lang="">
</style>
