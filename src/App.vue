<template>
  <div id="app">
    <!-- qui vanno i componenti -->
    <MainHeader />
    <main>
      <MainJumbo />
      <BusinessArea />
      <CompanyArea />
      <ProjectsArea />
      <ResultsArea />
      <ContactUs />
      <MainFooter />
    </main>
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader.vue";
import MainJumbo from "./components/MainJumbo.vue";
import BusinessArea from "./components/BusinessArea.vue";
import CompanyArea from "./components/CompanyArea.vue";
import ProjectsArea from "./components/ProjectsArea.vue";
import ResultsArea from "./components/ResultsArea.vue";
import ContactUs from "./components/ContactUs.vue";
import MainFooter from "./components/MainFooter.vue";


export default {
  name: "App",
  components: {
    MainHeader,
    MainJumbo,
    BusinessArea,
    CompanyArea,
    ProjectsArea,
    ResultsArea,
    ContactUs,
    MainFooter
  },
};
</script>

<style lang="scss">
@import './assets/scss/common.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
