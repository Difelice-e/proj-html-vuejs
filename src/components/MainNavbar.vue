<template>
  <nav>
    <div class="container">
      <div class="row d-flex align-items-center">
        <!-- colonna di sinistra con logo -->
        <div class="col">
          <img src="../assets/svgs/svg-7.svg" class="logo mb-3" alt="" />
        </div>

        <!-- colonna di destra con link  -->
        <div class="col">
          <ul class="d-flex align-items-center gap-2">
            <!-- link dinamici  -->
            <li v-for="(link, i) in navLinks" :key="i"><a :href="link.href">{{link.name}}</a></li>
            <!-- bottone statico -->
            <li>
              <button class="button primary-button">get in touch</button>
            </li>
          </ul>
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
          href: '#',
        },
        {
          name: 'Services',
          href: '#',
        },
        {
          name: 'About',
          href: '#',
        },
        {
          name: 'Projects',
          href: '#',
        },
        {
          name: 'Results',
          href: '#',
        },
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  padding: 15px 0;

  .logo {
    width: 150px;
  }

  ul {
    list-style: none;
    text-transform: uppercase;

  a {
    text-decoration: none;
    color: currentColor;
  }
  }
}
</style>