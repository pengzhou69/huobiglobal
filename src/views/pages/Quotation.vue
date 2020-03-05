<template>
  <div class="Quotation">
    <Head></Head>
    <div id="tab-one">
      <i-col class="Mitbe-1">
        <Tabs :animated="false" name="key1" id="tab-two">
          <Tab-pane label="币币" key="key1">
            <div style="background:#e5ebf5">
              <Quotachs></Quotachs>
            </div>
          </Tab-pane>
          <Tab-pane label="合约" key="key2">
            <div
              style="height:100vh;width:100%; background: rgba(255,255,255,0.5);"
            >
              <div style=" width: 75%;float: left;margin-left:10px;">
                <i-table border :columns="columns5" :data="data5"></i-table>
              </div>
              <div>
                <div class="right_inner" id="symbolDetail">
                  <nav class="nav_first">
                    <span class="nav_title">概况</span
                    ><i class="hb_icon_marked"></i>
                  </nav>
                  <div class="market_body">
                    <div class="content_body">
                      <div class="top">
                        <div class="head">
                          <div class="currency_logo fl"></div>
                          <h2 class="fl">
                            <i></i>
                            <span class="uppercase symbol">---</span>
                          </h2>
                          <div class="go_exchange fr" data-ee="goExchange">
                            交易
                          </div>
                        </div>
                        <div class="tag" id="tags">
                          <script type="text/x-template">
                            <%
                                       var tags = data && data.tags;
                                       %> <% if(tags && tags.indexOf('hadax') !== -1){ %> <span class="tag_type show_tag" data-pos="left" data-tips="<em>火币创业板Huobi Next：</em>主要交易品种为高潜力的初期优质区块链资产。">
                                           创业板
                                           <em><b>火币创业板Huobi Next：</b>主要交易品种为高潜力的初期优质区块链资产。</em>
                                       </span> <% }else{ %> <span class="tag_type show_tag" data-pos="left" data-tips="<em>火币主板Huobi Main：</em>火币主板即原火币全球站，主要交易品种为相对成熟的优质区块链资产。">
                                           主板
                                           <em><b>火币主板Huobi Main：</b>火币主板即原火币全球站，主要交易品种为相对成熟的优质区块链资产。</em>
                                       </span> <% } %> <% if(data.ratio){ %> <span class="margin show_tag" data-pos="left" data-tips="交易对支持的杠杆倍数"><%= data.ratio %>X</span> <% } %> <% if(tags && tags.indexOf('st') !== -1){ %> <span class="st show_tag" data-pos="left" data-currency="<%= currency %>" data-tips="ii{0}有退市的风险，详情请查看火币公告。">ST</span> <% } %> <% if (currency === 'hb10') {%> <span class="margin show_tag" data-pos="left" data-tips="HB10是一款以“火币主力指数”为跟踪对象的指数型数字资产，更多详情请查看HB10基本信息。">ETP</span> <% } %>
                          </script>
                        </div>
                        <div class="markets_info">
                          <div
                            class="chart fl"
                            id="realTimeChart"
                            data-ee="goExchange"
                          ></div>
                          <div class="fr">
                            <p class="price">---</p>
                            <p class="estimated">---</p>
                            <p>24H量<span class="amount">---</span></p>
                            <p class="increase">---</p>
                          </div>
                        </div>
                      </div>
                      <div class="bottom">
                        <ul class="tab">
                          <li data-ee="changeType" data-index="0" class="cur">
                            基本信息
                          </li>
                          <li data-ee="changeType" data-index="1" class="">
                            资讯
                          </li>
                        </ul>
                        <div class="clearfix" id="contentBox">
                          <div data-index="0" class="content base_info cur">
                            <ul>
                              <li>
                                <h3>币种名称</h3>
                                <strong class="name cut">-</strong>
                              </li>
                              <li>
                                <h3>发行时间</h3>
                                <div class="time cut">-</div>
                              </li>
                              <li>
                                <h3>发行总量</h3>
                                <div class="publish cut">-</div>
                              </li>
                              <li>
                                <h3>流通总量</h3>
                                <div class="circulate cut">-</div>
                              </li>
                              <li>
                                <h3>众筹价格</h3>
                                <div class="price cut">-</div>
                              </li>
                              <li id="currency_link">
                                <h3>相关链接</h3>
                                <div class="link"></div>
                              </li>
                              <li id="currency_action" style="display:none">
                                <div>操作</div>
                                <div class="link">
                                  <a href="/zh-cn/finance/hb10/exchange/"
                                    >换入换出</a
                                  >
                                </div>
                              </li>
                              <li>
                                <div>简介</div>
                                <div class="intro"></div>
                              </li>
                            </ul>
                            <div>
                              <span
                                class="go_project link_hover"
                                id="goProjectCenter"
                                data-ee="goProjectCenter"
                                >前往项目展示大厅</span
                              >
                              <span class="go_project">| </span
                              ><span class="link_hover" data-ee="moreDetail"
                                >查看更多信息</span
                              >
                            </div>
                          </div>
                          <div data-index="1" class="content news_info">
                            <ul id="newsList"></ul>
                            <div class="no_data">暂无数据</div>
                            <div class="load_more">
                              <span data-ee="loadMore">点击加载更多</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div></Tab-pane
          >
        </Tabs>
      </i-col>
    </div>

    <footer class="fedui-root fedui-footer-simple" data-v-7d8e73fa="">
      <ul>
        <li><a href="/zh-cn/">首页</a></li>
        <li>
          <a rel="noopener noreferrer" href="javascritp:;">火币集团</a>
        </li>
        <li>
          <a rel="noopener noreferrer" href="javascript:;">帮助中心</a>
        </li>
        <li>
          <a href="javascript:;">客户端下载</a>
        </li>
        <li><span>© 2013-2020 Huobi</span></li>
      </ul>
      <!---->
    </footer>
  </div>
</template>
<script>
import Head from "../Head";
import Quotachs from "../Quotachs";
export default {
  name: "Quotation",
  data() {
    return {
      columns5: [
        {
          title: "交易对",
          key: "date",
          sortable: true
        },
        {
          title: "最新价",
          key: "name",
          sortable: true
        },
        {
          title: "涨幅 %",
          key: "gain",
          sortable: true
        },
        {
          title: "最高价",
          key: "age"
        },
        {
          title: "最低价",
          key: "age"
        },
        {
          title: "24H量",
          key: "address",
          sortable: true
        },
        {
          title: "24H成交额",
          key: "address",
          sortable: true
        }
      ],
      data5: [
        {
          name: "王小明",
          age: 18,
          gain: 20,
          address: "北京市朝阳区芍药居",
          date: "2016-10-03"
        },
        {
          name: "张小刚",
          age: 25,
          gain: 20,
          address: "北京市海淀区西二旗",
          date: "2016-10-01"
        },
        {
          name: "李小红",
          age: 30,
          gain: 20,
          address: "上海市浦东新区世纪大道",
          date: "2016-10-02"
        },
        {
          name: "周小伟",
          age: 26,
          gain: 20,
          address: "深圳市南山区深南大道",
          date: "2016-10-04"
        },
        {
          name: "王小明",
          age: 18,
          gain: 20,
          address: "北京市朝阳区芍药居",
          date: "2016-10-03"
        },
        {
          name: "张小刚",
          age: 25,
          gain: 20,
          address: "北京市海淀区西二旗",
          date: "2016-10-01"
        },
        {
          name: "李小红",
          age: 30,
          gain: 20,
          address: "上海市浦东新区世纪大道",
          date: "2016-10-02"
        },
        {
          name: "周小伟",
          age: 26,
          gain: 20,
          address: "深圳市南山区深南大道",
          date: "2016-10-04"
        }
      ]
    };
  },
  components: {
    Head,
    Quotachs
  }
};
</script>
<style lang="scss">
.Quotation {
  color: #263241;
  width: 100%;
  height: 100vh;
  // height: 1000px;
  overflow: hidden;
  background-color: #242e47;
}
// #tab-one .ivu-tabs-tab-active {
//   color: #fff;
// }
.Mitbe-1 > .ivu-tabs {
  color: #9ca9b5;
}
.Mitbe-1 > .ivu-tabs > .ivu-tabs-bar .ivu-tabs-tab-active {
  color: #fff;
}
#tab-two .ivu-tabs-nav {
  font-size: 16px;
  // border: 1px solid red;
  width: 300px;
  margin-left: 35px;
  text-indent: -15px;
}
#tab-two .ivu-tabs-nav .ivu-tabs-tab {
  padding: 8px 56px;
}
#tab-two .ivu-tabs-ink-bar {
  height: 0;
  background-color: transparent;
}
.ivu-tabs-bar {
  margin-bottom: 0px;
}
#tab-two .ivu-tabs-bar {
  border-bottom: none;
}
#tab-two .right_inner {
  width: 23%;
  float: right;
  margin: 0 10px;
}
</style>
