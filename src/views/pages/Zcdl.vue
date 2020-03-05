<template>
  <div class="login" id="zcdl">
    <Head></Head>
    <div class="DLYM">
      <div class="DLYM_top">
        <p class="title_fix">注册账号</p>
        <div class="ZCSZ">
          <Tabs value="name1">
            <TabPane label="手机注册" name="name1">
              <div class="choose-one">
                <!--<div style="height:40px;border:1px solid red;">
                  <div style="height:150px;border:1px solid green;">
                    ssssssssssssssssssssssssssssssssss
                  </div>
                </div> -->
                <!-- {{ countryArr }} -->
                <div
                  @click="isopen = !isopen"
                  class="coutryDiv"
                  :class="[isopen ? 'color1' : 'color2', errorClass]"
                  style="width:100%;height: 50px;"
                >
                  <p class="text-1">国籍</p>
                  <p class="text-2">
                    <img src="../../assets/flag1.gif" alt="" />
                    <icon type=" success" size="24"> </icon><span>国家</span>
                    <span class="text_img">
                      <Icon
                        type="ios-arrow-down"
                        :class="[isopen ? 'open' : 'close', errorClass]"
                        style="text-align: right"
                      />
                    </span>
                  </p>
                </div>
                <div class="serrchDiv" v-show="isopen">
                  <ul style="height:250px;overflow:scroll;">
                    <li class="choose-li_1">
                      <Input search placeholder="搜索" />
                    </li>
                    <li>
                      <p
                        style="margin-top: 10px;text-indent:10px;color:#7f8fa4;font-size:12px;font-weight:700;"
                      >
                        常用
                      </p>
                    </li>
                    <li
                      v-for="(item, index) in countryArr"
                      :key="index"
                      class="choose-li_3"
                    >
                      <img src="../../assets/flag1.gif" />
                      {{ item.name_cn }}
                    </li>
                  </ul>
                </div>
              </div>
              <p class="text_one">
                国籍信息注册后不可修改，请务必如实选择。
              </p>
              <div class="choose-two">
                <div class="choose-two_one">
                  <div
                    @click="isopent = !isopent"
                    class="coutryDiv-1"
                    :class="[isopent ? 'color1' : 'color2', errorClass]"
                    style="width:100%;height: 50px;"
                  >
                    <p class="text-5">
                      <span>0088</span>
                      <!-- <span class="text_img-1">
                        <Icon
                          type="ios-arrow-down"
                          :class="[isopent ? 'open-1' : 'close-1', errorClass]"
                          style="text-align: right"
                        />
                      </span> -->
                      <span class="text_img-1">
                        <Icon
                          type="ios-arrow-down"
                          :class="[isopent ? 'open' : 'close', errorClass]"
                          style="text-align: right"
                        >
                        </Icon>
                      </span>
                    </p>
                  </div>
                </div>
                <div class="serrchDiv-1" v-show="isopent">
                  <ul style="height:250px;overflow:scroll;">
                    <li class="choose-li_11">
                      <Input search placeholder="搜索" />
                    </li>
                    <li>
                      <p
                        style="margin-top: 10px;text-indent:10px;color:#7f8fa4;font-size:12px;font-weight:700;"
                      >
                        常用
                      </p>
                    </li>
                    <li
                      v-for="(item, index) in countryArr"
                      :key="index"
                      class="choose-li_13"
                    >
                      <img src="../../assets/flag1.gif" />
                      {{ item.name_cn }}
                    </li>
                  </ul>
                </div>
                <div class="choose-two_two">
                  <Form
                    ref="formInline"
                    :model="formInline"
                    :rules="ruleInline"
                    inline
                  >
                    <FormItem prop="user">
                      <Input
                        type="text"
                        v-model="formInline.user"
                        placeholder="手机号"
                        style="width:280px"
                      />
                      <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </FormItem>
                  </Form>
                </div>

                <Form
                  ref="formInline"
                  :model="formInline"
                  :rules="ruleInline"
                  inline
                >
                  <FormItem prop="password">
                    <Input
                      type="password"
                      v-model="formInline.password"
                      placeholder="设置密码"
                      style="width:395px;margin-top: 6px;"
                    />
                  </FormItem>
                  <FormItem prop="password2">
                    <Input
                      type="password"
                      v-model="formInline.password2"
                      placeholder="确认密码"
                      style="width:395px;margin-top: 8px;"
                    />
                  </FormItem>
                </Form>
                <div @click="displayFn" style="margin-top:10px">
                  是否有邀请码?
                </div>
                <div
                  v-show="dplay"
                  style="height:50px;border:1px solid #dfe2e7;margin-top:6px;border-radius: 4px;"
                >
                  <span class="span-1">邀请码</span>
                </div>
                <Checkbox v-model="single" style="margin-top: 25px;">
                  我已阅读并同意
                  <a href="#content-user" target="_black">《用户协议》</a>
                </Checkbox>
                <div class="But-btn">
                  <Button type="primary" style="height:48px;width:100%;"
                    ><span>注册</span></Button
                  >
                </div>
                <!-- <div class="choose_footer">
                  <a href="javascript:;">申请机构账户</a>
                </div> -->
              </div>
            </TabPane>
            <TabPane label="邮箱注册" name="name2">
              <div class="choose-one">
                <!--<div style="height:40px;border:1px solid red;">
                  <div style="height:150px;border:1px solid green;">
                    ssssssssssssssssssssssssssssssssss
                  </div>
                </div> -->
                <!-- {{ countryArr }} -->
                <div
                  @click="isopen = !isopen"
                  class="coutryDiv"
                  :class="[isopen ? 'color1' : 'color2', errorClass]"
                  style="width:100%;height: 50px;"
                >
                  <p class="text-1">国籍</p>
                  <p class="text-2">
                    <img src="../../assets/flag1.gif" alt="" />
                    <icon type=" success" size="24"> </icon><span>国家</span>
                    <span class="text_img">
                      <Icon
                        type="ios-arrow-down"
                        :class="[isopen ? 'open' : 'close', errorClass]"
                        style="text-align: right"
                      />
                    </span>
                  </p>
                </div>
                <div class="serrchDiv" v-show="isopen">
                  <ul style="height:250px;overflow:scroll;">
                    <li class="choose-li_1">
                      <Input search placeholder="搜索" />
                    </li>
                    <li>
                      <p
                        style="margin-top: 10px;text-indent:10px;color:#7f8fa4;font-size:12px;font-weight:700;"
                      >
                        常用
                      </p>
                    </li>
                    <li
                      v-for="(item, index) in countryArr"
                      :key="index"
                      class="choose-li_3"
                    >
                      <img src="../../assets/flag1.gif" />
                      {{ item.name_cn }}
                    </li>
                  </ul>
                </div>
              </div>
              <p class="text_one">
                国籍信息注册后不可修改，请务必如实选择。
              </p>
              <div class="choose-two">
                <div class="choose-two_fiox">
                  <Form
                    ref="formInline"
                    :model="formInline"
                    :rules="ruleInline"
                    inline
                  >
                    <FormItem prop="mail">
                      <Input
                        type="text"
                        v-model="formInline.mail"
                        placeholder="邮箱"
                        style="width:394px"
                      />
                      <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </FormItem>
                  </Form>
                </div>

                <Form
                  ref="formInline"
                  :model="formInline"
                  :rules="ruleInline"
                  inline
                >
                  <FormItem prop="password">
                    <Input
                      type="password"
                      v-model="formInline.password"
                      placeholder="设置密码"
                      style="width:395px;margin-top: 6px;"
                    />
                  </FormItem>
                  <FormItem prop="password2">
                    <Input
                      type="password"
                      v-model="formInline.password2"
                      placeholder="确认密码"
                      style="width:395px;margin-top: 8px;"
                    />
                  </FormItem>
                </Form>
                <div @click="displayFn" style="margin-top:10px">
                  是否有邀请码?
                </div>
                <div
                  v-show="dplay"
                  style="height:50px;border:1px solid #dfe2e7;margin-top:6px;border-radius: 4px;"
                >
                  <span class="span-1">邀请码</span>
                </div>
                <Checkbox v-model="single" style="margin-top: 25px;">
                  我已阅读并同意
                  <a href="#content-user" target="_black">《用户协议》</a>
                </Checkbox>
                <div class="But-btn">
                  <Button type="primary" style="height:48px;width:100%;"
                    ><span>注册</span></Button
                  >
                </div>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
      <div class="choose_footer">
        <a href="javascript:;">申请机构账户</a>
      </div>
      <footer
        class="fedui-root fedui-footer-simple"
        data-v-7d8e73fa=""
        style="min-width:0px;"
      >
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
  </div>
</template>
<script>
import axios from "axios";
import Head from "../Head";
export default {
  data() {
    return {
      countryArr: [],
      isopen: false,
      isopent: false,
      dplay: false,
      value1: "",
      theme2: "light",
      single: true,
      errorClass: "",
      formInline: {
        user: "",
        mail: "",
        password: "",
        password2: ""
      },
      ruleInline: {
        user: [{ required: true, message: "请输入手机号", trigger: "blur" }],
        mail: [{ required: true, message: "请输入邮寄地址", trigger: "blur" }],
        password: [
          {
            required: true,
            message: "8-20位字符 不能为纯数字",
            trigger: "blur"
          }
        ],
        password2: [
          {
            required: true,
            message: "请在此输入密码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  created() {
    // console.log(data);
    this.getCountry();
  },
  methods: {
    getCountry() {
      axios.get("/api/country").then(res => {
        // console.log(res.data.data.data);
        this.countryArr = res.data.data.data;
      });
    },
    displayFn() {
      // alert("aa");
      this.dplay = !this.dplay;
    },
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    }
  },
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
  /* height: 1000px; */
  background-color: #242e47;
}

#zcdl .ivu-tabs-nav {
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
.DLYM {
  width: 496px;
  /* height: 600px; */
  position: relative;
  margin: 60px auto;
  border-radius: 4px;
  /* border: 1px solid red; */
}
.DLYM_top {
  width: 494px;

  background-color: #fff;
  /* border-radius: 2px; */
}
.title_fix {
  font-size: 20px;
  text-align: center;
  letter-spacing: 2px;
  line-height: 80px;
  color: #242e47;
}
.ZCSZ {
  width: 400px;
  /* height: 478px; */
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  /* border: 1px solid rebeccapurple; */
}
#zcdl .ivu-tabs-nav .ivu-tabs-tab {
  font-size: 15px;
  font-weight: bold;
  padding: 10px 6px;
}
#zcdl .ivu-tabs-nav-container {
  margin-bottom: -1px;
  line-height: 0.5;
  font-size: 10px;
  display: inline-block;
}
.choose-one {
  width: 397px;
  height: 54px;
  position: relative;
  background-color: #fff;
  border: 1px solid #dfe2e7;
  z-index: 999;
}
.text_one {
  margin-top: 10px;
}
.choose-two {
  width: 397px;
  margin-top: 10px;
  position: relative;
}
.choose-two_one {
  width: 100px;
  float: left;
  border-radius: 4px;
  border: 1px solid #dfe2e7;
}
.choose-two_two {
  width: 285px;
  float: right;
}
#zcdl .ivu-input {
  height: 52px;
}
.ivu-icon-ios-paper:before {
  content: "";
}
.choose_footer {
  width: 494px;
  font-size: 12px;
  height: 40px;
  line-height: 40px;
  background-color: #f8f9fa;
  text-align: center;
}
.open {
  color: #7f8fa4;
  animation: tea_arrow 0.1s linear;
  transform-origin: center center;
  transform: rotateZ(0deg);
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards; /* Safari 和 Chrome */
}
.close {
  color: #7f8fa4;
  animation: tea_arrow1 0.1s linear;
  transform-origin: center center;
  transform: rotateZ(0deg);
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards; /* Safari 和 Chrome */
}

.color1 {
  border: 1px solid #357ce1;
}
.text-1 {
  display: inline-block;
  font-size: 12px;
  color: #7f8fa4;
  margin: 5px 16px;
}
.text-2 {
  font-size: 14px;
  vertical-align: middle;
  margin-left: 4px;
  color: #263241;
}
.text-2 img {
  margin: 0px 4px -2px 12px;
}
.serrchDiv {
  position: absoute;
  line-height: 20px;
  top: 0;
  width: 100%;
  z-index: 99999;
  border: 1px solid #dfe2e7;
  background: #fff;
  margin-top: 8px;
}
.serrchDiv-1 {
  position: absolute;
  line-height: 20px;
  top: 60px;
  width: 100%;
  z-index: 999;
  border: 1px solid #dfe2e7;
  background: #fff;
  margin-top: 0px;
}
.text_img {
  display: block;
  float: right;
  margin: -8px 18px;
  font-size: 25px;
}
.text_img-1 {
  display: block;
  float: right;
  margin: -7px 11px;
  font-size: 25px;
}
@keyframes tea_arrow {
  0% {
    transform: rotateZ(0deg);
  }

  100% {
    transform: rotateZ(180deg);
  }
}
@keyframes tea_arrow1 {
  0% {
    transform: rotateZ(180deg);
  }

  100% {
    transform: rotateZ(0deg);
  }
}
.choose-li_1 {
  width: 378px;
  font-size: 25px;
  margin-top: 14px;
  right: 8px;
  margin-left: 7px;
}
.choose-li_11 {
  width: 378px;
  font-size: 25px;
  margin-top: 14px;
  right: 8px;
  margin-left: 7px;
}
#zcdl li .ivu-input-icon {
  width: 53px;
  font-size: 22px;
  margin-top: 7px;
  right: 8px;
}
#zcdl li .ivu-input {
  height: 40px;
}
.choose-li_3 {
  cursor: pointer;
  line-height: 33px;
  /* padding: 0 16px; */
  text-indent: 13px;
  font-size: 14px;
  white-space: nowrap;
  color: #263241;
}
.choose-li_3 img {
  margin-right: 9px;
}
.choose-li_13 {
  cursor: pointer;
  line-height: 33px;
  /* padding: 0 16px; */
  text-indent: 13px;
  font-size: 14px;
  white-space: nowrap;
  color: #263241;
}
.choose-li_13 img {
  margin-right: 9px;
}
.text-5 {
  padding-top: 17px;
  margin-left: 10px;
}
.span-1 {
  color: #c5c6c8;
  display: inline-block;
  font-size: 15px;
  margin: 17px 10px;
}
/* .serrchDiv {
  margin-top: 25px;
  height: 80px;
} */
.But-btn {
  height: 75px;
  margin-top: 20px;
}
.But-btn span {
  font-size: 17px;
}
</style>
