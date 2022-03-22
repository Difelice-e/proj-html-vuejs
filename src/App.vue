<template>
  <div id="app">
    <!-- qui vanno i componenti -->
    <MainHeader />
    <main>
      <MainJumbo />
      <BusinessArea />
    </main>
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader.vue";
import MainJumbo from "./components/MainJumbo.vue";
import BusinessArea from "./components/BusinessArea.vue";

export default {
  name: "App",
  components: {
    MainHeader,
    MainJumbo,
    BusinessArea
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--gravel);
}

:root {
  // Color Cube
  --white: #ffffff;
  --woodsmoke: #111117;
  --bluelagoon: #038484;
  --gravel: #504f51;
  --pumice: #bcbebc;
  --santafe: #ae795e;
  --fountainblue: #52bbba;
  --anakiwa: #8fffff;

  // Median Cut
  --shark: #1d2023;
  --graynurse: #eef1ed;
  --seanymph: #6ca0a0;
  --smaltblue: #56808e;
  --santafe-m: #a96b53;

  // Material Design
  --elm: #1c918e;
  --santafe-muted: #ab6b53;
  --bigstone: #122439;
  --masala: #443c3b;
  --akaroa: #d6b9a3;
}

// common
img {
  max-width: 100%;
  display: block;
}

a {
  text-decoration: none;
  color: currentColor;
}

.colored-span {
  color: var(--bluelagoon);
  background-color: rgba(#038484,0.2);
  padding: 5px;
}

// bottoni 
.button {
  text-transform: uppercase;
  padding: 5px 10px;
  white-space: nowrap;
}

.primary-button {
  background-color: var(--bluelagoon);
  color: white;
  border: 1px solid var(--bluelagoon);
}

.outline-button {
  border: 1px solid var(--bluelagoon);
  color: var(--bluelagoon);
  background-color: transparent;
}

// testi 
.green-text {
  color: var(--fountainblue);
}

.grey-text {
  color: var(--pumice);;
}
</style>
