<template>
  <section class="company-area d-flex align-items-center py-5" id="company-area">
    <div class="container py-5">
      <div class="row">
        <div class="col-6">
          <div class="row">
            <!-- sezione descrittiva  -->
            <div class="col-12">
              <span class="pre-title">about the network</span>
              <h4 class="section-title dark mb-4"><span class="colored-span dark">The</span> Company</h4>
              <p class="paragraph mb-5">
                For 12 years we have been providing audit and warranty,
                financial advice, risk advice, taxes and related services to
                select clients.
              </p>
              <div class="row">
                <!-- bullet point  -->
                <div class="col-12 col-md-6 mb-5" v-for="(point, i) in companyPoints" :key="i">
                  <h5 class="subtitle"><span class="icon"><font-awesome-icon :icon="point.icon" /> </span> {{point.title}}</h5>
                  <p class="paragraph">
                    {{point.info}}
                  </p>
                </div>
                
                <!-- bottoni  -->
                <div class="col-12 d-flex gap-3">
                    <button class="button outline-button dark">Get in touch</button>
                    <button class="button outline-button dark">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- contenuto puramente grafico   -->
    <div class="divider before-element"><img src="../assets/svgs/svg-0.svg" alt=""></div>
    <div class="divider after-element"><img src="../assets/svgs/svg-0.svg" alt=""></div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      companyPoints: [
        {
          icon: 'fa-solid fa-medal',
          title: "Tradition",
          info: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        },
        {
          icon: "fa-solid fa-lock",
          title: "Security",
          info: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        },
        {
          icon: "fa-solid fa-pen-to-square",
          title: "Certificate",
          info: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        },
        {
          icon: "fa-solid fa-graduation-cap",
          title: "Expertise",
          info: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/palette.scss';
.company-area {
  background-color: $secondary;
  background-image: url("../assets/images/about-4.jpg");
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: right;
  min-height: 550px;
  position: relative;

  .icon {
    height: 30px;
    color: $lightlagoon;
    margin-right: 5px;
  }

  .divider {
    filter: invert(31%) sepia(92%) saturate(4156%) hue-rotate(165deg) brightness(92%) contrast(98%);
    position: absolute;
    right: 50%;
    opacity: 0.5;

    &.after-element {
      bottom: 0;
      transform: translate(50%, 75%)
    }

    &.before-element {
      top: 0;
      transform: translate(50%, -25%)
    }
  }

}
</style>