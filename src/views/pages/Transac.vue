<template>
  <div>
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
          <MenuItem name="1" to="/quotation">
            行情
          </MenuItem>
          <MenuItem name="2" to="/fbtransaction">
            法币交易
          </MenuItem>
          <MenuItem name="3" to="/cointrading">
            币币交易
          </MenuItem>
          <MenuItem name="4" to="/quotation">
            杠杆交易
          </MenuItem>
          <MenuItem name="5" to="/contracttransaction">
            合约交易
          </MenuItem>
          <MenuItem name="6" class="menus_changjiang" to="/college">
            成长学院
          </MenuItem>

          <div id="menus" style="float:right;">
            <div id="user-chose" style="float:left">
              <MenuItem name="4" to="">
                <Dropdown id="listone-7">
                  <a href="javascript:void(0)">
                    资产
                  </a>
                  <Dropdown-menu slot="list">
                    <Dropdown-item>
                      币币账户（充币&提币）
                    </Dropdown-item>
                    <Dropdown-item>
                      杠杆账户
                    </Dropdown-item>
                    <Dropdown-item>
                      法币账户
                    </Dropdown-item>
                    <Dropdown-item>
                      合约账户
                    </Dropdown-item>
                    <Dropdown-item>
                      矿池账户
                    </Dropdown-item>
                    <Dropdown-item>
                      HB10
                    </Dropdown-item>
                    <Dropdown-item>
                      我的点卡
                    </Dropdown-item>
                  </Dropdown-menu>
                </Dropdown>
              </MenuItem>
              <MenuItem name="4" to="">
                <Dropdown id="listone-8">
                  <a href="javascript:void(0)">
                    订单
                  </a>
                  <Dropdown-menu slot="list">
                    <Dropdown-item>币币&杠杆订单</Dropdown-item>
                    <Dropdown-item>法币订单</Dropdown-item>
                    <Dropdown-item>合约订单</Dropdown-item>
                  </Dropdown-menu>
                </Dropdown>
              </MenuItem>
            </div>
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
            <div
              class="data-center-header-wrapped-title"
              style="margin-top:-20px;margin-left: -50px;"
            >
              <img
                style="margin-top:7px;"
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjEgKDc4MTM2KSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgMzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSLorqLljZUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLluIHluIEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNjAuMDAwMDAwLCAtOTQuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9Iue8lue7hCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzYwLjAwMDAwMCwgNzQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uELTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAyMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTAsMjAgTDEwLDE4LjUgQzUuMzA1NTc5NjMsMTguNSAxLjUsMTQuNjk0NDIwNCAxLjUsMTAgQzEuNSw1LjMwNTU3OTYzIDUuMzA1NTc5NjMsMS41IDEwLDEuNSBDMTMuNDA0MjUwMywxLjUgMTYuNDM4MzI1OCwzLjUxOTE5OTY1IDE3Ljc4NTI4MDgsNi41ODIwNzI5NSBMMTkuMTU4MzcwNSw1Ljk3ODIzMTQzIEMxNy42MTAzMDcsMi40NTgwNTI2NiAxNC4wOTIyMDgsMCAxMCwwIEM0LjQ3NzE1MjUsMCAtMi4yNzM3MzY3NWUtMTMsNC40NzcxNTI1IC0yLjI3MzczNjc1ZS0xMywxMCBDLTIuMjczNzM2NzVlLTEzLDE1LjUyMjg0NzUgNC40NzcxNTI1LDIwIDEwLDIwIFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoLTIiIGZpbGw9IiMzNTdDRTEiIHBvaW50cz0iMjAgMTAuNzQ3NDQwOSAyMCAxMi4yNDc0NDA5IDExIDEyLjI0NzQ0MDkgMTUuNSA4LjUgMTUuNSAxMC43NDc0NDA5Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgtMi1Db3B5IiBmaWxsPSIjMzU3Q0UxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNS41MDAwMDAsIDE1Ljg3MzcyMCkgc2NhbGUoLTEsIC0xKSB0cmFuc2xhdGUoLTE1LjUwMDAwMCwgLTE1Ljg3MzcyMCkgIiBwb2ludHM9IjIwIDE2LjI0NzQ0MDkgMjAgMTcuNzQ3NDQwOSAxMSAxNy43NDc0NDA5IDE1LjUgMTQgMTUuNSAxNi4yNDc0NDA5Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
                data-v-72d7f677=""
              />
              <p style="margin-left:12px; margin-top:12px;width: 105px;">
                币币&杠杆订单
              </p>
              <div class="Font-tabs">
                <a-tabs :animated="false">
                  <a-tab-pane tab="当前委托" key="1">
                    <div class="tabslist-1">
                      <h5 class="tab-title-1">
                        当前委托
                      </h5>
                      <div class="tab-title-2">
                        <template>
                          <a-range-picker @change="onChange" />
                        </template>
                      </div>
                      <div class="tab-title-3">
                        <a-input placeholder="币种" />
                      </div>
                      <span>/</span>
                      <span></span>
                      <div class="tab-title-4">
                        <a-select
                          defaultValue="lucy1"
                          style="width: 120px"
                          @change="handleChange"
                        >
                          <a-select-option value="lucy1">USDT</a-select-option>
                          <a-select-option value="lucy2">SUSD</a-select-option>
                          <a-select-option value="lucy3">BTC</a-select-option>
                          <a-select-option value="lucy4">ETH</a-select-option>
                          <a-select-option value="lucy5">HT</a-select-option>
                          <a-select-option value="lucy6">ALTS</a-select-option>
                        </a-select>
                      </div>
                      <div class="tab-title-5">
                        <a-select
                          defaultValue="lucyt-1"
                          style="width: 120px"
                          @change="handleChange"
                        >
                          <a-select-option value="lucyt-1"
                            >全部方向</a-select-option
                          >
                          <a-select-option value="lucyt-2"
                            >买入</a-select-option
                          >
                          <a-select-option value="lucyt-3"
                            >卖出</a-select-option
                          >
                        </a-select>
                      </div>
                      <div class="tab-title-6">
                        <a-button type="primary">搜索</a-button>
                      </div>
                      <!-- <div class="export-1"></div> -->
                    </div>
                    <div class="tabslist-9">
                      <template>
                        <i-table
                          border
                          :columns="columns1"
                          :data="data1"
                        ></i-table>
                      </template>
                    </div>
                  </a-tab-pane>
                  <a-tab-pane tab="委托历史" key="2">
                    <div class="tabslist-1">
                      <h5 class="tab-title-1">
                        委托历史
                      </h5>
                      <div class="tab-title-2">
                        <template>
                          <a-range-picker @change="onChange" />
                        </template>
                      </div>
                      <div class="tab-title-3">
                        <a-input placeholder="币种" />
                      </div>
                      <span>/</span>
                      <span></span>
                      <div class="tab-title-4">
                        <a-select
                          defaultValue="lucy1"
                          style="width: 120px"
                          @change="handleChange"
                        >
                          <a-select-option value="lucy1">USDT</a-select-option>
                          <a-select-option value="lucy2">SUSD</a-select-option>
                          <a-select-option value="lucy3">BTC</a-select-option>
                          <a-select-option value="lucy4">ETH</a-select-option>
                          <a-select-option value="lucy5">HT</a-select-option>
                          <a-select-option value="lucy6">ALTS</a-select-option>
                        </a-select>
                      </div>
                      <div class="tab-title-5">
                        <a-select
                          defaultValue="lucyt-1"
                          style="width: 120px"
                          @change="handleChange"
                        >
                          <a-select-option value="lucyt-1"
                            >全部方向</a-select-option
                          >
                          <a-select-option value="lucyt-2"
                            >买入</a-select-option
                          >
                          <a-select-option value="lucyt-3"
                            >卖出</a-select-option
                          >
                        </a-select>
                      </div>
                      <div class="tab-title-6">
                        <a-button type="primary">搜索</a-button>
                      </div>
                      <div class="tab-title-7">
                        <a-checkbox v-model="sChecked" @change="onChange"
                          >隐藏已撤销</a-checkbox
                        >
                      </div>
                      <div class="export-1"></div>
                    </div>
                    <div class="tabslist-9">
                      <template>
                        <i-table
                          border
                          :columns="columns1"
                          :data="data1"
                        ></i-table>
                      </template>
                    </div>
                  </a-tab-pane>
                  <a-tab-pane tab="成交明细" key="3">
                    <div class="tabslist-1">
                      <h5 class="tab-title-1">
                        成交明细
                      </h5>
                      <div class="tab-title-2">
                        <template>
                          <a-range-picker @change="onChange" />
                        </template>
                      </div>
                      <div class="tab-title-3">
                        <a-input placeholder="币种" />
                      </div>
                      <span>/</span>
                      <span></span>
                      <div class="tab-title-4">
                        <a-select
                          defaultValue="lucy1"
                          style="width: 120px"
                          @change="handleChange"
                        >
                          <a-select-option value="lucy1">USDT</a-select-option>
                          <a-select-option value="lucy2">SUSD</a-select-option>
                          <a-select-option value="lucy3">BTC</a-select-option>
                          <a-select-option value="lucy4">ETH</a-select-option>
                          <a-select-option value="lucy5">HT</a-select-option>
                          <a-select-option value="lucy6">ALTS</a-select-option>
                        </a-select>
                      </div>
                      <div class="tab-title-5">
                        <a-select
                          defaultValue="lucyt-1"
                          style="width: 120px"
                          @change="handleChange"
                        >
                          <a-select-option value="lucyt-1"
                            >全部方向</a-select-option
                          >
                          <a-select-option value="lucyt-2"
                            >买入</a-select-option
                          >
                          <a-select-option value="lucyt-3"
                            >卖出</a-select-option
                          >
                        </a-select>
                      </div>
                      <div class="tab-title-6">
                        <a-button type="primary">搜索</a-button>
                      </div>
                      <div class="export-1"></div>
                    </div>
                    <div class="tabslist-9">
                      <template>
                        <i-table
                          border
                          :columns="columns1"
                          :data="data1"
                        ></i-table>
                      </template>
                    </div>
                  </a-tab-pane>
                  <a-tab-pane tab="借还历史" key="4">
                    <div class="tabslist-1"></div>
                    <div class="tab-title-11">
                      <div class="CCTT" style="float:right">
                        <div class="tab-title-41">
                          <a-select
                            defaultValue="lucy1"
                            style="width: 120px"
                            @change="handleChange"
                          >
                            <a-select-option value="lucy1"
                              >逐仓</a-select-option
                            >
                            <a-select-option value="lucy2"
                              >全仓</a-select-option
                            >
                          </a-select>
                        </div>
                        <div class="tab-title-5">
                          <a-select
                            defaultValue="lucyt-1"
                            style="width: 120px"
                            @change="handleChange"
                          >
                            <a-select-option value="lucyt-1"
                              >全部账户</a-select-option
                            >
                            <a-select-option value="lucyt-2"
                              >BTC/USDT</a-select-option
                            >
                            <a-select-option value="lucyt-3"
                              >ETH/USDT</a-select-option
                            >
                            <a-select-option value="lucyt-4"
                              >HT/USDT</a-select-option
                            >
                            <a-select-option value="lucyt-5"
                              >XRP/USDT</a-select-option
                            >
                            <a-select-option value="lucyt-6"
                              >LTC/USDT</a-select-option
                            >
                            <a-select-option value="lucyt-7"
                              >BHC/USDT</a-select-option
                            >
                          </a-select>
                        </div>
                        <div class="tab-title-6">
                          <a-button type="primary">搜索</a-button>
                        </div>
                      </div>
                      <a-tabs
                        :animated="false"
                        defaultActiveKey="1-1"
                        @change="callback"
                      >
                        <a-tab-pane tab="借币历史" key="1-1">
                          <div style="width:1200px;">
                            <template>
                              <a-table
                                :columns="columns"
                                :dataSource="dataT"
                                bordered
                              >
                                <template slot="name" slot-scope="text">
                                  {{ text }}
                                </template>
                              </a-table>
                            </template>
                          </div>
                        </a-tab-pane>
                        <a-tab-pane tab="还币历史" key="2-1">
                          <div style="width:1200px;">
                            <template>
                              <a-table
                                :columns="columns"
                                :dataSource="dataT"
                                bordered
                              >
                                <template slot="name" slot-scope="text">
                                  {{ text }}
                                </template>
                              </a-table>
                            </template>
                          </div>
                        </a-tab-pane>
                      </a-tabs>
                    </div>
                  </a-tab-pane>
                </a-tabs>
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
const columns = [
  {
    title: "归还时间",
    dataIndex: "name",
    scopedSlots: { customRender: "name" }
  },
  {
    title: "杠杆账户",
    className: "column-money",
    dataIndex: "money"
  },
  {
    title: "币种",
    dataIndex: "address"
  },
  {
    title: "仓位类型",
    dataIndex: "Nob"
  },
  {
    title: "归还数量",
    dataIndex: "Nom"
  }
];

const dataT = [
  {
    key: "1",
    name: "John Brown",
    money: "￥300,000.00",
    Nob: "2211",
    Nom: "6699",
    address: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    name: "Jim Green",
    money: "￥1,256,000.00",
    Nob: "2211",
    Nom: "6699",
    address: "London No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Joe Black",
    money: "￥120,000.00",
    Nob: "2211",
    Nom: "6699",
    address: "Sidney No. 1 Lake Park"
  }
];
export default {
  data() {
    return {
      theme1: "dark",
      isCard: false,
      date: "",
      sChecked: true,
      columns,
      dataT,
      columns1: [
        {
          title: "时间",
          key: "time"
        },
        {
          title: "交易对",
          key: "number"
        },
        {
          title: "方式",
          key: "ider"
        },
        {
          title: "方向",
          key: "choos"
        },
        {
          title: "价格",
          key: "money"
        },
        {
          title: "数量",
          key: "age"
        },
        {
          title: "成交额",
          key: "NubM"
        },
        {
          title: "手续费",
          key: "NubN"
        }
      ],
      data1: [
        {
          time: "2020-01-01",
          number: "14:30",
          ider: "手机APP",
          choos: "东",
          money: 100,
          age: 10000,
          NubM: 100000,
          NubN: 888
        },
        {
          time: "2020-01-01",
          number: "14:30",
          ider: "手机APP",
          choos: "南",
          money: 900,
          age: 200,
          NubM: 900000,
          NubN: 1888
        },
        {
          time: "2020-01-01",
          number: "14:30",
          ider: "手机APP",
          choos: "西",
          money: 500,
          age: 3000,
          NubM: 130000,
          NubN: 688
        },
        {
          time: "2020-01-01",
          number: "14:30",
          ider: "手机APP",
          choos: "北",
          money: 10,
          age: 900,
          NubM: 10000,
          NubN: 68
        }
      ]
    };
  },
  components: {
    Cardone
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
    },

    callback() {},
    handleChange() {},
    onChange() {},
    getCurrentStyle(current) {
      const style = {};
      if (current.date() === 1) {
        style.border = "1px solid #1890ff";
        style.borderRadius = "50%";
      }
      return style;
    }
  }
};
</script>
<style lang="scss">
.data-center-header-wrapped {
  margin-left: 60px;
  width: 1200px;
  margin: 0;
}
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
#listone-7 .ivu-select-dropdown {
  margin: 5px -75px;
  width: 200px;
  height: 240px;
}
#listone-8 .ivu-select-dropdown {
  margin: 5px -45px;
  width: 120px;
  height: 120px;
}
.data-center-1 {
  margin-top: -11px;
  margin-left: 65px;
}
.contract-info .data-center-header-wrapped-title {
  align-items: normal;
}
.Top-btn {
  position: relative;
  display: inline-block;
  float: left;
}
.Cho-btn {
  float: left;
  display: inline-block;
}
.Font-tabs .ant-tabs {
  color: #87a2cd;
}
.Font-tabs .ant-tabs-nav .ant-tabs-tab:hover {
  color: #fff;
}
.Font-tabs .ant-tabs-nav .ant-tabs-tab-active {
  color: #fff;
}
.Font-tabs .ant-tabs-nav-scroll {
  display: inline-block;
  margin-top: 5px;
  margin-left: 60px;
}
.Font-tabs .ant-tabs-nav-wrap {
  margin-left: 5px;
}
.Font-tabs .ant-tabs-nav-container {
  margin-left: 120px;
}
.tabslist-1 {
  width: 1200px;
  margin-top: 20px;
  border-radius: 2px 2px 0 0;
  color: #1c242c;
  background-color: #f2f6fa;
  border: 1px solid #e6ecf2;
  padding: 8px 24px;
  clear: both;
  z-index: 1;
  height: 48px;
  text-align: right;
}
.tab-title-1 {
  position: relative;
  margin-top: 3px;
  float: left;
  overflow: hidden;
}
.tab-title-2 {
  display: inline-block;
  margin-right: 10px;
}
.tab-title-2 .ant-input {
  width: 240px;
}
.tab-title-3 {
  display: inline-block;
}

.tab-title-3 .ant-input {
  width: 80px;
}
.tab-title-4 {
  display: inline-block;
  margin-right: 10px;
}
.tab-title-41 {
  display: inline-block;
  margin-right: 10px;
  z-index: 999;
}
.contract-info .data-center-header-wrapped-title span {
  margin-left: 0;
  color: black;
}
.tab-title-5 {
  margin-right: 10px;
  display: inline-block;
}
.tab-title-6 {
  margin-right: 10px;
  display: inline-block;
}
.tab-title-7 {
  display: inline-block;
}
.export-1 {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-image: url(../../assets/23.svg);
}
.tabslist-9 {
  width: 1200px;
}
.tab-title-11 {
  float: left;
  margin-top: -50px;
  z-index: 99;
}
.tab-title-11 .ant-tabs {
  color: black;
}
.tab-title-11 .ant-tabs-nav .ant-tabs-tab:hover {
  color: black;
}
.tab-title-11 .ant-tabs-nav .ant-tabs-tab-active {
  color: black;
}
.tab-title-11 .ant-tabs-nav-scroll {
  display: inline-block;
  margin-top: 5px;
  margin-left: 60px;
}
.tab-title-11 .ant-tabs-nav-wrap {
  margin-left: 5px;
}
.tab-title-11 .ant-tabs-nav-container {
  margin-left: -40px;
}
.CCTT {
  position: absolute;
  right: 0;
  margin-top: 8px;
  z-index: 999;
}
</style>
