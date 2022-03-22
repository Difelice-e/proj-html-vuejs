<template>
  <section class="jumbotron d-flex align-items-center">
      <div class="container-fluid">
          <!-- navbar in absolute  -->
          <MainNavbar />
          <div class="row justify-content-center">
              <!-- zona centrale del jumbo  -->
              <div class="col-3 text-center">
                  <h1 class="jumbo-title mb-3">Ready <span class="colored-span">Team</span></h1>
                  <p class="jumbo-info grey-text mb-4">No matter what your company needs, we will be ready to assist you in the best possible way.</p>
                  <div class="d-flex justify-content-center gap-3">
                      <button class="button primary-button">get in touch</button>
                      <button class="button outline-button">read more</button>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
import MainNavbar from "./MainNavbar.vue";

export default {
    components:{
        MainNavbar
    } 
}
</script>

<style lang="scss" scoped>
.jumbotron {
    background-image: url("../assets/images/bg-parallax.png");
    min-height: 866px;
    background-size: cover;
    background-position: center;
    position: relative;

    .container-fluid {
        align-items: center;
        

        .jumbo-title {

 
        }

        .jumbo-info {
            font-size: 0.8rem;
        }
    }
}
</style>