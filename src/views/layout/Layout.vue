<template>
  <div :class="classObj" class="app-wrapper">
    <div
      v-if="device === 'mobile' && sidebar.opened"
      class="drawer-bg"
      @click="handleClickOutside"
    />
    <div
      :class="{ ishome: ishome === '/home' }"
      class="main-container lr-layout"
    >
      <sidebar class="sidebar-container" />
      <headers />
      <navbar />
      <app-main class="loading-area" />
    </div>
  </div>
</template>

<script>
import { Headers, Navbar, Sidebar, AppMain } from "./components";
import ResizeMixin from "./mixin/ResizeHandler";

export default {
  name: "Layout",
  components: {
    Headers,
    Navbar,
    Sidebar,
    AppMain
  },
  mixins: [ResizeMixin],
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar;
    },
    device() {
      return this.$store.state.app.device;
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === "mobile"
      };
    },
    ishome() {
      return this.$route.fullPath;
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch("CloseSideBar", { withoutAnimation: false });
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
// .app-wrapper {
//   @include clearfix;
//   position: relative;
//   height: 100%;
//   width: 100%;
//   &.mobile.openSidebar {
//     position: fixed;
//     top: 0;
//   }
// }
// .el-menu--horizontal.el-menu {
//   background: unset;
// }
// .drawer-bg {
//   background: #000;
//   opacity: 0.3;
//   width: 100%;
//   top: 0;
//   height: 100%;
//   position: absolute;
//   z-index: 999;
// }
 .app-wrapper {
        @include clearfix;
        position: relative;
        height: 100%;
        width: 100%;

        .app-container {
            min-height: calc(100vh - 50px);
        }

        &.mobile.openSidebar {
            position: fixed;
            top: 0;
        }
    }

    .el-menu--horizontal.el-menu {
        background: unset;
    }

    .drawer-bg {
        background: #000;
        opacity: 0.3;
        width: 100%;
        top: 0;
        height: 100%;
        position: absolute;
        z-index: 999;
    }
</style>
