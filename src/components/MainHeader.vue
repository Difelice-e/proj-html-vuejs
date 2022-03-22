<template>
  <header class="py-2">
      <div class="container">
        <div class="row align-items-center">
          <!-- colonna di sinistra  -->
          <div class="col"><font-awesome-icon icon="fa-solid fa-clock" /> Open Hours: Mon - Sat - 9:00 - 18:00</div>

          <!-- colonna di destra  -->
          <div class="col d-flex gap-3 justify-content-end">
            <ul class="contact">
              <li><font-awesome-icon icon="fa-solid fa-phone" /> +1 (305) 1234-5678</li>
              <li><font-awesome-icon icon="fa-solid fa-envelope" /> hello@example.com</li>
              <li><font-awesome-icon icon="fa-brands fa-facebook-f" /></li>
              <li><font-awesome-icon icon="fa-brands fa-twitter" /></li>
              <li><font-awesome-icon icon="fa-brands fa-linkedin-in" /></li>
            </ul>
          </div>
        </div>
      </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
header {
  background-color: var(--bigstone);
  color: var(--pumice);
  font-size: 1rem;

  .contact {
  display: contents;
  list-style: none;
   
    li {
      white-space: nowrap;
   }
  }
}


</style>