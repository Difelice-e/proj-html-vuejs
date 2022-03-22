<template>
  <header class="py-2">
      <div class="container">
        <div class="row align-items-center">
          <!-- colonna di sinistra  -->
          <div class="col"><font-awesome-icon icon="fa-solid fa-clock" /> Open Hours: {{openDay}} - {{closeDay}} - {{openHour}} - {{closeHour}}</div>

          <!-- colonna di destra  -->
          <div class="col d-flex gap-3 justify-content-end">
            <ul class="contact">
              <li v-for="(link, i) in headerLinks"  :key="i"><a :href="link.href"><font-awesome-icon :icon="link.icon" /> {{link.text}}</a></li>
            </ul>
          </div>
        </div>
      </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      openDay: 'Mon',
      closeDay: 'Sat',
      openHour: '9:00',
      closeHour: '18:00',
      headerLinks: [
        {
          icon: 'fa-solid fa-phone',
          text: '+1 (305) 1234-5678',
          href: '#'
        },
        {
          icon: 'fa-solid fa-envelope',
          text: 'hello@example.com',
          href: '#'
        },
        {
          icon: 'fa-brands fa-facebook-f',
          text: '',
          href: '#'
        },
        {
          icon: 'fa-brands fa-twitter',
          text: '',
          href: '#'
        },
        {
          icon: 'fa-brands fa-linkedin-in',
          text: '',
          href: '#'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  background-color: var(--bigstone);
  color: var(--pumice);
  font-size: 11px;

  .contact {
  display: contents;
  list-style: none;
   
    li {
      white-space: nowrap;

      a {
    text-decoration: none;
    color: currentColor;
  }
   }
  }
}


</style>