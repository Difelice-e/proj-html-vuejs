<template>
  <nav>
    <div class="container">
      <div class="row d-flex align-items-center">
        <!-- colonna di sinistra con logo -->
        <div class="col">
          <img src="../assets/svgs/svg-7.svg" class="logo mb-3" alt="" />
        </div>

        <!-- colonna di destra con link  -->
        <div class="col d-none d-md-block">
          <ul class="d-flex justify-content-end align-items-center gap-3">
            <!-- link dinamici  -->
            <li v-for="(link, i) in navLinks" :key="i" class="list">
              <a :href="link.href">{{link.name}}</a>
            </li>
            <!-- bottone statico -->
            <li>
              <button class="button outline-button">get in touch</button>
            </li>
          </ul>
        </div>
        <div class="col d-flex d-md-none justify-content-end align-items-center">
          <font-awesome-icon icon="fa-solid fa-bars" class="hamburger-menu"/>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navLinks: [
        {
          name: 'Home',
          href: '#main-header',
        },
        {
          name: 'Services',
          href: '#business-area',
        },
        {
          name: 'About',
          href: '#company-area',
        },
        {
          name: 'Projects',
          href: '#projects-area',
        },
        {
          name: 'Results',
          href: '#results-area',
        },
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/palette.scss';
nav {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  padding: 15px 0;
  font-size: 12px;

  .hamburger-menu {
    color: $lightlagoon;
    font-size: 30px;
    padding-right: 10px;
  }
}
</style>