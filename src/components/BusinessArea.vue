<template>
  <section class="py-5 business-area">
    <div class="container py-5">
      <div class="row">
        <!-- sezione descrittiva  -->
        <div class="col-12">
          <span class="green-text span-title">our business area</span>
          <h3 class="my-3 title">Excellence in <span class="colored-span">Services</span></h3>
          <div class="d-flex justify-content-between align-items-center gap-3">
            <p class="grey-text info">
              We are leaders in providing consultancy services with a set of
              cutting-edge technologies and a team of experienced and renowned
              professionals. These are some options that you can hire
            </p>
            <button class="button primary-button">See All</button>
          </div>
        </div>

        <!-- sezione delle card  -->
        <div class="col-4 p-4" v-for="(card, i) in cardInfo" :key="i">
          <div class="row business-card p-5">
            <div  class="col-10">
              <div>
                <img :src="card.img" class="card_image mb-3" alt="" />
                <h4 class="mb-3 card-title">{{card.title}}</h4>
                <p class="grey-text card-info">{{card.info}}</p>
              </div>
            </div>
            <div class="col-2">
              <div>
                  <font-awesome-icon icon="fa-solid fa-arrow-right" />
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
      cardInfo: [
        {
          title: 'Audit & Assurance',
          info: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
          img: require('../assets/svgs/svg-1.svg')
        },
        {
          title: 'Financial Advisory',
          info: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
          img: require('../assets/svgs/svg-2.svg')
        },
        {
          title: 'Analytics and M&A',
          info: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
          img: require('../assets/svgs/svg-3.svg')
        },
        {
          title: 'Middle Marketing',
          info: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
          img: require('../assets/svgs/svg-4.svg')
        },
        {
          title: 'Legal Consulting',
          info: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
          img: require('../assets/svgs/svg-5.svg')
        },
        {
          title: 'Regulatory Risk',
          info: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
          img: require('../assets/svgs/svg-6.svg')
        },
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
.business-area {
  background-color: var(--graynurse);

  .title {
    font-size: 29px;
    font-weight: 800;
  }

  .info {
    font-size: 11px;
  }

  .business-card {
    background-color: var(--white);
    border-radius: 15px;

    .card_image {
      height: 43px;
      filter: invert(31%) sepia(92%) saturate(4156%) hue-rotate(165deg) brightness(92%) contrast(98%)
    }

    .card-title {
      font-size: 15px;
      font-weight: 700;
    }

    .card-info {
      font-size: 11px;
    }
    
    .fa-arrow-right {
      color: var(--bluelagoon);
      font-size: 1.5rem;
    }
  }
}
</style>