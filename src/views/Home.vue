<template>
  <div class="home">
    <Head></Head>

    <router-view />

    <Foot></Foot>
  </div>
</template>

<script>
import Head from "./Head";
import Foot from "./Footer";

export default {
  name: "Home",
  components: {
    Head,
    Foot
  }
};
</script>
