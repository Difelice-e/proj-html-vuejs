<template>
  <section class="results py-5">
      <div class="container py-5">
          <div class="row">
              <div class="col-12 text-center mb-5">
                  <!-- titolo sezione -->
                  <span class="span-title green-text">What are we doing</span>
                  <h4 class="title mt-3 mb-5"><span class="span-bg">Results</span> in Number</h4>
              </div>
              
              <!-- numeri dell'azienda  -->
              <div v-for="(result,i) in results" :key="i" class="col-3 text-center">
                  <h5 class="number"><span class="green-text">{{result.number}}</span><br>{{result.title}}</h5>
              </div>
              
              <!-- sezione sponsor  -->
              <div class="col-12">
                  <ul class="d-flex justify-content-between gap-5">
                      <li v-for="(sponsorImg,i) in sponsor" :key="i">
                          <img class="sponsor-img" :src="sponsorImg" alt="">
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
    data() {
        return {
            results: [
                {
                    title: 'Certifications',
                    number: '128'
                },
                {
                    title: 'Employees',
                    number: '230'
                },
                {
                    title: 'Customers',
                    number: '517'
                },
                {
                    title: 'Countires Served',
                    number: '94'
                },
            ],
            sponsor: [
                require('../assets/images/logo-1.png'),
                require('../assets/images/logo-2.png'),
                require('../assets/images/logo-3.png'),
                require('../assets/images/logo-4.png'),
                require('../assets/images/logo-5.png'),
                require('../assets/images/logo-1.png')
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.results {
    background-image: url('../assets/images/bg-7.jpg');
    background-size: contain;
    background-position: top;

    .span-bg {
    background-color: rgba(#038484,0.3);
    padding: 5px;
  }

    .title {
        color: white;
        font-weight: 700;
        font-size: 29px;
    }

    .number {
        color: white;
        margin-bottom: 370px;
    }

    ul {
        list-style: none;

        .sponsor-img {
            height: 30px;
            filter: invert(1);
        }
    }
}
</style>