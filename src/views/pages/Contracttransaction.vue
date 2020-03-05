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
              <Dropdown id="listone-2">
                <a href="javascript:void(0)">
                  合约信息
                </a>
                <Dropdown-menu slot="list">
                  <Dropdown-item
                    ><router-link to="/liquidation"
                      ><p style="color: #515a6e">强平订单</p></router-link
                    ></Dropdown-item
                  >
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
              <Dropdown id="listone-3">
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

        <div class="trade">
          <div class="outer-left-wrap">
            <div class="contract content-box contract-white contract-nologin">
              <div
                class="content-box-title contract-data-title contract-title secondary-font"
              >
                <div class="title-item-not-login">
                  <router-link to="/pzhcs"
                    ><span style="color: #357ce1">登录</span></router-link
                  >
                  &nbsp;或&nbsp;<router-link to="/zcdl"
                    ><span style="color: #357ce1">注册</span></router-link
                  >&nbsp;开始交易
                </div>
              </div>
              <div class="contract-search-wrap">
                <button class="secondary-font btn-hover self_select ">
                  <i class="windows icon-star icon"></i
                  ><span>自选</span></button
                ><button class="secondary-font btn-hover all active">
                  <span>全部</span></button
                ><button class="secondary-font btn-hover this_week ">
                  <span>当周</span></button
                ><button class="secondary-font btn-hover next_week ">
                  <span>次周</span></button
                ><button class="secondary-font btn-hover quarter ">
                  <span>季度</span>
                </button>
              </div>
              <div class="search-box">
                <div class="search-input secondary-font">
                  <a class="icon-search icon"></a
                  ><input
                    type="text"
                    class="search-input-item input main-list-font"
                    placeholder="搜索"
                    value=""
                  /><a class="icon-error icon" style="display: none;"></a>
                </div>
                <span class="title-converted secondary-font-hover"
                  ><i class="icon-switch"></i
                  ><b style="vertical-align: top;">CNY</b></span
                >
              </div>
              <div class="contract-list-title secondary-font">
                <div class="contract-code-item">
                  <div>
                    <span class="title-span">合约</span>
                    <div class="sort">
                      <i class="sort-up"></i><i class="sort-down"></i>
                    </div>
                  </div>
                </div>
                <div class="last-price-item">
                  <span class="title-span">最新价</span>
                  <div class="sort">
                    <i class="sort-up"></i><i class="sort-down"></i>
                  </div>
                </div>
                <div class="upper-lower-percent-item right">
                  <span class="title-span">涨跌幅</span>
                  <div class="sort">
                    <i class="sort-up"></i><i class="sort-down"></i>
                  </div>
                </div>
              </div>
              <div
                class="trade-contract-list-wrap  scroll-style"
                style="margin-right: 2px;"
              >
                <dl class="trade-contract-list main-font">
                  <dt>
                    <span class="border-blue sign-wrap">BTC</span
                    ><span class="red-font"></span>
                  </dt>
                  <dd
                    data-type="BTC_CW"
                    class="list-item-hover main-list-font "
                  >
                    <i class="white  windows icon icon-star"></i
                    ><span
                      title="BTC0306·当周"
                      class="contract-code-item number-font"
                      >BTC0306·当周</span
                    ><span class="last-price-item number-font">8,828.06</span
                    ><span
                      class="upper-lower-percent-item number-font right red-font"
                      >-0.23%</span
                    >
                  </dd>
                  <dd
                    data-type="BTC_NW"
                    class="list-item-hover main-list-font "
                  >
                    <i class="white  windows icon icon-star"></i
                    ><span
                      title="BTC0313·次周"
                      class="contract-code-item number-font"
                      >BTC0313·次周</span
                    ><span class="last-price-item number-font">8,845.82</span
                    ><span
                      class="upper-lower-percent-item number-font right red-font"
                      >-0.42%</span
                    >
                  </dd>
                  <dd
                    data-type="BTC_CQ"
                    class="list-item-hover main-list-font list-item-hover-background"
                  >
                    <i class="white  windows icon icon-star"></i
                    ><span
                      title="BTC0327·季度"
                      class="contract-code-item number-font"
                      >BTC0327·季度</span
                    ><span class="last-price-item number-font">8,925.72</span
                    ><span
                      class="upper-lower-percent-item number-font right red-font"
                      >-0.25%</span
                    >
                  </dd>
                </dl>
                <dl class="trade-contract-list main-font">
                  <dt>
                    <span class="border-blue sign-wrap"
                      >ETC<i
                        class="icon-new-tag"
                        style="margin-left: 12px;"
                      ></i></span
                    ><span class="red-font"></span>
                  </dt>
                  <dd
                    data-type="ETC_CW"
                    class="list-item-hover main-list-font "
                  >
                    <i class="white  windows icon icon-star"></i
                    ><span
                      title="ETC0306·当周"
                      class="contract-code-item number-font"
                      >ETC0306·当周</span
                    ><span class="last-price-item number-font">8.345</span
                    ><span
                      class="upper-lower-percent-item number-font right green-font"
                      >+1.22%</span
                    >
                  </dd>
                  <dd
                    data-type="ETC_NW"
                    class="list-item-hover main-list-font "
                  >
                    <i class="white  windows icon icon-star"></i
                    ><span
                      title="ETC0313·次周"
                      class="contract-code-item number-font"
                      >ETC0313·次周</span
                    ><span class="last-price-item number-font">8.345</span
                    ><span
                      class="upper-lower-percent-item number-font right green-font"
                      >+1.20%</span
                    >
                  </dd>
                  <dd
                    data-type="ETC_CQ"
                    class="list-item-hover main-list-font "
                  >
                    <i class="white  windows icon icon-star"></i
                    ><span
                      title="ETC0327·季度"
                      class="contract-code-item number-font"
                      >ETC0327·季度</span
                    ><span class="last-price-item number-font">8.367</span
                    ><span
                      class="upper-lower-percent-item number-font right green-font"
                      >+0.71%</span
                    >
                  </dd>
                </dl>
                <dl class="trade-contract-list main-font">
                  <dt>
                    <span class="border-blue sign-wrap">ETH</span
                    ><span class="red-font"></span>
                  </dt>
                  <dd
                    data-type="ETH_CW"
                    class="list-item-hover main-list-font "
                  >
                    <i class="white  windows icon icon-star"></i
                    ><span
                      title="ETH0306·当周"
                      class="contract-code-item number-font"
                      >ETH0306·当周</span
                    ><span class="last-price-item number-font">229.450</span
                    ><span
                      class="upper-lower-percent-item number-font right green-font"
                      >+0.18%</span
                    >
                  </dd>
                  <dd
                    data-type="ETH_NW"
                    class="list-item-hover main-list-font "
                  >
                    <i class="white  windows icon icon-star"></i
                    ><span
                      title="ETH0313·次周"
                      class="contract-code-item number-font"
                      >ETH0313·次周</span
                    ><span class="last-price-item number-font">230.344</span
                    ><span
                      class="upper-lower-percent-item number-font right green-font"
                      >+0.12%</span
                    >
                  </dd>
                  <dd
                    data-type="ETH_CQ"
                    class="list-item-hover main-list-font "
                  >
                    <i class="white  windows icon icon-star"></i
                    ><span
                      title="ETH0327·季度"
                      class="contract-code-item number-font"
                      >ETH0327·季度</span
                    ><span class="last-price-item number-font">232.243</span
                    ><span
                      class="upper-lower-percent-item number-font right green-font"
                      >+0.12%</span
                    >
                  </dd>
                </dl>
                <dl class="trade-contract-list main-font">
                  <dt>
                    <span class="border-blue sign-wrap">EOS</span
                    ><span class="red-font"></span>
                  </dt>
                  <dd
                    data-type="EOS_CW"
                    class="list-item-hover main-list-font "
                  >
                    <i class="white  windows icon icon-star"></i
                    ><span
                      title="EOS0306·当周"
                      class="contract-code-item number-font"
                      >EOS0306·当周</span
                    ><span class="last-price-item number-font">3.666</span
                    ><span
                      class="upper-lower-percent-item number-font right red-font"
                      >-0.73%</span
                    >
                  </dd>
                  <dd
                    data-type="EOS_NW"
                    class="list-item-hover main-list-font "
                  >
                    <i class="white  windows icon icon-star"></i
                    ><span
                      title="EOS0313·次周"
                      class="contract-code-item number-font"
                      >EOS0313·次周</span
                    ><span class="last-price-item number-font">3.675</span
                    ><span
                      class="upper-lower-percent-item number-font right red-font"
                      >-0.83%</span
                    >
                  </dd>
                  <dd
                    data-type="EOS_CQ"
                    class="list-item-hover main-list-font "
                  >
                    <i class="white  windows icon icon-star"></i
                    ><span
                      title="EOS0327·季度"
                      class="contract-code-item number-font"
                      >EOS0327·季度</span
                    ><span class="last-price-item number-font">3.708</span
                    ><span
                      class="upper-lower-percent-item number-font right red-font"
                      >-0.88%</span
                    >
                  </dd>
                </dl>
                <dl class="trade-contract-list main-font">
                  <dt>
                    <span class="border-blue sign-wrap">LTC</span
                    ><span class="red-font"></span>
                  </dt>
                  <dd
                    data-type="LTC_CW"
                    class="list-item-hover main-list-font "
                  >
                    <i class="white  windows icon icon-star"></i
                    ><span
                      title="LTC0306·当周"
                      class="contract-code-item number-font"
                      >LTC0306·当周</span
                    ><span class="last-price-item number-font">61.336</span
                    ><span
                      class="upper-lower-percent-item number-font right green-font"
                      >+0.99%</span
                    >
                  </dd>
                  <dd
                    data-type="LTC_NW"
                    class="list-item-hover main-list-font "
                  >
                    <i class="white  windows icon icon-star"></i
                    ><span
                      title="LTC0313·次周"
                      class="contract-code-item number-font"
                      >LTC0313·次周</span
                    ><span class="last-price-item number-font">61.550</span
                    ><span
                      class="upper-lower-percent-item number-font right green-font"
                      >+0.90%</span
                    >
                  </dd>
                  <dd
                    data-type="LTC_CQ"
                    class="list-item-hover main-list-font "
                  >
                    <i class="white  windows icon icon-star"></i
                    ><span
                      title="LTC0327·季度"
                      class="contract-code-item number-font"
                      >LTC0327·季度</span
                    ><span class="last-price-item number-font">62.100</span
                    ><span
                      class="upper-lower-percent-item number-font right green-font"
                      >+0.93%</span
                    >
                  </dd>
                </dl>
                <dl class="trade-contract-list main-font">
                  <dt>
                    <span class="border-blue sign-wrap">BCH</span
                    ><span class="red-font"></span>
                  </dt>
                  <dd
                    data-type="BCH_CW"
                    class="list-item-hover main-list-font "
                  >
                    <i class="white  windows icon icon-star"></i
                    ><span
                      title="BCH0306·当周"
                      class="contract-code-item number-font"
                      >BCH0306·当周</span
                    ><span class="last-price-item number-font">332.739</span
                    ><span
                      class="upper-lower-percent-item number-font right green-font"
                      >+0.79%</span
                    >
                  </dd>
                  <dd
                    data-type="BCH_NW"
                    class="list-item-hover main-list-font "
                  >
                    <i class="white  windows icon icon-star"></i
                    ><span
                      title="BCH0313·次周"
                      class="contract-code-item number-font"
                      >BCH0313·次周</span
                    ><span class="last-price-item number-font">333.498</span
                    ><span
                      class="upper-lower-percent-item number-font right green-font"
                      >+0.91%</span
                    >
                  </dd>
                  <dd
                    data-type="BCH_CQ"
                    class="list-item-hover main-list-font "
                  >
                    <i class="white  windows icon icon-star"></i
                    ><span
                      title="BCH0327·季度"
                      class="contract-code-item number-font"
                      >BCH0327·季度</span
                    ><span class="last-price-item number-font">336.418</span
                    ><span
                      class="upper-lower-percent-item number-font right green-font"
                      >+0.67%</span
                    >
                  </dd>
                </dl>
                <dl class="trade-contract-list main-font">
                  <dt>
                    <span class="border-blue sign-wrap">XRP</span
                    ><span class="red-font"></span>
                  </dt>
                  <dd
                    data-type="XRP_CW"
                    class="list-item-hover main-list-font "
                  >
                    <i class="white  windows icon icon-star"></i
                    ><span
                      title="XRP0306·当周"
                      class="contract-code-item number-font"
                      >XRP0306·当周</span
                    ><span class="last-price-item number-font">0.2355</span
                    ><span
                      class="upper-lower-percent-item number-font right red-font"
                      >-1.05%</span
                    >
                  </dd>
                  <dd
                    data-type="XRP_NW"
                    class="list-item-hover main-list-font "
                  >
                    <i class="white  windows icon icon-star"></i
                    ><span
                      title="XRP0313·次周"
                      class="contract-code-item number-font"
                      >XRP0313·次周</span
                    ><span class="last-price-item number-font">0.2359</span
                    ><span
                      class="upper-lower-percent-item number-font right red-font"
                      >-1.09%</span
                    >
                  </dd>
                  <dd
                    data-type="XRP_CQ"
                    class="list-item-hover main-list-font "
                  >
                    <i class="white  windows icon icon-star"></i
                    ><span
                      title="XRP0327·季度"
                      class="contract-code-item number-font"
                      >XRP0327·季度</span
                    ><span class="last-price-item number-font">0.2382</span
                    ><span
                      class="upper-lower-percent-item number-font right red-font"
                      >-0.95%</span
                    >
                  </dd>
                </dl>
                <dl class="trade-contract-list main-font">
                  <dt>
                    <span class="border-blue sign-wrap">TRX</span
                    ><span class="red-font"></span>
                  </dt>
                  <dd
                    data-type="TRX_CW"
                    class="list-item-hover main-list-font "
                  >
                    <i class="white  windows icon icon-star"></i
                    ><span
                      title="TRX0306·当周"
                      class="contract-code-item number-font"
                      >TRX0306·当周</span
                    ><span class="last-price-item number-font">0.01733</span
                    ><span
                      class="upper-lower-percent-item number-font right red-font"
                      >-0.11%</span
                    >
                  </dd>
                  <dd
                    data-type="TRX_NW"
                    class="list-item-hover main-list-font "
                  >
                    <i class="white  windows icon icon-star"></i
                    ><span
                      title="TRX0313·次周"
                      class="contract-code-item number-font"
                      >TRX0313·次周</span
                    ><span class="last-price-item number-font">0.01735</span
                    ><span
                      class="upper-lower-percent-item number-font right red-font"
                      >-0.11%</span
                    >
                  </dd>
                  <dd
                    data-type="TRX_CQ"
                    class="list-item-hover main-list-font "
                  >
                    <i class="white  windows icon icon-star"></i
                    ><span
                      title="TRX0327·季度"
                      class="contract-code-item number-font"
                      >TRX0327·季度</span
                    ><span class="last-price-item number-font">0.01761</span
                    ><span
                      class="upper-lower-percent-item number-font right green-font"
                      >+0.11%</span
                    >
                  </dd>
                </dl>
                <dl class="trade-contract-list main-font">
                  <dt>
                    <span class="border-blue sign-wrap">BSV</span
                    ><span class="red-font"></span>
                  </dt>
                  <dd
                    data-type="BSV_CW"
                    class="list-item-hover main-list-font "
                  >
                    <i class="white  windows icon icon-star"></i
                    ><span
                      title="BSV0306·当周"
                      class="contract-code-item number-font"
                      >BSV0306·当周</span
                    ><span class="last-price-item number-font">251.264</span
                    ><span
                      class="upper-lower-percent-item number-font right green-font"
                      >+3.18%</span
                    >
                  </dd>
                  <dd
                    data-type="BSV_NW"
                    class="list-item-hover main-list-font "
                  >
                    <i class="white  windows icon icon-star"></i
                    ><span
                      title="BSV0313·次周"
                      class="contract-code-item number-font"
                      >BSV0313·次周</span
                    ><span class="last-price-item number-font">252.087</span
                    ><span
                      class="upper-lower-percent-item number-font right green-font"
                      >+3.37%</span
                    >
                  </dd>
                  <dd
                    data-type="BSV_CQ"
                    class="list-item-hover main-list-font "
                  >
                    <i class="white  windows icon icon-star"></i
                    ><span
                      title="BSV0327·季度"
                      class="contract-code-item number-font"
                      >BSV0327·季度</span
                    ><span class="last-price-item number-font">253.754</span
                    ><span
                      class="upper-lower-percent-item number-font right green-font"
                      >+3.05%</span
                    >
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="outer-right-wrap">
            <div
              class="contract-detail contract-detail-white content-box title-background"
            >
              <div class="contract-detail-mask" style="display: none;"></div>
              <div class="contract-detail-optional-box">
                <div class="contract-detail-tap-wrap ">
                  <div class="contract-detail-tap-wrap-content">
                    <span class="contract-detail-tap-wrap-text main-font"
                      >BTC0327·季度</span
                    >
                    <div
                      tabindex="0"
                      class="new-select-white new-select"
                      style="z-index: 3;"
                    >
                      <div class="new-select-arrow-wrapper">
                        <span class="new-select-arrow-line"></span
                        ><span
                          class="new-select-arrow new-select-arrow-rotate-reset"
                        ></span>
                      </div>
                      <ul class="new-select-list " style="width: 196px;">
                        <li><span class="number-font">BTC0306·当周</span></li>
                        <li><span class="number-font">BTC0313·次周</span></li>
                        <li><span class="number-font">BTC0327·季度</span></li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="contract-detail-delivery-price"
                    style="display: none;"
                  >
                    预估交割价(USD)：--
                  </div>
                </div>
                <div class="contract-detail-optional-item number-font">
                  <p class="red-font">8,921.70</p>
                  <p class="secondary-font converted-font-mt3">
                    ≈ 62,342.14 CNY
                  </p>
                </div>
                <div
                  class="contract-detail-optional-item number-font secondary-font"
                >
                  <p>当日涨跌幅</p>
                  <p class="converted-font-mt8 red-font">-0.30%</p>
                </div>
                <div
                  class="contract-detail-optional-item number-font secondary-font"
                >
                  <p>当日最高价</p>
                  <p class="converted-font-mt8 main-list-font">9,080.00</p>
                </div>
                <div
                  class="contract-detail-optional-item number-font secondary-font"
                >
                  <p>当日最低价</p>
                  <p class="converted-font-mt8 main-list-font">8,855.00</p>
                </div>
                <div
                  class="contract-detail-optional-item number-font secondary-font"
                  style="padding-top: 9px;"
                >
                  <div class="tooltip-white tooltip-hover tooltop-show-hover ">
                    <u class="tip-text">24H成交量(张)</u>
                    <div class="tooltip-inner " style="line-height: 20px;">
                      <em class="tooltip-text " style="width: 320px;"
                        >该合约品种当前周期的24H内买卖双边成交量之和</em
                      ><i class="tooltip-arrow "></i>
                    </div>
                  </div>
                  <p class="converted-font main-list-font">36,352,628</p>
                </div>
                <div
                  class="contract-detail-optional-item secondary-font"
                  style="padding-top: 9px;"
                >
                  <div class="tooltip-white tooltip-hover tooltop-show-hover ">
                    <u class="tip-text">持仓量(张)</u>
                    <div class="tooltip-inner " style="line-height: 20px;">
                      <em class="tooltip-text "
                        >该合约下所有未平仓合约的单边数量</em
                      ><i class="tooltip-arrow "></i>
                    </div>
                  </div>
                  <p class="converted-font main-list-font">6,818,585</p>
                </div>
              </div>
              <div class="contract-detail-settlement-tip-1 red-font">
                <span></span>
              </div>
              <div
                class="contract-detail-settlement-tip-2 secondary-font number-font"
              >
                <p>距离交割还有</p>
                <p class="converted-font">24 天</p>
              </div>
            </div>
            <div class="inner-left-wrap">
              <div id="chartOuterWrap" class="content-box ">
                <div class="k-chart-head content-box border-split">
                  <div class="chart-operate">
                    <div class="min-screen secondary-font">
                      <button
                        class="secondary-font btn-hover real-time border-split "
                      >
                        分时
                      </button>
                      <dl class="btn-hover selected">
                        <dt class="secondary-font btn-hover">15m</dt>
                        <dd class="main-font content-box border-split">
                          <p class="btn-hover ">1m</p>
                          <p class="btn-hover ">5m</p>
                          <p class="btn-hover selected">15m</p>
                          <p class="btn-hover ">30m</p>
                        </dd>
                      </dl>
                      <dl class="btn-hover ">
                        <dt class="secondary-font btn-hover">H</dt>
                        <dd class="main-font content-box border-split">
                          <p class="btn-hover ">1H</p>
                          <p class="btn-hover ">4H</p>
                        </dd>
                      </dl>
                      <button
                        class="secondary-font btn-hover min-btn border-split "
                      >
                        1D</button
                      ><button
                        class="secondary-font btn-hover min-btn border-split "
                      >
                        1W</button
                      ><button
                        class="secondary-font btn-hover min-btn border-split "
                      >
                        1M
                      </button>
                    </div>
                    <div class="chart-icon-wrap">
                      <button
                        class="chart-icon-btn chart-screen border-split secondary-font"
                      >
                        <i class="icon-chart-screen"></i>
                        <div class="tip">全屏</div>
                      </button>
                    </div>
                  </div>
                  <div class="switch-operate">
                    <h2 class="btn-selected">基本版</h2>
                    <h2 class="border-input">专业版</h2>
                    <h2 class="border-input">深度图</h2>
                    <div class="theme-wrap" tabindex="0">
                      <i class="icon-theme-switch secondary-font"></i>
                      <ul class="theme-switch-wrap" style="display: none;">
                        <li class="selected">
                          <img
                            src="data:image/png;base64,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"
                            alt="theme0"
                          />
                          <p>白色</p>
                        </li>
                        <li class="">
                          <img
                            src="data:image/png;base64,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"
                            alt="theme1"
                          />
                          <p>深蓝色</p>
                        </li>
                        <li class="">
                          <img
                            src="data:image/png;base64,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"
                            alt="theme2"
                          />
                          <p>黑色</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div id="chartInnerWrap" class="content-background">
                  <div id="kChartBasic">
                    <div
                      tabindex="99999"
                      class="huobi_chart_container"
                      style="width: 960px; height: 486px; background-color: rgb(255, 255, 255);"
                    >
                      <canvas
                        width="1200"
                        height="444"
                        style="top: 0px; width: 960px; height: 355px; display: none;"
                      ></canvas>
                      <p
                        style="top: 10px; color: rgb(145, 148, 164); display: none;"
                      ></p>
                      <canvas
                        width="1200"
                        height="162"
                        style="top: 355.68px; width: 960px; height: 130px; display: none;"
                      ></canvas>
                      <p
                        style="top: 365.68px; color: rgb(145, 148, 164); display: none;"
                      ></p>
                      <canvas
                        width="1200"
                        height="444"
                        style="top: 0px; width: 960px; height: 355px; display: block;"
                      ></canvas>
                      <p
                        style="top: 10px; color: rgb(145, 148, 164); display: block;"
                      >
                        <span>03-03 22:00 </span><span>开:8921.70</span
                        ><span>高:8921.70</span><span>低:8911.87</span
                        ><span>收:8913.99</span><span>量:32350.00</span
                        ><br /><span style="color:#F6DC93">MA5:8907.03</span
                        ><span style="color:#61D1C0">MA10:8938.47</span
                        ><span style="color:#CB92FE">MA30:8929.04</span>
                      </p>
                      <canvas
                        width="1200"
                        height="162"
                        style="top: 355.68px; width: 960px; height: 130px; display: block;"
                      ></canvas>
                      <p
                        style="top: 365.68px; color: rgb(145, 148, 164); display: block;"
                      >
                        <span>量:32350.00</span
                        ><span style="color:#F6DC93">MA20:483318.80</span>
                      </p>
                      <canvas
                        width="1200"
                        height="607"
                        style="top: 0px; width: 960px; height: 486px;"
                      ></canvas>
                    </div>
                  </div>
                </div>
              </div>
              <div class="order-board content-box">
                <div
                  class="content-box-title order-board-title order-board-white-title"
                >
                  <div class="temp-info" style="top: -46px;">
                    <div class="temp-info-root">
                      <i class="icon-new-info"></i>
                      <div class="temp-info-content">
                        合约交易是高风险高收益的投资行为，请仔细阅读交易规则，注意风险。
                      </div>
                      <i class="temp-info-close icon-info-close"></i>
                    </div>
                  </div>
                  <div
                    class="order-board-open-close"
                    style="border:1px solid red;"
                  >
                    <h2 class="tab-order secondary-font">开仓</h2>
                    <h2
                      class="tab-order-selected tab-order-close-selected content-background"
                    >
                      平仓
                    </h2>
                  </div>
                  <div class="order-board-contract-type">BTC0327·季度</div>
                  <div class="order-board-tools-box">
                    <div
                      class="tooltip-white tooltip-hover tooltop-show-hover "
                    >
                      <i
                        class="icon-new-calculator secondary-font-hover-new order-board-calculator"
                      ></i>
                      <div class="tooltip-inner " style="top: -8px;">
                        <em
                          class="tooltip-text "
                          style="right: -15px; width: auto; white-space: nowrap;"
                          >计算器</em
                        ><i class="tooltip-arrow " style="left: 3px;"></i>
                      </div>
                    </div>
                    <div
                      class="tooltip-white tooltip-hover tooltop-show-hover "
                    >
                      <a
                        class="secondary-font-hover-new"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="//support.huobiservice.com/hc/zh-cn/articles/360000113122"
                        ><i class="icon-new-rate"></i
                      ></a>
                      <div class="tooltip-inner " style="top: -8px;">
                        <em
                          class="tooltip-text "
                          style="right: -15px; width: auto; white-space: nowrap;"
                          >费率</em
                        ><i class="tooltip-arrow " style="left: 3px;"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="order-board-contract-code-root">
                  <div class="order-board-content-root-box">
                    <div class="order-board-available">
                      <div class="order-btn-wrap">
                        <input
                          type="button"
                          class="order-type-btn secondary-font order-selected"
                          value="限价委托"
                        />
                        <div style="position: relative;">
                          <input
                            type="button"
                            class="order-type-btn secondary-font
                  border-input"
                            value="计划委托"
                          />
                          <div
                            class="tooltip-white tooltip-hover tooltop-show-hover "
                            style="margin-left: 0px;"
                          >
                            <i class="icon-warn-info secondary-font"></i>
                            <div class="tooltip-inner ">
                              <em
                                class="tooltip-text "
                                style="left: -8px; bottom: 15px;"
                                ><div>
                                  当市场价格满足触发价格时，将按照委托价和委托量帮您下单。<a
                                    href="//support.huobiservice.com/hc/zh-cn/articles/360000215861"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="blue-font"
                                    >查看详情</a
                                  >
                                </div></em
                              ><i
                                class="tooltip-arrow "
                                style="left: 3px; bottom: 10px;"
                              ></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="order-board-selected-button-root">
                        <div
                          class="tooltip-white tooltip-hover tooltop-show-hover "
                        >
                          <u
                            class="tip-text main-font order-board-selected-button-cross"
                            >全仓</u
                          >
                          <div class="tooltip-inner ">
                            <em class="tooltip-text "
                              >所有持仓共享合约账户内的保证金。当触发强平时，部分或者全部仓位将会被强平，强平损失最大为账户内的全部权益。请您注意仓位及风险控制。</em
                            ><i class="tooltip-arrow "></i>
                          </div>
                        </div>
                        <div
                          class="tooltip-white tooltip-hover tooltop-show-hover "
                          style="line-height: normal;"
                        >
                          <button
                            class="border-input blue-font order-board-selected-button"
                          >
                            张
                          </button>
                          <div class="tooltip-inner tooltipRootClass">
                            <em class="tooltip-text tooltipTextClass"
                              ><div><p>交易单位</p></div></em
                            ><i class="tooltip-arrow "></i>
                          </div>
                        </div>
                        <div
                          class="tooltip-white tooltip-hover tooltop-show-hover "
                          style="line-height: normal;"
                        >
                          <button
                            class="border-input blue-font order-board-selected-button null"
                            style="margin-right: 18px;"
                          >
                            --x
                          </button>
                          <div class="tooltip-inner tooltipRootClass">
                            <em class="tooltip-text tooltipTextClass-new"
                              ><div><p>点此切换杠杆倍数</p></div></em
                            ><i class="tooltip-arrow "></i>
                          </div>
                        </div>
                        <div
                          class="tooltip-white tooltip-hover tooltop-show-hover "
                          style="line-height: normal;"
                        >
                          <i class="icon-warn-info secondary-font"></i>
                          <div class="tooltip-inner warnTooltipRootClass">
                            <em class="tooltip-text tooltipTextClass-new"
                              ><div>
                                <p>
                                  杠杆倍数越高，发生<a
                                    href="//support.huobiservice.com/hc/zh-cn/articles/360000143042"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="blue-font"
                                    >强制平仓</a
                                  >的风险越高
                                </p>
                              </div></em
                            ><i class="tooltip-arrow "></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="order-board-extra-instructtype">
                      <div class="order-board-extra-instructtype-item">
                        <div class="order-board-extra-instructtype-check">
                          <i class="icon-unchecked-round secondary-font"></i>
                        </div>
                        <div
                          class="tooltip-white tooltip-hover tooltop-show-hover "
                          style="line-height: normal; width: 100%; height: 100%;"
                        >
                          <u
                            class="order-board-extra-text tip-text secondary-font"
                            >只做Maker</u
                          >
                          <div class="tooltip-inner ">
                            <em class="tooltip-text order-board-tooltip-text"
                              ><span
                                ><span style="font-weight: bold;"
                                  >只做Maker </span
                                >(Post only)
                                订单不会立刻在市场成交，保证用户始终为Maker,
                                如果委托会立即与已有委托成交，那么该委托会被取消。</span
                              ></em
                            ><i
                              class="tooltip-arrow order-board-tooltip-arrow"
                            ></i>
                          </div>
                        </div>
                      </div>
                      <div class="order-board-extra-instructtype-item">
                        <div class="order-board-extra-instructtype-check">
                          <i class="icon-unchecked-round secondary-font"></i>
                        </div>
                        <div
                          class="tooltip-white tooltip-hover tooltop-show-hover "
                          style="line-height: normal; width: 100%; height: 100%;"
                        >
                          <u
                            class="order-board-extra-text tip-text secondary-font"
                            >IOC</u
                          >
                          <div class="tooltip-inner ">
                            <em class="tooltip-text order-board-tooltip-text"
                              ><span
                                ><span style="font-weight: bold;">IOC </span
                                >(Immediately or Cancel)
                                订单若不能立即成交则未成交的部分立即取消。</span
                              ></em
                            ><i
                              class="tooltip-arrow order-board-tooltip-arrow"
                            ></i>
                          </div>
                        </div>
                      </div>
                      <div class="order-board-extra-instructtype-item">
                        <div class="order-board-extra-instructtype-check">
                          <i class="icon-unchecked-round secondary-font"></i>
                        </div>
                        <div
                          class="tooltip-white tooltip-hover tooltop-show-hover "
                          style="line-height: normal; width: 100%; height: 100%;"
                        >
                          <u
                            class="order-board-extra-text tip-text secondary-font"
                            >FOK</u
                          >
                          <div class="tooltip-inner ">
                            <em class="tooltip-text order-board-tooltip-text"
                              ><span
                                ><span style="font-weight: bold;">FOK </span
                                >(Fill or Kill)
                                订单若不能全部成交则立即全部取消。</span
                              ></em
                            ><i
                              class="tooltip-arrow order-board-tooltip-arrow"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="order-board-content-box-root">
                      <div class="order-board-content-box">
                        <div style="position: relative;">
                          <div
                            class="order-board-input-box order-board-input-box-flash-close"
                          >
                            <span
                              class="order-board-input-box-title secondary-font"
                              >买入价 (USD)</span
                            >
                            <div
                              class="tooltip-white tooltip-hover false "
                              style="line-height: normal; width: 100%; height: 100%;"
                            >
                              <input class="input order-board-input" value="" />
                              <div class="tooltip-inner ">
                                <em
                                  class="tooltip-text order-board-tooltip-text"
                                  ><p style="text-align: center;">
                                    请输入委托价
                                  </p></em
                                ><i
                                  class="tooltip-arrow order-board-tooltip-arrow"
                                ></i>
                              </div>
                            </div>
                            <div
                              tabindex="0"
                              class="new-select-white new-select"
                              style="z-index: 41;"
                            >
                              <div class="new-select-arrow-wrapper">
                                <span class="new-select-arrow-line"></span
                                ><span
                                  class="new-select-arrow new-select-arrow-rotate-reset"
                                ></span>
                              </div>
                              <ul
                                class="new-select-list "
                                style="width: 320px;"
                              >
                                <li>
                                  <span class="number-font">对手价</span>
                                  <div class="new-select-item-tip">
                                    对手价：如果您开多/平空，则对手价为卖一价；如果您开空/平多，则对手价为买一价。<span
                                      class="new-select-item-tip-arrow"
                                    ></span>
                                  </div>
                                </li>
                                <li>
                                  <span class="number-font">最优5档</span>
                                </li>
                                <li>
                                  <span class="number-font">最优10档</span>
                                </li>
                                <li>
                                  <span class="number-font">最优20档</span>
                                </li>
                              </ul>
                            </div>
                            <div
                              class="rival-price-button-white border-input secondary-font rival-price-button-flash-close"
                            >
                              <div
                                class="tooltip-white tooltip-hover tooltop-show-hover "
                                style="line-height: normal;"
                              >
                                <i
                                  class="icon-flash-close rival-price-button-icon "
                                ></i>
                                <div class="tooltip-inner ">
                                  <em class="tooltip-text "
                                    ><p>
                                      闪电平仓：只需要输入平仓数量，系统快速以最优30档价格帮您下单。如有未能成交的部分，会转为限价单。
                                    </p></em
                                  ><i class="tooltip-arrow "></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="order-board-input-title">
                            <span class="secondary-font"
                              >最高买价：9,450.96</span
                            >
                          </div>
                          <p
                            class="order-board-white-input-tip drop-list-background"
                            style="visibility: hidden;"
                          >
                            ≈ -- CNY
                          </p>
                        </div>
                        <div style="position: relative;">
                          <div class="order-board-input-box">
                            <span
                              class="order-board-input-box-title secondary-font"
                              >买入量 (张)</span
                            >
                            <div
                              class="tooltip-white tooltip-hover false "
                              style="line-height: normal; width: 100%; height: 100%;"
                            >
                              <input class="input order-board-input" value="" />
                              <div class="tooltip-inner ">
                                <em
                                  class="tooltip-text order-board-tooltip-text"
                                  ><div>
                                    <p
                                      style="text-align: center;"
                                    ></p></div></em
                                ><i
                                  class="tooltip-arrow order-board-tooltip-arrow"
                                ></i>
                              </div>
                            </div>
                          </div>
                          <p
                            class="order-board-white-input-tip drop-list-background order-board-input-tip-volumn"
                            style="visibility: hidden;"
                          >
                            ≈ 0 BTC
                          </p>
                        </div>
                        <div class="drag-bar-wrapper">
                          <div class="slider-box">
                            <div class="slider buy">
                              <i class="progress progress-buy-white"></i
                              ><i
                                class="point point-buy-white"
                                style="left: 0px; transform: translateX(0px);"
                              ></i
                              ><i
                                class="point point-buy-white"
                                style="left: 25%; transform: translateX(-20%);"
                              ></i
                              ><i
                                class="point point-buy-white"
                                style="left: 50%; transform: translateX(-40%);"
                              ></i
                              ><i
                                class="point point-buy-white"
                                style="left: 75%; transform: translateX(-50%);"
                              ></i
                              ><i
                                class="point point-buy-white"
                                style="right: 0px;"
                              ></i
                              ><i
                                class="drag-bar drag-bar-buy-white"
                                style="transform: translateX(0px);"
                                ><span
                                  class="drag-bar-panal green-background"
                                ></span></i
                              ><i
                                class="drag-track drag-track-buy-white"
                                style="width: 2px;"
                              ></i>
                            </div>
                          </div>
                        </div>
                        <p
                          class="order-board-volume-tip green-font text-ellipsis"
                        >
                          可平空：-- 张<span class="available main-font"
                            >可用：-- BTC</span
                          >
                        </p>
                        <button
                          class="order-board-button-nologin border-input order-board-button-nologin-white"
                        >
                          <a
                            href="https://www.huobi.io/zh-cn/login/?backUrl=https://dm.huobi.io/zh-cn&amp;inviter_id=11314840"
                            rel="noopener noreferrer"
                            class="transparent-button"
                            >登录</a
                          ><span class="secondary-font">&nbsp;或&nbsp;</span
                          ><a
                            href="https://www.huobi.io/zh-cn/register/?backUrl=https://dm.huobi.io/zh-cn&amp;inviter_id=11314840"
                            rel="noopener noreferrer"
                            class="transparent-button"
                            >注册</a
                          >
                        </button>
                      </div>
                      <div class="order-board-content-line border-input"></div>
                      <div class="order-board-content-box">
                        <div style="position: relative;">
                          <div
                            class="order-board-input-box order-board-input-box-flash-close"
                          >
                            <span
                              class="order-board-input-box-title secondary-font"
                              >卖出价 (USD)</span
                            >
                            <div
                              class="tooltip-white tooltip-hover false "
                              style="line-height: normal; width: 100%; height: 100%;"
                            >
                              <input class="input order-board-input" value="" />
                              <div class="tooltip-inner ">
                                <em
                                  class="tooltip-text order-board-tooltip-text"
                                  ><p style="text-align: center;">
                                    请输入委托价
                                  </p></em
                                ><i
                                  class="tooltip-arrow order-board-tooltip-arrow"
                                ></i>
                              </div>
                            </div>
                            <div
                              tabindex="0"
                              class="new-select-white new-select"
                              style="z-index: 41;"
                            >
                              <div class="new-select-arrow-wrapper">
                                <span class="new-select-arrow-line"></span
                                ><span class="new-select-arrow "></span>
                              </div>
                              <ul
                                class="new-select-list "
                                style="width: 448px;"
                              >
                                <li>
                                  <span class="number-font">对手价</span>
                                  <div class="new-select-item-tip">
                                    对手价：如果您开多/平空，则对手价为卖一价；如果您开空/平多，则对手价为买一价。<span
                                      class="new-select-item-tip-arrow"
                                    ></span>
                                  </div>
                                </li>
                                <li>
                                  <span class="number-font">最优5档</span>
                                </li>
                                <li>
                                  <span class="number-font">最优10档</span>
                                </li>
                                <li>
                                  <span class="number-font">最优20档</span>
                                </li>
                              </ul>
                            </div>
                            <div
                              class="rival-price-button-white border-input secondary-font rival-price-button-flash-close"
                            >
                              <div
                                class="tooltip-white tooltip-hover tooltop-show-hover "
                                style="line-height: normal;"
                              >
                                <i
                                  class="icon-flash-close rival-price-button-icon "
                                ></i>
                                <div class="tooltip-inner ">
                                  <em class="tooltip-text "
                                    ><p>
                                      闪电平仓：只需要输入平仓数量，系统快速以最优30档价格帮您下单。如有未能成交的部分，会转为限价单。
                                    </p></em
                                  ><i class="tooltip-arrow "></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="order-board-input-title">
                            <span class="secondary-font"
                              >最低卖价：8,381.05</span
                            >
                          </div>
                          <p
                            class="order-board-white-input-tip drop-list-background"
                            style="visibility: hidden;"
                          >
                            ≈ -- CNY
                          </p>
                        </div>
                        <div style="position: relative;">
                          <div class="order-board-input-box">
                            <span
                              class="order-board-input-box-title secondary-font"
                              >卖出量 (张)</span
                            >
                            <div
                              class="tooltip-white tooltip-hover false "
                              style="line-height: normal; width: 100%; height: 100%;"
                            >
                              <input class="input order-board-input" value="" />
                              <div class="tooltip-inner ">
                                <em
                                  class="tooltip-text order-board-tooltip-text"
                                  ><p style="text-align: center;"></p></em
                                ><i
                                  class="tooltip-arrow order-board-tooltip-arrow"
                                ></i>
                              </div>
                            </div>
                          </div>
                          <p
                            class="order-board-white-input-tip drop-list-background order-board-input-tip-volumn"
                            style="visibility: hidden;"
                          >
                            ≈ 0 BTC
                          </p>
                        </div>
                        <div class="drag-bar-wrapper">
                          <div class="slider-box">
                            <div class="slider buy">
                              <i class="progress progress-sell-white"></i
                              ><i
                                class="point point-sell-white"
                                style="left: 0px; transform: translateX(0px);"
                              ></i
                              ><i
                                class="point point-sell-white"
                                style="left: 25%; transform: translateX(-20%);"
                              ></i
                              ><i
                                class="point point-sell-white"
                                style="left: 50%; transform: translateX(-40%);"
                              ></i
                              ><i
                                class="point point-sell-white"
                                style="left: 75%; transform: translateX(-50%);"
                              ></i
                              ><i
                                class="point point-sell-white"
                                style="right: 0px;"
                              ></i
                              ><i
                                class="drag-bar drag-bar-sell-white"
                                style="transform: translateX(0px);"
                                ><span
                                  class="drag-bar-panal red-background"
                                ></span></i
                              ><i
                                class="drag-track drag-track-sell-white"
                                style="width: 2px;"
                              ></i>
                            </div>
                          </div>
                        </div>
                        <p
                          class="order-board-volume-tip red-font text-ellipsis"
                        >
                          可平多：-- 张<span class="available main-font"
                            >可用：-- BTC</span
                          >
                        </p>
                        <button
                          class="order-board-button-nologin border-input order-board-button-nologin-white"
                        >
                          <a
                            href="https://www.huobi.io/zh-cn/login/?backUrl=https://dm.huobi.io/zh-cn&amp;inviter_id=11314840"
                            rel="noopener noreferrer"
                            class="transparent-button"
                            >登录</a
                          ><span class="secondary-font">&nbsp;或&nbsp;</span
                          ><a
                            href="https://www.huobi.io/zh-cn/register/?backUrl=https://dm.huobi.io/zh-cn&amp;inviter_id=11314840"
                            rel="noopener noreferrer"
                            class="transparent-button"
                            >注册</a
                          >
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="inner-right-wrap">
              <div class="bid-ask-deal-container bid-ask-deal-container-white">
                <div class="bid-ask-container content-box">
                  <div class="bid-ask-title content-box-title">
                    <div class="bid-ask-title-single">盘口</div>
                    <div class="bid-ask-title-double">
                      <span class="bid-ask-title-handicap main-list-font"
                        >盘口</span
                      >
                      <h2
                        class="bid-ask-title-deal bid-ask-title-select border-blue content-background main-font"
                      >
                        实时成交
                      </h2>
                    </div>
                  </div>
                  <div class="deal-detail-content content-box">
                    <div class="deal-detail-list-title secondary-font">
                      <span class="deal-detail-list-title-item">时间</span
                      ><span class="deal-detail-list-title-item">价格(USD)</span
                      ><span class="deal-detail-list-title-item"
                        ><div
                          class="tooltip-white tooltip-hover tooltop-show-hover "
                        >
                          <u class="tip-text">数量(张)</u>
                          <div
                            class="tooltip-inner "
                            style="line-height: 20px;"
                          >
                            <em
                              class="tooltip-text "
                              style="right: 0px; width: 150px;"
                              >买卖双边成交量之和</em
                            ><i class="tooltip-arrow "></i>
                          </div></div
                      ></span>
                    </div>
                    <div
                      class="scroll-white scroll-style"
                      style="margin-right: 4px;"
                    >
                      <ul class="deal-detail-list">
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.53</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >12</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.53</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >134</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.53</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >14</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.53</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >20</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.53</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >14</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.53</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >14</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.53</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >14</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.53</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >52</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.53</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >94</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.53</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >90</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.53</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >94</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,881.00</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >4</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,881.00</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >100</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,881.00</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >32</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,881.00</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >2</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,881.00</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >100</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,881.00</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >100</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,881.00</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >40</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,881.52</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >60</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,881.52</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >882</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,881.52</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >100</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,881.52</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >20</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,881.52</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >100</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,881.52</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >2</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,881.52</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >100</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,881.52</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >18</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,881.52</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >100</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,881.52</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >68</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,881.52</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >98</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,881.88</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >2</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,881.52</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >100</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,881.52</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >100</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,881.52</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >100</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,881.52</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >24</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,881.52</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >100</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,881.52</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >28</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,881.88</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >72</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,882.72</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >2</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,882.72</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >8</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,882.72</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >4</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,881.88</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >30</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,881.88</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >38</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,882.07</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >2</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,882.08</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >2</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,882.09</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >58</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,882.09</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >2</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,882.33</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >40</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.01</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >2</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.02</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >106</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.02</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >108</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.02</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >12</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.02</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >12</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.02</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >106</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,883.11</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >4</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,883.11</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >6</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.02</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >82</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.02</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >26</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.02</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >16</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.02</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >92</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.02</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >52</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.02</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >58</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.02</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >24</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.02</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >14</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.02</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >6</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.02</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >64</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.02</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >12</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:12</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.02</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >12</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,882.71</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >68</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,882.71</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >156</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,882.71</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >200</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,882.71</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >212</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,882.71</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >54</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,882.71</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >100</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,882.71</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >156</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,882.71</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >436</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,882.71</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >14</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,882.72</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >52</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,882.78</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >98</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.00</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >190</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.01</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >2</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.02</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >8</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.02</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >12</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.02</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >108</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.02</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >108</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.02</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >108</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.02</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >108</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.02</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >110</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,883.10</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >96</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,883.02</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >40</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.10</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >2</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.10</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >2</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.10</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >8</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.10</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >12</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.10</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >12</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.10</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >2</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.10</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >326</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,883.11</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >64</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,883.12</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >64</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.10</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >70</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.10</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >160</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,883.12</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >438</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,883.12</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >80</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,883.12</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >16</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,883.12</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >64</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,883.12</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >16</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.00</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >10</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.00</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >110</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.00</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >56</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.00</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >248</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.01</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >14</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.10</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >4</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.10</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >2</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.01</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >146</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.10</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >2</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.10</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >14</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.10</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >86</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.10</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >110</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.10</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >56</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.10</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >246</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.11</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >200</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.11</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >26</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.11</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >40</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.11</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >180</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.10</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >2</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.10</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >56</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.10</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >54</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.10</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >36</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,883.12</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >300</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,883.12</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >400</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,883.12</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >446</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,883.12</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >40</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,883.11</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >2</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,883.11</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >36</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:11</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,883.10</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >40</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,883.11</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >58</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,883.11</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >94</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,883.11</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >94</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,883.11</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >14</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,883.11</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >94</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,883.11</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >54</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,883.11</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >14</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,883.11</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >14</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,883.11</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >88</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,882.07</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >80</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,883.11</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >6</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,883.11</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >34</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,883.02</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >60</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,883.01</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >200</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,882.72</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >300</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,882.07</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >144</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,882.07</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >90</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,882.07</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >34</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,882.07</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >38</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,882.07</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >2</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,882.07</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >2</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,882.07</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >2</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,882.34</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >60</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,882.28</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >40</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.89</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >6</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,881.88</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >20</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.60</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >100</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.52</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >14</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.40</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >100</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.30</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >100</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.06</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >120</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.04</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >38</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,881.01</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >16</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.04</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >82</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.04</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >180</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.04</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >100</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.01</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >16</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.01</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >176</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.01</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >124</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.01</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >64</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.01</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >4</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.01</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >2</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.01</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >2</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.01</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >274</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.01</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >26</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.01</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >4</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.01</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >2</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.01</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >180</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.01</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >400</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.01</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >2</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.01</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >16</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.01</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >26</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.01</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >132</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.01</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >6</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.01</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >6</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.01</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >12</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.01</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >64</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.01</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >56</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.01</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >6</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.01</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >70</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.01</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >62</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.01</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >18</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.01</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >36</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction green-font"
                            >8,881.01</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >54</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,881.00</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >4</span
                          >
                        </li>
                        <li class="deal-detail-list-item list-item-hover">
                          <span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22:04:10</span
                          ><span
                            class="deal-detail-list-item-span number-font direction red-font"
                            >8,881.00</span
                          ><span
                            class="deal-detail-list-item-span main-list-font number-font"
                            >22</span
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Cardone from "../Cardone";
export default {
  components: {
    Cardone
  },
  data() {
    return {
      theme1: "dark",
      isCard: false,
      tabIndex: 0,
      tagArr: [
        { id: 0, label: "自选" },
        { id: 1, label: "全部" },
        { id: 2, label: "当周" },
        { id: 3, label: "次周" },
        { id: 4, label: "季度" }
      ],
      languageArr: [
        { name: "English", tag: "en" },
        { name: "简体中文", tag: "ch" }
      ]
    };
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
#listone-2 #listone-3 .link,
a {
  color: rgba(255, 255, 255, 0.7);
}
#listone-2 #listone-3 .link,
a:hover {
  color: #fff;
}
#listone-2 .ivu-select-dropdown {
  margin: 5px -25px;
}
#listone-3 .ivu-select-dropdown {
  margin: 5px -40px;
}
.header-white {
  height: auto;
  padding: 0;
  width: 100%;
  display: block;
}
.huobi_chart_container {
  outline: 0 none;
  position: relative;
  user-select: none;
}
.huobi_chart_container canvas {
  position: absolute;
  left: 0;
  top: 0;
  user-select: none;
}
.huobi_chart_container p {
  font-size: 12px;
  user-select: none;
  left: 10px;
  position: absolute;
  top: 0;
  padding: 0;
  margin: 0;
  line-height: 1.3;
}
.huobi_chart_container p span {
  padding-left: 6px;
}
</style>
