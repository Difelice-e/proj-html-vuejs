<template>
  <nav>
    <div class="container">
      <div class="row d-flex align-items-center">
        <div class="col">
          <img src="../assets/svgs/svg-7.svg" class="logo mb-3" alt="" />
        </div>
        <div class="col">
          <ul class="d-flex align-items-center gap-2">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Projects</li>
            <li>Results</li>
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
export default {};
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
  }
}
</style>