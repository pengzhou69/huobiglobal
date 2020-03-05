<template>
  <div class="Fbtion" id="Fbttion" style="background:#1b2945;">
    <Head></Head>
    <div id="Fbtone">
      <i-col span="100%" class="ivu-Fbttwo">
        <Tabs :animated="false" name="fbt1" class="Fbttone-1">
          <Tab-pane label="普通交易" key="fbt1"
            ><div
              style="height:100vh;width:100%; background: rgb(229, 235, 245)"
            >
              <Middlelayer></Middlelayer></div
          ></Tab-pane>
          <Tab-pane label="大宗交易" key="fbt2"
            ><div
              style="height:100vh;width:100%; background: rgb(229, 235, 245)"
            >
              wwwwwww
            </div></Tab-pane
          >
          <Tab-pane label="OTC  Desk" key="fbt3"
            ><div
              style="height:100vh;width:100%;background: rgb(229, 235, 245)"
            >
              tttttttt
            </div></Tab-pane
          >
        </Tabs>
      </i-col>

      <!-- 视频
      <div class="modal-content">
        <video width="800" height="450" controls="controls">
          <source
            src="https://file.eiijo.cn/common/video/help/otc-web-zh.mp4"
            type="video/mp4"
          /></video
        ><span class="close-box cursor"
          ><i class="video-close ivu-icon ivu-icon-md-close"></i
        ></span>
        <div
          class="first-video"
          style='background: url("https://file.eiijo.cn/common/images/help/video/cover-zh.jpg") no-repeat;'
        >
          <div class="player-box">
            <span class="play-box cursor"
              ><i class="play-video ivu-icon ivu-icon-ios-play"></i
            ></span>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
import Head from "../Head";
import Middlelayer from "../Middlelayer";
export default {
  components: {
    Head,
    Middlelayer
  }
};
</script>
<style lang="scss">
.ivu-Fbttwo > .ivu-tabs {
  color: #87a2cd;
}
.ivu-Fbttwo > .ivu-tabs > .ivu-tabs-bar .ivu-tabs-tab-active {
  color: #fff;
}
.ivu-Fbttwo > .ivu-tabs > .ivu-tabs-bar .ivu-tabs-tab:hover {
  color: #fff;
}
.ivu-tabs-bar {
  margin-bottom: 0px;
}
#Fbtone .ivu-tabs-bar {
  border-bottom: none;
  margin-top: 21px;
  margin-left: 200px;
}
#Fbtone .ivu-tabs-ink-bar {
  background-color: #0da88b;
}
#Fbtone .ivu-tabs-nav-wrap {
  font-size: 16px;
}
</style>
