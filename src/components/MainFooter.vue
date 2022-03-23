<template>
  <footer>
      <div class="container">
          <div class="row">
              <div class="col-3">
                  <img src="" alt="">
                  <p>A Functional HTML template for Corporate & Business</p>
                  <ul>
                      <li v-for="(contact, i) in contacts"  :key="i"><span class="icon-wrapper"><font-awesome-icon :icon="contact.icon" /></span> {{contact.text}}</li>
                  </ul>
                  <button class="button outline-button">Get in touch</button>
              </div>
              <div class="col-3"></div>
          </div>
      </div>
  </footer>
</template>

<script>
export default {
    data() {
        return {
            contacts: [
                {
                    icon: 'fa-solid fa-phone',
                    text: '+1 (305) 1234-5678'
                },
                {
                    icon: 'fa-solid fa-envelope',
                    text: 'hello@example.com'
                },
                {
                    icon: 'fa-solid fa-location-dot',
                    text: 'Main Avenue, 987'
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
footer {
    background-color: black;
    color: white;
    ul{
        list-style: none;
        padding-left: 0;
    }
    
}
</style>