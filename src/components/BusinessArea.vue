<template>
  <section class="business-area py-5">
    <div class="container py-5">
      <div class="row">
        
        <div class="col-12">
          <!-- titolo sezione  -->
          <span class="pre-title">our business area</span>
          <h3 class="section-title my-3">Excellence in <span class="colored-span">Services</span></h3>

          <!-- sezione descrittiva  -->
          <div class="d-flex justify-content-between align-items-center gap-3">
            <p class="paragraph w-75">
              We are leaders in providing consultancy services with a set of
              cutting-edge technologies and a team of experienced and renowned
              professionals. These are some options that you can hire
            </p>
            <button class="button outline-button">See All</button>
          </div>
        </div>

        <!-- sezione delle card  -->
        <div class="col-4 p-4" v-for="(card, i) in cardInfo" :key="i">
          <div class="row business-card p-5">
            <div  class="col-10">
              <div>
                <img :src="card.img" class="card_image mb-3" alt="" />
                <h4 class="card-title mb-3">{{card.title}}</h4>
                <p class="paragraph">{{card.info}}</p>
              </div>
            </div>
            <div class="col-2">
              <div class="service-link d-flex justify-content-center align-items-center">
                  <font-awesome-icon icon="fa-solid fa-arrow-right"/>
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
@import '../assets/scss/palette.scss';
.business-area {
  background-color: $graynurse;

  .business-card {
    background-color: white;
    border-radius: 15px;

    .service-link {
      width: 40px;
      height: 40px;
      color: #0FA8A4;

      .fa-arrow-right {
        font-size: 1.5rem;
        opacity: 0.6;
        
      }
    }

    &:hover .service-link {
      background-color: rgba($seanymph,0.3);
      border-radius: 50%;
      color: #097470;
    }

    .card_image {
      height: 43px;
      filter: invert(31%) sepia(92%) saturate(4156%) hue-rotate(165deg) brightness(92%) contrast(98%)
    }

    .card-title {
      font-size: 15px;
      font-weight: 700;
    }
    
    
    
  }
}
</style>