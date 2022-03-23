<template>
  <section class="contact-us py-5">
      <div class="container py-5">
          <div class="row">
              <div class="col-8">
                  <span class="span-title green-text">Send a message</span>
                  <h4 class="title my-3">Get in<span class="span-bg">Touch</span></h4>
                  <p>We will respond to your message as soon as possibile</p>

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
                      <div class="col-12">
                          <textarea type="text" placeholder="Message" class="mb-3"></textarea>
                          <button class="button primary-button">Send</button>
                      </div>
                  </div>
              </div>

              <div class="col-4 ps-5">
                  <h5>Example Inc.</h5>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.<br><br>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <ul>
                      <li class="green-text" v-for="(contact, i) in contacts"  :key="i"><span class="icon-wrapper"><font-awesome-icon :icon="contact.icon" /></span> {{contact.text}}</li>
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
.contact-us {

    .span-bg {
        background-color: rgba(#038484,0.3);
        padding: 5px;
    }

    input {
        width: 100%;
        margin-bottom: 24px;
        padding: 8px;
        background-color: var(--graynurse);
        border: none;
        border-radius: 5px;
    }

    .input-icon {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-125%)
    }

    textarea {
        resize: none;
        width: 100%;
        height: 150px;
        padding: 8px;
        background-color: var(--graynurse);
        border: none;
        border-radius: 5px;
    }

    ul {
        list-style: none;
        padding-left: 0;

        li {
            margin-bottom: 8px;

            .icon-wrapper {
                display: inline-block;
                background-color: rgba(#038484,0.3);
                border-radius: 999px;
                aspect-ratio: 1/1;
                width: 30px;
                text-align: center;
                line-height: 30px;
                margin-right: 8px;
            }
        }
    }
}
</style>