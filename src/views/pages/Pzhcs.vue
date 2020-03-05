<template>
  <div class="logint" id="logint">
    <Head></Head>
    <div class="DLYM">
      <div class="DLYM_top">
        <p class="title_one">欢迎登录</p>
        <Form ref="formInline" :model="formInline">
          <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="登录" />
          </FormItem>
          <FormItem prop="password">
            <Input
              type="password"
              v-model="formInline.password"
              placeholder="密码"
            />
          </FormItem>
          <p class="WZ">
            <a href="javascript:;">忘记密码？</a>
          </p>
          <FormItem>
            <div class="BTN_btn">
              <Button type="primary" @click="handleSubmit('formInline')"
                >登录</Button
              >
            </div>
          </FormItem>
        </Form>
      </div>
      <div class="global-ad">
        <div class="qrcode">
          <div class="IMG_one">
            <img src="../../assets/2222.gif" alt="" />
          </div>
        </div>
        <div class="cell-content">
          <p class="text">火币全球站App</p>
          <p class="text">随时随地 便捷交易</p>
          <p class="other">扫描二维码下载火币App</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Head from "../Head";
export default {
  data() {
    return {
      formInline: {
        user: "",
        password: ""
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    // handleSubmit(name) {
    //   this.$refs[name].validate(valid => {
    //     if (valid) {
    //       this.$Message.success("Success!");
    //     } else {
    //       this.$Message.error("Fail!");
    //     }
    //   });
    // }
  },
  components: {
    Head
  }
};
</script>
<style>
.logint {
  color: #263241;
  width: 100%;
  height: 100vh;
  background-color: #242e47;
}

#logint .ivu-tabs-nav {
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
}

#logint .qqwximg {
  height: 38px;
}
#logint .error-text {
  color: #fa8341;
}
#logint .DLYM {
  width: 496px;
  /* height: 514px; */
  position: relative;
  margin: 60px auto;
  border-radius: 4px;
}
#logint .DLYM_top {
  width: 494px;
  /* height: 395px; */
  background-color: #fff;
  border-radius: 5px;
}
#logint .title_one {
  font-size: 20px;
  text-align: center;
  letter-spacing: 2px;
  line-height: 80px;
  color: #242e47;
}
#logint .ivu-input {
  display: inline-block;
  width: 412px;
  height: 52px;
  border-radius: 2px;
  color: #515a6e;
  margin: 0px 40px;
}
#logint .WZ {
  width: 412px;
  text-align: right;
  position: relative;
  margin: 0px 40px;
  overflow: hidden;
}
#logint .BTN_btn {
  width: 100%;
}
#logint .BTN_btn .ivu-btn-primary {
  width: 421px;
  height: 48px;
  position: relative;
  margin: 35px 35px;
}
#logint .global-ad {
  margin-top: 16px;
  height: 100px;
  width: 495px;
  overflow: hidden;
  border-radius: 2px;
  padding: 18px 24px;
  background-color: #334164;
  background-repeat: no-repeat;
  background-position: bottom right 24px;
  background-image: url(https://file.hbfile.net/global/zh-cn/static/img/e46bbe8.svg);
}
#logint .IMG_one {
  width: 59px;
  height: 59px;
  float: left;
  padding: 5px 0px;
}
#logint .IMG_one img {
  overflow: hidden;
}
#logint .text {
  color: #fff;
  font-size: 14px;
  margin-bottom: 7px;
  text-indent: 13px;
}
#logint .other {
  color: #8199c3;
  font-size: 12px;
  margin-top: 15px;
  text-indent: 13px;
}
</style>
