<template>
  <div id="app">
    <div id="nav">
      <router-view />
    </div>
  </div>
</template>

<style>
.ivu-menu-horizontal {
  height: 48px;
  line-height: 48px;
}
.fedui-header-logo img {
  vertical-align: middle;
}
.demo-carousel {
  height: 400px;
  background: center;
  background-size: auto 130%;
}
.banner {
  position: relative;
  top: -48px;
}
.ivu-menu-dark {
  background: rgba(0, 0, 0, 0.15);
  border-bottom-color: transparent;
}
.ivu-carousel-dots li.ivu-carousel-active > button {
  opacity: 1;
  width: 56px;
}
.ivu-carousel-dots li button {
  border: 0;
  cursor: pointer;
  background: #8391a5;
  opacity: 0.4;
  display: block;
  width: 56px;
  height: 3px;
  border-radius: 1px;
  outline: 0;
  font-size: 0;
  color: transparent;
  transition: all 0.5s;
}
.ivu-carousel-dots li {
  position: relative;
  display: inline-block;
  vertical-align: top;
  text-align: center;
  margin: 0 8px;
  padding: 7px 0;
  cursor: pointer;
}
.ivu-carousel-dots-inside {
  display: block;
  position: absolute;
  bottom: 25px;
}
a.menus {
  font-size: 14px;
  width: 50%;
  height: 30px;
  line-height: 30px;
  padding: 0 12px;
  display: inline-block;
  color: #1c242c;
  vertical-align: top;
}
a.active {
  background-color: rgba(242, 246, 250, 0.7);
  color: #357ce1;
}
a.menus:hover {
  background-color: rgba(242, 246, 250, 0.7);
  color: #357ce1;
}
.ivu-select-dropdown {
  right: 20px;
}
.ivu-menu-horizontal .ivu-menu-submenu .ivu-select-dropdown .ivu-menu-item {
  clear: none;
}
.MenuLi {
  display: inline-block;
}
.ivu-menu-horizontal .ivu-menu-submenu .ivu-select-dropdown {
  transform-origin: center top;
  min-width: 121.475px;
  width: 285px;
  padding: 10px;
}
.menus_changjiang::after {
  content: "";
  position: absolute;
  right: -6px;
  top: 11px;
  width: 20px;
  height: 11px;
  background: url("./assets/123.png") no-repeat 50%/20px 11px;
}
.pur-back .pur-center[data-v-73bf8b65] {
  margin: -48px 0;
}
.ivu-select-single .ivu-select-selection {
  height: 36px;
}
.ivu-select-single .ivu-select-selection .ivu-select-placeholder,
.ivu-select-single .ivu-select-selection .ivu-select-selected-value {
  padding-right: 40px;
}
.ivu-select-prefix i {
  margin: 10px 12px;
}
.ivu-input {
  height: 36px;
}
</style>
