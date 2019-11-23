<template>
  <div class="header-container">
    <div class="header-top-wraper">
      <div class="header-top-site">
        <div class="header-top-left">
          <ul>
            <li class="mr-50">
              <a href>
                <i
                  class="fa fa-phone"
                  aria-hidden="true"
                ></i>
                <span>1598444455566</span>
              </a>
            </li>
            <li>
              <a href=“”>
                <i
                  class="fa fa-envelope-o"
                  aria-hidden="true"
                ></i>
                <span>1598444455566</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="header-top-right">
          <ul>
            <li>
              <i
                class="fa fa-weixin"
                aria-hidden="true"
              ></i>
            </li>
            <li class="ml-50">
              <i
                class="fa fa-qq"
                aria-hidden="true"
              ></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="header-wraper">
      <header class="heaer-top">
        <div class="header-logo">
          <img
            src="~assets/logo.png"
            alt="logo"
          />
        </div>
        <div class="heder-right-list">
          <ul class="header-list">
            <li
              class="header-item"
              v-for="(item,index) in headerList"
              :key="index"
            >{{item.name}}</li>
          </ul>
        </div>
      </header>
    </div>
  </div>
</template>
<script>
export default {
    name: 'headers',
    data() {
        return {
            headerList: [
                { name: '网站首页' },
                { name: '网站首页' },
                { name: '网站首页' },
                { name: '网站首页' },
                { name: '网站首页' },
                { name: '网站首页' },
                { name: '人才招聘' },
                { name: '联系我们' }
            ]
        }
    }
}
</script>
<style lang="less">
a {
    color: #333;
}
.header-container {
    //   position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
    background: #fff;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.25);
}

.header-top-wraper {
    border-bottom: 1px solid #eee;
}
.header-top-site {
    width: 1300px;
    height: 40px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    .header-top-left > ul,
    .header-top-right > ul {
        display: flex;
        align-items: center;
    }
}
.header-wraper {
    width: 1300px;
    margin: 0 auto;
    .heaer-top {
        height: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .header-logo {
            width: 300px;
            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
        .heder-right-list {
            height: 100%;
            line-height: 80px;
            .header-list {
                display: flex;
                .header-item {
                    padding: 0 10px;
                    cursor: pointer;
                }
                .header-item:last-child {
                    padding-right: 0;
                }
            }
        }
    }
}
</style>

