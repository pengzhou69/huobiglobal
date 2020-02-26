<template>
  <div class="login">
    <Head></Head>
  </div>
</template>
<script>
import Head from "../Head";
export default {
  components: {
    Head
  }
};
</script>
<style>
.login {
  color: #263241;
  width: 100%;
  height: 100vh;
  background-color: #242e47;
}

.ivu-tabs-nav {
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
}

.qqwximg {
  height: 38px;
}
.error-text {
  color: #fa8341;
}
</style>
