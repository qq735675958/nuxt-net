<template>
  <!-- footer -->
  <footer class="footer-info">
    <b-container class="bv-example-row">
      <b-row>
        <b-col
          :lg="6"
          :md="12"
          :xs="12"
        >
          <div class="left-center">
            <p>联系方式</p>
            <p class="ft24">0731-00000000</p>
            <p>销售（周六、周日服务电话）： 0731-00000000</p>
            <p>电子邮箱：email@email.mt</p>
            <p>传真：0731-00000000</p>
            <p>售后（技术支持服务电话）：0731-00000000（张先生）</p>
          </div>
        </b-col>
        <b-col
          :lg="6"
          :md="12"
          :xs="12"
        >
          <ul class="right-qrcode">
            <li>
              <img
                src="https://images.mituo.cn/mui647/upload/201904/1555923031.png"
                alt=""
              >
            </li>
            <li>
              <img
                src="https://images.mituo.cn/mui647/upload/201904/1555923031.png"
                alt=""
              >
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row>
        <b-col
          :lg="12"
          :md="12"
          :xs="12"
          class="text-center"
        >
          Copyright © 2019 xxxx.com 版权所有
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
img {
    width: 100%;
    height: 100%;
}
.footer-info {
    background: #222429;
    padding: 35px 0;
    color: #bdbdbd;
    .right-qrcode {
        padding: 0;
        overflow: hidden;
        display: flex;
        font-size: 14px;
        cursor: pointer;
        li:first-child {
            margin-right: 50px;
        }
    }
}
</style>