<template>
  <div class="head" id="head">
    <Menu mode="horizontal" :theme="theme1" active-name="1">
      <MenuItem name="100">
        <div style="padding: 4px 3px;">
          <div
            class="fedui-header-left"
            @mouseenter="enter()"
            @mouseleave="leave()"
          >
            <div class="fedui-header-group">
              <div class="fedui-header-group-inner">
                <i class="fedui-header-group-icon fedui-theme-text"></i>
              </div>
            </div>
          </div>
        </div>
      </MenuItem>

      <MenuItem name="11">
        <h1 class="fedui-header-logo" style="margin-top:13px">
          <a href="javascript:;"
            ><img
              src="../assets/fb0c4e3.svg"
              alt="全球站"
              width="146"
              height="22"
          /></a>
        </h1>
      </MenuItem>
      <MenuItem name="1" to="/quotation">
        行情
      </MenuItem>
      <MenuItem name="2" to="/fbtransaction">
        法币交易
      </MenuItem>
      <MenuItem name="3" to="/cointrading">
        币币交易
      </MenuItem>
      <MenuItem name="4" to="/cross-margin">
        杠杆交易
      </MenuItem>
      <MenuItem name="5" id="choseA">
        <!-- <a href="#contracttransaction" target="_black"></a> -->
        <router-link to="/contracttransaction" target="_blank"
          ><p>合约交易</p></router-link
        >
      </MenuItem>
      <MenuItem name="6" class="menus_changjiang" to="/college">
        成长学院
      </MenuItem>

      <div id="menus" style="float:right;">
        <div class="DengLU" style="float:left">
          <router-link to="/pzhcs">登录</router-link>
        </div>
        <MenuItem name="6">
          <Button type="primary" size="small" ghost>
            <router-link to="/zcdl">注册</router-link>
          </Button>
          <div class="PPD" style="float:right">
            <Dropdown id="PPD_1">
              <div class="DDD">
                <a href="javascript:void(0)">
                  下载
                </a>
              </div>

              <DropdownMenu slot="list">
                <DropdownItem>
                  <div class="fedui-download">
                    <img src="../assets/2222.jpg" alt="" />
                  </div>
                  <div class="fedui-header-download-qrtext">
                    <p>扫码下载 APP</p>
                    <p><strong>iOS &amp; Android</strong></p>
                    <div class="PPPP">
                      <a href="javascript:;">
                        查看全部 <i class="fedui-icon-youjiantou"></i
                      ></a>
                    </div>
                  </div>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </MenuItem>

        <Submenu name="36">
          <template slot="title">简体中文</template>
          <a class="menus" href="#">English</a
          ><a class="menus active" href="#">简体中文</a>
          <a class="menus" href="#">繁體中文</a
          ><a class="menus" href="#">한국어</a
          ><a href="#" class="menus">Русский</a>
          <a href="#" class="menus">Deutsch</a>
          <a href="#" class="menus">Français</a
          ><a href="#" class="menus">Español</a
          ><a href="#" class="menus">Türkçe</a
          ><a href="#" class="menus">Tiếng Việt</a
          ><a href="#" class="menus">Português-PT</a>
          <a href="#" class="menus">Português-BR</a>
        </Submenu>
      </div>
    </Menu>
    <transition name="DT">
      <Cardone :open="isCard" @mouseleave="leave" @mouseenter="enter">
        <div class="fedui">
          <dl class="fedui-header-group-left" style="float:left">
            <dt>交易所</dt>
            <dd><a data-type="global" href="/zh-cn/">火币全球站</a></dd>
            <dd>
              <a
                data-type="kr"
                rel="noopener noreferrer nofollow"
                href="javascript:;"
                >火币韩国</a
              >
            </dd>
            <dd>
              <a
                data-type="mena"
                rel="noopener noreferrer nofollow"
                href="javascript:;"
                >火币中东</a
              >
            </dd>
          </dl>
          <dl class="fedui-header-group-right" style="float:left">
            <dt class="fedui-line-1">集团生态服务</dt>
            <dd>
              <a
                href="javascript:;"
                rel="noopener noreferrer nofollow"
                data-type="info"
                >火币资讯</a
              >
            </dd>
            <dd>
              <a
                href="javascript:;"
                rel="noopener noreferrer nofollow"
                data-type="pow"
                >火币矿池</a
              >
            </dd>
            <dd>
              <a
                rel="noopener noreferrer nofollow"
                data-type="chat"
                href="javascript:;"
                >火信</a
              >
            </dd>
            <dd>
              <a
                data-type="wallet"
                rel="noopener noreferrer nofollow"
                href="javascript:;"
                >火币钱包</a
              >
            </dd>
            <dd>
              <a
                href="javascript:;"
                data-type="cn"
                rel="noopener noreferrer nofollow"
                >火币中国</a
              >
            </dd>
            <dd>
              <a data-type="capital" href="javascript:;">火币资本</a>
            </dd>
            <dd>
              <a href="javascript:;" data-type="eco" class=""
                >火币全球生态基金</a
              >
            </dd>
            <dd>
              <a
                data-type="cloud"
                rel="noopener noreferrer nofollow"
                href="javascript:;"
                >火币云</a
              >
            </dd>
          </dl>
        </div>
      </Cardone>
    </transition>
  </div>
</template>

<script>
import Cardone from "./Cardone";
export default {
  name: "Head",
  components: {
    Cardone
  },
  data() {
    return {
      theme1: "dark",
      isCard: false,
      languageArr: [
        { name: "English", tag: "en" },
        { name: "简体中文", tag: "ch" }
      ]
    };
  },
  methods: {
    enter() {
      this.isCard = true;
    },
    leave() {
      this.isCard = false;
    }
  }
};
</script>
<style>
.head .ivu-menu-horizontal {
  height: 48px;
  line-height: 48px;
}
.fedui-header-logo {
  padding-left: 7px;
  height: 48px;
}
.fedui-header-logo img {
  vertical-align: middle;
}
.demo-carousel {
  height: 400px;
  background: center;
  background-size: auto 130%;
}
.banner {
  position: relative;
  top: -48px;
}
#head .ivu-menu-dark {
  background: rgba(0, 0, 0, 0.15);
  border-bottom-color: transparent;
}

a.menus {
  font-size: 14px;
  width: 150px;
  height: 40px;
  line-height: 40px;
  padding-left: 24px;
  color: #1c242c;
  vertical-align: top;
  float: left;
}
a.active {
  background-color: rgba(242, 246, 250, 0.7);
  color: #357ce1;
}
a.menus:hover {
  background-color: rgba(242, 246, 250, 0.7);
  color: #357ce1;
}
.ivu-select-dropdown {
  right: 20px;
}
.ivu-menu-horizontal .ivu-menu-submenu .ivu-select-dropdown .ivu-menu-item {
  clear: none;
}
.MenuLi {
  display: inline-block;
}
.ivu-menu-horizontal .ivu-menu-submenu .ivu-select-dropdown {
  transform-origin: center top;
  min-width: 121.475px;
  width: 285px;
  padding: 10px;
}
.menus_changjiang::after {
  content: "";
  position: absolute;
  right: -6px;
  top: 11px;
  width: 20px;
  height: 11px;
  background: url("../assets/123.png") no-repeat 50%/20px 11px;
}
.pur-back .pur-center[data-v-73bf8b65] {
  margin: -48px 0;
}
.ivu-select-single .ivu-select-selection {
  height: 36px;
}
.ivu-select-single .ivu-select-selection .ivu-select-placeholder,
.ivu-select-single .ivu-select-selection .ivu-select-selected-value {
  padding-right: 40px;
}
.ivu-select-prefix i {
  margin: 10px 12px;
}
#head .ivu-input {
  height: 36px;
}
.ivu-btn-ghost.ivu-btn-primary {
  height: 28px;
  width: 60px;
  font-size: 14px;
  white-space: nowrap;
  cursor: pointer;
  border-radius: 4px;
  color: #b0b8db;
}
.ivu-btn-ghost.ivu-btn-primary:hover {
  background-color: #357ce1;
  color: #fff;
}
.DengLU a {
  color: #b0b8db;
}
.DengLU a:hover {
  color: #fff;
}
.PPD a {
  margin: 0px 30px;
  color: #b0b8db;
}
.PPD a:hover {
  color: #fff;
}
#menus .fedui-header-download-qrtext:before {
  left: 147px;
}
.ivu-icon-ios-arrow-down:before {
  content: "";
}
.fedui-header-group-icon {
  width: 26px;
  left: 3px;
  -webkit-transform: translateY(15px);
  transform: translateY(15px);
}
.fedui-header-group-inner {
  cursor: pointer;
  width: 32px;
  height: 0px;
  padding-left: 3px;
  padding-right: 3px;
  text-align: center;
  margin: 4px -7px;
}
.DTDO {
  margin-left: -26px;
}
.DTDO .ivu-select-dropdown {
  border: 3px solid green;
  margin-left: 12px;
  margin-top: -5px;
  width: 500px;
}
.DTDO .ivu-menu-light {
  background-color: transparent;
}
.DTDO .ivu-menu-horizontal.ivu-menu-light:after {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background: transparent;
  position: absolute;
  bottom: 0;
  left: 0;
}
.DTDO .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active,
.DTDO .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover,
.DTDO .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active,
.DTDO .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover {
  color: #2d8cf0;
  border-bottom: 0px solid #2d8cf0;
}
.DTDO3:before {
  content: "";
  position: absolute;
  left: 50%;
  margin-top: -10px;
  background: #e5ebf5;
  height: 100%;
  width: 1px;
  overflow: hidden;
}
#menus .ivu-select-dropdown {
  width: 320px;
}
.ivn-dropdown.ivu-select-dropdown {
  width: 278px;
}
.lang_group {
  display: inline-block;
  width: 45%;
  margin: 0 5px;
}
.fedui {
  /* position: absolute; */
  left: 0;
  top: 36px;
  background-color: #fff;
  -webkit-box-shadow: 0 0 20px 0 rgba(28, 36, 44, 0.12);
  box-shadow: 0 0 20px 0 rgba(28, 36, 44, 0.12);
  border-radius: 2px;
  width: 600px;
}
#head .ivu-menu-horizontal .ivu-menu-item,
#head .ivu-menu-horizontal .ivu-menu-submenu {
  padding: 0px 14px;
}
#head .fedui-header-download {
  width: 106px;
  height: 106px;
  float: left;
  overflow: hidden;
  border: 1px solid red;
  margin-left: -11px;
  padding-left: 16px;
  margin-top: -6px;
  text-align: center;
  position: relative;
}
#head .fedui-header-download::before {
  content: "";
  position: absolute;
  overflow: hidden;
  left: 0;
  top: 0%;
  margin-top: 0px;
  background: transparent;
  height: 0px;
  width: 0px;
}
.fedui-header-download-qrtext p {
  text-indent: 66px;
}
.fedui-header-download-qrtext::before {
  content: "";
  position: absolute;
  left: 124px;
  top: 50%;
  top: 0;
  background: rgba(97, 105, 138, 0.3);
  height: 120px;
  width: 1px;
  overflow: hidden;
}
.fedui-header-download-qrtext a {
  margin-left: 67px;
}
.fedui-download {
  width: 100px;
  height: 100px;
  float: left;
  overflow: hidden;
}
.ivu-dropdown-item {
  padding: 8px 9px;
}
#choseA p:hover {
  color: #fff;
}
#choseA p {
  color: rgba(255, 255, 255, 0.7);
}
.DT-enter-active {
  animation: run 0.3s;
}
.DT-leave-active {
  animation: run 0.3s reverse;
}
@keyframes run {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
