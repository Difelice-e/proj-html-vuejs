<template>
  <section class="contact-us py-5">
      <div class="container py-5">
          <div class="row">
              <div class="col-8">
                  <!-- titolo sezione  -->
                  <span class="pre-title">Send a message</span>
                  <h4 class="section-title mb-3">Get in <span class="colored-span">Touch</span></h4>
                  <p class="paragraph mb-5">We will respond to your message as soon as possibile</p>
                  
                  <!-- form invio messaggi  -->
                  <div class="row">
                      <div class="col-6 position-relative">
                          <input type="text" placeholder="Name">
                          <img class="input-icon" src="../assets/images/image (1).png" alt="">
                      </div>
                      <div class="col-6"><input type="email" placeholder="Email"></div>
                      <div class="col-6"><input type="number" placeholder="Phone"></div>
                      <div class="col-6 position-relative">
                          <input type="text" placeholder="More Info">
                          <font-awesome-icon icon="fa-solid fa-chevron-down" class="input-icon"/>
                      </div>

                      <!-- bottoni di invio  -->
                      <div class="col-12">
                          <textarea type="text" placeholder="Message" class="mb-3"></textarea>
                          <button class="button primary-button">Send</button>
                      </div>
                  </div>
              </div>
              
              <!-- colonna di destra con contatti -->
              <div class="col-4 ps-5">
                  <h5 class="fw-bold">Example Inc.</h5>
                  <p class="paragraph mb-5">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.<br><br>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <ul>
                      <li v-for="(contact, i) in contacts"  :key="i"><span class="icon-wrapper"><font-awesome-icon :icon="contact.icon" /></span> {{contact.text}}</li>
                  </ul>
                  <button class="button outline-button">View Map</button>
              </div>
          </div>
      </div>
  </section>
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
@import '../assets/scss/palette.scss';
.contact-us {

    input, textarea {
        width: 100%;
        margin-bottom: 24px;
        padding: 8px;
        background-color: $graynurse;
        border: none;
        border-radius: 5px;
    }

    textarea {
        resize: none;
        height: 150px;
    }

    .input-icon {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-125%)
    }

    ul {
        padding-left: 0;

        li {
            margin-bottom: 18px;
            font-size: 16px;
            color: $bluelagoon;
            font-weight: 300;

            .icon-wrapper {
                display: inline-block;
                background-color: rgba($seanymph,0.3);
                border-radius: 999px;
                aspect-ratio: 1/1;
                width: 50px;
                text-align: center;
                line-height: 50px;
                margin-right: 8px;
            }
        }
    }
}
</style>