<template>
  <div class="container-fluid">
    <div class="header-top-wraper">
      <b-container>
        <b-row class="justify-content-sm-center  ">
          <b-col
            :xl="6"
            :lg="6"
            :md="6"
            :sm="12"
          >
            <div class="header-top-left">
              <a
                href=“”
                class="mr-20"
              >
                <i
                  class="fa fa-phone"
                  aria-hidden="true"
                ></i>
                <span>15984444555</span>
              </a>
              <a href=“”>
                <i
                  class="fa fa-envelope-o"
                  aria-hidden="true"
                ></i>
                <span>1598444455566</span>
              </a>
            </div>
          </b-col>
          <b-col
            :xl="6"
            :lg="6"
            :md="6"
            :sm="6"
          >
            <div class="header-top-right">
              <span class="mr-50">
                <i
                  class="fa fa-weixin"
                  aria-hidden="true"
                ></i></span>
              <span>
                <i
                  class="fa fa-qq"
                  aria-hidden="true"
                ></i>
              </span>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <!-- <div class="">
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
    </div> -->
    <b-container>
      <b-navbar toggleable="lg">
        <b-navbar-brand href="#">
          logo
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse
          id="nav-collapse"
          is-nav
        >
          <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown
              right
              v-for="(item,index) in headerList"
              :key="index"
            >
              <template v-slot:button-content>
                <span>{{item.name}}</span>
              </template>
              <b-dropdown-item
                :href="subItem.href"
                v-for="(subItem,subKey) in item.subItem"
                :key="subKey"
              >{{subItem.subName}}</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>

        </b-collapse>
      </b-navbar>
    </b-container>
  </div>
</template>
<script>
export default {
    name: 'headers',
    data() {
        return {
            headerList: [
                {
                    name: '网站首页',
                    subItem: [{ subName: 'ttttt', href: 'www.baidu.com' }]
                },
                {
                    name: '产品介绍',
                    subItem: [{ subName: 'iiii', href: 'www.baidu.com' }]
                },
                {
                    name: '网站首页',
                    subItem: [{ subName: '3333', href: 'www.baidu.com' }]
                },
                { name: '网站首页' },
                { name: '人才招聘' },
                { name: '联系我们' }
            ]
        }
    }
}
</script>
<style lang="less" scoped>
a {
    color: #333;
}

/deep/.navbar-dark .navbar-nav .nav-link {
    color: #333;
}

.navbar {
    padding: 0.5rem 0;
}

.header-container {
    top: 0;
    width: 100%;
    z-index: 999;
    background: #fff;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.25);
}

.header-top-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.header-top-wraper {
    line-height: 40px;
    border-bottom: 1px solid #eee;
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

