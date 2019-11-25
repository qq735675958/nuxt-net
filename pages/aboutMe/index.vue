<template>
  <div>

    <Head></Head>
    <b-container fluid>
      <div class="banner-img">
        <img
          src="https://images.mituo.cn/mui647/upload/201904/1555483206.jpg"
          alt=""
        >
      </div>
    </b-container>
    <b-container
      fluid
      class="mtb20"
    >
      <b-tabs align="center">
        <b-tab title="公司简介">
          <b-container>
            <main class="mtb20">
              <p>作为国际知名的半导体芯片产品与方案供应商，多年以来，我司一直专注于半导体产品及其系列解决方案的研发与制造， 以集成电路及电子分立器件为主业，从芯片研发到产品封装、测试， 我司以其强大的研发投入与科研实力，迅速成长为业界优秀的半导体企业，被公认为半导体工业最具创新力的公司之一。</p>
              <p>经过持续的研发投入与高速的市场扩张， 我司正向资金密集型与技术制造战略转型。目前，除了位于美国佛罗里达的研发机构，我司分别在泰国、马来西亚拥有独立的封装与测试工厂，并于2015年至今累计投资超过人民币1亿元，在中国重庆建立占地面积逾20000平米的现代化专业封装工厂， 引入全球领先的分立器件封装测试生产线十余条， 年产集成电路与分立器件30亿只，可提供从芯片测试、封装设计到封装测试等全套解决方案，为中国及亚太市场提供更强有力的产品方案与更高效的服务保障。</p>
              <p class="text-center">
                <img
                  src="https://images.mituo.cn/mui647/upload/201904/1555487288243834.jpg"
                  alt=""
                  style="height:auto"
                >
              </p>
              <p>
                我司半导体是业内能提供最全面的产品与解决方案的企业之一。 目前我司产品种类超过 50多种封装形式和10000多种型号。主要产品系列：电源管理芯片（AC-DC/DC-DC)、MOSFETs系列（高中低压MOS以及COOL MOS）、整流二极管、快恢复整流器、超快恢复、肖特基二极管，稳压二极管、瞬态电压抑制，桥式整流器、ESD保护、通用三极管、开关三极管、晶体管，单向可控硅、双向可控硅、三象限可控硅等，其产品先后通过UL、ISO/TS16949、ISO9001、ISO14001及SGS等相关认证。
              </p>
              <p>
                我司在中国大陆具有完善的市场营销体系、稳定的供货渠道以及丰富的产品库存，遍布各地的业务分支机构可及时响应客户需求并提供高效的服务支持。秉承“超越客户期望”的服务理念，我司一直致力于为全球客户提供高品质、高效率、高可靠性的产品，以对环境、道德及法律负责的态度永续运营，形成独特的企业核心价值与社会责任观。
              </p>
            </main>
          </b-container>
        </b-tab>
        <b-tab title="加入我们">
          <b-container>
            <main class="met-job-list met-pager-ajax mtb20">
              <div class="">
                <h4 class="card-title">
                  <span>技术支持工程师（pFAE）</span>
                </h4>
                <p class="blue-grey-400 ft12">
                  <span>2019-04-17</span>
                  <span>上海</span>
                  <span>人数 1人</span>
                  <span class="payment">10000</span>
                </p>
                <hr class="my-4">
                <div class="met-editor clearfix">
                  <p>主要工作与职责:</p>
                  <p>1：参与开发汽车雷达芯片应用参考方案；</p>
                  <p>2：售前和售后的客户技术支持，编写产品应用手册；</p>
                  <p>职位要求：</p>
                  <p>2：较强的逻辑思维能力，善于分析、解决问题；</p>
                </div>
                <hr class="my-4">
                <b-button
                  variant="outline-primary"
                  @click="showModal = true"
                >在线应聘</b-button>
              </div>
            </main>
          </b-container>
        </b-tab>
      </b-tabs>
    </b-container>
    <div>
      <b-modal
        title="在线应聘"
        ref="modal"
        v-model="showModal"
        :header-bg-variant="headerBgVariant"
        :header-text-variant="headerTextVariant"
      >
        <div>
          <form
            ref="form"
            @submit.stop.prevent="handleSubmit"
          >
            <b-form-group label-for="input-default">
              <b-form-input
                v-model="form.name"
                placeholder="姓名"
              ></b-form-input>
            </b-form-group>
            <b-form-group label-for="input-default">
              <b-form-input
                v-model="form.phone"
                placeholder="电话"
              ></b-form-input>
            </b-form-group>
            <b-form-group label-for="input-default">
              <b-form-input
                v-model="form.email"
                placeholder="邮箱"
              ></b-form-input>
            </b-form-group>
            <b-form-group label-for="input-default">
              <b-form-textarea
                v-model="form.experience"
                placeholder="相关经验"
                :rows="3"
                :max-rows="6"
              ></b-form-textarea>
            </b-form-group>
            <b-form-group label-for="file-default">
              <b-form-file
                placeholder="请选择文件"
                id="file-default"
                v-model="form.file"
              ></b-form-file>
            </b-form-group>

            <b-input-group class="mt-3">
              <b-form-input
                v-model="form.yzqode"
                placeholder="验证码"
              ></b-form-input>
              <b-input-group-append>
                <b-button>验证码</b-button>
              </b-input-group-append>
            </b-input-group>
          </form>

        </div>
        <template v-slot:modal-footer>
          <div class="w-100">
            <b-button
              variant="primary"
              size="md"
              class="float-right"
            >
              提交
            </b-button>
            <b-button
              size="md"
              class="float-right mr-20"
              @click="showModal = false"
            >
              关闭
            </b-button>
          </div>
        </template>
      </b-modal>
    </div>
    <Foot></Foot>
  </div>
</template>
<script>
import Head from '~/components/Head.vue'
import Foot from '~/components/Foot.vue'
export default {
    components: {
        Head,
        Foot
    },
    data() {
        return {
            showModal: false,
            form: {
                name: '',
                phone: '',
                email: '',
                experience: '',
                file: []
            },
            headerBgVariant: 'primary',
            headerTextVariant: 'light'
        }
    },
    methods: {
        handleSubmit() {
            console.log(88)
            // Exit when the form isn't valid
            // if (!this.checkFormValidity()) {
            //   return
            // }
            this.$nextTick(() => {
                this.$refs.modal.hide()
            })
        }
    }
}
</script>
<style lang="less" scoped>
img {
    display: inline-block;
}
.banner-img {
    height: auto;
    img {
        width: 100%;
        height: 100%;
    }
}

.met-editor {
    padding: 0 30px;
}

/deep/.custom-file-input:lang(en) ~ .custom-file-label::after {
    content: '选择文件';
}
</style>