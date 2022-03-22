<template>
  <section class="company-area d-flex align-items-center py-5">
    <div class="container py-5">
      <div class="row ">
        <div class="col-6">
          <div class="row">
            <div class="col-12">
              <span class="green-text">about the network</span>
              <h4 class="title my-3"><span class="colored-span">The</span> Company</h4>
              <p class="mb-5">
                For 12 years we have been providing audit and warranty,
                financial advice, risk advice, taxes and related services to
                select clients.
              </p>
              <div class="row">
                <div class="col-6 mb-3" v-for="(point, i) in companyPoints" :key="i">
                  <h5><span class="green-text"><font-awesome-icon :icon="point.icon" /> </span> {{point.title}}</h5>
                  <p>
                    {{point.info}}
                  </p>
                </div>
                
                <div class="col-12 d-flex gap-3">
                    <button class="button primary-button">Get in touch</button>
                    <button class="button outline-button">Read More</button>
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
.company-area {
  background-color: black;
  background-image: url("../assets/images/about-4.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  min-height: 550px;
  color: white;

  .title {
      color: white;
  }
}
</style>