<template>
  <section class="company-area d-flex align-items-center py-5">
    <div class="container py-5">
      <div class="row">
        <div class="col-6">
          <div class="row">
            <!-- sezione descrittiva  -->
            <div class="col-12">
              <span class="span-title green-text">about the network</span>
              <h4 class="title my-3"><span class="span-bg">The</span> Company</h4>
              <p class="info mb-5">
                For 12 years we have been providing audit and warranty,
                financial advice, risk advice, taxes and related services to
                select clients.
              </p>
              <div class="row">
                <!-- bullet point  -->
                <div class="col-6 mb-3" v-for="(point, i) in companyPoints" :key="i">
                  <h5 class="point-title"><span class="green-text"><font-awesome-icon :icon="point.icon" /> </span> {{point.title}}</h5>
                  <p class="point-info">
                    {{point.info}}
                  </p>
                </div>
                
                <!-- bottoni  -->
                <div class="col-12 d-flex gap-3">
                    <button class="button primary-button">Get in touch</button>
                    <button class="button outline-dark-button">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  background-color: black;
  background-image: url("../assets/images/about-4.jpg");
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: right;
  min-height: 550px;

  .span-bg {
    background-color: rgba(#038484,0.3);
    padding: 5px;
  }

  .title {
      color: white;
      font-size: 30px;
      font-weight: 700;
  }

  .info, .point-info {
    font-size: 11px;
    color: var(--pumice);
  }

  .point-title {
    font-size: 17px;
    font-weight: 800;
    color: white;
  }
}
</style>