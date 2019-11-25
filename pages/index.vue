<template>
  <div class="container-fluid">
    <!-- header -->

    <Head></Head>
    <div class="container-fluid ">
      <div>
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="3000"
          controls
          indicators
          img-width="100%"
          img-height="300"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <b-carousel-slide
            v-for="(banner,index) in banners"
            :key="index"
          >
            <template v-slot:img>
              <img
                class="img-fluid w-100"
                :src="banner.images"
                alt="image slot"
              >
            </template>
          </b-carousel-slide>
        </b-carousel>
      </div>
    </div>
    <div class="jumbotron bgfff">
      <div class="container text-center">
        <h1 class="display-5">行业应用</h1>
        <p class="lead">INDUSTRY</p>
      </div>
    </div>
    <div class="container">
      <section class="industry ">
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
    </div>
    <!-- 资讯中心 -->
    <b-container>
      <h1 class="display-6 ft30  text-center ">资讯中心</h1>
      <b-row class="mtb20 ">
        <b-col
          :sm="12"
          :lg="4"
          :xl="4"
          :md="4"
          v-for="(ite,index) in 3"
          :key="index"
        >
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2"
          >
            <span>观看人数：1000</span>
            <b-card-text class="text-indent">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

            <b-button
              href="#"
              variant="primary"
              size="sm"
            >查看详情 ></b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <!-- 产品中心 -->
    <b-container>
      <h1 class="display-6 ft30  text-center ">产品中心</h1>
      <b-tabs
        content-class="mt-3"
        align="center"
        pills
      >
        <b-tab
          title="First"
          active
        >
          <p>I'm the first tab</p>
        </b-tab>
        <b-tab title="Second">
          <p>I'm the second tab</p>
        </b-tab>
        <b-tab title="Disabled">
          <p>I'm a disabled tab!</p>
        </b-tab>
      </b-tabs>
    </b-container>
    <!-- 关于我们 -->
    <b-container
      fluid
      class="about-list-box"
    >
      <b-container>
        <b-row>
          <b-col
            :lg="5"
            :md="12"
            :sm="12"
            :x1="12"
          >
            <div class="about-img">
              <img
                src="~assets/about/about.jpg"
                alt="about"
              />
            </div>
          </b-col>
          <b-col
            :lg="6"
            :md="12"
            :sm="12"
            :x1="12"
          >
            <div class="about-right">
              <h2 class="ft30 about-me-title">关于我们</h2>
              <p class="subp ft14">集成电路芯片股份有限公司成立于2004年，是国内著名的无线连接芯片公司，拥有完整的无线通讯产品平台，支持丰富的无线协议和通讯标准。博通已成为国内消费电子和工业应用无线IC的市场领导者，在国标ETC射频收发器、无线键盘鼠标芯片、FRS对讲机芯片、无人机无线遥控芯片、蓝牙音响芯片等均是主要供应商。 专业、专注、专一为客户提供方案及芯片产品供应、提供选型指导、提供技术咨询、提供工具应用支持、提供各类智能电子产品应用开发、 提供售前售后免费增值服务(样品及增值附加工程序);专业为用户解决各类智能电子产品整体方案开发设计，特色提供特制方案集成芯片定制。...</p>
              <b-button
                variant="light"
                size="md"
              >查看更多>></b-button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <Foot></Foot>
  </div>
</template>

<script>
import Head from '~/components/Head.vue'
import Foot from '~/components/Foot.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from 'axios'
export default {
    components: {
        Head,
        Foot,
        swiper,
        swiperSlide
    },
    mounted() {
        this.getData()
    },
    data() {
        return {
            slide: 0,
            sliding: null,
            banners: [
                { images: require('./../assets/banner/1.jpg') },
                { images: require('./../assets/banner/2.jpg') },
                { images: require('./../assets/banner/3.jpg') }
            ],
            swiperApplication: {
                loop: true,
                slidesPerView: 3,
                spaceBetween: 30
            },
            industryDataList: [],
            tabsValue: ''
        }
    },
    methods: {
        onSlideStart(slide) {
            this.sliding = true
        },
        onSlideEnd(slide) {
            this.sliding = false
        },
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
        },
        checkTab(name) {
            console.log(name)
        }
    }
}
</script>

<style lang="less" scoped>
img {
    width: 100%;
    height: 100%;
}

.text-indent {
    text-indent: 30px;
}
/deep/.carousel-indicators {
    bottom: 2%;
}

.jumbotron {
    padding: 3rem 2rem;
    margin-bottom: 0;
}

.industry {
    .industry-application {
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
    padding: 38px 0;
    .about-right {
        color: #fff;
        word-break: break-all;
        .subp {
            padding: 20px 0;
            line-height: 1.8;
        }
    }
}
</style>
