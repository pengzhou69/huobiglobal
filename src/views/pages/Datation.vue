<template>
  <div>
    <div
      class="root-white"
      style="position: absolute; overflow: hidden; width: 100%; height: 100%;"
    >
      <div
        style="position: absolute;top: 0px;left: 0px;right: 0px;bottom: 0px;overflow: scroll;margin-right: -17px;margin-bottom: -17px"
      >
        <header class="header-white">
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
                    src="../../assets/fb0c4e3.svg"
                    alt="全球站"
                    width="146"
                    height="22"
                /></a>
              </h1>
            </MenuItem>
            <MenuItem name="1" to="/contracttransaction">
              合约交易
            </MenuItem>
            <MenuItem name="5" to="/quotation">
              行情
            </MenuItem>
            <MenuItem name="4" to="">
              <Dropdown id="listone-4">
                <a href="javascript:void(0)">
                  合约信息
                </a>
                <Dropdown-menu slot="list">
                  <Dropdown-item
                    ><router-link to="/liquidation">
                      <p style="color: #515a6e">强平订单</p>
                    </router-link></Dropdown-item
                  >
                  <Dropdown-item>
                    <p style="color: #515a6e">合约数据</p>
                  </Dropdown-item>
                  <Dropdown-item
                    ><router-link to="/fund-data"
                      ><p style="color: #515a6e">风险准备金</p></router-link
                    ></Dropdown-item
                  >
                  <Dropdown-item
                    ><router-link to="/settlement"
                      ><p style="color: #515a6e">交割结算记录</p></router-link
                    ></Dropdown-item
                  >
                  <Dropdown-item
                    ><a
                      href="//support.huobiservice.com/hc/zh-cn/articles/360000113102"
                      target="_blank"
                      ><p style="color: #515a6e">合约介绍</p></a
                    ></Dropdown-item
                  >
                </Dropdown-menu>
              </Dropdown>
            </MenuItem>
            <MenuItem name="4" to="">
              <Dropdown id="listone-5">
                <a href="javascript:void(0)">
                  API
                </a>
                <Dropdown-menu slot="list">
                  <Dropdown-item
                    ><a
                      href="//support.huobiservice.com/hc/zh-cn/articles/360000188382"
                      target="_blank"
                      ><p style="color: #515a6e">API接入</p></a
                    ></Dropdown-item
                  >
                  <Dropdown-item
                    ><a
                      href="//huobiapi.github.io/docs/dm/v1/cn/#5ea2e0cde2"
                      target="_blank"
                      ><p style="color: #515a6e">API文档</p></a
                    ></Dropdown-item
                  >
                </Dropdown-menu>
              </Dropdown>
            </MenuItem>
            <MenuItem name="2" to="/fbtransaction">
              法币交易
            </MenuItem>
            <MenuItem name="3" to="/cointrading">
              币币交易
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
                          <img src="../../assets/2222.jpg" alt="" />
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
        </header>
        <div class="contract-info">
          <div class="center-info-header">
            <div class="data-center-header-wrapped">
              <div class="data-center-header-wrapped-title">
                <img
                  src="..//../assets/contract-info.ea49bc5b.svg"
                  alt="data-center-title-svg"
                />
                <p>合约数据</p>
              </div>
              <div class="order-type-btn-wrap">
                <a class="btn-selected" href="/zh-cn/contract/info/?tab=0"></a
                ><a class="" href="/zh-cn/swap/info/?tab=0"></a>
              </div>
            </div>
          </div>
          <div class="center-page content-background">
            <div class="position-volume-w">
              <div class="content-box-title position-volume-w-header">
                <div>
                  <span class="center-page-select-title">品种</span>
                  <div
                    tabindex="0"
                    class="select-white center-page-select-root "
                  >
                    <div class="select-value-box">
                      <span class="select-value  " title="ETC">ETC</span
                      ><i class="select-arrow undefined  "></i>
                    </div>
                    <ul class="select-list scroll-style-white undefined ">
                      <li class="text-ellipsis center-page-select-item">
                        BTC
                      </li>
                      <li class="text-ellipsis center-page-select-item">
                        ETC
                      </li>
                      <li class="text-ellipsis center-page-select-item">
                        ETH
                      </li>
                      <li class="text-ellipsis center-page-select-item">
                        EOS
                      </li>
                      <li class="text-ellipsis center-page-select-item">
                        LTC
                      </li>
                      <li class="text-ellipsis center-page-select-item">
                        BCH
                      </li>
                      <li class="text-ellipsis center-page-select-item">
                        XRP
                      </li>
                      <li class="text-ellipsis center-page-select-item">
                        TRX
                      </li>
                      <li class="text-ellipsis center-page-select-item">
                        BSV
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="position-volume-chart">
                <p class="trend-chart-title"><span>平台持仓量</span></p>
                <div
                  _echarts_instance_="ec_1583291233897"
                  style="height: 550px; -webkit-tap-highlight-color: transparent; user-select: none; position: relative;"
                >
                  <div
                    style="position: relative; overflow: hidden; width: 1200px; height: 550px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;"
                  >
                    <canvas
                      data-zr-dom-id="zr_0"
                      width="1500"
                      height="687"
                      style="position: absolute; left: 0px; top: 0px; width: 1200px; height: 550px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"
                    ></canvas>
                  </div>
                </div>
                <div class="position-volume-chart-select">
                  <span class="center-page-select-title">时间周期</span>
                  <div
                    tabindex="0"
                    class="select-white center-page-select-root "
                  >
                    <div class="select-value-box">
                      <span class="select-value  " title="1H">1H</span
                      ><i class="select-arrow undefined  "></i>
                    </div>
                    <ul class="select-list scroll-style-white undefined ">
                      <li class="text-ellipsis center-page-select-item">1H</li>
                      <li class="text-ellipsis center-page-select-item">4H</li>
                      <li class="text-ellipsis center-page-select-item">12H</li>
                      <li class="text-ellipsis center-page-select-item">1D</li>
                    </ul>
                  </div>
                  <span class="center-page-select-title">单位</span>
                  <div
                    tabindex="0"
                    class="select-white center-page-select-root "
                  >
                    <div class="select-value-box">
                      <span class="select-value  " title="张">张</span
                      ><i class="select-arrow undefined  "></i>
                    </div>
                    <ul class="select-list scroll-style-white undefined ">
                      <li class="text-ellipsis center-page-select-item">张</li>
                      <li class="text-ellipsis center-page-select-item">ETC</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>
<script>
import Cardone from "../Cardone";
import Footer from "../Footer";
export default {
  name: "Liquidation",
  data() {
    return {
      theme1: "dark",
      isCard: false
    };
  },
  components: {
    Cardone,
    Footer
  },

  methods: {
    clickFn(index) {
      this.tabIndex = index;
    },
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
#listone-4 #listone-5 .link,
a {
  color: rgba(255, 255, 255, 0.7);
}
#listone-4 #listone-5 .link,
a:hover {
  color: #fff;
}
#listone-4 .ivu-select-dropdown {
  margin: 5px -25px;
}
#listone-5 .ivu-select-dropdown {
  margin: 5px -40px;
}
.header-white {
  height: auto;
  padding: 0;
  width: 100%;
  display: block;
}
</style>
