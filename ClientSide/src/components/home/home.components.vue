<template>
    <div id="page-top">
        <navigation-bar/>
        <masthead/>
        <service-section/>
        <popular-section/>
        <whats-new/>
        <teams-section/>
        <ask-a-question/>
        <footer-section/>
    </div>
</template>
<script>
import NavigationBar from '@/components/home/partials/NavigationBar.vue';
import Masthead from '@/components/home/partials/MastHead.vue';
import ServiceSection from '@/components/home/partials/ServiceSection.vue';
import PopularSection from '@/components/home/partials/PoplarSection.vue';
import WhatsNew from '@/components/home/partials/WhatsNew.vue';
import TeamsSection from '@/components/home/partials/TeamSection.vue';
import AskAQuestion from '@/components/home/partials/AskAQuestion.vue';
import FooterSection from '@/components/home/partials/FooterSection.vue';

export default {
  name: 'home-component',
  components: {
    NavigationBar,
    Masthead,
    ServiceSection,
    PopularSection,
    WhatsNew,
    TeamsSection,
    AskAQuestion,
    FooterSection,
  },
};
</script>
<style lang="">

</style>
