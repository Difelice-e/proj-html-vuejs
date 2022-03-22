<template>
  <section class="jumbotron d-flex align-items-center">
      <div class="container-fluid">
          <div class="row justify-content-center">
              <div class="col-3 text-center">
                  <h1 class="jumbo-title mb-3">Ready <span>Team</span></h1>
                  <p class="jumbo-info mb-4">No matter what your company needs, we will be ready to assist you in the best possible way.</p>
                  <div class="d-flex gap-3">
                      <button class="button primary-button">get in touch</button>
                      <button class="button outline-button">read more</button>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>


export default {

}
</script>

<style lang="scss" scoped>
.jumbotron {
    background-image: url("../assets/images/bg-parallax.png");
    min-height: 866px;
    background-size: cover;
    background-position: center;

    .container-fluid {
        align-items: center;

        .jumbo-title {

            span {
                color: var(--bluelagoon);
                background-color: var(--seanymph);
            }  
        }

        .jumbo-info {
            color: var(--masala);
            font-size: 0.8rem;
        }
    }
}
</style>