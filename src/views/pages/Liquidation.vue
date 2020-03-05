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
                  <Dropdown-item>
                    <p style="color: #515a6e">强平订单</p>
                  </Dropdown-item>
                  <Dropdown-item>
                    <router-link to="/datation"
                      ><p style="color: #515a6e">合约数据</p></router-link
                    ></Dropdown-item
                  >
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
                <p>强平订单</p>
              </div>
              <div class="order-type-btn-wrap">
                <a class="btn-selected" href="/zh-cn/contract/info/?tab=0"></a
                ><a class="" href="/zh-cn/swap/info/?tab=0"></a>
              </div>
            </div>
          </div>
          <div class="center-page content-background">
            <div class="force-order">
              <div class="content-box-title force-order-header">
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
                      <li class="text-ellipsis center-page-select-item">BTC</li>
                      <li class="text-ellipsis center-page-select-item">ETC</li>
                      <li class="text-ellipsis center-page-select-item">ETH</li>
                      <li class="text-ellipsis center-page-select-item">EOS</li>
                      <li class="text-ellipsis center-page-select-item">LTC</li>
                      <li class="text-ellipsis center-page-select-item">BCH</li>
                      <li class="text-ellipsis center-page-select-item">XRP</li>
                      <li class="text-ellipsis center-page-select-item">TRX</li>
                      <li class="text-ellipsis center-page-select-item">BSV</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <span class="center-page-select-title">交易类型</span>
                  <div
                    tabindex="0"
                    class="select-white center-page-select-root "
                    style="width: 120px;"
                  >
                    <div class="select-value-box">
                      <span class="select-value  " title="全部">全部</span
                      ><i class="select-arrow undefined  "></i>
                    </div>
                    <ul class="select-list scroll-style-white undefined ">
                      <li class="text-ellipsis "><span>全部</span></li>
                      <li class="text-ellipsis "><span>买入平空</span></li>
                      <li class="text-ellipsis "><span>卖出平多</span></li>
                    </ul>
                  </div>
                </div>
                <div>
                  <span class="center-page-select-title">时间周期</span>
                  <div
                    tabindex="0"
                    class="select-white center-page-select-root "
                    style="width: 120px;"
                  >
                    <div class="select-value-box">
                      <span class="select-value  " title="最近7天">最近7天</span
                      ><i class="select-arrow undefined  "></i>
                    </div>
                    <ul class="select-list scroll-style-white undefined ">
                      <li class="text-ellipsis "><span>最近7天</span></li>
                      <li class="text-ellipsis "><span>最近3个月</span></li>
                    </ul>
                  </div>
                </div>
                <div style="margin-left: auto;">
                  <button
                    class="blue-button query-button"
                    style="margin-top: 0px;"
                  >
                    查找
                  </button>
                </div>
              </div>
              <div class="center-page-table-wrap" style="padding-bottom: 0px;">
                <table>
                  <tr class="table-head-line">
                    <th width="200px">合约</th>
                    <th width="200px">强平时间</th>
                    <th width="200px">交易类型</th>
                    <th width="200px">破产价格(USD)</th>
                    <th width="200px">强平数量(张)</th>
                  </tr>
                  <tr class="table-body-line force-order-table-line">
                    <td>ETC0306</td>
                    <td>2020-03-04 07:32:27</td>
                    <td class="green-font">买入平空</td>
                    <td>8.799</td>
                    <td>353</td>
                  </tr>
                  <tr class="table-body-line force-order-table-line">
                    <td>ETC0327</td>
                    <td>2020-03-04 07:31:41</td>
                    <td class="green-font">买入平空</td>
                    <td>8.853</td>
                    <td>11</td>
                  </tr>
                  <tr class="table-body-line force-order-table-line">
                    <td>ETC0327</td>
                    <td>2020-03-04 07:31:34</td>
                    <td class="green-font">买入平空</td>
                    <td>8.851</td>
                    <td>37</td>
                  </tr>
                  <tr class="table-body-line force-order-table-line">
                    <td>ETC0327</td>
                    <td>2020-03-04 07:31:10</td>
                    <td class="green-font">买入平空</td>
                    <td>8.837</td>
                    <td>198</td>
                  </tr>
                  <tr class="table-body-line force-order-table-line">
                    <td>ETC0327</td>
                    <td>2020-03-04 07:30:46</td>
                    <td class="green-font">买入平空</td>
                    <td>8.815</td>
                    <td>124</td>
                  </tr>
                  <tr class="table-body-line force-order-table-line">
                    <td>ETC0313</td>
                    <td>2020-03-04 07:30:45</td>
                    <td class="green-font">买入平空</td>
                    <td>8.764</td>
                    <td>45</td>
                  </tr>
                  <tr class="table-body-line force-order-table-line">
                    <td>ETC0327</td>
                    <td>2020-03-04 07:30:31</td>
                    <td class="green-font">买入平空</td>
                    <td>8.799</td>
                    <td>337</td>
                  </tr>
                  <tr class="table-body-line force-order-table-line">
                    <td>ETC0327</td>
                    <td>2020-03-04 07:30:20</td>
                    <td class="green-font">买入平空</td>
                    <td>8.788</td>
                    <td>4</td>
                  </tr>
                  <tr class="table-body-line force-order-table-line">
                    <td>ETC0306</td>
                    <td>2020-03-04 07:30:05</td>
                    <td class="green-font">买入平空</td>
                    <td>8.744</td>
                    <td>9283</td>
                  </tr>
                  <tr class="table-body-line force-order-table-line">
                    <td>ETC0327</td>
                    <td>2020-03-04 07:29:51</td>
                    <td class="green-font">买入平空</td>
                    <td>8.77</td>
                    <td>9</td>
                  </tr>
                </table>
              </div>
              <div class="pagination pagination-root secondary-font">
                <span style="margin-right: 8px;">1/127</span
                ><button
                  disabled=""
                  class="border-input pagination-arrow pagination-button"
                >
                  <span class="arrow arrow-pre border-secondary"></span></button
                ><button
                  class="border-input pagination-arrow pagination-button"
                >
                  <span
                    class="arrow arrow-next border-secondary"
                  ></span></button
                ><span style="margin-left: 8px;">第</span
                ><input class="input pagination-input" value="" /><span
                  style="margin-right: 8px;"
                  >页</span
                ><button
                  disabled=""
                  class="pagination-confirm blue-background pagination-button"
                >
                  确定
                </button>
              </div>
            </div>
          </div>
        </div>
        <div style="width:100px;height:100px; border:1px solid red">
          <router-link to="/transac">测试</router-link>
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
