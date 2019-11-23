<template>
  <div class="container">
    <!-- header -->

    <Head></Head>
    <div
      class="swiper-banner"
      @mouseenter="on_bot_enter"
      @mouseleave="on_bot_leave"
    >
      <swiper
        :options="swiperBannerOption"
        ref="swiperBanner"
        class="swiper-wraper"
      >
        <swiper-slide
          v-for="(banner,index) in banners"
          :key="index"
        >
          <img :src="banner.images" />
        </swiper-slide>

        <!-- Optional controls -->
        <div
          class="swiper-pagination"
          slot="pagination"
        ></div>
        <div
          class="swiper-button-prev ml-50"
          slot="button-prev"
        ></div>
        <div
          class="swiper-button-next mr-50"
          slot="button-next"
        ></div>
      </swiper>
    </div>

    <section class="industry">
      <div class="industry-container">
        <h2 class="t">行业应用</h2>
        <p class="en">INDUSTRY</p>
      </div>
      <div class="industry-application">
        <swiper :options="swiperApplication">
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
    <!-- 关于我们 -->
    <div class="about-list-box">
      <div class="about-list-me">
        <div class="about-img">
          <img
            src="~assets/about/about.jpg"
            alt="about"
          />
        </div>
        <div class="about-right flex1">
          <h2 class="ft30">关于我们</h2>
          <p class="subp ft14">集成电路芯片股份有限公司成立于2004年，是国内著名的无线连接芯片公司，拥有完整的无线通讯产品平台，支持丰富的无线协议和通讯标准。博通已成为国内消费电子和工业应用无线IC的市场领导者，在国标ETC射频收发器、无线键盘鼠标芯片、FRS对讲机芯片、无人机无线遥控芯片、蓝牙音响芯片等均是主要供应商。 专业、专注、专一为客户提供方案及芯片产品供应、提供选型指导、提供技术咨询、提供工具应用支持、提供各类智能电子产品应用开发、 提供售前售后免费增值服务(样品及增值附加工程序);专业为用户解决各类智能电子产品整体方案开发设计，特色提供特制方案集成芯片定制。...</p>
          <Button>查看更多></Button>
        </div>
      </div>
    </div>
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
                autoplay: {
                    disableOnInteraction: false,
                    delay: 2000
                },
                pagination: {
                    el: '.swiper-pagination',
                    bulletActiveClass: 'my-bullet-active',
                    dynamicBullets: true,
                    clickable: true
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
            this.$refs.swiperBanner.swiper.autoplay.stop()
        },
        on_bot_leave() {
            this.$refs.swiperBanner.swiper.autoplay.start()
        }
    }
}
</script>

<style lang="less" scoped>
img {
    width: 100%;
    height: 100%;
}

.flex1 {
    flex: 1;
}

.swiper-banner {
    height: 520px;
    .swiper-wraper {
        height: 100%;
    }
    /deep/.my-bullet-active {
        background: #fff;
    }
    /deep/.swiper-pagination-bullet {
        width: 25px;
        height: 25px;
        opacity: 1;
    }
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
    margin: 40px 0;
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
        overflow: hidden;
        .industry-list-box {
            color: #37474f;
            cursor: pointer;
            .industry-dl {
                &:hover img {
                    transform: scale(1.1);
                    transition: all 0.3s ease-in-out 0s;
                }
            }
            &:hover .industry-dd {
                background: rgb(0, 101, 205);
                transition: all 0.3s ease-in-out 0s;
                color: #fff;
            }

            .industry-dl {
                overflow: hidden;
            }

            img {
                // display: block;
                margin: 0 auto;
                height: 250px;
            }
            .industry-title {
                font-size: 18px;
                font-weight: 400;
                line-height: 1.2;
            }

            .industry-dd {
                padding: 20px;
            }
            .industry-des {
                font-size: 14px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                display: block;
            }
        }
    }
}
.about-list-box {
    background: #0065cd;
    height: 400px;
    padding: 50px 0;
    .about-list-me {
        display: flex;
        // align-items: center;
        width: 1300px;
        margin: 0 auto;
        height: 100%;
        color: #fff;
        .about-img {
            width: 500px;
            margin-right: 50px;
        }
        .about-right {
            flex: 1;
            width: 100%;
            word-break: break-all;
            .subp {
                padding: 20px 0;
                line-height: 1.8;
            }
        }
    }
}
</style>
