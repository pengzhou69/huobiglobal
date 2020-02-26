<template>
  <div class="home">
    <Head></Head>

    <router-view />

    <Foot></Foot>
  </div>
</template>

<script>
// @ is an alias to /src
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
