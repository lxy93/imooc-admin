<template>
  <div class="app-wrapper">
    <!-- 左侧menu -->
    8888
    <Sidebar
      class="sidebar-container"
      :style="{ background: variables.menuBg }"
    ></Sidebar>
    <div class="main-container">
      <div class="fixed-header">
        <!-- 顶部的navbar -->
        <navbar />
      </div>
      <!-- 内容区 -->
      <app-main></app-main>
    </div>
  </div>
</template>

<script setup>
import { Sidebar, Navbar, AppMain } from "./components/index";
import {} from "vue";
import variables from "@/styles/variables.scss";
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
}
</style>
