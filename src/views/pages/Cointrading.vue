<template>
  <div id="__layout">
    <section class="main" data-v-913bd3e4="">
      <div style="background-color: #131625">
        <Head></Head>
      </div>

      <div style="width:100%;height:100vh;background-color:#5f6969"></div>
    </section>
    <Footer></Footer>
  </div>
</template>
<script>
import Head from "../Head";
import Footer from "../Footer";
// import Footer from "../Footer";
export default {
  components: {
    Head,
    Footer
  }
};
</script>

<style>
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
