<template>
  <div id="Milate">
    <div>
      <i-col span="100%" class="Mite-1">
        <Tabs :animated="false" name="fbt1-1">
          <Tab-pane label="购买" tab="fbt1-1">
            <div>
              <div
                style="position:absolute;top:70px;right:0;margin-right: 90px;"
              >
                <div style="float:right">
                  <Input search placeholder="搜索" />
                </div>
                <div
                  style="float:right;width:20px;height:20px;overflow:hidden;margin-left: 8px;margin-top: 8px;margin-right: 6px;"
                >
                  <img src="../assets/2222.gif" alt="" width="100%" />
                </div>
                <div
                  style="float:right;width:20px;height:20px;overflow:hidden;margin-top: 8px;"
                >
                  <img src="../assets/2222.gif" alt="" width="100%" />
                </div>
              </div>
              <i-col span="100%" class="Mite-2">
                <Tabs :animated="false" name="fbt1-1-1" id="Mite-3">
                  <Tab-pane label="BTC" tab="fbt1-1-1">标签一的内容</Tab-pane>
                  <Tab-pane label="ETH" tab="fbt1-1-1">标签二的内容</Tab-pane>
                  <Tab-pane label="USDT" tab="fbt1-1-1">标签三的内容</Tab-pane>
                  <Tab-pane label="EOS" tab="fbt1-1-1">标签四的内容</Tab-pane>
                  <Tab-pane label="XRP" tab="fbt1-1-1">标签五的内容</Tab-pane>
                  <Tab-pane label="LTC" tab="fbt1-1-1">标签六的内容</Tab-pane>
                  <Tab-pane label="HT" tab="fbt1-1-1">标签七的内容</Tab-pane>
                  <Tab-pane label="HUSD" tab="fbt1-1-1">标签八的内容</Tab-pane>
                  <Tab-pane label="BCH" tab="fbt1-1-1">标签九的内容</Tab-pane>
                </Tabs>
              </i-col>
            </div>
          </Tab-pane>

          <Tab-pane label="出售" tab="fbt1-1" id="mit-1">
            <div>
              <Tabs :animated="false" name="fbt1-1-1" id="Mite-2">
                <Tab-pane label="BTC" tab="fbt1-1-1">标签一的内容</Tab-pane>
                <Tab-pane label="ETH" tab="fbt1-1-1">标签二的内容</Tab-pane>
                <Tab-pane label="USDT" tab="fbt1-1-1">标签三的内容</Tab-pane>
                <Tab-pane label="EOS" tab="fbt1-1-1">标签四的内容</Tab-pane>
                <Tab-pane label="XRP" tab="fbt1-1-1">标签五的内容</Tab-pane>
                <Tab-pane label="LTC" tab="fbt1-1-1">标签六的内容</Tab-pane>
                <Tab-pane label="HT" tab="fbt1-1-1">标签七的内容</Tab-pane>
                <Tab-pane label="HUSD" tab="fbt1-1-1">标签八的内容</Tab-pane>
                <Tab-pane label="BCH" tab="fbt1-1-1">标签九的内容</Tab-pane>
              </Tabs>
            </div>
          </Tab-pane>
        </Tabs>
      </i-col>
    </div>
  </div>
</template>
<script>
export default {
  name: "Middlelayer"
};
</script>
<style>
.Mite-1 .ivu-tabs {
  color: black;
}
.Mite-1 > .ivu-tabs > .ivu-tabs-bar .ivu-tabs-tab-active {
  color: #0da88b;
}
.Mite-1 > .ivu-tabs > .ivu-tabs-bar .ivu-tabs-tab:hover {
  color: black;
}
.Mite-2 > .ivu-tabs > .ivu-tabs-bar .ivu-tabs-tab-active {
  color: #0da88b;
}
.Mite-2 > .ivu-tabs > .ivu-tabs-bar .ivu-tabs-tab:hover {
  color: black;
}
#mit-1 .ivu-tabs-bar .ivu-tabs-tab-active {
  color: red;
}
#mit-1 .ivu-tabs-bar .ivu-tabs-tab:hover {
  color: black;
}
</style>
