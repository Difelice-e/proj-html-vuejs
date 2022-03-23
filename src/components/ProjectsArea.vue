<template>
  <section class="projects py-5">
      <div class="container py-5">
          <div class="row">
              <div class="col-12 text-center">
                  <!-- titolo sezione  -->
                  <span class="pre-title">We do more for everyone</span>
                  <h4 class="section-title my-3">Actions & <span class="colored-span">Projects</span></h4>
                  <!-- lista categorie   -->
                  <ul class="d-flex justify-content-center gap-3">
                      <li v-for="(category, i) in categories" 
                      :key="i"
                      :class="i === 0 ? 'active' : ''"
                      class="paragraph text-uppercase">
                        {{category}}
                      </li>
                  </ul>
              </div>

              <!-- sezione delle card  -->
              <div v-for="(card,i) in cards" :key="i" class="col-4 p-3">
                  <div class="card-wrapper d-flex align-items-end text-center">
                      <img class="card-img" :src="card.img" alt="">
                      <h5 class="subtitle">{{card.title}}</h5>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
    data () {
        return {
            categories: [
            'All', 'Institutional', 'Social', 'Events', 'Innovation', 'Enviroment', 'Technology'
            ],
            cards: [
                {
                    title: 'Academic professional program in social media',
                    img: require('../assets/images/project-1.jpg')
                },
                {
                    title: 'President\'s speech at the annual metting',
                    img: require('../assets/images/project-2.jpg')
                },
                {
                    title: 'International business trip in Shanghai',
                    img: require('../assets/images/project-3.jpg')
                },
                {
                    title: 'Technology workshop with education theme',
                    img: require('../assets/images/project-4.jpg')
                },
                {
                    title: 'Donation of clothes and food to the partner NGO',
                    img: require('../assets/images/project-5.jpg')
                },
                {
                    title: 'Confraternization of the procurement team',
                    img: require('../assets/images/project-6.jpg')
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/palette.scss';
.projects {

        li {
            padding: 5px 8px;

            &.active {
                background-color: rgba($seanymph,0.25);
                color: $seanymph;
            }
        }

    .card-wrapper {
        position: relative;
        border-radius: 15px;
        overflow: hidden;

        &::after {
            content: '';
            display: block;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(black, 0.5);
            position: absolute;
        }

        .subtitle {
            position: absolute;
            bottom: 30px;
            z-index: 99;
            padding: 0 20px;
        }
    }
}
</style>