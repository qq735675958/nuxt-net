<template>
  <div class="container">
    <!-- header -->

    <Head></Head>
    <div
      v-swiper:mySwiper="swiperBannerOption"
      class="swiper-banner"
      ref="myswiper"
      @mouseenter="on_bot_enter"
      @mouseleave="on_bot_leave"
    >
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(banner,index) in banners"
          :key="index"
        >
          <img :src="banner.images" />
        </div>
      </div>
      <div class="swiper-loop swiper-pagination-bullets"></div>
      <div
        class="swiper-button-prev ml-50"
        slot="button-prev"
      ></div>
      <div
        class="swiper-button-next mr-50"
        slot="button-next"
      ></div>
    </div>
    <section class="industry">
      <div class="industry-container">
        <h2 class="t">行业应用</h2>
        <p class="en">INDUSTRY</p>
      </div>
      <div class="industry-application">
        <swiper
          :options="swiperApplication"
          ref="mySwiper"
        >
          <swiper-slide
            v-for="(item,index) in industryDataList"
            :key="index"
          >
            <div>
              <dl class="industry-list-box">
                <dt class="industry-dl">
                  <img
                    :src="item.img"
                    alt="item.title"
                  />
                </dt>
                <dd class="industry-dd">
                  <h3 class="industry-title">{{item.title}}</h3>
                  <em class="em">— —</em>
                  <p class="industry-des">{{item.text}}</p>
                </dd>
              </dl>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>
  </div>
</template>

<script>
import Head from '~/components/Head.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from 'axios'
export default {
    components: {
        Head,
        swiper,
        swiperSlide
    },
    mounted() {
        this.getData()
    },
    data() {
        return {
            banners: [
                { images: require('./../assets/banner/1.jpg') },
                { images: require('./../assets/banner/2.jpg') },
                { images: require('./../assets/banner/3.jpg') }
            ],
            swiperBannerOption: {
                loop: true,
                speed: 1000,
                slidesPerView: 'auto',
                centeredSlides: true,
                autoplay: {
                    disableOnInteraction: false,
                    delay: 2000
                },
                pagination: {
                    el: '.swiper-loop',
                    dynamicBullets: false
                },
                //如果需要前进后退按钮
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },
            swiperApplication: {
                loop: true,
                slidesPerView: 3,
                spaceBetween: 30
            },
            industryDataList: []
        }
    },
    methods: {
        getData() {
            axios.get('/news').then(res => {
                this.industryDataList = res.data.list
            })
        },
        on_bot_enter() {
            this.$refs.myswiper.swiper.autoplay.stop()
        },
        on_bot_leave() {
            this.$refs.myswiper.swiper.autoplay.start()
        }
    }
}
</script>

<style lang="less" scoped>
img {
    width: 100%;
    height: 100%;
}

.swiper-banner {
    height: 520px;
    &:hover {
        .swiper-button-prev,
        .swiper-button-next {
            display: block;
            transition: 0.2s linear;
        }
    }
}

.swiper-button-prev,
.swiper-button-next {
    display: none;
}

.industry {
    margin-top: 40px;
    .industry-container {
        .t {
            color: #000;
            margin-bottom: 0;
            font-size: 48px;
            text-align: center;
            line-height: 48px;
            padding-bottom: 15px;
        }
        .en {
            color: #666666;
            font-size: 24px;
            line-height: 26px;
            text-align: center;
            padding-bottom: 0;
        }
    }
    .industry-application {
        width: 1300px;
        margin: 0 auto;
        margin-top: 20px;

        .industry-list-box {
            cursor: pointer;
            img {
                display: block;
                margin: 0 auto;
                height: 250px;
            }
            .industry-title {
                font-size: 18px;
                font-weight: 400;
                line-height: 1.2;
                color: #37474f;
            }
            .industry-dd {
                padding: 20px;
            }
            .industry-des {
                color: #8f8f8f;
                font-size: 14px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
            }
        }
    }
}
</style>
