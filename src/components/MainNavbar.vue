<template>
  <nav>
      <div class="container">
          <div class="row d-flex align-items-center">
              <div class="col">
                      <!-- <img src="../assets/images/logo.PNG" alt=""> -->
                      LOGO
              </div>
              <div class="col">
                  <ul class="d-flex align-items-center gap-2">
                      <li>Home</li>
                      <li>Services</li>
                      <li>About</li>
                      <li>Projects</li>
                      <li>Results</li>
                      <li>
                          <button class="button button-primary">get in touch</button>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
nav {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    padding: 15px 0;

    ul {
        list-style: none;
        text-transform: uppercase;
    }
}
</style>