<template>
  <section class="jumbotron d-flex align-items-center">
      <div class="container-fluid">
          <!-- navbar in absolute  -->
          <MainNavbar />
          <div class="row justify-content-center">
              <!-- zona centrale del jumbo  -->
              <div class="col-4 text-center">
                  <!-- titolo della sezione  -->
                  <h1 class="jumbo-title mb-3">Ready <span class="colored-span">Team</span></h1>
                  <p class="paragraph mb-4">No matter what your company needs, we will be ready to assist you in the best possible way.</p>
                  <div class="d-flex justify-content-center gap-3">
                      <button class="button outline-button">get in touch</button>
                      <button class="button outline-button">read more</button>
                  </div>
              </div>
          </div>
      </div>

      <!-- elemento grafico  -->
      <div class="carousel-cmd">
          <div class="carousel-indicator"></div>
          <div class="carousel-indicator active"></div>
          <div class="carousel-indicator"></div>
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
@import '../assets/scss/palette.scss';
.jumbotron {
    background-image: url("../assets/images/bg-parallax.png"), url("../assets/images/bg-2-jumbo.png");
    min-height: 866px;
    background-size: cover;
    background-position: center, bottom;
    position: relative;

    .container-fluid {
        align-items: center;
        
        .jumbo-title {
            font-size: 60px;
            font-weight: 900;
            white-space: nowrap;
        }

        .paragraph {
            font-size: 18px;
        }
    }

    .carousel-cmd {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);

        .carousel-indicator {
        border: 1px solid $bluelagoon;
        background-color: transparent;
        border-radius: 999px;
        height: 30px;
        width: 8px;
        margin-bottom: 5px;
        

            &.active {
                background-color: $bluelagoon;
            }
        }
    }

    
}
</style>