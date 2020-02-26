<template>
  <div class="cardone" @mouseleave="leave" @mouseenter="enter">
    <Card class="linkOne" v-show="open">
      <slot></slot>
    </Card>
  </div>
</template>

<script>
export default {
  name: "Cardone",
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    leave(e) {
      //alert("移出");
      this.$emit("mouseleave", e);
    },
    enter(e) {
      //alert("移出");
      this.$emit("mouseenter", e);
    }
  }
};
</script>
<style scoped>
/* linkOne 弹出 */
.linkOne {
  position: absolute;
  left: 0;
  top: 45px;
  background-color: #fff;
  -webkit-box-shadow: 0 0 20px 0 rgba(28, 36, 44, 0.12);
  box-shadow: 0 0 20px 0 rgba(28, 36, 44, 0.12);
  border-radius: 2px;
  width: 600px;
  overflow: hidden;
  margin-left: 15px;
  z-index: 900;
}
.close {
  text-align: right;
}
</style>
